import React, { useEffect } from 'react'

const Ad = ({ id }) => {
  useEffect(() => {
    if (window.ezstandalone && location.hostname !== 'localhost') {
        ezstandalone.DEBUG = true;
        ezstandalone.define(id);
        if (!ezstandalone.enabled) {
          ezstandalone.setDisablePersonalizedStatistics(true); // disable for now
          ezstandalone.setDisablePersonalizedAds(true); // disable for now
          ezstandalone.enable();
          ezstandalone.display();
        }
        else {
          ezstandalone.refresh();
        }
    }
  },[])

  return <div id={`ezoic-pub-ad-placeholder-${id}`}> </div>
}

export const ids = {
  sidebar: 102,
  topMobile: 103,
  footer: 104,
  absolute: 105,
  firstParagraph: 106,
  secondParagraph: 107,
  sidebarBottom: 108,
  sidebarMiddle: 109,
}

export default Ad
