//types
type InputArr = [
  {
    id: number;
    url: string;
  }
];

export const filterByTerm: Function = (
  inputArr: InputArr,
  searchTerm: string
) => {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!inputArr.length) throw Error("inputArr cannot be empty");
  const regex = new RegExp(searchTerm, "i");

  return inputArr.filter((arrayElement) => {
    return arrayElement.url.match(regex);
  });
};
