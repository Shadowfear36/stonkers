import Stonkers from './images/stonkers.png';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden bg-[#573625] text-white">
      <img src={Stonkers.src} alt="Stonkers Logo" className=" max-w-lg mb-[-180px]" />
      <h5 className="text-5xl mb-4 text-center font-snickers">You're Not You When You're Broke!</h5>
      <button className="px-4 py-2 text-white font-snickers text-4xl rounded-md hover:bg-[#e20d1b] border border-[#e20d1b]">
        Buy Stonkers
      </button>
    </div>
  );
}
