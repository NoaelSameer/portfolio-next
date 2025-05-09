import NavBar from "../components/NavBar"
import Carouseler from "../components/carousel"

let Divsters = [
    {
        image: "https://res.cloudinary.com/dxsd4uv7m/image/upload/f_auto,q_auto/tictac_eg5gug",
        title: "Bob The Builder",
        description: "BOBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
    },
    {
        image: "https://res.cloudinary.com/dxsd4uv7m/image/upload/f_auto,q_auto/tictac_eg5gug",
        title: "Bob The Builder",
        description: "BOBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
    },
    {
        image: "https://res.cloudinary.com/dxsd4uv7m/image/upload/f_auto,q_auto/tictac_eg5gug",
        title: "Bob The Builder",
        description: "BOBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
    }

]


export default function Gallerier(){

    return(
        <>
        <article className="h-[100vh] w-[100vw]">

            <NavBar Type="Gallery"/>
            <div className="m-auto flex mx-[10%]">
            <Carouseler Divsters={Divsters}/>
            </div>

        </article>
        
        </>
    )
}