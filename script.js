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
        <button type="button" class="btn butn-info">Edit</button>
        <button type="button" class="btn btn-danger">Delete</button>
    </div> 
    `;
    return card;
}