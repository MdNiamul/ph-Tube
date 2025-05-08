console.log("coneted")

function loadcategories(){

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then((data)=>displayCategories(data.categories))
}

function displayCategories(categories){
    //get container 
    const categoryContainer = document.getElementById("category-container");
    //loop operation
    for(let cat of categories){
        // console.log(cat)
        //create element 
    const categoryDiv=document.createElement('div');
    categoryDiv.innerHTML=`
    <button class="btn btn-sm hover:bg-red-400">${cat.category}</button>
    `;
    //append the element 
    categoryContainer.append(categoryDiv);
    }
    
}

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res)=>res.json())
    .then(data=> displayVideos(data.videos))
}

const displayVideos =(videos)=>{
///get container 
const videoContainer = document.getElementById("video-container");
//loop Operation 
videos.forEach(video => {
    console.log(video);
    
    //create  element 
    const videoCard = document.createElement("div");
    videoCard.innerHTML=`
    <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src=${video.thumbnail} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;
//appnedchild
    videoContainer.append(videoCard);
});

};

loadcategories();
loadVideos();