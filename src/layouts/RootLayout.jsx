import { Outlet, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <img className="logo" src={logo} alt="Techover" />
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">
                            Hem
                        </NavLink>
                        <NavLink className="nav-link" to="about">
                            Om oss
                        </NavLink>
                        <NavLink className="nav-link" to="help">
                            Hjälp
                        </NavLink>
                        <NavLink className="nav-link" to="profiles">
                            Profiler
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
