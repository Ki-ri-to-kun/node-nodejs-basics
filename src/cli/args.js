const parseArgs = () => {
   let strResult = '';
  
   process.argv.forEach((val, index) => {
     if(index < 2) return;
     
     if(index % 2 === 0){
      strResult += `${val.substring(2)} is `;
     } else {
      strResult += val;
      console.log(strResult);
      strResult = '';
     }
   });
   
};

parseArgs();