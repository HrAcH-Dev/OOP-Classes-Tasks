// 4.   Write Car class, which have
//    properties: 
                // static finishPosition: number
                // name: string,
                // color: string(hashcode of color),
                // currentPosition: number(on start it equal to 0),
                // intervalPinter: number(setInterval pointer, that need for stopping interval)
                // speed: number(ex. 10, it means car can go 10px for 1 second), 
//    methods: 
//    reset() -> it will reset currentPosition to 0 
//    start() -> it should update currentPosition value by speed each 300ms(with 
//               setInterval) and log it to console, if currentPosition equal
//               or more then finishPosition, 
//           then call stop method 
//    stop() -> will stop interval and log`[name] car was finished`
//              set some finishPosition value for Car
//   create 3 Cars with different parameters
//   create function that will start car competition

// let intervalID;

// class Car {
//     constructor(name,color,currentPosition,finishPosition,speed) {
//         this.name = name
//         this.color = color
//         this.currentPosition = currentPosition
//         this.finishPosition = finishPosition
//         this.speed = speed
//     }

//     reset() {
//         this.currentPosition = 0
//     }
//     start() {
//         intervalID = setInterval(() => 
//             this.currentPosition += this.speed
//         , 300)
//     }
//     stop() {
//         WindowOrWorkerGlobalScope.clearInterval(intervalID)
//     }
// }

// let car1 = new Car("Opel","#000", 0, 500, 50);
// let car2 = new Car("Nissan","#000", 0 , 500, 40);
// let car3 = new Car("Dodge", "#dedede", 0, 500, 60)

// let result = car1.start

// console.log(result)

