
import './App.css'


import { BrowserRouter} from "react-router-dom";

import MyRoute from './MyRoute';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <MyRoute/>
        {/* <Routes>
        <Route path="/donate/:id" element={<ProjectDetail />} />
        </Routes> */}
        </BrowserRouter>
    </div>
  )
}

export default App
