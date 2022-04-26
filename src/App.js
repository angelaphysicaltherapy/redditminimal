import './App.css';
import React, {useState} from 'react';

var after = '';
function App() {
  const [posts, setPosts] = useState([]);

  const getPost = ()=>{
    fetch(`https://www.reddit.com/r/memes.json?after=${after}`)
    .then(response=>response.json())
    .then(body=>{
      after= body.data.after;
      setPosts(body.data.children);
    })
  }
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header>
        <div class="container-fluid">
        <img src="https://picsum.photos/id/256/2000/300" class="img-fluid" alt="..."/>
        </div>
      </header>
      <div class="my-5">
        <h1 >
          Welcome to a minimal version of Reddit!
        </h1>
      </div>
        
        <div class="d-grid gap-2 col-4 mx-auto">
            <button class="btn btn-warning btn-lg" type="button"onClick={getPost}>Refresh</button>
        </div>
      <div id="meme-container">
        {
          posts.map(post=>{
            if(post.data.post_hint ==='image'){
              return (
                <div>
                  <h4>{post.data.title}</h4>
                  <img src={post.data.url_overridden_by_dest} />
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
