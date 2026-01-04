import { NavLink } from 'react-router-dom';
//or Link
import '../App.css';


export default function Header(){

    
    return (
    <header>
        <div className="logo">Mahmoud.M</div>
        <nav>
            <NavLink to="/"> الرئيسية </NavLink> 
            <NavLink to="/projects">أعمالي </NavLink>
            {/* <NavLink to="/dashboard">صفحه الداشبورد </NavLink> */}
            <NavLink to="/tools">مهاراتي </NavLink>
            <a href="https://wa.me/01211260324?text=Hello%20there!" className="cta-btn">تواصل</a>
        </nav>
    </header>
    );
}