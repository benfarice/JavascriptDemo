var i = 1 ;
while(i<5){
    var item = Symbol();
    console.log(item.toString());
    i++;
}
var event = Symbol('event.save')
console.log(event)
console.log(event.toString())

const CLICK = Symbol('click')//unique variable if I understand well !!؟؟؟