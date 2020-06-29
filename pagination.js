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
  pageIdx: function () {
    return this.actualPageIdx - 1;
  },
  startItem: function () {
    return this.entriesOnPage * this.pageIdx();
  },
  endItem: function () {
    return this.startItem() + this.entriesOnPage;
  },
};

const paginateArray = (dataEntries, settings) => {
  const { startItem, endItem, actualPageIdx, entriesOnPage } = settings;
  console.log(typeof actualPageIdx === "number");

  if (typeof actualPageIdx === "number" && typeof entriesOnPage === "number") {
    const entriesOnSelectedPage = dataEntries.slice(
      settings.startItem(),
      settings.endItem()
    );
    return entriesOnSelectedPage;
  } else {
    return console.log("argumenty w obiekcie settings nie sa liczbami ");
  }
};
paginateArray(data, settings);

const validateFunction = (input) => {
  if (Array.isArray(input)) {
    console.log("mamy tablice");
  } else {
    console.log("nie dziala");
  }
};

validateFunction(paginateArray(data, settings));
