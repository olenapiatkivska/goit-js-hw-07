const categoriesList = document.querySelectorAll('.item');
console.log(`Nunber of categories: ${categoriesList.length}`);

categoriesList.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const categoryQuantity = item.querySelectorAll('ul li').length;
  console.log(`Elements: ${categoryQuantity}`);
});
