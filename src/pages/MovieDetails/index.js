import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col, Spin } from 'antd';

// components
import { Button, Icons } from '../../components/atoms';

// actions
import { movieActions } from '../../modules/movie/actions';

// helpers
import { getImagePath } from '../../helpers';

// constants
import { imageSizes } from '../../constants';

const {
  IconCheck,
  IconClose,
  IconClock,
  IconLink,
  IconArrowLeft
} = Icons;

const MovieDetails = () => {
  const { movieDetails, GET_MOVIE_DETAILS } = useSelector(state => state.movie);

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(movieActions.getMovieDetails.request({ id }));
  }, [id]);

  const {
    original_title,
    overview,
    release_date,
    backdrop_path,
    homepage,
    spoken_languages,
    popularity,
    vote_count,
    production_countries,
    production_companies,
    budget,
    revenue,
    runtime,
    adult,
    status
  } = movieDetails;

  return (
    <Row className="movie-details__wrapper">
      {GET_MOVIE_DETAILS.loading ? (
        <Spin spinning />
      ) : (
        <>
          <Button
            className="btn-go__back"
            variant="link"
            onClick={() => history.goBack()}
          >
            <IconArrowLeft />
          </Button>
          <Col className="page-background">
            {backdrop_path && (
              <img src={getImagePath(backdrop_path, imageSizes.Original)} alt="backdrop" />
            )}
          </Col>
          <Col className="left-panel">
            <div className="backdrop">
              {backdrop_path && (
                <img src={getImagePath(backdrop_path)} alt="backdrop" />
              )}
            </div>
            <div className="stats">
              <div className="stats-top">
                <span className="status">Status:<b>{status}</b></span>
                <span className="adult">
                  Adult: {adult ? <IconCheck /> : <IconClose color="white" />}
                </span>
              </div>
              <div className="stats-bottom">
                <span className="released-date">
                  <IconClock />
                  <b>{release_date}</b>
                </span>
                <span className="popularity">Popularity:<b>{popularity}</b></span>
                <span className="vote_count">Votes:<b>{vote_count}</b></span>
              </div>
            </div>
          </Col>
          <Col className="right-panel">
            <div className="title">
              <h3>{original_title}</h3>
              {homepage && (
                <a href={homepage} target="_blank" rel="noopener noreferrer">
                  <IconLink />
                </a>
              )}
            </div>
            <div className="details">
              <p className="overview">{overview}</p>
              <p className="languages">
                <b>Languages:</b> {spoken_languages?.map(({ name }) => name).join(', ')}
              </p>
              <p className="countries">
                <b>Production Countries:</b> {production_countries?.map(({ name }) => name).join(', ')}
              </p>
              {production_companies?.length > 0 && (
              <p className="companies">
                <b>Production Countries:</b> {production_companies?.map(({ name }) => name).join(', ')}
              </p>
                )}
              <p className="budget"><b>Budget:</b> {budget}</p>
              <p className="revenue"><b>Revenue:</b> {revenue}</p>
              <p className="runtime"><b>Runtime:</b> {runtime}</p>
            </div>
          </Col>
        </>
      )}
    </Row>
  );
};

export default MovieDetails;
