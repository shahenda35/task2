import "./App.css";
// import "./navbar/Navbar";
import Navbar from "./navbar/Navbar.tsx";
import Sidebar from "./sidebar/Sidebar";
import Filters from "./filters/Filters.tsx";
import Candidates from "./candidates/Candidates.tsx";

function App() {
  return (
    <>
      <div className="Horizontal-flex">
        <Sidebar />
        <div className="content">
          <Navbar />
          <div className="main-container">
            <div className="filters-container">
              <Filters />
            </div>
            <div className="candidates-container">
              <Candidates />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
