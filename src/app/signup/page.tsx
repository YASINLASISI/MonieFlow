'use client';

import { useAuth } from '@/components/auth-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you'd handle form data here
    login(); // "Log in" the user immediately after signup for this prototype
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
       <div className="w-full max-w-md space-y-6">
         <div className="flex justify-center">
            <Logo />
        </div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-headline">Create an Account</CardTitle>
            <CardDescription>Join MonieFlow and start earning today.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
               <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="Gabriel Idahosa" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="underline">
                Log in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
