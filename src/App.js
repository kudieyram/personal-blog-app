import './App.css';
import LogInComponent from './components/Login';
import SignUpComponent from './components/Signup';
import NewPostComponent from './components/NewPost';
import NotFoundComponent from './components/Notfound'
import AllPostsComponent from './components/AllPost';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div>
     <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login"><LogInComponent/></Route>

          <Route path="/signup">< SignUpComponent/></Route>

          <Route path="/new_post"><NewPostComponent/></Route>

          <Route path="/all_posts"><AllPostsComponent/></Route>

          <Route exact path="/"><LogInComponent/></Route>

          <Route><NotFoundComponent/></Route>
          
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
