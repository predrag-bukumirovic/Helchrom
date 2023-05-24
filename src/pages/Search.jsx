import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import searchMap from "../pages/searchMap";
import "../assets/scss/search.scss";
import NoResultsImg from "../assets/images/no-results.png";
import { Helmet } from "react-helmet";

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
    return (
      <div
        style={{ textAlign: "center" }}
        className="container-main searchResult"
      >
        <img src={NoResultsImg} alt="NoResultsImg" />
        <h2 className="no-result">
          Sorry! No results <b>'{search}'</b>
        </h2>
      </div>
    );
  }

  return (
    <div className="container-main">
      <Helmet>
        <title>
          {search} | Helmchron
        </title>
      </Helmet>
      <ul className="searchResult">
        <p style={{ textAlign: "start" }}>
          Result <b>'{search}'</b>
        </p>
        {results.map((result, index) =>
          <li key={result.path + index}>
            <h1 className="title">
              {result.title}
            </h1>

            <div
              className="text-result"
              dangerouslySetInnerHTML={{ __html: result.texts }}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
