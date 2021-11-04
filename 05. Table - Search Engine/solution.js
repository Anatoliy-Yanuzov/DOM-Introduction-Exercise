function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchElement = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('tbody tr'));

      let searchText = searchElement.value;

      rowElements.forEach(el => {
         el.className = '';
      });
      let filteredRows = rowElements.filter(el => {
         let value = Array.from(el.children);

         if (value.some(x => x.textContent.includes(searchText))) {
            el.className = 'select';
         }
      });
      searchElement.value = '';
   }
}