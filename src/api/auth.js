import { http } from './client';

export const registrationRequest = async credentials =>
  await http.post('/register', credentials);

export const authenticationRequest = async credentials =>
  await http.post('/login', credentials);

export const verificationRequest = async credentials =>
  await http.post('/verify', { code: credentials });

export const resendVerificationRequest = async () =>
  await http.get('/resend-token');
