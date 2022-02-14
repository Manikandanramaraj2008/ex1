// import React from 'react';
 import React,{useState} from 'react';
import './App.css';
 import Card from './components/Card';

// export default function App(){
  
//   return(
    
//     //  Task 1 ref card.js

//    <div>
//      <Card/>
//    </div>

//     )
//   }


//      //  Task 2 props method ref card.js


// export default function App(){

//   return(
//     <div>
//       <Card 
//       imgUrl="https://images.dinamani.com/uploads/user/imagelibrary/2022/1/16/original/vallalar_jothi.jpg"
//       name ="Mani"
//       title ="Ramalingam"
//             />
//                 <Card 
//       imgUrl="https://images.dinamani.com/uploads/user/imagelibrary/2022/1/16/original/vallalar_jothi.jpg"
//       name ="Vanitha"
//       title ="Ambala koothan"
//             />
//                 <Card 
//       imgUrl="https://images.dinamani.com/uploads/user/imagelibrary/2021/1/28/original/vadalur4.gif"
//       name ="Abinesh"
//       title ="Ponnambalan"
//               />
//                 <Card 
//       imgUrl="https://i.ytimg.com/vi/Av0cEViPYEE/hqdefault.jpg"
//       name ="Gouwtham_Suresh"
//       title ="Thiruchitambalam"
//             />
//                 <Card 
//       imgUrl="https://i.ytimg.com/vi/BE1ZE3EuuK4/hqdefault.jpg"
//       name ="Abinayal"
//       title ="Dhakshanamoorthy"
//             />
//                 <Card 
//       imgUrl="http://2.bp.blogspot.com/--ecrqthOOVk/VM8uGFSQKqI/AAAAAAAACqU/77E062bYuJs/s1600/222.JPG"
//       name ="Raja"
//       title ="Appan_GnanughSambandan"
//                   />    
//              <Card 
//       imgUrl="https://img1.dinamalar.com/KovilImages/GalleryThumb/G_T3_914.jpg"
//       name ="Mrs.Raja"
//       title ="ThiruvudaiNayagi"
//                   /> 
//          <Card 
//       imgUrl="https://vallalardeivanilayam.org/assets/img/Carousel/slide-3.jpg"
//       name ="Pooja"
//       title ="VadivudaiNayagi"
//                   /> 
//    </div>
//   )
// }



 //  Task  3

//  const data = [

//   {
//         imgUrl :"https://images.dinamani.com/uploads/user/imagelibrary/2022/1/16/original/vallalar_jothi.jpg",
//         name :"Mani",
//         title :"Ramalingam"
  
//   },
//   {
//         imgUrl:"https://1.bp.blogspot.com/-a4w5P3f85r4/VlUe0pbN-SI/AAAAAAAAMns/-CRxzUxWv54/s1600/Thiru%2BArutprakasa%2BVallalar%2B-%2BJothi.jpg",
//         name : "Vanitha",
//         title : "Ambala koothan" 
//    },
//   {
//     imgUrl : "https://images.dinamani.com/uploads/user/imagelibrary/2021/1/28/original/vadalur4.gif",
//     name : "Abinesh",
//     title : "Ponnambalan"
  
//   },
//   {
//     imgUrl :"https://i.ytimg.com/vi/Av0cEViPYEE/hqdefault.jpg",
//     name :"Gouwtham_Suresh",
//     title :"Thiruchitambalam"
  
//   },
//   {
//     imgUrl:"https://i.ytimg.com/vi/BE1ZE3EuuK4/hqdefault.jpg",
//     name : "Abinayal",
//     title : "Dhakshanamoorthy"
  
//   }
//   ]
  

//  export default function App(){

//   return(
//     <div>
//       {data.map(({imgUrl,name,title},index)=>{
//       return <Card key={index} imgUrl={imgUrl} name={name} title={title}/>
//       })}

//       {/* another method element...
      
//         {data.map((ele,index)=>{
//           return <card key={index}{...ele}/>
//         })}

//       */}

//     </div>       
//   )
// }


  // Task  4 useState functional component/- Hookw particular event

// export default function App(){

//   let [name,setValue]=useState("Mani");
// return(
//   <div>
//     <input type ="text" onChange ={(e)=>{setValue(e.target.value)
//     }} value ={name} />
//     <Card imgUrl="https://images.dinamani.com/uploads/user/imagelibrary/2022/1/16/original/vallalar_jothi.jpg"
//      name={name} title ="Ramalingam" />
//   </div>
// )
// }



//  Task  5 useState functional component- Hookw pa


  export default function App(){

  let [name,setValue]=useState("Mani");
  let [title,setTitle]=useState("Ramalingam");
  const action =()=>{setTitle("Name")}
return(
  <div>
    <input type ="text" onChange ={(e)=>{setValue(e.target.value)
    }} value ={name} />
    <Card imgUrl="https://images.dinamani.com/uploads/user/imagelibrary/2022/1/16/original/vallalar_jothi.jpg"
     name={name} title ={title} action ={action}/>
  </div>
)
}
