import styled from 'styled-components';

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
  display: inline-block;
  /* justify-content: center;
  align-items: center; */
  min-width: 100px;
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;

  background-color: rgb(241, 188, 90);
  color: white;

  cursor: pointer;

  text-align: center;

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
