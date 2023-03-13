const body=document.querySelector(`body`)
let movie=[{
name:"",
image:"",
imbd:"",
language:"",
genres:""

}]
for(let i=0;i<movie.length;i++)
console.log(movie[i])
fetch(`https://api.tvmaze.com/show`)
.then(Response=> Response.json())
.then(data=> {
   data.forEach(element=> {
    body.innerHTML+=`<div class="card" style="width: 18rem;">
    <img src="${element.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.language}</p>
      <p class="card-text">${element.externals}</p>
      <p class="card-text">${element.genres}</p>
      <a href="${element.url}" class="btn btn-primary"></a>
    </div>
  </div>`

   })

})
