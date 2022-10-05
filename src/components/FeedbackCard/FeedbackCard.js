import {
  FeedbackList,
  FeedbackButton,
  FeedbackIconUp,
  FeedbackIconUpDown,
  FeedbackIconDown,
} from './FeedbackCard.styled';

export const FeedbackCard = ({ updateValue }) => {
  return (
    <FeedbackList>
      <li>
        <FeedbackButton type="button" name="good" onClick={updateValue}>
          Good
          <FeedbackIconUp />
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton type="button" name="neutral" onClick={updateValue}>
          Neutral <FeedbackIconUpDown />
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton type="button" name="bad" onClick={updateValue}>
          Bad <FeedbackIconDown />
        </FeedbackButton>
      </li>
    </FeedbackList>
  );
};
