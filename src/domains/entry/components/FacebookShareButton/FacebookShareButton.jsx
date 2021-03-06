import React from 'react';
import { useScriptTag } from '../../../../foundation/scriptTag';

const FACEBOOK_SDK =
  'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';

export function FacebookShareButton() {
  useScriptTag(FACEBOOK_SDK, {beforeLoad: () => {
      if ('FB' in globalThis) {
        globalThis.FB.XFBML.parse();
        return true;
      }
      return false
    }})

  return (
    <div className="entry-FacebookShareButton">
      <div id="fb-root" />
      <div
        className="fb-like"
        data-href={globalThis.location.href}
        data-width=""
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-share="false"
      ></div>
    </div>
  );
}
