import logo from './logo.svg';
import './App.css';
import CommentList from "./components/CommentList";


function App() {
  return (
    <div className="App">
        <div className={'header'}>
            <h2>This is Task-2.</h2>
            <a href={'https://github.com/JaiBhalla03/Task-2'}>See source code!</a>
        </div>

        <CommentList/>
    </div>
  );
}

export default App;
