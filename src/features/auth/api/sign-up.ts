import { apiRoutes } from '@/config/routes';
import { baseApi } from '@/lib/api-client';
import { commonValidations } from '@/lib/validations';
import { type AuthResponse } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

export const signUpInputSchema = z
  .object({
    email: commonValidations.email,
    password: commonValidations.password,
    confirm_password: z
      .string({
        required_error: 'Confirm password is required',
      })
      .min(1, 'Confirm password is required'),
    name: z.string().min(1, 'Name is required'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export type SignUpInput = z.infer<typeof signUpInputSchema>;

type SignUpRequestDto = Omit<SignUpInput, 'confirm_password'>;

const dtoToSignUpRequest = (data: SignUpInput): SignUpRequestDto => {
  return {
    email: data.email,
    password: data.password,
    name: data.name,
  };
};

export function signUpWithEmailAndPassWord(
  data: SignUpInput,
): Promise<AuthResponse> {
  const requestDto = dtoToSignUpRequest(data);
  return baseApi.post(apiRoutes.auth.login.path, requestDto);
}

export function useSignUpMutation({ onSuccess }: { onSuccess?: () => void }) {
  return useMutation({
    mutationFn: signUpWithEmailAndPassWord,
    onSuccess: () => {
      //   queryClient.setQueryData(userQueryKey, data.user);
      onSuccess?.();
    },
  });
}
