export default class CatImagesClient {
    fetchImages() {
        return fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
    }
}