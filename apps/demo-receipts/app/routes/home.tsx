import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
import { GridLayout } from '~/gridLayout/gridLayout';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Flapp' }, { name: 'description', content: 'Bem vindo!' }];
}

export default function Home() {
  return (
    <GridLayout>
      <Welcome />
    </GridLayout>
  );
}
