// components/ProductCards.tsx
import Image from "next/image";

const ProductCards = () => {
  return (
    <div id="cards" className="flex flex-wrap justify-center gap-5 w-full p-4 pb-20">
      {/* Card 1 */}
      <div className="flex flex-col items-center rounded-lg border border-pink-200 bg-white shadow-md text-center px-6 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Image
          src={'/mystic.jpg'}
          alt="perfume"
          width={200}
          height={200}
          className="hover:animate-spin"
        />
        <p className="py-2 text-2xl">Mystic Bloom</p>
        <p className="py-2 italic font-bold text-gray-700">A delicate floral scent with notes of jasmine, rose, and vanilla.</p>
        <p className="py-2">RS 4000</p>
        <button className="bg-yellow-300 hover:bg-yellow-400 mb-2 p-2 rounded">Buy Now</button>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center rounded-lg border border-pink-200 bg-white shadow-md text-center px-6 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Image
          src={'/velvet.jpg'}
          alt="perfume"
          width={200}
          height={200}
          className="hover:animate-pulse"
        />
        <p className="py-2 text-2xl">Velvet Noir</p>
        <p className="py-2 italic font-bold text-gray-700">A rich, woody fragrance with hints of amber and musk.</p>
        <p className="py-2">RS 6000</p>
        <button className="bg-yellow-300 hover:bg-yellow-400 mb-2 p-2 rounded">Buy Now</button>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center rounded-lg border border-pink-200 bg-white shadow-md text-center px-6 py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Image
          src={'/ocean.jpg'}
          alt="perfume"
          width={200}
          height={200}
          className="hover:animate-bounce"
        />
        <p className="py-2 text-2xl">Ocean Mist</p>
        <p className="py-2 italic font-bold text-gray-700">A fresh, aquatic aroma featuring sea breeze, citrus, and driftwood.</p>
        <p className="py-2">RS 5000</p>
        <button className="bg-yellow-300 hover:bg-yellow-400 mb-2 p-2 rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCards;
