import { ModalOverlay, ModalBox, CloseButton, ModalHeader } from './style.js';
import { useEffect, useState } from 'react';
import { CartProduct } from './CartProduct/index.jsx';
import { CartTotal } from './CartTotal/index.jsx';
import { toast } from 'react-toastify';
import Exit from './../../assets/X.svg'
import 'react-toastify/dist/ReactToastify.css';

export const CartModal = ({ isOpen, setIsOpen, cartItems, setCartItems }) => {
  const [cartTotal, setCartTotal] = useState(0);

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

  const handleAddItem = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        toast.success(`Uma unidade de ${item.name} foi adicionada ao carrinho!`, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const closeModal = () => {
    setIsOpen(false);
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

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modal-open');
    }
    else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <>
      {isOpen && (
        <ModalOverlay role='dialog' onClick={handleClickOutside}>
          <ModalBox>
            <ModalHeader>
              <h1>Carrinho de compras</h1>
              <CloseButton src={Exit} onClick={closeModal}></CloseButton>
            </ModalHeader>
            <ul>
              {cartItems.length === 0 ? (
                <p className='emptyMessage'>O carrinho está vazio</p>
              ) : (
                cartItems.map((item) => (
                  <CartProduct key={item.id} item={item} onRemoveItem={handleRemoveItem} onAddItem={handleAddItem} onRemoveAllItems={handleRemoveAllItems} />
                ))
              )}
            </ul>
            <CartTotal cartTotal={cartTotal} onClearCart={handleClearCart} />
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
};
