import React from 'react';
import { useScriptTag } from '../../../../foundation/scriptTag';

const TWITTER_SDK = 'https://platform.twitter.com/widgets.js';

export function TwitterShareButton() {
  useScriptTag(TWITTER_SDK)

  return (
    <div className="entry-TwitterShareButton">
      <a
        className="twitter-share-button"
        href="https://twitter.com/intent/tweet"
      >
        Tweet
      </a>
    </div>
  );
}
