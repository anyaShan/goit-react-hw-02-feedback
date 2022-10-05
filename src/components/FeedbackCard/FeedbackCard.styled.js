import styled from 'styled-components';
import { MdThumbUp, MdThumbsUpDown, MdThumbDown } from 'react-icons/md';

export const FeedbackWrapper = styled.div`
  width: 400px;
  padding: 25px;
  background-color: rgb(243, 240, 240);
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
`;

export const FeedbackTitle = styled.h1`
  margin-bottom: 25px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const FeedbackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  padding: 5px 10px;
  text-align: center;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  background-color: rgb(241, 188, 90);
  color: white;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 500;
  font-size: 12px;
  line-height: 1.9;
  letter-spacing: 0.06em;

  &:hover,
  &:focus {
    background-color: rgb(52, 162, 212);
  }
`;

export const FeedbackIconUp = styled(MdThumbUp)`
  margin-left: 5px;
`;

export const FeedbackIconUpDown = styled(MdThumbsUpDown)`
  margin-left: 5px;
`;
export const FeedbackIconDown = styled(MdThumbDown)`
  margin-left: 5px;
`;
