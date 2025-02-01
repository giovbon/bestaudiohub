import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import PostPage from "./components/PostPage"; // Página individual do post
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
