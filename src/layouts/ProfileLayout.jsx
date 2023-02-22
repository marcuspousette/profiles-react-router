import { Outlet } from 'react-router-dom'

export default function ProfileLayout() {
    return (
        <div className="careers-layout">
            <h2>Profile</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

            <Outlet />
        </div>
    )
}
