import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Vad behöver du hjälp med?</h2>
            <p>
                Hitta en lösningen till ditt problem genom att lära dig från andra eller ta kontakt med oss direkt!
            </p>
            <nav>
                <NavLink to="faq">Läs FAQ</NavLink>
                <NavLink to="contact">Kontakta oss</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
