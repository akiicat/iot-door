// Imports the Google Cloud client library
const PubSub = require(`@google-cloud/pubsub`);

// Creates a client
const pubsub = new PubSub();

const subscriptionName = process.env.PUBSUB_TOPIC;

// References an existing subscription
const subscription = pubsub.subscription(subscriptionName);

// Listen for new messages until timeout is hit
subscription.on(`message`, function(message) {
  console.log(`Received message ${message.id}:`);
  console.log(`\tData: ${message.data}`);
  console.log(`\tAttributes: ${message.attributes}`);

  var data = JSON.parse(message.data);
  console.log(data.door);

  if (data.door === 'on') {
    console.log('door on');
  }
  if (data.door === 'off') {
    console.log('door off');
  }

  message.ack();
});
