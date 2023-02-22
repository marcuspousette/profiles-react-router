import { Outlet } from 'react-router-dom'

export default function ProfileLayout() {
    return (
        <div className="careers-layout">
            <h2>Profile</h2>
            <p>Ta en titt på vilka profiler som är tillgängliga just nu!</p>
            <Outlet />
        </div>
    )
}
