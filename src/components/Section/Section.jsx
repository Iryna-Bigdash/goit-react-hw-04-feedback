import { SectionWraper, SectionTitle } from './Section.styled';
import PropTypes from 'prop-types';
export default function Section({ title, children }) {
  return (
    <>
      <SectionWraper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWraper>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}