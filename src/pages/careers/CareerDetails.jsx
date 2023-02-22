import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()

    return (
        <div className="career-details">
            <h2>{career.name}</h2>
            <p>Email: {career.email}</p>
            <p>Phone: {career.phone}</p>
            <p>Adress: {career.address.city}</p>
        </div>
    )
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!res.ok) {
        throw Error('Could not find that career.')
    }

    return res.json()
}
