import logo from './logo.svg';
import './App.css';
import AllBooks from './components/allBooks/AllBooks';
import Reading from './components/curruntyReading/Reading';
import ToRead from './components/toRead/ToRead';
import AlreadyRead from './components/alreadyRead/AlreadyRead';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <AllBooks />
      <Reading />
      <ToRead />
      <AlreadyRead />
    </div>
  );
}

export default App;
