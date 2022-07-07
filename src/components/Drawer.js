function Drawer({ onRemove, onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина {""}
          <img
            onClick={onClose}
            width={32}
            height={32}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cardItem d-flex align-center">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b> {obj.price} грн.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    width={32}
                    height={32}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого</span>
                  <div></div>
                  <b>29 999 грн</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>10 500 грн</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ
                <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="empty">
            <img src="/img/box.png" alt="box" />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button onClick={onClose} className="greenButton">
              Вернуться назад
              <img src="img/reverse-arrow.svg" alt="Arrow" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
