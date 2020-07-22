import React from 'react';
import { Link } from 'react-router-dom';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';
import dayjs from '../../../../foundation/dayjs'
import {toISOString} from '../../../../foundation/format';

export function EntryList({ blogId, list }) {
  return (
    <ul className="entry-list-EntryList">
      {list
        .filter((entry) => entry.publish_flag === 'open')
        .map((entry, i) => {
          return (
            <li key={i} className="entry-list-EntryList__entry">
              <Link
                to={`/${blogId}/entry/${entry.entry_id}`}
                className="entry-list-EntryList__entry-inner"
              >
                <div className="entry-list-EntryList__thumbnail">
                  <ProportionalImage
                    src={entry.thumbnail}
                    alt=""
                    boxAspectRatio={9 / 16}
                  />
                </div>
                <div className="entry-list-EntryList__text">
                  <time
                    className="entry-list-EntryList__published-at"
                    dateTime={toISOString(entry.published_at)}
                    title={toISOString(entry.published_at)}
                  >
                    {dayjs(entry.published_at).format('YYYY-MM-DD')}
                  </time>
                  <p className="entry-list-EntryList__title">{entry.title}</p>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
