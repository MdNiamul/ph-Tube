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
        console.log(cat)
        //create element 
    const categoryDiv=document.createElement('div');
    categoryDiv.innerHTML=`
    <button class="btn btn-sm">${cat.category}</button>
    `;
    //append the element 
    categoryContainer.append(categoryDiv);
    }
    
}

loadcategories();