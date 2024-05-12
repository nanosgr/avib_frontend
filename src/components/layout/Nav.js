import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div class="holder">
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'activo' : undefined }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros" className={({isActive}) => isActive ? 'activo' : undefined }>Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos" className={({isActive}) => isActive ? 'activo' : undefined }>Productos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({isActive}) => isActive ? 'activo' : undefined }>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to='http://localhost:3000/admin/login/'>Ingreso</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
