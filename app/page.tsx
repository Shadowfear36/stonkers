import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden bg-[#573625] text-white">
      <Image
        src="/images/Stonkers.png"
        alt="Stonkers Logo"
        width={500}
        height={300}
        className="w-48 h-auto sm:w-64 md:w-80 lg:w-96 mb-[-50px] sm:mb-[-70px] md:mb-[-100px] lg:mb-[-120px]" // Responsive sizing and margin
      />
      {/* eslint-disable @next/next/no-img-element */
      /* eslint-disable react/no-unescaped-entities */}
      <h5 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-center font-snickers">
        You're Not You When You're Broke!
      </h5>
      <a
        href="https://pump.fun/coin/7wN2Gd5sqjqMW3vtn7PXG4SoARhA3qFmZ19zJXbfpump"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-3 py-1 sm:px-4 sm:py-2 text-lg sm:text-2xl md:text-4xl rounded-md hover:bg-[#e20d1b] border border-[#e20d1b] font-snickers">
          Buy Stonkers
        </button>
      </a>
    </div>
  );
}