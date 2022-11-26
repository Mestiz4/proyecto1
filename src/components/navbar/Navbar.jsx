import "./Navbar.css"

import { CartWidget } from "../cartwidget/CartWidget";

const Navbar = () =>{

    return (
        <div className="navbar_container">
                <img src="../../assets/img/majana-logo_2.png" alt=""/>
            <ul>
                <li className="ul-item">Nosotros</li>
                <li className="ul-item">Productos</li>
                <li className="ul-item">Contácto</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default Navbar;