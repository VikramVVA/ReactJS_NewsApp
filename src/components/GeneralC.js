/* eslint-disable array-callback-return */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default function GeneralC(props) {
  const [data, setData] = useState([]);
  const GeneralNews = async () => {
    let { data } = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=fa4fbad0ae5645a08bd2503bcd0b33c4"
    );
    console.log("hhhhhhhhhhhhhhhhhhhh", data.articles);
    //   // let  data  = await axios.get(
    //   //   "http://127.0.0.1:8000/news-api"
    //   // );
    setData(data.articles);
    localStorage.setItem("general", JSON.stringify(data.articles));
    // const items = JSON.parse(localStorage.getItem('sports'));
    //     setData(items);
  };
  useEffect(() => {
    GeneralNews();
  }, []);
  const handleset = (e, val, i) => {
    props.setDetails(val);
    localStorage.setItem("details", JSON.stringify(val));
  };

  // const [data, setData] = useState([]);
  // const InternationalNews = async () => {
  //   let {data1}  = await axios.get(
  //     "https://newsapi.org/v2/top-headlines?country=in&apiKey=fa4fbad0ae5645a08bd2503bcd0b33c4"
  //   );
  //   console.log("hhhhhhhhhhhhhhhhhhhh",data1)

  //   // let  data  = await axios.get(
  //   //   "http://127.0.0.1:8000/news-api"
  //   // );
  //   console.log(data1.articles)
  //   setData(data1.articles);

  //   localStorage.setItem("interNationalNews", JSON.stringify(data1.articles));
  //   // const items=JSON.parse(localStorage.getItem('interNationalNews'))
  //   // setData(items);
  // };
  // useEffect(() => {
  //   InternationalNews();
  // }, []);
  // const handleset = (e, val, i) => {
  //   props.setDetails(val);
  //   localStorage.setItem("details", JSON.stringify(val));
  // };
  return (
    <>
      <div className="container mt-2  px-6 mx-auto border-8">
        <section className="mb-32 text-gray-1000">
          <h2 className="text-3xl font-bold mb-12 text-center">General News</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {data
              .filter((val) => {
                if (props.search === undefined) {
                  return val;
                }
                if (
                  val.title
                    .toLowerCase()
                    .includes(props.search && props.search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, i) => {
                return (
                  <div
                    key={i}
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
                    style={{ backgroundPosition: "50%" }}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={val.urlToImage && val.urlToImage}
                      className="w-full"
                      alt=""
                    />
                    <Link
                      onClick={(e) => handleset(e, val, i)}
                      to={`/article/${i}`}
                    >
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="flex justify-start items-end h-full">
                          <div className="text-white m-6">
                            <p className="mb-0">{val.title}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
}
