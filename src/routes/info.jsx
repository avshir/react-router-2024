import { useLocation } from "react-router-dom";

export default function Info() {
  const location = useLocation();

  return (
    <div>
      <h1>Info page</h1>
      <p>If you go from &quot;About page&quot; you will see extra info.</p>
      {location.state && (
        <p>
          Secret word passing from &quot;About page&quot; is:{" "}
          <i>{location.state}</i>
        </p>
      )}
    </div>
  );
}
