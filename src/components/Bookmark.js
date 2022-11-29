import * as React from 'react';

export default function Bookmark({count,bookmark,tdim}) {

  return (
    <div>
        <div style={{color:"rgba(0, 0, 0, 0.6)"}}>Bookmarked ({count})</div>
        {bookmark.map((item, index) => (
              <p key={item} style={{margin:"0"}}>{item}</p>
            ))}
        <p><b>Total dimension:</b> {tdim} cm</p>
    </div>
  );
}