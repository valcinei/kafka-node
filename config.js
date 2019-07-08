module.exports = {
    kafka_topic: 'test',
    consumerOptions : {
        kafkaHost: '127.0.0.1:29092',
        groupId: 'ExampleTestGroup',
        sessionTimeout: 15000,
        protocol: ['roundrobin'],
        asyncPush: false,
        id: 'consumer1',
        fromOffset: 'latest'
      }
}