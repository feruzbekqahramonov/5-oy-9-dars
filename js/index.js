const wrapper = document.getElementById('wrapper');

function createCard(phone) {
  return `
    <div class="block card" style="width: 18rem;">
      <div class="card-body">
         <h5 class="card-title">Iphone</h5>
         <p class="card-text">Iphone</p>
         <p class="card-text">300$</p>
         <a href="#" class="btn btn-primary">Btafsil malumotlar</a>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  fetch("https://auth-rg69.onrender.com/api/products/all", {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => {
      if (data.length) {
        data.forEach(phone => {
          let card = createCard(phone);
          wrapper.innerHTML += card;
        });
      }
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });
});
