import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function Carouseler({Divsters}){
    return (
        <Carousel>
            <CarouselContent>
                {Divsters.map((divster, index)=>(
                    <div>
                        <img src={divster.image} alt={divster.image} ></img>
                        <h3>{divster.title}</h3>
                        <p>{divster.description}</p>
                    </div>
                ))}

            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}