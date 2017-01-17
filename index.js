window.addEventListener('hashchange', () => {

  // Output current hash
  console.log('complete hash = ', window.location.hash);

  // strip the first hash and the forward slash from the string
  let urlHash = window.location.hash.substring(2);

  console.log('urlHash = ', urlHash);

});
