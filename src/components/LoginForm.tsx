// src/components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Stack, Typography, Link } from '@mui/material';
import SocialLogin from './SocialLoginButtons';

const schema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Min 6 characters').required('Password is required'),
});

type FormData = yup.InferType<typeof schema>;

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('form valid:', data); // no backend needed per requirements
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h4" color="primary" gutterBottom>Welcome back!</Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Simplify your workflow and boost your productivity with Tuga's App
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Email"
          fullWidth
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Link href="#" underline="hover" alignSelf="flex-end" variant="body2">
          Forgot Password?
        </Link>
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained" fullWidth>Login</Button>
          <Button variant="outlined" fullWidth>Sign Up</Button>
        </Stack>
      </Stack>

      <SocialLogin />
    </form>
  );
}