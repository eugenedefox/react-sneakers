

function App() {
  return ( 
  
  <div className="wrapper clear">
	
	<div className="overlay">
		<div className="drawer">
			<h2 className="mb-30">Корзина</h2>

		<div className="items">			
		<div className="cardItem d-flex align-center">

<div style={{backgroundImage:'url(/img/sneakers/sneaker1.jpg)'}} className="cartItemImg"></div>
<div className="mr-20">
	<p className="mb-5">Мужские кроссовки Nike Air</p>
	<b>12 999 руб.</b>
<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
</div>
</div>

<div className="cardItem d-flex align-center">

<div style={{backgroundImage:'url(/img/sneakers/sneaker2.jpg)'}} className="cartItemImg"></div>
<div className="mr-20">
	<p className="mb-5">Мужские кроссовки Nike Air</p>
	<b>12 999 руб.</b>
<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
</div>
	</div>
		<div className="cartTotalBlock">
			<ul>
		<li className="d-flex">
			<span>Итого:</span>
			<div></div>
			<b>12 999 руб.</b>
		</li>
		<li className="d-flex">
			<span>Налог 5%</span>
			<div></div>
			<b>1074 руб.</b>
		</li>
	</ul>	
	<button>Оформить заказ</button>	

	</div>	
</div>
	
		
	</div>
</div>	
	
    <header className=" align-center  justify-between p-40">
	<div className="d-flex align center">
		<img width={40} height ={40} src="/img/logo.svg" alt="" />
		<div className="headerInfo">
			<h3>React sneakers</h3>
			<p>Магазин лучших кроссовок</p>
		</div>
	</div>
	<ul className="d-flex">
		<li className="mr-30">
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z" fill="#9B9B9B"/>
</svg>
		<span></span>
		</li>
		<li> 
		<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>	
		<span>1205 руб.</span></li>
	</ul>
    
    </header>
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
		


		<div className="d-flex">
		<div className="card">
			<div className="favorite"></div>
		<img width={133} length={113} src="/img/sneakers/sneaker1.jpg" alt="sneaker" />
		<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
		<div className="d-flex-justify-between align-center">
			<div className="d-flex flex-column ">
				<span> Цена</span>
				<b>12 999 руб. </b>
			</div>
			<button>
				<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
			</button>
		</div>
	</div>

	<div className="card">
		<img width={133} length={113} src="/img/sneakers/sneaker2.jpg" alt="sneaker" />
		<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
		<div className="d-flex-justify-between align-center">
			<div className="d-flex flex-column ">
				<span> Цена</span>
				<b>12 999 руб. </b>
			</div>
			<button>
				<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
			</button>
		</div>
	</div>

	<div className="card">
		<img width={133} length={113} src="/img/sneakers/sneaker3.jpg" alt="sneaker" />
		<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
		<div className="d-flex-justify-between align-center">
			<div className="d-flex flex-column ">
				<span> Цена</span>
				<b>12 999 руб. </b>
			</div>
			<button>
				<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
			</button>
		</div>
	</div>

	<div className="card">
		<img width={133} length={113} src="/img/sneakers/sneaker4.jpg" alt="sneaker" />
		<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
		<div className="d-flex-justify-between align-center">
			<div className="d-flex flex-column ">
				<span> Цена</span>
				<b>12 999 руб. </b>
			</div>
			<button>
				<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
			</button>
		</div>
	</div>

	<div className="card">
		<img width={133} length={113} src="/img/sneakers/sneaker5.jpg" alt="sneaker" />
		<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
		<div className="d-flex-justify-between align-center">
			<div className="d-flex flex-column ">
				<span> Цена</span>
				<b>12 999 руб. </b>
			</div>
			<button>
				<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
			</button>
		</div>
	</div>

		</div>


	</div>
</div>
  );
}



export default App;
 