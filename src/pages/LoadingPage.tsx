import Load from '@/components/Loading/Load';
import Dragon from '@/assets/Dragon-loading.png';
import Muse from '@/assets/Musa-loading.png';
import Pomodoro from '@/assets/Tomate-loading.png';
import Flash from '@/assets/Rayo-Loading.png';

function LoadingPage() {
  const colors: string[] = ['CuteRed', 'CuteGreen', 'CuteGold', 'CuteFuchsia'];
  const pets: string[] = [Pomodoro, Dragon, Flash, Muse];
  const randomIndex: number = Math.floor(Math.random() * pets.length);
  return <Load color={colors[randomIndex]} pet={pets[randomIndex]} />;
}

export default LoadingPage;
