1. Go through different promise approaches.
    * `then(onFulfilled, onRejected)`, `catch(onRejected)`.
2. Demo the current state of the application.
    * Show cats index page.
    * Show models: Cats, Likes.
    * Show controllers.
    * Show respond_to. Demonstrate for JSON index action.
3. Setup webpack config/frontend directory.
4. Describe high level idea of AJAX:
    1. Want interactivity on your website without doing a full page
       reload.
    2. XMLHTTPRequest
    3. Examples: interactive search. Toggling buttons. Form that
       creates an object and adds it to a feed.
5. First add CatLikeToggle.
    1. Data attributes for id, is-liked.
    2. Add click handler.
    3. Set prop to disabled while posting/deleting.
    4. Simple render method.
    5. Do appropriate AJAX method.
    6. Look for class on button when document is ready. Instantiate
       CatLikeToggle.
6. Search: First use jbuilder for showing list of cats.
    * Show how to use `column_names` to copy over fields.
    * Show how to make a custom field like `isLiked`.
    * Use `dataType`. Talk about Accept header.
7. Write searcher.
    1. Needs both an internal text input and a ul for results.
    2. Use `input` event.
    3. Make request with a data payload of the query.
    4. After, create li, append button for each cat.
    5. Instantiate CatLikeToggle.
8. Write CatForm.
    * Pass where to insert the created cat.
    * Write Ajax method to create cat.
    * Write submit handler. PreventDefault.
    * serializeJSON the form. `gem 'serialize_json-rails'`, `//= require serialize_json`
    * Disable all input fields (`:input` selector). Then reenable.
    * Clear form when done.
