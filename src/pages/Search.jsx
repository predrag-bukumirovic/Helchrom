import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import searchMap from "../pages/searchMap";
import "../assets/scss/search.scss";

export default function Search() {
  const [results, setResults] = useState([]);
  const { i18n } = useTranslation();

  const [searchParams] = useSearchParams();

  const search = searchParams.get("q");

  useEffect(
    () => {
      if (!search) return setResults([]);
      const r = searchMap[i18n.language].filter(map => {
        return (
          map.title.toLowerCase().includes(search.toLowerCase()) ||
          map.texts.find(text =>
            text.toLowerCase().includes(search.toLowerCase())
          )
        );
      });
      setResults(r);
    },
    [search]
  );

  if (results.length === 0) {
    return <h2 className="container-main no-result">No results</h2>;
  }

  return (
    <div className="container-main">
      <ul className="searchResult">
        {results.map((result, index) =>
          <li key={result.path + index}>
            <h1 className="title">
              {result.title}
            </h1>
            <p dangerouslySetInnerHTML={{ __html: result.texts }} />
          </li>
        )}
      </ul>
    </div>
  );
}
