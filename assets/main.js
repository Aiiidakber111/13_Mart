// const body=document.querySelector('body')
// let movie=[{
// name:"",
// image:"",
// imbd:"",
// language:"",
// genres:""

// }]
// for(let i=0;i<movie.length;i++)
// console.log(movie[i])
// fetch(`https://api.tvmaze.com/show`)
// .then(Response=> Response.json())
// .then(data=> {
//    data.forEach(element=> {
//     body.innerHTML+=`<div class="col-3 py-4"></div>
//     <div class="card" style="width: 18rem;">
//     <img src="${element.image.medium}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h4 class="card-title"><em>${element.name}</em></h4>
//       <p class="card-text"><strong>${element.language}</strong></p>
//       <p class="card-text"><strong>${element.externals.imbd}</strong></p>
//       <p class="card-text"><strong>${element.genres}</strong></p>
//       <a href="<strong>${element.url}</strong>" class="btn btn-primary">Click</a>
//     </div>
//   </div>`

//    })

// })

let row=document.querySelector('.row')
$.ajax({
  method:"GET",
  url:"https:api.tvmaze.com/show"
})
.done((data)=>{
  console.log(data)
  data.forEach( element=> {
  row.innerHTML+=`<div class="col-3 py-4">
   <div class="card" style="width: 18rem;">
      <img src="${element.image.medium}" class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title"><em>${element.name}</em></h4>
      <p class="card-text"><strong>${element.language}</strong></p>
        <p class="card-text"><strong>${element.rating.average}</strong></p>
        <p class="card-text"><strong>${element.genres}</strong></p>
       <a href="details.html?id=${element.id}" class="btn btn-primary">Click Here<a>
      </div>
    </div>
  </div>`
  



  })
})