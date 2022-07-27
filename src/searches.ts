const searches = [
  {
    name: "Search 3 (no properties)",
    results: [
      { match: "example", properties: [] },
      { match: "other example", properties: [] },
      { match: "the last example", properties: [] },
      { match: "the first example", properties: [] },
      { match: "no example", properties: [] },
    ],
  },
  {
    name: "Search 2",
    results: [
      {
        match: "example",
        properties: [
          { name: "propertyA", value: 0 },
          { name: "propertyB", value: 2 },
        ],
      },
    ],
  },
  {
    name: "Search 1",
    results: [
      {
        match: "example",
        properties: [
          { name: "propertyA", value: 0 },
          { name: "propertyB", value: 2 },
        ],
      },
    ],
  },
];

export { searches };
