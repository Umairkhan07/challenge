import { useState, useRef } from "react";
import Articles from "./Articles/Articles";
import Heading from "./components/Heading";
import Wrapper from "./components/Wrapper";
import useFetchAllArticles from "./hooks";
import Loading from "./components/Loading";
import Controls from "./components/Controls";
import { handleFilters, initializeFilters } from "./utils";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  const search = useRef("");
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(initializeFilters());

  const { allArticles, isLoading, error } = useFetchAllArticles(query);

  const handleKeywordSearch = () => {
    setFilters(initializeFilters());
    setQuery(search.current?.value);
  };

  if (error) return <ErrorMessage message={error.message} />;

  const filteredArticles = handleFilters(allArticles, filters);

  return (
    <div className="w-full">
      <Wrapper>
        <Heading />
        <Controls
          handleKeywordSearch={handleKeywordSearch}
          search={search}
          filters={filters}
          setFilters={setFilters}
          data={allArticles}
        />
        {isLoading ? <Loading /> : <Articles allArticles={filteredArticles} />}
      </Wrapper>
    </div>
  );
}

export default App;
