import '../../styles/components/layout/Header.css';
// import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="holder">
                <img src="img/logo.png" alt="AVIB" width={40} />
                <h1>Aberturas de Aluminio - AVIB</h1>
            </div>
        </header>
    );
}

export default Header;
