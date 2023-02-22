import { useLoaderData, useParams, Link } from 'react-router-dom'

export default function ProfilDetails() {
    const { id } = useParams()
    const profile = useLoaderData()

    return (
        <div>
            <div className="profile-details">
                <h2>{profile.name}</h2>
                <p>Email: {profile.email}</p>
                <p>Tel: {profile.phone}</p>
                <p>Adress: {profile.address.city}</p>
            </div>
            <div>
                <Link to="/profiles">Back</Link>
            </div>
        </div>
    )
}

// data loader
export const profilDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!res.ok) {
        throw Error('Kunde inte hitta den profilen.')
    }

    return res.json()
}
