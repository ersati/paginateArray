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

  Array.isArray(array) ? (arr = true) : (arr = false);
  object instanceof Object ? (obj = true) : (obj = false);

  pageIdx = settings.hasOwnProperty("actualPageIdx");
  entriesOnPage = settings.hasOwnProperty("entriesOnPage");
  pageIdxValue = typeof settings.entriesOnPage === "number";
  entriesOnPageValue = typeof settings.actualPageIdx === "number";

  return (
    obj && arr && pageIdx && entriesOnPage && pageIdxValue && entriesOnPageValue
  );
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
