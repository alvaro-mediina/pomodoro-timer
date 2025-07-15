import { login } from '@/lib/authService';
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardAction,
  CardFooter,
  CardContent,
} from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Nav/Logo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (pseudoEmail: string) => {
    setEmail(pseudoEmail);
  };

  const handleChangePassword = (pseudoPassword: string) => {
    setPassword(pseudoPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Error al intentar iniciar sesión: ', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Card
        className="w-full max-w-sm h-[150px] flex justify-center items-center bg-CuteRed
                  rounded-none rounded-b-xl border-none"
      >
        <Logo offEmogis={true} />
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Accede a tu cuenta</CardTitle>
          <CardDescription>
            Introduce tu dirección de correo electrónico para acceder
          </CardDescription>
          <CardAction>
            <Button variant="link">Registrarse</Button>
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
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    handleChangePassword(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full bg-CuteRed hover:bg-red-700">
              Iniciar Sesión
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
