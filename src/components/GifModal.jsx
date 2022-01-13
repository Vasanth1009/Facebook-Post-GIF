import { useEffect, useState } from 'react';
import axios from 'axios';

import { GoSearch, HiOutlineArrowSmLeft, CgClose } from '../constants/icons';

const GifModal = ({ setGifModal, setPost }) => {
  const [gifs, setGifs] = useState([]);
  const [searchGif, setSearchGif] = useState('');

  useEffect(() => {
    getTrendingGifs();
  }, []);

  const getTrendingGifs = async () => {
    await axios
      .get(process.env.REACT_APP_GIPHY_TRENDING_URL, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          limit: 25,
        },
      })
      .then((result) => {
        setGifs(result.data.data);
      });
  };
  const getSearchedGifs = async (event) => {
    var search = event.target.value;
    setSearchGif(search);
    if (search !== '') {
      await axios
        .get(process.env.REACT_APP_GIPHY_SEARCH_URL, {
          params: {
            api_key: process.env.REACT_APP_GIPHY_API_KEY,
            q: search,
            limit: 25,
          },
        })
        .then((result) => {
          setGifs(result.data.data);
        });
    } else {
      getTrendingGifs();
    }
  };

  return (
    <div className="modal">
      <div className="modal-header">
        <HiOutlineArrowSmLeft
          color="#6c757d"
          className="back-icon"
          onClick={() => {
            setGifModal(false);
          }}
        />
        <h3 className="create-gif-header">Choose a GIF</h3>
      </div>

      <div className="modal-content">
        <div className="search-gif">
          <GoSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchGif}
            onChange={getSearchedGifs}
          />
          {searchGif !== '' ? (
            <CgClose
              color="#6c757d"
              className="close-icon"
              onClick={() => {
                setSearchGif('');
                getTrendingGifs();
              }}
            />
          ) : (
            ''
          )}
        </div>
        <div className="gifs">
          {gifs.map((gif) => {
            return (
              <div
                key={gif.id}
                className="gif"
                onClick={() => {
                  setPost((post) => ({
                    ...post,
                    gifURL: gif.images.fixed_height.url,
                  }));
                  setGifModal(false);
                }}
              >
                <img src={gif.images.fixed_height.url} alt={gif.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GifModal;
