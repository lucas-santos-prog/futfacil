"use client";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

// Framework components imports
import Image from "next/image";

// Shadcn UI imports
import { toast } from "sonner";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@base-ui/react";

import { logoImage } from "@/database/data";
import { authClient } from "@/lib/auth-client";

// Form schema
const formSchema = z.object({
  email: z.email("Formato de email inválido"), // user email address
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"), // user password -> min 8 characters by default
});

export default function LoginPage() {
  // initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //   On submit function
  async function onSubmit(formdata: z.infer<typeof formSchema>) {
    const {} = await authClient.signIn.email(
      {
        email: formdata.email,
        password: formdata.password,
        callbackURL: "/",
      },
      {
        onRequest: (ctx) => {},
        onSuccess: (ctx) => {
          toast.success("Login successful! Redirecting...");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        },
        onError: (ctx) => {
          toast.error("Login failed. Please check your credentials.");
        },
      },
    );
  }
  return (
    <section className="px-24 py-16 h-screen">
      <div className="mb-4 max-w-2xl mx-auto">
        <div className="relative w-52 h-full aspect-322/100 mx-auto mb-4">
          <Image src={logoImage} alt="" fill />
        </div>
        <h2 className="text-center text-xl">Entre em sua conta</h2>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-sm mx-auto rounded-lg border p-4"
      >
        <FieldGroup>
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
          Entrar
        </Button>
      </form>
    </section>
  );
}
