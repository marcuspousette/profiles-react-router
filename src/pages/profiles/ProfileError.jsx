import { Link, useRouteError } from 'react-router-dom'

export default function ProfileError() {
    const error = useRouteError()

    return (
        <div className="profiles-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Gå tillbaka till hemsidan</Link>
        </div>
    )
}
