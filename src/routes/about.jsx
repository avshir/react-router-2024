import {
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const location = useLocation();
  console.log("navigate:", navigate);
  console.log("location:", location);

  return (
    <div>
      <h2>About</h2>
      <p>
        Test form:{" "}
        <Link to="/form" state={{ someValue: "test-info" }}>
          To page Form Test
        </Link>
      </p>
      <button
        onClick={() =>
          navigate("/info", {
            state: "example",
          })
        }
      >
        Go to page Info
      </button>

      <div>Some info about application</div>
    </div>
  );
}
