import NavOne from "./navOne"
import NavTwo from "./navTwo"

export default function Navbar() {
    return (
        <header className="grid grid-cols-3 grid-rows-2">
            <NavOne/>
            <NavTwo/>
        </header>
    )
}