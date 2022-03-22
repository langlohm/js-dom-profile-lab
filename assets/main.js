const hero = document.querySelector(`.hero`);

// bckgrnd img
hero.style.backgroundImage = `url('./assets/city.jpg')`;

const name = document.querySelector(`.hero h1 span`);
name.innerHTML = `Maggie Langloh`;

const greeting = document.querySelector(`.hero h3`);
greeting.innerHTML = `Here's a little bit about me!`;

const profilePic = document.querySelector(`.profile-img`);
profilePic.src = `./assets/mags.jpg`;

// my favorite things array
const favorites = [{
    img: `./assets/voll.jpg`,
    title: `Volleyball`,
    desc: `I play indoor and beach volleyball. It makes me happy and is my favorite sport.`,
  },
  {
    img: `./assets/tjs.jpg`,
    title: `Trader Joes`,
    desc: `My favorite grocery store, and the best place to be on a Sunday afternoon. Highly recomend their takis, dark chocolate peanutbutter cups, and crunchy curls.`,
  },
  {
    img: `./assets/beach.jpg`,
    title: `The Beach`,
    desc: `The place I'd rather bee right now.`,
  }
]

const gallery = document.querySelector(`.info-gallery`);

favorites.map((favorite) => {
  let newEl = document.createElement(`div`);
  newEl.classList.add(`info-item`);
  newEl.innerHTML = `
  <img src="${favorite.img}" alt="${favorite.title}" class="item-img"/>
  <h4>${favorite.title}</h4>
  <p>${favorite.desc}</p>
  `

  gallery.appendChild(newEl);
})
