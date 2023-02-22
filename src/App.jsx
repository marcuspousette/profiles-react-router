import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Profile, { profileLoader } from './pages/profiles/Profile'
import ProfilDetails, {
    profilDetailsLoader,
} from './pages/profiles/ProfilDetails'
import ProfileError from './pages/profiles/ProfileError'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ProfileLayout from './layouts/ProfileLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route
                path="careers"
                element={<ProfileLayout />}
                errorElement={<ProfileError />}
            >
                <Route index element={<Profile />} loader={profileLoader} />
                <Route
                    path=":id"
                    element={<ProfilDetails />}
                    loader={profilDetailsLoader}
                />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
