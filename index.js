function fetchBooks() {  
  return fetch("https://anapioficeandfire.com/api/books")  
      .then((resp) => resp.json())  
      .then((json) => {  
          renderBooks(json); 
      })  
      .catch((error) => {  
          console.error("Error fetching data:", error); 
      });  
}  

function renderBooks(books) {  
  const bookList = document.getElementById('book-list'); 
  bookList.innerHTML = '';  

  
  books.forEach(book => {  
      const li = document.createElement('li');  
      li.textContent = book.name; 
      bookList.appendChild(li); 
  });  
}
document.addEventListener('DOMContentLoaded', () => {  
  fetchBooks();  
});