import { useLoaderData, useParams } from 'react-router-dom'

export default function ProfilDetails() {
    const { id } = useParams()
    const profile = useLoaderData()

    return (
        <div className="profile-details">
            <h2>{profile.name}</h2>
            <p>Email: {profile.email}</p>
            <p>Tel: {profile.phone}</p>
            <p>Adress: {profile.address.city}</p>
        </div>
    )
}

// data loader
export const profilDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!res.ok) {
        throw Error('Could not find that profile.')
    }

    return res.json()
}
