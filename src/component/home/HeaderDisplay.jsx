import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const HeaderDisplay = () => {
  const imagesData = [
    "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1486294/pexels-photo-1486294.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <Carousel className="my-10 mx-auto w-[93vw] overflow-x-clip  " >
      <CarouselContent>
        {imagesData.map((image, index) => (
          <CarouselItem>
            <img
              src={image}
              loading="lazy"
              alt=""
              className="object-over w-full h-[60vh] rounded-3x "
              key = {index}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeaderDisplay;
