
const config = require('./config');
const kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.KafkaClient(),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    
 payloads = [
        { topic:  config.kafka_topic, messages: 'hi', partition: 0 },
    ];

producer.on('ready',  ()=> {
    producer.send(payloads,  (err, data)=> {
        console.log(data);
    });
});
 
producer.on('error',  (err)=> {})