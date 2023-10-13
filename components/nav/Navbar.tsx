import NavOne from "./NavOne"
import NavTwo from "./NavTwo"

export default function Navbar() {
    return (
        <header className="text-teal-950 grid grid-cols-3 grid-rows-2">
            <NavOne/>
            <NavTwo/>
        </header>
    )
}