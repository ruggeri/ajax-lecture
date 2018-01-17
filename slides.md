## Promises are an alternative to callbacks

```
setTimeout(() => {
  console.log('Do something.');
}, 1000)

function promisedTimeout(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
}

promisedTimeout(1000).then(() => {
  console.log('Do something');
})
```

## Promises avoid callback hell

```
setTimeout(() => {
  console.log('Do something.');
  setTimeout(() => {
    console.log('Do another thing');
    setTimeout(() => {
      console.log('Do a third thing');
    }, 1000);
  }, 1000);
}, 1000)

promisedTimeout(1000).then(() => {
  console.log('Do something');
  // Can return a new promise from a then.
  return promisedTimeout(1000);
}).then(() => {
  console.log('Do another thing.');
  return promisedTimeout(1000);
}).then(() => {
  console.log('Do a third thing');
});
```

## AJAX makes HTTP requests in the background

AJAX means 'asynchronous javascript and XML'. But you can fetch any
resource, not just XML.

```
const ajaxPromise = $.ajax({
  url: '/the/path/to/the/thing',
  method: 'POST',
  data: { cat: { name: 'Markov', skill: 'fear' } },
  dataType: 'json',
});

ajaxPromise.then((result) => {
  console.log(result);
});
```

The pure JavaScript class is XMLHTTPRequest, but `$.ajax` is so much
nicer.

Why? More interactive webpages without page reloads. With AJAX you can
even build *single page applications.*

## JBuilder Builds JSON Responses

```
json.array!(@cats) do |cat|
  json.id cat.id
  json.name cat.name
  json.backward_name cat.name.reverse
end
```

```
json.(@cat, *Cat.column_names)
```
