function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0][2]);
      numbers = parts[1];
    }

    const nums = numbers.split(delimiter).map(num => parseInt(num));
    const negatives = nums.filter(num => num < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}  

module.exports = add;
