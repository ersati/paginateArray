// Stwórz funkcję paginateArray
// const paginateArray = (dataEntries, settings) => {
// ...
// return entriesOnSelectedPage
// }

// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony
const data = [];

for (i = 0; i < 500; i++) {
  data.push(`item${i}`);
}

const settings = {
  actualPageIdx: 7,
  entriesOnPage: 50,
  allElements: data.length,
};

const paginateArray = (dataEntries, settings) => {
  let {actualPageIdx, entriesOnPage} = settings;
  actualPageIdx--;

  let startItem = entriesOnPage * actualPageIdx;
  let endItem = startItem + entriesOnPage;
  const entriesOnSelectedPage = dataEntries.slice(startItem, endItem);
  return entriesOnSelectedPage;
};
paginateArray(data, settings);
