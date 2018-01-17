const CatLikeToggle = require('./cat_like_toggle');

// 1. Find text and ul elements.
// 2. Add handler for input event.
// 3. Write method to search for cats.
// 4. Iterate through returned cats. Render individual cat list items.
// 5. Use the CatLikeToggle.

class SearchableCatsList {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input');
    this.$cats = this.$el.find('.cats');

    this.$input.on('input', () => this.handleInput());
  }

  clearCats() {
    this.$cats.empty();
  }

  query() {
    return this.$input.val();
  }

  async handleInput() {
    const cats = await this.searchCats();
    this.clearCats();
    cats.forEach((cat) => {
      const $li = $(`<li>${cat.name}</li>`);

      const $button = $(`
        <button data-cat-id=${cat.id} data-is-liked=${cat.isLiked}></button>
      `);
      $li.append($button);
      new CatLikeToggle($button[0]);

      this.$cats.append($li);
    });
  }

  async searchCats() {
    return await $.ajax({
      url: '/cats/search',
      method: 'GET',
      data: { query: this.query() }
    });
  }
}

module.exports = SearchableCatsList;
