import logo from './logo.svg';
import './App.css';
import About from './component/About/About';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Header from './component/Header/Header';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Culture from './component/Culture/Culture';
import PostDetail from './component/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">


      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Router exact path="/about/culture">
            <Culture></Culture>
          </Router>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
