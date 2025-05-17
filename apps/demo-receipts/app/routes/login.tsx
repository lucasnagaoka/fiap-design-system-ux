import type { Route } from "./+types/home";

import { Login as LoginPage } from "../login/login";
import { GridLayout } from "~/gridLayout/gridLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Login() {
  return (
    <GridLayout>
      <LoginPage />
    </GridLayout>
  );
}
