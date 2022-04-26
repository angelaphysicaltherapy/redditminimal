import './App.css';
import React, { useState } from 'react';

var after = '';
function App() {
  const [posts, setPosts] = useState([]);

  const getPost = () => {
    fetch(`https://www.reddit.com/r/popular.json?after=${after}`)
      .then(response => response.json())
      .then(body => {
        after = body.data.after;
        setPosts(body.data.children);
      })
  }
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.reddit.com">Full Reddit</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Subreddit
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Freediving</a></li>
                  <li><a class="dropdown-item" href="#">Omaha</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Enter a topic" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <header>
        <div class="container-fluid">
          <img src="https://picsum.photos/id/256/2000/300" class="img-fluid" alt="..." />
        </div>
      </header>
      <div class="my-5">
        <h1 >
          Welcome to a minimal version of Reddit!
        </h1>
      </div>

      <div class="d-grid gap-2 col-4 mx-auto">
        <button class="btn btn-warning btn-lg" type="button" onClick={getPost}>Refresh</button>
      </div>
      <div id="meme-container" class="card-columns">
        {/* <div id="waterfall-container"> */}
        {
          posts.map(post => {
            if (post.data.post_hint === 'image') {
              return (
                <div class="card">
                  <h4>{post.data.title}</h4>
                  <img src={post.data.url} />
                </div>
              )
            }

          })
        }

      </div>
    </div>
  );
}

export default App;
