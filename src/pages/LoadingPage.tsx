import Load from '@/components/Loading/Load';

function LoadingPage() {
  const colors: string[] = ['CuteRed', 'CuteGreen', 'CuteGold', 'CuteFuchsia'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div>
      <Load color={randomColor} pet={randomColor} />
    </div>
  );
}

export default LoadingPage;
