var imzoughene = new Object();
var youssef = {};

var me = {
    name : 'imzoughene',
    age : ((new Date()).getFullYear()-1993).toString(),
    address : {
        city:'casablanca',
        country:'morocco'
    }
}

console.log(me)
console.log(me.name)
console.log(me.address.city)
console.log(me['age'])


var client = new Object();
client.company = 'ElectroProtect';
console.log(client['company'])