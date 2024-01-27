const https = require("https");

function getData() {
  const url = "https://coderbyte.com/api/challenges/json/wizard-list";

  return new Promise(async (resolve, reject) => {
    try {
      const data = await makeHttpRequest(url);
      const parsedData = JSON.parse(data);

      console.log(parsedData);

      // sort alphabetically
      const sortData = sortObjectKeys(parsedData);

      // remove duplicates
      const uniqueData = removeDuplicateObjects(sortData);
      console.log(uniqueData);

      // clean data
      const cleanData = cleanUpData(uniqueData);

      resolve(cleanData);
    } catch (error) {
      reject(error);
    }
  });
}

function sortObjectKeys(obj) {
  const sortData = {};
  Object.keys(obj)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .forEach((key) => {
      sortData[key] = obj[key];
    });

  return sortData;
}

function removeDuplicateObjects(obj) {
  const seenObjects = new Set();
  const uniqueData = [];

  for (const key in obj) {
    const stringified = JSON.stringify(obj[key]);

    if (!seenObjects.has(stringified)) {
      seenObjects.add(stringified);
      uniqueData.push(obj[key]);
    }
  }

  return uniqueData.reduce((acc, curr) => {
    acc[JSON.stringify(curr)] = curr;
    return acc;
  }, {});
}

// const uniqueData = Object.values(obj).filter((value, index, self) => {
//   const firstIndex = self.findIndex(
//     (v) => JSON.stringify(v) === JSON.stringify(value)
//   );
//   return index === firstIndex;
// });

// return uniqueData.reduce((acc, curr) => {
//   acc[JSON.stringify(curr)] = curr;
//   return acc;
// }, {});

function cleanUpData(obj) {
  const cleanData = {};

  for (const key in obj) {
    if (obj[key] != "" && obj[key] !== null && obj[key] !== undefined) {
      cleanData[key] = obj[key];
    }
  }

  return cleanData;
}

function makeHttpRequest(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

async function execute() {
  try {
    return await getData();
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
}

execute();

// function RunLength(str) {
//   let result = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       result += count + str[i];
//       count = 1;
//     }
//   }

//   return result;
// }

// // example
// console.log(RunLength("wwwggopp"));
