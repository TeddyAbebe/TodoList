import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CollectionScreen, TodoScreen } from "./screens";
import { AppBar, BottomBar } from "./screens/shared";

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<CollectionScreen />} />
          <Route path="/todo/:id" element={<TodoScreen />} />
        </Routes>
        <div className="flex flex-col flex-grow"></div>
        <BottomBar />
      </Router>
    </div>
  );
}

export default App;
