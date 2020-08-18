import { filterByTerm } from "../index";

describe("Filter function", () => {
  //test stuff
  test("It should filter by a search term (url)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.link2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 1, url: "https://www.url1.dev" }];

    expect(filterByTerm(input, "uRl")).toEqual(output);
  });

  test("It should throw when the term is empty", () => {
    const input = [];

    const output = Error("searchTerm cannot be empty");

    expect(() => {
      filterByTerm(input, "");
    }).toThrowError(output);
  });

  test("It should throw when input is empty", () => {
    const input = [];

    const output = Error("inputArr cannot be empty");

    expect(() => {
      filterByTerm(input, "link");
    }).toThrowError(output);
  });
});
