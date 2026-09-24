import { AuthorityShell } from "@/components/authority/AuthorityShell";
import "./authority.css";

export default function AuthorityLayout({ children }: { children: React.ReactNode }) {
  return <AuthorityShell>{children}</AuthorityShell>;
}

