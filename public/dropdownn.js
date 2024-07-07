


  //select all dropdowns from document
  const dropdowns = document.querySelectorAll('.dropdown');

  //loop through all drop down elements
  dropdowns.forEach(dropdown => {
    // get inner elements from each dropdown

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {

      select.classList.toggle('select-clicked');

      caret.classList.toggle('caret-rotate');

      menu.classList.toggle('menu-open');
    });


    options.forEach(option => {
      option.addEventListener('click', () => {

        selected.innerText = option.innerText;

      select.classList.remove('select-clicked');

      caret.classList.remove('caret-rotate');

      menu.classList.remove('menu-open');

      options.forEach(option => {
        option.classList.remove('active');
      });
      //add active class to clicked option element
      option.classList.add('active');

      });
    });
  });


  function debugAlert(message) {
    alert(message);
  }
  
  // Example usage:
  debugAlert("Debugging message: Something happened!");

 