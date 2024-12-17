import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden">
      {/* Curved shape */}
      <div className="absolute top-0 left-0 w-[40%] h-[30%]">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 L100,70 Q50,100 0,70 Z"
            fill="white"
            className="drop-shadow-lg"
          />
        </svg>
        <span className="absolute top-[15%] left-[10%] text-black text-4xl font-medium">
          flavorful
        </span>
      </div>

      {/* Main content */}
      <div className="absolute top-[20%] left-[5%] space-y-6">
        <h2 className="text-3xl font-medium">Fuel your day!</h2>
        <h1 className="text-6xl font-bold">
          Powerful bars are here
        </h1>
        <button className="bg-white text-black px-8 py-3 rounded-full text-xl font-medium hover:bg-gray-100 transition-colors">
          Experience powerful
        </button>
      </div>

      {/* Product image */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[60%]">
        <div className="relative w-full h-full">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="24 pack of powerful bars"
            width={800}
            height={600}
            className="object-contain transform rotate-[-10deg]"
            priority
          />
        </div>
      </div>

      {/* QR Code */}
      <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg">
        <Image
          src="/placeholder.svg?height=100&width=100"
          alt="QR Code"
          width={100}
          height={100}
          className="w-24 h-24"
          priority
        />
      </div>
    </div>
  )
}

