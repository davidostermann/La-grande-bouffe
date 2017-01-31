var images: [
  'https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg',
  'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
  'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
  'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg';
]

var button1 = document.getElementbyId("image1");
var button2 = document.getElementbyId("image2");
var button3 = document.getElementbyId("image3");
var button4 = document.getElementbyId("image4");

function viewImage('image1') {
  document.getElementById("image1").innerHTML= images[1];
}
