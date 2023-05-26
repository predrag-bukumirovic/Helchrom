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

  const addMarkerToSearch = (textContent, searchTerm) => {
    var regex = new RegExp(searchTerm, "gi");
    var markedText = textContent.replace(regex, "<mark>$&</mark>");
    return markedText;
  };

  useEffect(
    () => {
      if (!search) return setResults([]);
      let r = searchMap[i18n.language].filter(map => {
        return (
          map.title.toLowerCase().includes(search.toLowerCase()) ||
          map.texts.some(text =>
            text.toLowerCase().includes(search.toLowerCase())
          )
        );
      });

      r = r.map(map => {
        const texts = map.texts
          .filter(text => text.toLowerCase().includes(search.toLowerCase()))
          .map(text => addMarkerToSearch(text, search));
        return {
          images: map.images,
          title: addMarkerToSearch(map.title, search),
          texts: texts.length ? texts : [map.texts[0]]
        };
      });
      setResults(r);
    },
    [search, i18n]
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
            <h1
              className="title"
              dangerouslySetInnerHTML={{ __html: result.title }}
            />

            {result.images?.length && (
              <div className="images">
                {result.images?.map(img => <img src={img} key={img} alt="Img" className="slika" />)}
              </div>
            )}

            {result.texts.map((text, index) =>
              <p
                key={text + index}
                className="text-result"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
