"use client";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
// Shadcn UI imports
import { toast } from "sonner";
import { logoImage } from "@/database/data";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@base-ui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.email("Formato de email inválido"), // user email address
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"), // user password -> min 8 characters by default
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"), // user display name
});

export default function SignupPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(formdata: z.infer<typeof formSchema>) {
    const { data, error } = await authClient.signUp.email(
      {
        name: formdata.name,
        email: formdata.email,
        password: formdata.password,
      },
      {
        onRequest: (ctx) => {},
        onSuccess: (ctx) => {
          router.replace("/entrar");
        },
        onError: (ctx) => {
          toast.error(
            "Occorreu um erro ao criar a conta. Por favor, tente novamente.",
          );
          console.log(ctx.error);
        },
      },
    );
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(formdata, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }
  return (
    <section className="px-24 py-16 h-screen">
      <div className="mb-4 max-w-2xl mx-auto">
        <div className="relative w-52 h-full aspect-322/100 mx-auto mb-4">
          <Image src={logoImage} alt="" fill />
        </div>
        <h2 className="text-center text-xl">
          Crie sua conta para começar a ser o rei do fut de várzea
        </h2>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl mx-auto rounded-lg border p-4"
      >
        <FieldGroup>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">Seu nome</FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Your name here"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">Seu email</FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="example@email.com"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">Sua senha</FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="********"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Button
          type="submit"
          className={
            "w-full rounded-xl bg-primary hover:bg-primary/80 text-white p-2"
          }
        >
          Criar conta
        </Button>
      </form>
    </section>
  );
}
