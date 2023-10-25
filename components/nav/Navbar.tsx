import NavOne from "./NavOne"
import NavTwo from "./NavTwo"

export default function Navbar(props:any) {
    return (
        <header>
            <NavOne userData={props.userData}/>
            <NavTwo is_hod={props.is_hod} is_editor={props.is_editor}/>
        </header>
    )
}