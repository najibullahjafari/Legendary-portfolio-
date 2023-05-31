const models = [
  {
    image: "/img/adriana.jpg",
    name: "Adriana Lima",
    job: "Adriana Lima, a Brazilian model, is best known for her\
                long-standing association",
    intro:
      "with Victorias Secret as one of their prominent Angels. She has\
                worked with several luxury brands and is recognized for her\
                beauty and charm.",
  },
  {
    image: "/img/kendall.jpg",
    name: "Kendall Jenner",
    job: "Kendall Jenner, part of the Kardashian-Jenner family",
    intro:
      "as a model and has walked the runway for prestigious fashion\
                houses. She has a massive following on social media and has\
                become an influential figure in the industry.",
  },
  {
    image: "/img/bella.jpg",
    name: "Bella Hadid",
    job: " Bella Hadid, an American model, gained popularity in recent\
                years",
    intro:
      "has established herself as a sought-after face in the fashion\
                world. She has walked for top designers, appeared in campaigns,\
                and collaborated with influential brands.",
  },
  {
    image: "/img/karlie.jpg",
    name: "Karlie Kloss",
    job: "Karlie Kloss is an American model known for her striking\
                features",
    intro:
      "and versatile runway presence. She has walked for major fashion\
                brands and has also ventured into entrepreneurship and\
                philanthropy.",
  },
  {
    image: "/img/naomi.jpg",
    name: "Naomi Campbell",
    job: "Naomi Campbell, a British supermodel, has been a prominent\
                figure",
    intro:
      "Known for her distinctive walk and iconic presence, she has\
                graced countless magazine covers and worked with renowned\
                designers.",
  },
  {
    image: "/img/giscle.jpg",
    name: "Gisele Bündchen",
    job: "Gisele Bündchen, a Brazilian supermodel, has been one of the\
                highest-paid models",
    intro:
      "the highest-paid models in the world for many years. She has\
                worked with numerous renowned brands and graced the covers of\
                top fashion magazines.",
  },
];

const cardcontainer = document.getElementById("card-container");
const btnShow = document.querySelector(".btn-show-more");
function makecard() {
  models.forEach((model) => {
    cardcontainer.innerHTML += `<div class="featured-card">
       <div class="featured-card-img-con">
         <img src="/img/bgimg.jpg" class="featured-card-bg" alt="background image" />
         <img class="featured-card-img" src="${model.image}" alt="speaker image" />
       </div>
       <div class="featured-card-description">
         <h3 class="featured-card-h3">${model.name}</h3>
         <h4 class="featured-card-h4"><em>${model.job}</em></h4>
         <span class="card-line"></span>
         <p class="featured-card-p">${model.intro}</p>
       </div>
     </div>`;
  });
}

makecard();

btnShow.addEventListener("click", function () {
  models.forEach((model) => {
    cardcontainer.innerHTML += `<div class="featured-card">
       <div class="featured-card-img-con">
         <img src="/img/bgimg.jpg" class="featured-card-bg" alt="background image" />
         <img class="featured-card-img" src="${model.image}" alt="speaker image" />
       </div>
       <div class="featured-card-description">
         <h3 class="featured-card-h3">${model.name}</h3>
         <h4 class="featured-card-h4"><em>${model.job}</em></h4>
         <span class="card-line"></span>
         <p class="featured-card-p">${model.intro}</p>
       </div>
     </div>`;
    if (window.innerWidth > 768) {
      cardcontainer.innerHTML = "";
    }
  });
});
