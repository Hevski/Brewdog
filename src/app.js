import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      beers: [],
      selectedBeerIndex: '',
      selectedBeer: null,
      favoriteBeers: []
    },
    mounted: function(){
      this.getBeers();
    },
    methods: {
      getBeers: function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(data => this.beers = data)
      },
      beerSelect: function(){
        this.selectedBeer = this.beers[this.selectedBeerIndex]
      },
      saveFavoriteBeer: function(){
        this.favoriteBeers.push(this.selectedBeer)
      },
      removeBeer: function(index){
        this.favoriteBeers.splice(index, 1)
      },
      displayIngredients: function(){
        this.beers.ingredients.map(ingredient => ingredient.name)
      }
    }
  })
});
