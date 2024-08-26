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


async function trackUserHandler(){

  let positionData;
  await getPosition()
  //  onfullfilled
  .then(posData => {
    positionData = posData;
    // console.log(posData);   
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
button.addEventListener('click', trackUserHandler);

