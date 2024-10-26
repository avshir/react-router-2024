# react-router-2024
App based on:
- [official tutorial 2024 from React-router-dom](https://reactrouter.com/en/main/start/tutorial)
- [Play list React Router v.6 by M.Niepomniaszczy](https://www.youtube.com/watch?v=0auS9DNTmzE&list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE)

## Used:
- React + Vite, localforage, CSS
- free API for blog: https://jsonplaceholder.typicode.com/
- React-router-dom v.6.27.0, createHashRouter(...) for routes
- useLocation(), useNavigate(), useNavigation(), useParams()
- loader, useLoaderData(), defer, Await, useAsyncValue() from "React-router-dom", Suspense from "react"
- action, redirect for Route, preloader
- errorElement, useRouteError() for error handling
- useBlocker() with form
- Form
- etc

## Deploy gh-pages:
- changed createBrowserRouter to createHashRouter (with createBrowserRouter on gh-pages rotes not work)
- update deploy: npm run deploy

used tutorials:
- [Link 1](https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf) deploying vite-react-app to github-pages
- [Link 2](https://docs.github.com/ru/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) setting gh-pages in your repo
- [Link 3](https://medium.com/@Satyam_Mishra/react-router-deployment-to-gh-pages-issue-fixed-2024-bc7fd80946ad) fix some errors, use createBrowserRouter instead of createHashRouter


