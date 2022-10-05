import { SectionWrapper, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </SectionWrapper>
  );
};
