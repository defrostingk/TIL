const example = {
  name: 'Tom',
  home: {
    price: 20,
    address: 'Seoul',
  },
};

function printAddress({ home: { address } }) {
  console.log(address);
}

printAddress(example); // Seoul
