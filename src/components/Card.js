import React from 'react';

//  Task 1

// function Card(){
//   return(
//       <div className="Card">
// <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
//     width:"100%"}} />
// <div className="container">
//   <h4><b>Thiruchithambalam</b></h4>
//   <p>Chidhambaram</p>
// </div>
// </div>

//   )
// }
// export default Card


//   Task 2  Props method

// function Card(props){

//   const{imgUrl,name,title} =props;
//   return(
//       <div className="Card">
// <img src={imgUrl} alt="Avatar" style={{
//     width:"100%"}} />
// <div className="container">
//   <h4><b>{name}</b></h4>
//   <p>{title}</p>
// </div>
// </div>

//   )
// }
// export default Card;


//   //   Task 5  Props method title change set

function Card(props){

  //  for set name

  const{imgUrl,name,title,setTitle} =props;

  //  for set title - action method
  
  //  const{imgUrl,name,title,action} =props;
  return(
      <div className="Card">
<img src={imgUrl} alt="Avatar" style={{
    width:"100%"}} />
<div className="container">
  <h4><b>{name}</b></h4>
  <p>{title}</p>
  <button onClick={(e)=>{setTitle("Name")}}>Change</button> 
 
  {/* action method */}

    {/* <button onClick ={action}>Change</button> */}
</div>
</div>

  )
}
export default Card; 