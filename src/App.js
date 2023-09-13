import './App.css';
import Menu from './Menu';
import Tile from './Tile';

function App() {
  const DATA = [{title: "tytuł", src: "./mhm", rating: 5.8},{title: "ksiąszka", src: null, rating: 9.9}];
  return (
    <div>
      <Menu />
      {DATA.map(x => <Tile title={x.title} src={x.src} rating={x.rating} />)}
    </div>
  );
}

export default App;
