import Logo from '../Nav/Logo';

interface loadProps {
  color: string;
  pet: string;
}

function Load(props: loadProps) {
  const cssVar: string = `--color-${props.color}`;
  const pet: string = props.pet;
  return (
    <div
      className="fixed inset-0 overflow-hidden z-[9999] flex justify-center items-center"
      style={{
        backgroundColor: `var(${cssVar})`,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
      }}
    >
      <div className="w-full  flex justify-center items-center flex-col animate-fadeIn">
        <img src={pet} width={100} height={100} />
        <Logo offEmogis={true} />
      </div>
    </div>
  );
}

export default Load;
