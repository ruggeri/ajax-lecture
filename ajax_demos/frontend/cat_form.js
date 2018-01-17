// 1. Install submit handler.
// 2. In handler, use $el.serializeJSON().
// 3. Use ':input' pseudo-selector to disable properties of the form.
// 4. Submit and create the cat.
// 5. Write a method to clear the form.
// 6. Write a method to render the cat and add to a list of recent cats.
//    CSS id should be passed as data attribute.

class CatForm {
  constructor(el) {
    this.$el = $(el);
    this.$catsList = $(this.$el.data('cats-list-id'));

    this.$el.on('submit', (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();

    const catParams = this.$el.serializeJSON();
    this.$el.find(':input').prop('disabled', true);
    const cat = await this.createCat(catParams);
    this.$el.find(':input').prop('disabled', false);
    this.clearForm();

    this.$catsList.append(`
      <li>${cat.name} | ${cat.personal_legend}</li>
    `)
  }

  clearForm() {
    this.$el.find(`[name='cat[name]']`).val('');
    this.$el.find(`[name='cat[personal_legend]']`).val('');
  }

  async createCat(catParams) {
    return await $.ajax({
      url: '/cats',
      method: 'POST',
      data: catParams,
    });
  }
}

module.exports = CatForm;
