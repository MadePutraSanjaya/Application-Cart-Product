"use client"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/libs/redux/store';
import { removeProduct, clearCart } from '@/libs/redux/cartSlice';
import { Button, Col, Row, Typography, List } from 'antd';
import { useEffect, useState } from 'react';
import { ButtonType } from '@/types/button.type';

const { Title, Text } = Typography;

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleRemoveProduct = (id: number) => {
    dispatch(removeProduct(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const subtotal = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="relative px-6 py-10 mx-auto sm:px-16 sm:py-24 max-w-7xl overflow-x-hidden">
      <Title level={2}>Your Cart</Title>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <List
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[<Button key={`remove-${item.id}`} danger onClick={() => handleRemoveProduct(item.id)}>Remove</Button>]}
              >
                <List.Item.Meta
                  title={item.title}
                  description={`Rp. ${item.price}`}
                />
              </List.Item>
            )}
          />
          <div className="mt-6">
            <Text className="text-lg">Subtotal: Rp. {subtotal.toFixed(2)}</Text>
          </div>
          <div className="mt-4 flex gap-2">
            <Button type={ButtonType.Primary}>Proceed to Checkout</Button>
            <Button  danger onClick={handleClearCart}>Clear Cart</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
