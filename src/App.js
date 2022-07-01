import Drawer from "./components/Drawer";
import Card from "./components/Card";
import Header from "./components/Header";
import React from 'react'




function App() {
	
	const [items,setItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);
	const [cartItems, setCartItems] = React.useState([]);



	console.log (cartOpened)
	console.log(setCartOpened)

	React.useEffect(()=>{
		fetch('https://62be0400bac21839b60ee26f.mockapi.io/items').then ((res) => {
		return res.json();
	}) .then (json => {
		setItems(json)});
	},[]);
	
	const onAddToCart = (obj) =>{
		setCartItems([...cartItems, obj]);
	};

  return ( 
  
  <div className="wrapper clear">
	 {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)} />}
		
	
   <Header onClickCart={()=> setCartOpened(true)}/>

    <div className="content p-40">
	<div className="d-flex align-center justify-between mb-40">
	<h1>Все кроссовки</h1>

<div className="d-flex align-center">
	<div className="search-block d-flex">
	<img src="/img/search.svg" alt="" />
	<input placeholder = "Как же заебало" type="text" />
	</div>
	</div>
</div>
		
	
		<div className="d-flex flex-wrap">
{/* 			
			<Card
			title ="Мужские Кроссовки Nike LeBron XVII "
			price ={3000} 
			imageUrl="/img/sneakers/1.jpg"
	
			/
			> */}
		
			{items.map((item) =>(
				<Card
				title ={item.title}
				price = {item.price} грн
				imageUrl = {item.imageUrl}
				onPlus ={(obj)=>onAddToCart(obj)}
				onFavorite ={()=>console.log ('Нажали на минус')}
		
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
 