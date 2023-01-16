const useNumber = function () {
  let number = 5;
  const showNumber = function () {
    console.log(number);
    number++;
  };
  return showNumber;
};

const result = useNumber();
console.log(result);

const show = useNumber();
show();
show();
show();
show();
