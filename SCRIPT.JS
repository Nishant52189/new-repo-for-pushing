// // function savedata(data){
// //     return new Promise ((resolve,reject)=>{
// //    let internetSpeed=Math.floor(Math.random()*10)+1;
// //    if(internetSpeed>4){
// //     resolve("succes data is saved")
// //    }
// //    else{
// //     reject("failure weak connection")
// //    }
// // } );
// // }

// // savedata("apna college")
// // .then((A)=>{
// //     console.log(A);
// // })
// // .catch((B)=>{
// //     console.log(B);
// // });

// h1=document.querySelector("h1")

// function changecolor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          h1.style.color=color;
//          resolve("color is changed");
//         },delay)
        
//     })
// }

// changecolor("red",1000)
// .then((a)=>{
//     console.log(a);
//     return changecolor("orange",1000);
// })
// .then((a)=>{
//     console.log(a);
//     return changecolor("green",1000);
// })
// .catch((b)=>{
//     console.log(b);
// });

// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     res.json()
//     .then((data)=>{
//         console.log(data.fact,data.length);
//     })
// }) 
let p= document.querySelector("#fact");
let btn=document.querySelector("button");
let url="https://catfact.ninja/fact2";

btn.addEventListener("click", async()=>{
     let ans = await getfacts();
    p.textContent=ans;
})
async function getfacts(){ 
    try{
        let res= await axios.get(url);
        let result =res.data.fact;
        return result;
    }
    catch(error){
        console.log("error-----",e);
        return "fact not found";
    }
  
}




