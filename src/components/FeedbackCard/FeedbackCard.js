import {
  FeedbackList,
  FeedbackButton,
  FeedbackIconUp,
  FeedbackIconUpDown,
  FeedbackIconDown,
} from './FeedbackCard.styled';

export const FeedbackCard = () => {
  return (
    <FeedbackList>
      <li>
        <FeedbackButton type="button">
          Good
          <FeedbackIconUp />
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton type="button">
          Neutral <FeedbackIconUpDown />
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton type="button">
          Bad <FeedbackIconDown />
        </FeedbackButton>
      </li>
    </FeedbackList>
  );
};
