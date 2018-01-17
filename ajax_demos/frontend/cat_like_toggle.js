// 1. Element should have cat-id, is-liked.
// 2. Install clickHandler.
// 3. Click handler should determine whether to DELETE or POST.
// 4. Can use $el.prop('disabled', true) to disable temporarily.

class CatLikeToggle {
  constructor(el) {
    this.$el = $(el);
    this.catId = this.$el.data('cat-id');
    this.isLiked = this.$el.data('is-liked');

    this.$el.on('click', (e) => this.clickHandler(e));

    this.render();
  }

  async clickHandler(e) {
    e.preventDefault()

    const method = this.isLiked ? 'DELETE' : 'POST';

    this.$el.prop('disabled', true);
    await $.ajax({
      url: `/cats/${this.catId}/like`,
      method: method,
    });
    this.$el.prop('disabled', false);

    this.isLiked = !this.isLiked;

    this.render()
  }

  render() {
    if (this.isLiked) {
      this.$el.text('Unlike!');
    } else {
      this.$el.text('Like!');
    }
  }
}

module.exports = CatLikeToggle;
