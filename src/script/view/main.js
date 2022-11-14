import "../component/cock-list.js";
import DataSource from "../data/data.js";
import "../component/search-bar.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const CockListElement = document.querySelector("cock-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (drinks) => {
    CockListElement.cock = drinks;
  };

  const fallbackResult = (message) => {
    CockListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
