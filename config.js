module.exports = {
    kafka_topic: 'test2',
    consumerOptions : {
        kafkaHost: '127.0.0.1:9092',
        groupId: 'ExampleTestGroup',
        sessionTimeout: 15000,
        protocol: ['roundrobin'],
        asyncPush: false,
        id: 'consumer1',
        fromOffset: 'latest'
      }
}