const data = [];

for (i = 0; i < 500; i++) {
  data.push(`item${i}`);
}

const settings = {
  actualPageIdx: 9,
  entriesOnPage: 50,
  allElements: data.length,
};

const paginateArray = (dataEntries, settings) => {
  //validation
  if (paginateArray.length !== 2) {
    console.log("no enought arguments");
  } else if (!Array.isArray(dataEntries)) {
    console.log("this is no Array!");
  } else if (typeof settings !== "object" && typeof settings !== "function") {
    console.log("no object");
  } else if (
    !settings.hasOwnProperty("actualPageIdx") ||
    typeof settings.actualPageIdx !== "number"
  ) {
    console.log("no values in actualPageIdx");
  } else if (
    !settings.hasOwnProperty("entriesOnPage") ||
    typeof settings.entriesOnPage !== "number"
  ) {
    console.log("no values in entriesOnPage");
  } else {
    const {actualPageIdx, entriesOnPage} = settings;
    const start = (actualPageIdx - 1) * entriesOnPage;
    const end = start + entriesOnPage;
    //array is slices here
    const entriesOnSelectedPage = dataEntries.slice(start, end);
    return entriesOnSelectedPage;
  }
  return [];
};
console.log(paginateArray(data, settings));
