import { drizzle } from "drizzle-orm/node-postgres";
import { count, eq, ilike, or } from "drizzle-orm";
import * as schema from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

const db = drizzle(process.env.DATABASE_URL!, { schema });

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("pageSize") || "10")),
    );
    const search = searchParams.get("search") || "";

    const offset = (page - 1) * pageSize;

    // Construir WHERE clause com filtro de pesquisa
    const whereConditions = search
      ? or(
          ilike(schema.arena.name, `%${search}%`),
          ilike(schema.address.street, `%${search}%`),
          ilike(schema.address.community, `%${search}%`),
          ilike(schema.address.state, `%${search}%`),
        )
      : undefined;

    // Buscar total de arenas com filtro
    const [totalResult] = await db
      .select({ count: count() })
      .from(schema.arena)
      .leftJoin(schema.address, eq(schema.arena.addressId, schema.address.id))
      .where(whereConditions);
    const total = totalResult?.count || 0;

    // Buscar arenas com endereços e filtro de pesquisa
    const arenas = await db
      .select({
        arena: schema.arena,
        address: schema.address,
      })
      .from(schema.arena)
      .leftJoin(schema.address, eq(schema.arena.addressId, schema.address.id))
      .where(whereConditions)
      .limit(pageSize)
      .offset(offset)
      .orderBy(schema.arena.name);

    const totalPages = Math.ceil(total / pageSize);

    return NextResponse.json({
      success: true,
      data: arenas,
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Erro ao buscar arenas:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erro ao buscar arenas",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, location, capacity, image, pricePerHour, emphasisArena } =
      body;

    // Validar campos obrigatórios
    if (!name || !location || !capacity || !image || !pricePerHour) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Campos obrigatórios: name, location, capacity, image, pricePerHour",
        },
        { status: 400 },
      );
    }

    // Gerar ID único
    const id = `arena_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Inserir nova arena
    const [newArena] = await db
      .insert(schema.arena)
      .values({
        id,
        addressId: "",
        capacity,
        name,
        pricePerHour,
        emphasisArena: emphasisArena ?? false,
      })
      .returning();

    return NextResponse.json(
      {
        success: true,
        data: newArena,
        message: "Arena criada com sucesso",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erro ao criar arena:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erro ao criar arena",
      },
      { status: 500 },
    );
  }
}
