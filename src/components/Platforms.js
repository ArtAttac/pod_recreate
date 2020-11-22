import React from 'react';
import spotify from '../assets/desktop/spotify.svg';
import applePodcast from '../assets/desktop/apple-podcast.svg';
import googlePodcasts from '../assets/desktop/google-podcasts.svg';
import pocketCasts from '../assets/desktop/pocket-casts.svg';

export default function Platforms({ platformRef }) {
  return (
    <div ref={platformRef} className="platforms">
      <div className="platform platform--spotify">
        <img src={spotify} alt="platform logo"/>
      </div>
      <div className="platform platform--applePodcast">
        <img src={applePodcast} alt="platform logo"/>
      </div>
      <div className="platform platform--googlePodcasts">
        <img src={googlePodcasts} alt="platform logo"/>
      </div>
      <div className="platform platform--pocketCasts">
        <img src={pocketCasts} alt="platform logo"/>
      </div>
    </div>
  )
}
