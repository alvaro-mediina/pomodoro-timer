interface loadProps {
  color: string;
  pet: string;
}

function Load(props: loadProps) {
  const cssVar = `--color-${props.color}`;

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        backgroundColor: `var(${cssVar})`,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
      }}
    >
      <div></div>
    </div>
  );
}

export default Load;
