import React from 'react';
import { InputLabel, Button } from '@fiap-design-system/ui';
import logoLight from '../assets/image.png';
import { useNavigate } from 'react-router';

export function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <>
      <div className='flex flex-col items-center space-y-6 w-full max-w-sm'>
        <img
          src={logoLight}
          alt='React Router'
          className='w-24 h-24 rounded-full flex items-center justify-center'
        />

        <form
          onSubmit={handleSubmit}
          className='flex flex-col space-y-4 w-full'
        >
          <InputLabel
            label='Email'
            inputProps={{
              type: 'email',
              placeholder: 'Digite o seu email',
              required: true,
              variant: 'secondary',
            }}
          />

          <InputLabel
            label='Senha'
            inputProps={{
              type: 'password',
              placeholder: 'Digite a sua senha',
              required: true,
              variant: 'secondary',
            }}
          />

          <div className='self-center'>
            <Button type='submit' variant='primary'>
              Acessar o flapp
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
