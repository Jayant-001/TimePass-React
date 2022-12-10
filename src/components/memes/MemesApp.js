// https://rapidapi.com/60vibhavsurve/api/programming-memes-reddit/

import React, { useEffect, useState } from "react";
import axios from "axios";

const MemesApp = () => {
  const [memes, setMemes] = useState([]);
  const [image, setImage] = useState("https://i.redd.it/xgfs4jad9r391.jpg");

  const getMeme = async () => {
    const options = {
      method: "GET",
      url: "https://programming-memes-reddit.p.rapidapi.com",
      headers: {
        "X-RapidAPI-Key": "dc4434e79emsh4cec910bce2b80ap1781c3jsndb6415ab0219",
        "X-RapidAPI-Host": "programming-memes-reddit.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setMemes(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const nextMeme = () => {
    const len = memes.length;

    const x = Math.floor(Math.random() * len + 1);

    setImage(memes[x].link);
  };

  useEffect(() => {
    getMeme();
    // showMeme()
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="card mb-3 mh-50">
          <img src={image} height={750} width="auto" alt="meme image" />
          <div className="card-body">
            <p className="card-text">
              <small className="text-muted">Last updated 1 second ago</small>
            </p>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => nextMeme()}
            >
              Next Meme
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemesApp;
