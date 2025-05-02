import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import UserProfile from "./Components/UserProfile";
import Layout from "./Components/Layout";

import styles from "./App.module.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
