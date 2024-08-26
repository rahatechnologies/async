const button = document.querySelector('button');
const output = document.querySelector('p');

// function trackUserHandler() {
//   console.log('Clicked!');
// }


const getPosition = (opts) => {

  const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
        }, error => {

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

//  callback hell
function trackUserHandler(){
  
  // navigator.geolocation.getCurrentPosition(

    // success callback
    // posData =>{
    //   // option 2
    //   setTimer(5000)
    //   .then(data=>{
    //     console.log(data, posData);
        
    //   });
    //   console.log();
      
    // },
      // Option 1
    //   //  callback 2
    //   setTimeout(()=>{
        
    //     let posStr = `My current lattitude = ${posData.coords.latitude}, longitude = ${posData.coords.longitude} `;

    //   //  callback 3
    //         setTimeout(()=>{
    //           console.log(posStr);
    //         },
    //         3000)
    //   }, 5000)
    // },
    // error callback
    // error =>{
    //   console.log(error);      
    // }
  );


  setTimeout(()=>{
  console.log('timer complete!');      
  }, 0);

  console.log('Getting Position');  
  // console.log('Getting Position 2');
  // console.log('Getting Position 3');
  // console.log('Getting Position 4');
  // console.log('Getting Position 5');
  // console.log('Getting Position 6');
  // console.log('Getting Position 7');
  // console.log('Getting Position 8');
  // console.log('Getting Position 9');
  // console.log('Getting Position 10');
  // console.log('Getting Position 11'); 

}

console.log('GPS tracking through Device Hardware access...');


button.addEventListener('click', trackUserHandler);

// let result  = 0;

// // long running task
// for(let i=0; i<100000000; i++){
//   result +=i;
// }

// console.log(result);
