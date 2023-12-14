user_input_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const PLACEHOLDER_PHOTO_URL = "https://picsum.photos/200"

    const destinationName = destination_name.value;
    const locationName = location_name.value;
    const photoUrl = photo_url.value || PLACEHOLDER_PHOTO_URL;

    const desc = destination_name.value;

    console.log(destinationName, locationName, photoUrl, desc)

})