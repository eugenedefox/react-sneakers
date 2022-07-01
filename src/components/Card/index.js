import React from 'react';
import styles from './Card.module.scss';
function Card({onFavorite, title, imageUrl, price, onPlus}){

		const [isAdded, setIsAdded] = React.useState(false);

		const onClickPlus = () => {
			onPlus({title, imageUrl, price});
		  setIsAdded(!isAdded);

		}
	console.log(isAdded)

	
	
        return(
<div className={styles.card}>
		<div  className={styles.favorite}onClick={onFavorite} >
			<img  src="/img/unliked.png" alt="Unliked"  />
				</div>
		<img width={133} length={113} src={imageUrl} alt="sneaker" />
		<h5>{title}</h5>
		<div className="d-flex justify-between align-center">
			<div className="d-flex flex-column ">
				<span>Цена</span>
				<b>{price} </b>
			</div>
			
			<img  className={styles.plus}	onClick={onClickPlus}   src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" }  alt="Plus" />
		
			
		</div>
	</div>

        )
}

export default Card; //TODO:  Экспортировать с места компонента
//TODO: Сделать выравнивание у плюсов 
