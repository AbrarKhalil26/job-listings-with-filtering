import "./App.css";
import { useEffect, useState } from "react";
import JobContent from "./components/JobContent";
import SearchContent from "./components/SearchContent";
import data from "./db/data.json";

function App() {
  const [listSearch, setListSearch] = useState([]);
  const [filterData, setFilterData] = useState(data);

  console.log(filterData);

  useEffect(() => {
    const filter = () => {
      const filterData = data.filter((item) => {
        return listSearch.every((val) => {
          return (
            item.role === val ||
            item.level === val ||
            item.languages.includes(val) ||
            item.tools.includes(val)
          );
        });
      });
      setFilterData(filterData);
    };
    filter();
  }, [listSearch]);

  return (
    <div className="@container">
      <div className="min-h-screen bg-background grid">
        <div className="bg-primary h-28">
          <picture>
            <source media="(min-width: 700px)" srcSet="/images/bg-header-desktop.svg" />
            <source media="(max-width: 699px)" srcSet="/images/bg-header-mobile.svg" />
            <img src="/images/bg-header-mobile.svg" alt="Background"  className="h-full w-full"/>
          </picture>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {listSearch.length !== 0 && (
            <SearchContent
              listSearch={listSearch}
              setListSearch={setListSearch}
            />
          )}
          <JobContent
            filterData={filterData}
            listSearch={listSearch}
            setListSearch={setListSearch}
          />
        </div>
        <div className="font-tajawal mx-auto">Via: <a href="https://abrarkhalil26.github.io/My-Portfolio/" className="text-primary">Abrar</a></div>
      </div>
    </div>
  );
}

export default App;
