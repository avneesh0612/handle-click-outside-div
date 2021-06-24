import "./App.css";
import useComponentVisible from "./useComponentVisible";

function App() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div className="app">
      <button
        ref={ref}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {isComponentVisible ? "Close" : "Open"}
      </button>
      {isComponentVisible ? (
        <div ref={ref} className="dropdown_container">
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
