import { useState } from "react";
import { Link, useBlocker, useNavigate } from "react-router-dom";

export default function FormTest() {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  // Block navigating elsewhere when data has been entered into the input
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      inputValue !== "" && currentLocation.pathname !== nextLocation.pathname
  );

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  const leavePage = () => blocker.proceed();
  const cancelNavigation = () => blocker.reset();

  return (
    <div>
      <h1>Form page</h1>
      <div className="flex-container">
        <Link to="/">Home 1</Link>
        <button onClick={goHome}>Home 2</button>
        <button onClick={goBack}>Back 1</button>
        <Link to={-1}>Back 2</Link>
      </div>
      <h4>{inputValue}</h4>
      <div>
        <label>Name</label>
        <input name="name" value={inputValue} onChange={handleChange}></input>
      </div>

      {/* Modal */}
      {blocker.state === "blocked" && (
        <div id="modal" className="modal-back">
          <div className="modal-content">
            <h3>Are you sure you want to leave?</h3>
            <p>Data not saved. All data will be lost.</p>
            <button onClick={leavePage}> Leave the page</button>
            <button onClick={cancelNavigation}>Stay on the page</button>
          </div>
        </div>
      )}
    </div>
  );
}
