import Google from '@/components/icons/Google';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { useLogInForm } from '@/features/hooks/use-log-in-form';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { z } from 'zod';

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const { form, schema } = useLogInForm();

  const onSubmit = (values: z.infer<typeof schema>) => {};

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Welcome back</CardTitle>
          <CardDescription>Login with your Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div className='flex flex-col gap-4'>
                <Button variant='outline' className='w-full'>
                  <Google />
                  Login with Google
                </Button>
              </div>
              <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
                <span className='relative z-10 bg-background px-2 text-muted-foreground'>Or continue with</span>
              </div>
              <div className='space-y-4'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input autoComplete='email' type='email' placeholder='Email' autoFocus {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PasswordInput autoComplete='current-password password' placeholder='Password' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <div className='text-center text-sm'>
                Don&apos;t have an account?{' '}
                <Link to='/signup' className='underline underline-offset-4'>
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className='text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  '>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>.
      </div>
    </div>
  );
}
