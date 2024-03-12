import { subscribeToEvent } from './events';

const updateInventory = (order: any) => {
  console.log('Updating inventory for order:', order);

  order.items.forEach((item: { productId: string; quantity: number }) => {
    const { productId, quantity } = item;
    console.log(`Deducting ${quantity} from product ${productId}`);

    // ปรับปรุงสต็อกสินค้า...
  });
};

subscribeToEvent('order.placed', updateInventory);
console.log('Inventory service is listening for order.placed events');