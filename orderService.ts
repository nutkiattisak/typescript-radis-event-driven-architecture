import { publishEvent } from './events';

interface Order {
  id: string;
  items: { productId: string; quantity: number }[];
}

const placeOrder = async (order: Order) => {
  console.log('Processing order...', order);

  // ประมวลผลการสั่งซื้อ...
  const isOrderSuccessful = true; // สมมุติว่าการสั่งซื้อสำเร็จ

  if (isOrderSuccessful) {
    // Publish Event เมื่อมีการสั่งซื้อ
    await publishEvent({ type: 'order.placed', payload: order });
    console.log('Order placed event published');
  } else {
    console.log('Failed to place order');
  }
};

// ทดสอบการสั่งซื้อ
const order: Order = {
  id: '1234',
  items: [
    { productId: 'product1', quantity: 2 },
    { productId: 'product2', quantity: 1 },
  ],
};

placeOrder(order);