import { Link, useLoaderData } from 'react-router-dom'

export default function Profile() {
    const careers = useLoaderData()
    console.log(careers)

    return (
        <div className="profiles">
            {careers.map((career) => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.name}</p>
                    <p>Based in {career.company.name}</p>
                </Link>
            ))}
        </div>
    )
}

// data loader
export const profileLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) {
        throw Error('Could not fetch the list of careers')
    }

    return res.json()
}
