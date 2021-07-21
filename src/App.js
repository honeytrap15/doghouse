import './App.css';

function App() {
  return (
    <div className="App">
      <video width="640" 
             height="360" 
             src="/stream.m3u8" 
             preload="none" 
             autoplay
             controls />
    </div>
  );
}

export default App;
