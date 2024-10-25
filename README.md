# react-router-2024
App based on [official tutorial 2024 from React-router-dom](https://reactrouter.com/en/main/start/tutorial)

## Used:
- React + Vite,  createHashRouter(...) for routes
- useLocation(), useNavigate(), useParams()
- loader, useLoaderData() action for Route, preloader
- errorElement for error handling
- useBlocker() with form
- Form
- etc

## Deploy gh-pages:
changed createBrowserRouter to createHashRouter (with createBrowserRouter on gh-pages rotes not work)
update deploy: npm run deploy

used tutorials:
- [Link 1](https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf) deploying vite-react-app to github-pages
- [Link 2](https://docs.github.com/ru/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) setting gh-pages in your repo
- [Link 3](https://medium.com/@Satyam_Mishra/react-router-deployment-to-gh-pages-issue-fixed-2024-bc7fd80946ad) fix some errors, use createBrowserRouter instead of createHashRouter


