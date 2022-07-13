import React from "react";
import Icon from "../../assets/svgs";
import "./product-categorys.scss";

function ProductCategorys(props) {
    const {panel , setPanel ,Categorys} = props;
    const openPanel = (id)=>{
    }
  return (
    <div className="container">
      <div className="main-product-categorys">
        <h4>Kategoriler</h4>
        <div>
          <ul className="category-list">
            {Categorys.map(item =>
              <>
              <li onClick={()=>openPanel(item.id)} key={item.id} className="category-item">
                <div>
                  <img src={item.image} alt="" width={30} />
                  <span>
                    {item.title}
                  </span>
                </div>
                <Icon name="downArrow" size="10" fill="#A1A1A1" />
              </li>
                {item.categorys.map(category=>(<div>
                    <span>{category.title}</span>
                </div>))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCategorys;
