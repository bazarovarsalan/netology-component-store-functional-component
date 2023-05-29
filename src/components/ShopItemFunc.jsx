import React  from 'react'
import PropTypes from 'prop-types'

const ShopItemFunc = (props) => {
  const {item} = props;
    return (
        <div className="main-content">
          <h2>{item.brand}</h2>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <div className="description">
            {item.descriptionFull}
          </div>
          <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
          <div className="divider"></div>
          <div className="purchase-info">
            <div className="price">{item.currency}{item.price ? item.price.toFixed(2): undefined}</div>
            <button onClick={() => alert("Товар добавлен в корзину")}>Добавить в корзину</button>
          </div>
      </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.shape ({
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      descriptionFull: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.oneOf(["£","$","€","¥"]),
    }).isRequired
}

ShopItemFunc.defaultProps = { 
  item: ({
    descriptionFull: "description of this item is not available now",
  })
}



export default ShopItemFunc

