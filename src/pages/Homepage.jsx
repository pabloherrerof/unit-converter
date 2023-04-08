
import { Converter } from "../components/Converter"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Saved } from "../components/Saved"
import "./homepage.css"

export const Homepage = () => {
    

    return (<>
    <Navbar/>
    <div className="homepage">
        <Converter/>
        <Saved />
    </div>
    <Footer/>
    </>)
}