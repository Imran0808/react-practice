import v from'./data.json'
import './App.css';
import MoviesCart from './MoviesCart';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
   <div className='App'>
    <Header/>
    <div className='main'>
      {
        v.map((element)=>(
          <MoviesCart title={element.Title}  image={element.Poster} year={element.Year} imbd={element.imdbID}  />
        ))
        
      }
    
   
    </div>
    <Footer/>
   </div>
  );
}

export default App;
