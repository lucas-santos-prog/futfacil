"use client";

import { ReactNode } from "react";
import { authClient } from "../lib/auth-client";
import { SessionContext } from "../contexts/session-context";

export function SessionProvider({ children }: { children: ReactNode }) {
  const { data: sessionData, isPending } = authClient.useSession();

  return (
    <SessionContext.Provider value={{ session: sessionData, isPending }}>
      {children}
    </SessionContext.Provider>
  );
}
