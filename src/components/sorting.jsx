const data = [
  { name: "Tomato", cost: 10, weight: 5 },
  { name: "Carrot", cost: 5, weight: 2 },
  { name: "Onion", cost: 17, weight: 8 },
];

const getSortValue = (vegetable) => {
  return vegetable.name;
};

const sortOrder = "asc"; // "asc" or "desc"

data.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  const reverseOrder = sortOrder === "asc" ? 1 : -1;

  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB) * reverseOrder;
  } else {
    return (valueA - valueB) * reverseOrder;
  }
});
