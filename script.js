user_input_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const PLACEHOLDER_PHOTO_URL = "https://picsum.photos/200"

    const destinationName = destination_name.value;
    const locationName = location_name.value;
    const photoUrl = photo_url.value || PLACEHOLDER_PHOTO_URL;

    const desc = description.value;

    user_input_form.reset()

    // console.log(destinationName, locationName, photoUrl, desc)

    const card = createCard({destinationName, locationName, photoUrl, desc});

    cards_container.appendChild(card)

})
// when edit or delete is clicked
cards_container.addEventListener("click", (e) => {
    const clickedElt = e.target;

    if(clickedElt.getAttribute("btn_type") === "delete") {
        clickedElt.parentElement.parentElement.remove();
    }
})

function createCard({destinationName, locationName, photoUrl, desc}) {

    // const destination = obj.destinationName
    // const location_name = obj.locationName
    // const photo_url = obj.photoUrl
    // const description = obj.desc;


    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("style", "width: 18rem")
    card.innerHTML = `
    <img src=${photoUrl} class="card-img-top" alt="${destinationName} at ${locationName}">
    <div class="card-body">
        <h5 class="card-title">${destinationName}</h5>
        <p class="card-text">${locationName}</p>
        ${desc &&`<p class="card-text">${desc}</p>`}
        <button type="button" btn_type="edit_btn" class="btn butn-info">Edit</button>
        <button type="button" btn_type="delete_btn" class="btn btn-danger">Delete</button>
    </div> 
    `;
    return card;
}

function handleEdit(editBtn) {

    const cardBody = editBtn.parentElement;

    const oldDestName = cardbody.children[0];
    const oldLocName = cardBody.children[0].textContent;
    const oldPhotoUrl = cardBody.previousSiblingElement.getAttribute("src");
    const oldDesc = cardBody.children[2].tagName === "P" ? cardBody.children[2].textContent : "";


    const newDestName = prompt("Please enter a new destination: ", oldDestName)
    const newLocName = prompt("Please enter a new location: ", oldLocName)
    const newPhotoUrl = prompt("Please enter a url for the photo", oldPhotoUrl)
    const newDescription = prompt("Please enter a new description", oldDesc)

}