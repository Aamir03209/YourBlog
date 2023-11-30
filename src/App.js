import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
    <Router>
      
       <Navbar />
     <Switch>
       <Route exact path='/'>
         <Home />
      </Route>
     
       <Route exact path='/create'>
         <Create />
       </Route>
       <Route exact path='/blogs/:id'>
         <BlogDetails />
       </Route>
       <Route exact path='*'>
         <NotFound/>
       </Route>

      </Switch>
      
      
   
    </Router>
    </div>
  );
}

export default App;