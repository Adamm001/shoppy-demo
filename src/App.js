import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';


function App() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [elecgtronics, setElecgtronics] = useState([]);
  const [man, setMan] = useState([]);
  const [woman, setWoman] = useState([]);
  const [chooseCategories, setChooseCategories] = useState();
  const [too, setToo] = useState(0);

  var like = too === 0 ? products : 
    too === 1 ? elecgtronics:
    too === 2 ? jewelery: 
    too === 3 ? man: woman 

  const fetchCategoriesData = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCategories(data)
      })
  }
  const FetchProductsData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProducts(data)
      })
  }
  const FetchJeweleryData = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setJewelery(data)
      })
  }
  const FetchElectronicsData = () => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setElecgtronics(data)
      })
  }
  const FetchManData = () => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setMan(data)
      })
  }
  const FetchWomanData = () => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setWoman(data)
      })
  }
  

  useEffect(() => {
    FetchProductsData()
    fetchCategoriesData()
    FetchJeweleryData()
    FetchElectronicsData()
    FetchManData()
    FetchWomanData()
  }, [])
  
  return (
    <div>
      <Navbar 
        categories={categories} 
        setChooseCategories={setChooseCategories} 
        chooseCategories={chooseCategories}
        setToo={setToo}
        too={too} />
      <Cards products={like}/>
    </div>
  );
}

export default App;
