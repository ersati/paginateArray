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
  const { actualPageIdx, entriesOnPage } = settings;

  //ver 2
  // typeof settings.pageIdx()
  //   ? () => {
  //       const entriesOnSelectedPage = dataEntries.slice(
  //         settings.startItem(),
  //         settings.endItem()
  //       );
  //       return entriesOnSelectedPage;
  //     }
  //   : () => console.log("brak tablicy");

  if (
    typeof actualPageIdx === "number" &&
    typeof entriesOnPage === "number" &&
    typeof settings.pageIdx() === "number" &&
    typeof settings.startItem() === "number" &&
    typeof settings.endItem() === "number"
  ) {
    const entriesOnSelectedPage = dataEntries.slice(
      settings.startItem(),
      settings.endItem()
    );
    if (Array.isArray(entriesOnSelectedPage)) {
      console.log(`gratulacje, to jest tablica ${entriesOnSelectedPage}`);
      return entriesOnSelectedPage;
    } else {
      return console.log("to nie jest tablica");
    }
  } else {
    return console.log("argumenty w obiekcie settings nie sa liczbami ");
  }
};
paginateArray(data, settings);

const validateFunction = (input, { actualPageIdx, entriesOnPage }) => {
  if (Array.isArray(input)) {
    console.log("gratulacje to jest tablica ");
  } else {
    console.log("to nie jest tablica");
  }
  console.log(typeof settings.pageIdx());

  if (
    typeof actualPageIdx === "number" &&
    typeof entriesOnPage === "number" &&
    typeof settings.pageIdx() === "number" &&
    typeof settings.startItem() === "number" &&
    typeof settings.endItem() === "number"
  ) {
    console.log("gratulacje, parametry mają number");
  } else {
    console.log("paramentr nie ma poprawnych danych  ");
  }
};

validateFunction(paginateArray(data, settings), settings);
