"use client";

import { createContext, useContext } from "react";
import type { Session, User } from "better-auth/types";

interface SessionContextType {
  session: { user: User; session: Session } | null;
  isPending: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within SessionProvider");
  }
  return context;
}

export { SessionContext };
