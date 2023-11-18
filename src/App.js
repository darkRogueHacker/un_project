import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layout
import Page from "./layout/Page";

// Routes
import Home from "./routes/home/home";
import DonatePage from "./pages/donate/donate";
import ProfilePage from "./pages/profile/profile";

function App() {
  return (
    <div className="App w-100 h-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/donation-page" element={<DonatePage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
