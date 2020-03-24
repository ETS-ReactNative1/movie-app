import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import Votes from './Votes';
import { trimText, formatDate } from '../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 65%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
  color: white;
  opacity: 0.8;
  font-size: 12px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
  opacity: 0.8;
`;

const Horizontal = ({ id, title, poster, overview, releaseDate }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 30)}</Title>
        {releaseDate ? (
          <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
        ) : null}
        <Overview>{trimText(overview, 80)}</Overview>
      </Data>
    </Container>
  </TouchableOpacity>
);

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
};

export default Horizontal;
