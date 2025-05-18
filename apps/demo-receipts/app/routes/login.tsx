import type { Route } from './+types/home';

import { Login as LoginPage } from '../login/login';
import { GridLayout } from '~/gridLayout/gridLayout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Flapp' },
    { name: 'description', content: 'Bem vindo!' },
  ];
}

export default function Login() {
  return (
    <GridLayout>
      <LoginPage />
    </GridLayout>
  );
}
