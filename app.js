const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {

  const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
          resolve(success);
        }, error => {
          reject(error);
        },
        opts);
  });

return promise;
}



const setTimer =  (duration) => {
  const promise  = new Promise((resolve, reject)=>{
    setTimeout(()=> {
      // console.log('successfully done!');
      
      resolve('successfully done!');
    }, duration);

  });
  return promise;
}


 function trackUserHandler2(){

  let positionData;

  getPosition()
  //  onfullfilled
  .then(posData => {
    positionData = posData;
    return setTimer (5000);
    // .then(() => {
    //   console.log('Inside getPosition -> setTimer! ');      
    // })
  })
   .then(data => {
    console.log(data, positionData);
    
  })
  .catch(error => {
    // error supress
    console.error(error);    
    // return;
  });

  console.log(positionData);
  
  

  setTimer(1000)
  .then(()=>{
      console.log('Timer completed!');
      
  })

  console.log('Getting Position');  
}

async function trackUserHandler(){

  let positionData;
  let timerData;
  
 try {
      positionData = await getPosition();
      timerData = await setTimer (5000);
 }catch(error) {
    // error supress
    console.error(error);    
    // return;
  }

  // console.log(timerData, positionData); 
  
setTimer(1000)
  .then(()=>{
      console.log('Timer completed!'); 
      
  })

  console.log('Getting Position');  

}

  button.addEventListener('click', trackUserHandler);


//  Promise.all([getPosition(), setTimer()]).then(promiseData => {
//   console.log(promiseData);  
//  })

 Promise.race([getPosition(), setTimer(7000)]).then(promiseData => {
  console.log(promiseData);  
 });