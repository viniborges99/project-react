import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Components/layout/Footer'
import Navbar from './Components/layout/navbar'
import Container from './Components/layout/container'
import Home from './Components/pages/home'
import Projects from './Components/pages/projects'
import NewProject from './Components/pages/newProject'
import Company from './Components/pages/company'
import Contact from './Components/pages/contact'
import Project from './Components/pages/project'

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newproject">
            <NewProject />
          </Route>
          <Route path="/project/:id">
            <Project/>
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
