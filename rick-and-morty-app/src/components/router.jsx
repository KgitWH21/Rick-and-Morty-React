import { createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import HomePage from '../pages/HomePage.jsx'
import CharacterDetailsPage from '../pages/CharacterDetailsPage.jsx'
import AboutPage from "../pages/AboutPage.jsx"
import NotFoundPage from "../pages/NotFoundPage.jsx"
import CharactersPage from '../pages/CharactersPage.jsx'



// createBrowserTouter maps URL paths to components React should render

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // `index` makes HomePage the default child at exactly "/".
      { index: true, 
        element: <HomePage />
      },
      { path: 'about',
        element: <AboutPage />
      },
      { path: 'characters',
        element: <CharactersPage />
      },
      { path: 'characters/:id',
        element: <CharacterDetailsPage />
      },
      { path: '*',
        element: <NotFoundPage />
      },
    ],
  },
])

export default router


