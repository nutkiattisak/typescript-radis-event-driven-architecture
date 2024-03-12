import { subscribeToEvent } from './events';

const sendOrderConfirmation = (order: any) => {
  console.log('Sending order confirmation email for order:', order);

  // ส่งอีเมลยืนยันการสั่งซื้อ...
  console.log('Order confirmation email sent');
};

subscribeToEvent('order.placed', sendOrderConfirmation);
console.log('Email service is listening for order.placed events');