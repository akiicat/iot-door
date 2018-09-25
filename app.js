// Imports the Google Cloud client library
const PubSub = require(`@google-cloud/pubsub`);

// Creates a client
const pubsub = new PubSub();

const subscriptionName = 'projects/sunlit-inquiry-164609/subscriptions/door-pi';

// References an existing subscription
const subscription = pubsub.subscription(subscriptionName);

// Listen for new messages until timeout is hit
subscription.on(`message`, function(message) {
  console.log(`Received message ${message.id}: ${message.data}`);

  if (!IsJsonString(message.data)) {
    message.ack();
    return;
  }

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

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

console.log('connected');
