import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
  margin: ${props => props.margin};
  padding: ${props => props.padding};

  ${props => props.background && css`
    background-color: #1C2321;
    border-radius: 10px;
    padding: 1rem;
  `}

  ${props => props.spacing && css`
    & > div {
      margin: ${props => props.spacing / 2}px;
    }
  `}
`;

const Container = (props) => {
  const {
    flexDirection,
    flexWrap,
    justify,
    alignItems,
    alignContent,
    background,
  } = props;

  return (
    <StyledContainer
      className="grid-container"
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justify={justify}
      alignItems={alignItems}
      alignContent={alignContent}
      background={background}
      {...props}
    />
  );
}

Container.propTypes = {
  background: PropTypes.bool,
  margin: PropTypes.string,
  padding: PropTypes.string,
  spacing: PropTypes.oneOf([8, 16, 24, 32]),
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  alignItems: PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline'
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch'
  ]),
};

Container.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justify: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'flex-start',
};

export default Container;