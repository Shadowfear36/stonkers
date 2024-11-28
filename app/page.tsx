import Stonkers from '/public/images/stonkers.png';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden bg-[#573625] text-white">
      <Image
        src={Stonkers.src}
        alt="Stonkers Logo"
        width={500}
        height={300}
        className=" max-w-lg mb-[-180px]"
      />
      {/* eslint-disable @next/next/no-img-element */
      /* eslint-disable react/no-unescaped-entities */}
      <h5 className="text-5xl mb-4 text-center font-snickers">You're Not You When You're Broke!</h5>
      <button className="px-4 py-2 text-white font-snickers text-4xl rounded-md hover:bg-[#e20d1b] border border-[#e20d1b]">
        Buy Stonkers
      </button>
    </div>
  );
}
