import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Login from "./Login";
import Feed from "./Feed";
import Profile from "./Profile";
import SuggestedPosts from "./SuggestedPosts";
import SuggestedPeople from "./SuggestedUsers";
import Settings from "./Settings";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" index element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:userId/profile" element={<Profile />} />
          <Route path="/suggestedPosts" element={<SuggestedPosts />} />
          <Route path="/suggestedUsers" element={<SuggestedPeople />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
