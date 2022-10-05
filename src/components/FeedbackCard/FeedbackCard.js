import { MdThumbUp, MdThumbsUpDown, MdThumbDown } from 'react-icons/md';

import {
  FeedbackWrapper,
  FeedbackTitle,
  FeedbackList,
  FeedbackButton,
} from './FeedbackCard.styled';

export const FeedbackCard = () => {
  return (
    <FeedbackWrapper>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>
      <FeedbackList>
        <li>
          <FeedbackButton type="button">
            Good <MdThumbUp />
          </FeedbackButton>
        </li>
        <li>
          <FeedbackButton type="button">
            Neutral <MdThumbsUpDown />
          </FeedbackButton>
        </li>
        <li>
          <FeedbackButton type="button">
            Bad <MdThumbDown />
          </FeedbackButton>
        </li>
      </FeedbackList>
    </FeedbackWrapper>
  );
};
