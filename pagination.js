const data = [];

for (i = 0; i < 500; i++) {
  data.push(`item${i}`);
}

const settings = {
  actualPageIdx: 7,
  entriesOnPage: 50,
  allElements: data.length,
};

function validation(array, object) {
  let obj, arr, pageIdx, entriesOnPage, pageIdxValue, entriesOnPageValue;
  let isTrue = true;
  Array.isArray(array) ? (arr = true) : (arr = false);
  object instanceof Object ? (obj = true) : (obj = false);
  settings.hasOwnProperty("actualPageIdx")
    ? (pageIdx = true)
    : (pageIdx = false);

  settings.hasOwnProperty("entriesOnPage")
    ? (entriesOnPage = true)
    : (entriesOnPage = false);

  typeof settings.entriesOnPage === "number"
    ? (pageIdxValue = true)
    : (pageIdxValue = false);
  typeof settings.actualPageIdx === "number"
    ? (entriesOnPageValue = true)
    : (entriesOnPageValue = false);
  obj && arr && pageIdx && entriesOnPage && pageIdxValue && entriesOnPageValue
    ? (isTrue = true)
    : (isTrue = false);

  return isTrue;
}

const paginateArray = (dataEntries, settings) => {
  //validation
  if (paginateArray.length === 2 && validation(dataEntries, settings)) {
    const { actualPageIdx, entriesOnPage } = settings;
    const start = (actualPageIdx - 1) * entriesOnPage;
    const end = start + entriesOnPage;
    //array is slices here
    const entriesOnSelectedPage = dataEntries.slice(start, end);
    return entriesOnSelectedPage;
  } else {
    console.log("wrong arguments or value");
  }
  return [];
};

console.log(paginateArray(data, settings));
