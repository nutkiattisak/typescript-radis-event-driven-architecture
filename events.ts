import Redis from 'ioredis';

const redis = new Redis();

interface Event {
  type: string;
  payload: any;
}

const publishEvent = async (event: Event) => {
  await redis.publish(event.type, JSON.stringify(event.payload));
};

const subscribeToEvent = (eventType: string, callback: (payload: any) => void) => {
  const subscriber = redis.duplicate();
  subscriber.subscribe(eventType);

  subscriber.on('message', (channel, message) => {
    if (channel === eventType) {
      callback(JSON.parse(message));
    }
  });
};

export { publishEvent, subscribeToEvent };