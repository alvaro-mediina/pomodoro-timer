import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Nav/Logo';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '@/lib/authService';
import { FirebaseError } from 'firebase/app';
import ErrorMessage from '@/components/ui/error-message';

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const checkStrongPassword = (password: string) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (!(hasSpecialChar && hasLowerCase && hasUpperCase && hasNumber)) {
      throw new FirebaseError('auth/invalid-password', 'Contraseña insegura.');
    } else {
      return true;
    }
  };

  const handleChangeEmail = (pseudoEmail: string) => {
    setEmail(pseudoEmail);
  };

  const handleChangePassword = (pseudoPassword: string) => {
    setPassword(pseudoPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (checkStrongPassword(password)) {
        await register(email, password);
        navigate('/');
      }
    } catch (err) {
      const error = err as FirebaseError;
      if (error.code) {
        switch (error.code) {
          case 'auth/invalid-password':
            setError('Tu contraseña es insegura');
            break;
          case 'auth/weak-password':
            setError('Tu contraseña debe tener mínimo 6 caracteres.');
            break;
          case 'auth/email-already-in-use':
            setError('Correo electrónico ya en uso.');
            break;
          case 'auth/invalid-credential':
            setError('Credenciales inválidas. Verifica tu correo y contraseña.');
            break;
          default:
            setError('Ocurrió un error. Intenta de nuevo.');
        }
      } else {
        setError('Error inesperado. Intenta nuevamente más tarde.');
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Card
        className="w-full max-w-sm h-[150px] flex justify-center items-center bg-CuteRed
                  rounded-none rounded-b-xl border-none lg:h-[200px]"
      >
        <Logo offEmogis={true} />
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Registrate</CardTitle>
          <CardDescription>Introduce un correo electrónico y contraseña</CardDescription>
          <CardAction>
            <Button
              variant="link"
              onClick={() => {
                navigate('/login');
              }}
            >
              ¿Ya tienes una cuenta?
            </Button>
          </CardAction>
        </CardHeader>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="pomodoro@timer.com"
                  onChange={(e) => {
                    handleChangeEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    handleChangePassword(e.target.value);
                  }}
                  required
                />
                {error && <ErrorMessage message={error} />}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full bg-CuteRed hover:bg-red-700">
              Registrarse
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
