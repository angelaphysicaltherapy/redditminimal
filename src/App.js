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
      <header className="App-header">
        <p>
          Welcome to a minimal version of Reddit!
        </p>
        <button onClick={getPost}>Refrech</button>
      </header>
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
