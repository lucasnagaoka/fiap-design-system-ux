import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
}

interface GridLayoutProps {
  children: React.ReactNode;
}

export function GridLayout({ children }: GridLayoutProps) {
  return (
    <div className='min-h-screen grid place-items-center bg-white'>
      {children}
    </div>
  );
}

