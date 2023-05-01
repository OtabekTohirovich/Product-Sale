import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./layout/main";

function App() {
  return (
    <div className="app">
      <main className="content">
        {/* <NavbarMain showDrawer={showDrawer} open={open} /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/delivery" element={<Delivery />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </main>
      {/* <SidebarMenu showDrawer={showDrawer} open={open} onClose={onClose} /> */}
    </div>
  );
}

export default App;
