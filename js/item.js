const wrapper = document.getElementById('wrapper');

function createHTML(data) {
    return `
    <h3>${data.name}</h3>
    <h3>${data.price}</h3>
    <p>${data.description}</p>
    <p>${data.catagory_id}</p>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    let elId = window.location.href.substring(elId + 3).search('id=');
    if(elId && elId.length == 36) {
        fetch(`https://auth-rg69.onrender.com/api/products/${elId}`)
        .then(res => res.json())
        .then(data => {
            let block = createHTML(data);
            wrapper.innerHTML = block;
        })
        .catch(err => {
            console.log(err);
        })
    } else {
        window.location.assign('http://127.0.0.1:5500/index.html')
    }
});