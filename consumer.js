const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');

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
    console.log(message);
});
