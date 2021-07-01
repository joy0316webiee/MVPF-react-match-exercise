import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cx from 'clsx';

// components
import { Button, Tooltip, Icons } from '../../atoms';
import { TableList } from '../../molecules';

// actions
import { movieActions } from '../../../modules/movie/actions';

// hooks
import { useResponsive } from '../../../hooks';

// helpers
import { getImagePath } from '../../../helpers';

// constants
import { genres } from '../../../constants';

const { Table } = TableList;
const {
  IconSkeleton,
  IconEye,
  IconHeartFilled,
  IconHeartOutlined
} = Icons;

const deviceColumns = {
  MOBILE: 2,
  TABLET: 3,
  LAPTOP: 4
};

const MovieTable = ({
  className,
  sorters,
  filters,
  ...props
}) => {
  const { isMobile, isTablet, isLaptop } = useResponsive();

  const { favorites } = useSelector(state => state.movie);

  const dispatch = useDispatch();

  const onUnFavoriteMovie = (movieId) => {
    dispatch(movieActions.unfavoriteMovie.request(movieId));
  };

  const onFavoriteMovie = (movie) => {
    dispatch(movieActions.favoriteMovie.request(movie));
  };

  const isFavorite = (movieId) => {
    return favorites?.find(({ id }) => parseInt(id) === movieId);
  };

  const getColumnsToDisplay = (allColumns) => {
    let colLength = allColumns.length;
    if (isMobile) colLength = deviceColumns.MOBILE;
    if (isTablet) colLength = deviceColumns.TABLET;
    if (isLaptop) colLength = deviceColumns.LAPTOP;
    const actionCol = allColumns.pop();
    return allColumns.slice(0, colLength - 1).concat(actionCol);
  };

  const allColumns = [
    {
      title: 'Title',
      dataIndex: 'original_title',
      key: 'original_title',
      className: 'col-title',
      sorter: sorters?.title,
      filterDropdown: filters?.title,
      render: (title, { poster_path }) => (
        <>
          {poster_path && (
            <img src={getImagePath(poster_path)} alt="preview" />
          )}
          <b>{title}</b>
        </>
      )
    },
    {
      title: 'Release Date',
      key: 'release_date',
      dataIndex: 'release_date',
      className: 'col-release__date',
      sorter: sorters?.releaseDate,
      filterDropdown: filters?.releaseDate,
    },
    {
      title: 'Genre',
      key: 'genre_ids',
      dataIndex: 'genre_ids',
      className: 'col-genre__ids',
      filterDropdown: filters?.genreIds,
      render: (genreIds) => {
        const genreNames = genreIds.reduce((acc, genreId) => {
          const genre = genres.find(({ value }) => value === parseInt(genreId));
          return genre ? acc.concat(genre.label) : acc;
        }, []);

        return (
          <span>{genreNames.join(', ')}</span>
        );
      }
    },
    {
      title: 'Overview',
      key: 'overview',
      dataIndex: 'overview',
      className: 'col-overview',
      render: (description) => (
        <Tooltip
          className="description-tooltip"
          placement="bottomLeft"
          title={description}
        >
          <p>{description}</p>
        </Tooltip>
      )
    },
    {
      title: 'Actions',
      className: 'col-actions',
      align: 'center',
      width: '120px',
      render: (__, record) => (
        <div>
          <Link to={`/view/${record.id}`}>
            <Button
              className="btn-link"
              variant="link"
            >
              <IconEye />
            </Button>
          </Link>
          {isFavorite(record.id) ? (
            <Button
              className="btn-unfavorite"
              variant="link"
              onClick={() => onUnFavoriteMovie(record.id)}
            >
              <IconHeartFilled className="icon-heart__filled" />
            </Button>
          ) : (
            <Button
              className="btn-favorite"
              variant="link"
              onClick={() => onFavoriteMovie(record)}
            >
              <IconHeartOutlined className="icon-heart__outlined" />
            </Button>
          )}
        </div>
      )
    },
  ];

  const columns = getColumnsToDisplay(allColumns);

  return (
    <Table
      rowKey="id"
      className={cx({
        'movie-table': true,
        [className || '']: className
      })}
      columns={columns}
      locale={{
        emptyText: (
          <div className="empty-status">
            <IconSkeleton />
          </div>
        )
      }}
      sticky
      showSorterTooltip={false}
      {...props}
    />
  );
};

export default MovieTable;
