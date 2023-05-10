// const promise = new Promise((resolve,reject) =>{
// if(true){
//   resolve('Stuff Worked');
// } else  {
//   reject('Error, it broke');
// }
// })


// const promise2 = new Promise ((resolve , reject) =>{
//   setTimeout(resolve,100,"HIII")
// })

// const promise3 = new Promise ((resolve , reject) =>{
//   setTimeout(resolve,100,"O DOND DO ID")
// })
// const promise4 = new Promise ((resolve , reject) =>{
//   setTimeout(resolve,100,"is It me you are loking fore")
// })

// Promise.all([promise,promise2,promise3,promise4])
// .then(values =>{
//   console.log(values);
// })
// promise
// .then(result => result + '!')
// .then(retsult2 => retsult2 + "?")
// .catch(() => console.log('error'))
// .then(result3 => {console.log(result3 +'!')})

// async function playerStart(){

//   const firstMove = await movePlayer(100,'left'); // await means puase functin untile i have somthing for you
//   await movePlayer(400,'left'); // then it gose here and so on 
//   await movePlayer(10,'right');
//   await movePlayer(300,'left')
// }// this is called syntaxisc sugar it means its more beautifule then 
// // we had and tis more easyer to write 
// // the good in this is that we can assing varielbes to this functinos and we can start then on by one 


// fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then(console.log)


// async function fetchUser(){
//   const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json();
// console.log(data);
// }



const getData = async function(){
  try{
    const  [ users ,posts , albums] = await Promise.all(urls.map(url => fetch(url).then(resp =>resp.json())
    ))
    console.log('user',users);
    console.log('post',posts);
    console.log("albume",albums);
  }catch(err){
    console.log('Err',err)
  }
 
}

const  urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/photos",
]

const getData2 = async function(){
  const arrayOfPromises = urls.map(url => fetch(url));
  for await( let request of arrayOfPromises){
   
    const data = await request.json();
    console.log(data)
  }

}