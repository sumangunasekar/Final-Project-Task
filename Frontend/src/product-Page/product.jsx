import './product.css';

function Product(props){
  

  const productDetails = props.product;
  const ProductArray = productDetails.map((items) => {

    return(
    <div className="Product-container">
  
      <img src={items.image} className='picture' alt="Product-image" />
      <h4>{items.name}</h4>
      <p className='Product-price'>Rs: {items.priceCents}</p>
      <button>Add To Cart</button>
      <button>Buy Now</button>
    </div>
    );


  });



  return(

    <>
    <div className='header'>
      <img src="src\assets\Product-image\images\products\logo.png" alt="app logo"  className='App-Logo'/>
      <input type="text" placeholder='Search Product Here'  className='input' />
      <button className='Search-button'><img src="src\assets\Product-image\images\icons\search-icon.png" alt="" /></button>
    </div>
    <div className='grid-container'>
    {ProductArray}
    </div>
    <div className='footer'>
      <footer>
        <span>© 2025 All Rights Reserved</span>
      </footer>
    </div>
    </>
  );
}

export default Product;


