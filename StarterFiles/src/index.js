import { from, fromEvent,  Observable, pluck, reduce, scan, take, tap, timer } from 'rxjs'
import { interval } from 'rxjs'
import { of  } from 'rxjs'
import { concatMap, exhaustMap, filter,map, mergeMap, switchMap } from 'rxjs/operators'
import {ajax} from 'rxjs/ajax'

// const observable = new Observable((subscriber)=>{
//   subscriber.next('hello')
//   subscriber.next('world')
//   subscriber.error('Error')
  
//   subscriber.complete()
//   subscriber.next('next')
//   subscriber.next('test')
// })



// observable.subscribe({
//   next: (value)=>{
//     console.log(value)
//   },
//   complete: ()=>{
//     console.log('complete called!')
//   },
//   error: (err)=>{
//     console.error(err)
//   }
// })



// const observable1 = new Observable((subscriber)=>{
//   const id =  setInterval(()=>{
//     subscriber.next('hello')
//     console.log('leak')
//   },1000)

//  // subscriber.complete()

//   return ()=>{  
//     clearInterval(id)
//   }
// })


// console.log('before')

// const subscription = observable1.subscribe({ 
//   next: (value)=>{
//     console.log(value)
//   },
//   complete: ()=>{
//     console.log('complete called!')
//   },
//   error: (err)=>{ 
//     console.error(err)
//   } 


// })


// setTimeout(()=>{
//   subscription.unsubscribe()
// },5000)

// console.log('after')


//const observable = timer(1000,1000)

//const subscription = observable.subscribe(
  // next:(value)=> {
  //   console.log(value)
  // },
  // complete: ()=>{ 
  //   console.log('complete called!')
  // },
  // error: (err)=>{
  //   console.error(err)
  // }
  console.log


//)

//setTimeout(()=>{
//  subscription.unsubscribe()
//},5000)

// const observable1 = fromEvent(
//   document, 'click'
// )
// const subscription1 = observable1.subscribe(
//   console.log

  
// )
// setTimeout(()=>{
 
//   subscription1.unsubscribe()
// },4000)


// const observable2 = of([1,2,3,4,5,6,7,8,9])
// const subscription2 = observable2.subscribe({
//   next(value){
//     console.log(value)
//   },
//   complete(){
//     console.log('complete')
//   }

// })
//   console.log('hello')


  

// const observable3 = from([1,2,3,4,5,6,7,8,9])

// const subscribe3 = observable3.subscribe({
//   next(value){  
//     console.log(value)
//   },  
//   complete(){ 
//     console.log('complete')
//   } 
// })

// const observable4 = of(1,2,3,4,5).pipe(
//   map((value)=> `$${value}`)
// )


// const numbersWithSymbol = observable4.subscribe({
//   next(value){
//     console.log(value)
//   },
//   complete(){
//     console.log('complete') 
//   }

// })

// const observable5 = fromEvent(
//   document, 'keydown'
// ).pipe(
  // map(event => event.code)
  
  // map(event=> {
  //    return event.code === 'Space' ? event.code : null
  // })


  // pluck('code'),
  // filter(code=> code !== 'Space')



// )

// const subscription5 = observable5.subscribe({
//   next: (value)=>{
//     console.log(value)
//   },
//   complete: ()=>{
//     console.log('complete')
//   } 
// })



// const observable6 = of(1,2,3,4,5).pipe(
//   reduce( ( acc,value )=> acc + value,0)
// )


// const subscription6 = observable6.subscribe({
//   next: (value)=>{
//     console.log(value)
//   },
//   complete:()=>{
//     console.log('complete')
//   }

// })

// console.log('hello')

// const observable7 = interval(500).pipe(
//   take(5),
//   tap({
//     next(value){
//       console.log(value)
//     }
//   }),
//   //scan((acc,value)=> acc + value,0),
//   reduce((acc,value)=> acc + value,0)
// )

// const subscription7 = observable7.subscribe({
//   next:(value)=>{
//     console.log(value)
//   },
//   complete(){
//     console.log('complete')
//   }
// })


// const button = document.querySelector('#btn')
// const observable8 = fromEvent(
//   button, 'click'
// ).pipe(
//   // map(
//   // ()=>{
//   //   return ajax.getJSON('jsonplaceholder.typicode.com/todos/1')
//   // })
//   switchMap(
//     ()=>{
//     return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1 ').pipe(
//       take(5),
//       tap({
//         complete(){
//           console.log('complete ub ubbter state')
//         }
//       })
      
//     )
//   })
  
  
// )


// const subscription8 = observable8.subscribe({
//   next(value){
//    console.log(value)
//   },
//   complete(){
//     console.log('complete')
//   }
// })
// const button1 = document.querySelector('#btn')
// const observable9 = fromEvent(
//   button1, 'click'
// ).pipe(
//   // map(
//   // ()=>{
//   //   return ajax.getJSON('jsonplaceholder.typicode.com/todos/1')
//   // })
//   concatMap(
//     ()=>{
//     return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1 ').pipe(
//       take(5),
//       tap({
//         complete(){
//           console.log('complete in inner state')
//         }
//       })
      
//     )
//   })
  
  
// )

// const subscription9 = observable9.subscribe({
//   next(value){
//    console.log(value)
//   },
//   complete(){
//     console.log('complete')
//   }
// })



const button1 = document.querySelector('#btn')
const observable9 = fromEvent(
  button1, 'click'
).pipe(
  // map(
  // ()=>{
  //   return ajax.getJSON('jsonplaceholder.typicode.com/todos/1')
  // })
  exhaustMap(
    ()=>{
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1 ').pipe(
      take(5),
      tap({
        complete(){
          console.log('complete in inner state')
        }
      })
      
    )
  })
  
  
)

const subscription9 = observable9.subscribe({
  next(value){
   console.log(value)
  },
  complete(){
    console.log('complete')
  }
})
