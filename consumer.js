const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');

const closehandle = () => {
    process.once('SIGINT', code => {
      process.exit(0)
      console.log('Exit process')
    })
  
    process.once('SIGTERM', code => {
      process.exit(0)
      console.log('Exit process')
    })
  }
  

Consumer = kafka.Consumer,

    client = new kafka.KafkaClient(config.consumerOptions),
    consumer = new Consumer(
        client,
        [
            { topic: config.kafka_topic, partition: 0 }
        ],
        {
            autoCommit: false
        }
    );

consumer.on('message', function (message) {
    closehandle()
    console.log(message);
});
