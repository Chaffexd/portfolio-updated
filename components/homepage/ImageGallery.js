import Image from "next/image";

const ImageGallery = () => {
  return (
    <div className="flex justify-center gap-10 py-4 overflow-hidden">
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl rotate-2"> 
        <Image
          src={"/images/me.jpeg"}
          className="h-full w-full object-cover"
          alt=""
          width={5760}
          height={3840}
        />
      </div>
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl -rotate-2"> 
        <Image
          src={"/images/me.jpeg"}
          className="h-full w-full object-cover"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl rotate-2"> 
        <Image
          src={"/images/me.jpeg"}
          className="h-full w-full object-cover"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl rotate-2"> 
        <Image
          src={"/images/me.jpeg"}
          className="h-full w-full object-cover"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className="relative aspect-[9/10] flex-none w-1/5 overflow-hidden rounded-xl rotate-2"> 
        <Image
          src={"/images/me.jpeg"}
          className="h-full w-full object-cover"
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
