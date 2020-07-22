import React from 'react';
import {map} from 'lodash-es';

import { CommentListItem } from '../CommentListItem';

export function CommentList({ list }) {
  return (
    <ul>
      {map(list, (comment, i) => (
        <li key={i} className="comment-CommentList__item">
          <CommentListItem comment={comment} />
        </li>
      ))}
    </ul>
  );
}
