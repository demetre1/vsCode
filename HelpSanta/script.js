import fs from 'fs'

function question1(){
fs.readFile('./santa.txt',(err,data)=>{
  console.time('santa-Time')
  const direcation = data.toString();
  const direcationArray = direcation.split('');
  const answer = direcationArray.reduce((acc,curnetValue)=>{
      if(curnetValue === '('){
        return acc+=1;
      } else if(curnetValue === ')'){
        return acc-=1;
      }
  }, 0)
  console.timeEnd('santa-Time')
  console.log('Floor:',answer)
})
}





function question2(){
  fs.readFile('./santa.txt',(err,data)=>{
    
    const direcation = data.toString();
    const direcationArray = direcation.split('');
    let accumulator = 0;
    let counter = 0;
    const answer = direcationArray.some((currnetValue)=>{
      
      if(currnetValue === '('){
         accumulator+=1;
      } else if(currnetValue === ')'){
         accumulator-=1;
      }
      counter ++
      return accumulator < 0;
      
    })
    console.log('basment entered at :', counter )
  })
}
question2();