import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageShell from './components/layout/PageShell'
import Home from './pages/Home'
import Work from './pages/Work'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PageShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
