import { useCart } from "../../Providers/CartProvider";

import { ContainerCart, ContainerCartList } from "./style";

export default function Cart() {
  const { cart, deleteProduct } = useCart();

  return (
    <ContainerCart>
      <h1>Carrinho</h1>
      <ContainerCartList>
        {cart.length === 0 ? (
          <h3>Carrinho vazio</h3>
        ) : (
          cart.map((product) => (
            <li key={product.id}>
              <div className='cardImage'>
                <img src={product.image} alt={product.title} />
              </div>
              <div className='cardInfo'>
                <p className='productTitle'>{product.title}</p>
                <p className='productprice'>R$ {product.price}</p>
              </div>
              <button type='button' onClick={() => deleteProduct(product)}>
                Remover do carrinho
              </button>
            </li>
          ))
        )}
      </ContainerCartList>
    </ContainerCart>
  );
}
