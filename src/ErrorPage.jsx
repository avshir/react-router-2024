import { useRouteError, useMatch } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const match = useMatch("/contacts/:x");

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>{Boolean(match) && <p>Error on page Contacts!!!</p>}</p>
    </div>
  );
}
