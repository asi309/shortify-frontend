import React, { useState } from 'react';

import api from '../../services/api';

import './ShortenUrl.css';

export default function Url() {
  const [url, setUrl] = useState('');
  const [shortendUrl, setShortendUrl] = useState('');

  const shortenUrlHandler = async (e) => {
    if (url) {
      const response = await api.post('/shorten', { longUrl: url });
      const { shortUrl } = response.data;
      setShortendUrl(shortUrl);
    }
  };

  return (
    <>
      <div className="long-url">
        <input
          type="text"
          id="long-url__input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={shortenUrlHandler}>Shorten</button>
      </div>
      {shortendUrl && (
        <div className="short-url">
          <p>
            Short URL:
            <a
              href={`http://localhost:8000/${shortendUrl}`}
            >{`http://localhost:8000/${shortendUrl}`}</a>
          </p>
        </div>
      )}
    </>
  );
}
