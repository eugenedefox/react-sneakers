import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';





function App() {
	
	const [items,setItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);
	const [cartItems, setCartItems] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
  // const [favorites, setFavorites] = React.useState([]);

  // CartOpened - Открытие Drawer


	console.log (cartOpened)
	console.log(setCartOpened)


  React.useEffect(() => {
   
    axios.get('https://62be0400bac21839b60ee26f.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://62be0400bac21839b60ee26f.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    
  },[]);
  //setCartItems корзина
  
	const onAddToCart = (obj) => {
    axios.post('https://62be0400bac21839b60ee26f.mockapi.io/cart', obj);
		setCartItems((prev) => [...prev, obj]);
	};
  const onRemoveItem = (id) => {
    axios.delete (`https://62be0400bac21839b60ee26f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  // const onAddToFavorite = (obj) => {
  //   axios.post('https://62be0400bac21839b60ee26f.mockapi.io/favorites', obj)
  //   setFavorites ((prev) => [...prev, obj]);
  // }

// Передаётся в пропс setCardItems на кнопку 
  
//TODO: Закидывает файлы с бэкенда

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  }
 

  return ( 
  
  <div className="wrapper clear">
	 {cartOpened && <Drawer onRemove={onRemoveItem} items={cartItems} onClose={()=> setCartOpened(false)} />}
		
   <Header onClickCart={()=> setCartOpened(true)}/>

    <div className="content p-40">
	<div className="d-flex align-center justify-between mb-40">
	<h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки' }</h1>

<div className="d-flex align-center">
	<div className="search-block d-flex">
	<img width={14} height={14} src="/img/search.svg" className='search-img' alt="Search" />
	{searchValue && <img onClick={()=>setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear" />}
	<input 
  onChange = {onChangeSearchInput} 
    value={searchValue} 
    placeholder = "Найди свою пару..." type="text" />
	</div>
	</div>
</div>
		
	
		
{/* 			
			<Card
			title ="Мужские Кроссовки Nike LeBron XVII "
			price ={3000} 
			imageUrl="/img/sneakers/1.jpg"
	
			/
			> */}
		<div className="d-flex flex-wrap">
			{items
      .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
      .map((item, index) =>(
				<Card
        key={index} 
				title ={item.title}
				price = {item.price} грн
				imageUrl = {item.imageUrl}
				onPlus ={(obj) => onAddToCart(obj)}
				onFavorite ={(obj) => onAddToCart(obj)}
		
				/>
			) )}
		{/* <div className="card">
			<div className="favorite"></div>
		<img width={133} length={113} src="/img/sneakers/sneaker1.jpg" alt="sneaker" />
		<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
		<div className="d-flex justify-between align-center">
			<div className="d-flex flex-column ">
				<span> Цена</span>
				<b>12 999 грн. </b>
			</div>
			<button className="button">
				<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
			</button>
		</div>
	</div> */}



	{/* <div className="card">
		<img width={133} length={113} src="/img/sneakers/sneaker3.jpg" alt="sneaker" />
		<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
		<div className="d-flex justify-between align-center">
			<div className="d-flex flex-column ">
				<span> Цена</span>
				<b>12 999 грн. </b>
			</div>
			<button className="button">
				<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
			</button>
		</div>
	</div>

	<div className="card">
		<img width={133} length={113} src="/img/sneakers/sneaker4.jpg" alt="sneaker" />
		<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
		<div className="d-flex justify-between align-center">
			<div className="d-flex flex-column ">
				<span> Цена</span>
				<b>12 999 грн. </b>
			</div>
			<button className="button">
				<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
			</button>
		</div>
	</div>

	<div className="card">
		<img width={133} length={113} src="/img/sneakers/sneaker5.jpg" alt="sneaker" />
		<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
		<div className="d-flex justify-between align-center">
			<div className="d-flex flex-column ">
				<span> Цена</span>
				<b>12 999 грн. </b>
			</div>
			<button className="button">
				<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
			</button>
		</div>
	</div> */}

		</div>
	
	
	

	</div>
</div>
  );
}



export default App;
 