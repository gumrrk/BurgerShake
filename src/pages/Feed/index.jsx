import { useState, useEffect } from 'react';
import { ProductList } from '../../components/ProductList';
import { Product } from '../../components/ProductList/Product';
import { api } from '../../services/api.js';
import { Header } from '../../components/Header';
import { MainStyle } from './style';
import { CartModal } from '../../components/CartModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Feed = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    toast.success(`${product.name} adicionado ao carrinho!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast.error(`Todos os itens foram removidos do carrinho!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleRemoveItem = (itemId, quantity = 1) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity - quantity;
          if (newQuantity < 1) {
            return null;
          }
          toast.error(`Uma unidade de ${item.name} foi removida do carrinho!`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter((item) => item !== null)
    );
  };

  const handleRemoveAllItems = (itemId) => {
    setCartItems((prevItems) => {
      const removedItem = prevItems.find((item) => item.id === itemId);
      const updatedItems = prevItems.filter((item) => item.id !== itemId);

      toast.error(`Todas as unidades de ${removedItem.name} foram removidas do carrinho!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return updatedItems;
    });
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/products');
        const productsData = response.data;
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    }

    fetchProducts();
  }, []);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Header
        handleSearchChange={handleSearchChange}
        cartItemCount={cartItemCount}
        openModal={() => setModalIsOpen(true)}
      />
      <CartModal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
        handleRemoveItem={handleRemoveItem}
        handleRemoveAllItems={handleRemoveAllItems}
        handleClearCart={handleClearCart}
      />
      <MainStyle>
        <ProductList>
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
        </ProductList>
      </MainStyle>
      <ToastContainer />
    </>
  );
};
