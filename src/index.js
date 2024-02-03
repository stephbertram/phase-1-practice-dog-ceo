
/* 
CHALLENGE 1
Add JavaScript that:
on page load, fetches the images using the url: const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
parses the response as JSON
adds image elements to the DOM for each 🤔 image in the array
*/

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const fetchImages = () => {
    fetch(imgUrl)
    .then(response => response.json())
    .then(imgData => imgData.message.forEach(url => renderImg(url)))
    .catch(err => console.error(err))
}

fetchImages()

const imageContainer = document.querySelector('#dog-image-container')

const renderImg = (imageURL) => {
    const image = document.createElement('img')
    image.setAttribute('src', imageURL)
    // OR image.src = imageURL
    image.setAttribute('alt', 'dog image')
    image.setAttribute('class', 'dog-image')
    imageContainer.appendChild(image)
}

/* 
CHALLENGE 2
After the first challenge is completed, add JavaScript that:
on page load, fetches all the dog breeds using the url: const breedUrl = "https://dog.ceo/api/breeds/list/all";
adds the breeds to the page in the <ul> provided in index.html
*/

const breedURL = "https://dog.ceo/api/breeds/list/all"

const allBreeds = () => {
    fetch(breedURL)
    .then(response => response.json())
    .then(breedObj => {
        // Extract breed names out of the keys of the object
        const allBreedsArray = Object.keys(breedObj.message)
        // For each breed in the array invoke the function oneBreed
        allBreedsArray.forEach(breed => oneBreed(breed))
    })
    .catch(err => console.error(err))
}

allBreeds()

const breedsUl = document.querySelector('#dog-breeds')

const oneBreed = (breedName) => {
    console.log(breedName)
    const newLi = document.createElement('li')
    newLi.innerText = breedName
    breedsUl.appendChild(newLi)
}


/* 
CHALLENGE 3
Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, 
the font color of that <li> changes. This can be a color of your choosing.
*/






/* 
CHALLENGE 4
Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter 
breeds that start with a particular letter using a dropdownLinks to an external site..
For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. 
For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the 
entire alphabet.
*/