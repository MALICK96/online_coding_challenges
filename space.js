var enough = (c, o, w) => {
  return c >= o + w ? 0 : o + w - c;
};

console.log(enough(100, 60, 50)); // 10
console.log(enough(10, 5, 5)); // 5
