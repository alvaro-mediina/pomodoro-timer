import Tomato3D from './Tomato3D';
import Footer from '../FooterHome/Footer';

function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <main className="relative w-full flex flex-col justify-center items-center flex-grow">
        <div className="absolute z-0 -translate-x-80 -translate-y-20">
          <div className="flex flex-col text-white font-extrabold drop-shadow-[5px_2px_2px_rgba(0,0,0,0.5)]">
            <h1 className="text-[80px] m-0 leading-none">CONFIGURA</h1>
            <h1 className="text-[70px] text-CuteRed leading-none mt-1 mb-4">PLANIFICA</h1>
            <h1 className="text-[40px] leading-none">CONCÉNTRATE</h1>
          </div>
        </div>
        <div className="z-10">
          <Tomato3D />
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default Home;
