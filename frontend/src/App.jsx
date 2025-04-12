import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Teachers from "./pages/teachers"
function App(){
  return(
    <Router>
      <Layout>
      <Routes>
            <Route path="/" element={<Teachers />} />
      </Routes>
      </Layout>
    </Router>
  )
}
export default App