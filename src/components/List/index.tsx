import products from "../../database";
import { useCart } from "../../Providers/CartProvider";

import { Container, ContainerList } from "./style";

export default function List() {
  const { addProduct } = useCart();

  return (
    <Container>
      <h1>Produtos</h1>
      <ContainerList>
        {products.map((product) => (
          <li key={product.id}>
            <div className='cardImage'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='cardInfo'>
              <p className='productTitle'>{product.title}</p>
              <p className='productprice'>R$ {product.price}</p>
            </div>
            <button type='button' onClick={() => addProduct(product)}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ContainerList>
    </Container>
  );
}
