// total categories li count
const liCount = document.querySelectorAll(".item");
console.log(`Number of categories: ${liCount.length}`);

liCount.forEach((item) =>
  console.log(
    `Category: ${item.firstElementChild.textContent}
     Elements: ${item.lastElementChild.children.length}`
  )
);
