import Image from "next/image";

const ImageGallery = () => {
  return (
    <div className="flex justify-center gap-10 py-4 overflow-hidden">
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl rotate-2"> 
        <Image
          src={"/images/me.jpeg"}
          className="h-full w-full object-cover"
          alt="A photo of me, Shane"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl -rotate-2"> 
        <Image
          src={"/images/pg.jpeg"}
          className="h-full w-full object-cover"
          alt="A photo of my Poodle"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl rotate-2"> 
        <Image
          src={"/images/berlin.jpg"}
          className="h-full w-full object-cover"
          alt="A photo of Berlin"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl rotate-2"> 
        <Image
          src={"/images/mountain.jpg"}
          className="h-full w-full object-cover"
          alt="A photo of some mountains"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl -rotate-2"> 
        <Image
          src={"/images/arsenal.jpg"}
          className="h-full w-full object-cover"
          alt="A photo of my favourite team stadium"
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default ImageGallery;
