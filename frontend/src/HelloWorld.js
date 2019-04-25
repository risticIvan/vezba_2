import React from 'react';

// function HelloWorld(){
//     return (
//         <div>HelloWorld</div>
//     );
// }
var localhost = 'http://localhost:9000';

function changeId() {
  axios.get('http://localhost:9000').then(res => {
    console.log(res);
  }) 
    // window.location = localhost;
}
  
function showId() {
    window.location = localhost + '/showid';
}

export default HelloWorld;