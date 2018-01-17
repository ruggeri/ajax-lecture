const CatForm = require('./cat_form');
const CatLikeToggle = require('./cat_like_toggle');
const SearchableCatsList = require('./searchable_cats_list');

$(document).ready(() =>{
  $('button.cat-like-toggle').each((idx, el) => { new CatLikeToggle(el) });
  $('.searchable-cats-list').each((idx, el) => { new SearchableCatsList(el) });
  $('.cat-form').each((idx, el) => { new CatForm(el) });
});
