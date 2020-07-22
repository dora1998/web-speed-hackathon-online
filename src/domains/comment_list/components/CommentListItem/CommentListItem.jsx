import React from 'react';
import { Link } from 'react-router-dom';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';
import dayjs from '../../../../foundation/dayjs'
import {toISOString} from '../../../../foundation/format';

export function CommentListItem({ comment }) {
  return (
    <article
      id={`comment-${comment.comment_id}`}
      className="comment-CommentListItem"
    >
      <div className="comment-CommentListItem__avatar">
        <ProportionalImage src={comment.commenter.image} boxAspectRatio={1} />
      </div>
      <div className="comment-CommentListItem__body">
        <h3 className="comment-CommentListItem__commenter">
          {comment.commenter.user_name}
        </h3>
        <p className="comment-CommentListItem__comment">{comment.comment}</p>
        <footer className="comment-CommentListItem__footer">
          <Link to={`#comment-${comment.comment_id}`}>
            <time
              dateTime={toISOString(comment.posted_at)}
              title={toISOString(comment.posted_at)}
            >
              {dayjs(comment.posted_at).fromNow()}
            </time>
          </Link>
        </footer>
      </div>
    </article>
  );
}
