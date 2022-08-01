import reactLogo from './assets/react.svg'
import './App.css'
import { PostList } from './components/PostList';
import { PostCreator } from './components/PostCreator';

function App() {
  return (
    <div className="App">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Vite + React</h1>
      <PostCreator />
      <PostList />
    </div>
  )
}

export default App
