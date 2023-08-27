'use client';

// Because we are assigning event handlers , the browser does not recognize that , so it has to be a client component
import React from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

type Props = {
  text: string;
};

const SignInButton = ({ text }: Props) => {
  return (
    <Button
      onClick={() => {
        signIn('google').catch(console.error);
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
