import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './features/home/Home'
import About from './features/about/About'
import Projects from './features/projects/Projects'
import ProjectCategoryPage from './features/projects/ProjectCategoryPage'
import ProjectDetail from './features/projects/ProjectDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/in-store-branding" element={<ProjectCategoryPage category="in-store-branding" />} />
        <Route path="/projects/installations" element={<ProjectCategoryPage category="installations" />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
