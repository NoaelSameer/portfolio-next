import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
  export default function Carouseler({ Divsters }) {
    return (
      <Carousel className="w-[80vw]">
        <CarouselContent>
          {Divsters.map((divster, index) => (
            <CarouselItem
              key={index}
              className="m-auto mt-[5vh] min-w-[90vw]"
            >
              <img
                src={divster.image}
                alt={divster.title}
                className="h-[60vh] w-[90vw]"
              />
              <h3 className="text-center">{divster.title}</h3>
              <p className="text-center">{divster.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
  