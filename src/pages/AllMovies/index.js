import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col } from 'antd';
import moment from 'moment';
import _ from 'lodash';

// layouts
import { TabsLayout } from '../../layouts';

// components
import { Input, Button, Icons } from '../../components/atoms';
import { TableList } from '../../components/molecules';
import { MovieTable } from '../../components/organisms';

// actions
import { movieActions } from '../../modules/movie/actions';

// constants
import { genres as genresOptions } from '../../constants';

const { FilterDropdown } = TableList;
const { IconSearch } = Icons;

const DEBONUCE_DELAY = 300;

const initQueryParams = {
  year: null,
  with_genres: null,
  sort_by: 'original_title.asc'
};

const AllMovies = () => {
  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState('');
  const [query, setQuery] = useState(initQueryParams);

  const {
    movies,
    totalResults,
    SEARCH_MOVIES,
    DISCOVER_MOVIES
  } = useSelector(state => state.movie);

  const dispatch = useDispatch();

  const onSearchChange = _.debounce((search) => {
    setSearchKey(search);
  }, DEBONUCE_DELAY);

  const onReleaseDateChange = (date) => {
    setQuery({
      ...query,
      year: date ? moment(date).format('YYYY') : null
    });
  };

  const onGenresChange = (genres) => {
    setQuery({
      ...query,
      with_genres: genres.join(',')
    });
  };

  const onTableChange = ({ current }, __, { field, order }) => {
    setPage(current);
    setQuery({
      ...query,
      ...(field && {
        sort_by: field.concat(order === 'ascend' ? '.asc' : '.desc')
      })
    });
  };

  useEffect(() => {
    if (searchKey) {
      dispatch(movieActions.searchMovies.request({ query: searchKey, page }));
    } else {
      dispatch(movieActions.discoverMovies.request({ query, page }));
    }
  }, [searchKey, query, page]);

  const columnSorters = {
    title: true,
    releaseDate: true
  };

  const columnFilters = {
    releaseDate: (
      <FilterDropdown
        variant="date"
        placeholder="Release Date"
        onChange={onReleaseDateChange}
      />
    ),
    genreIds: (
      <FilterDropdown
        variant="multi-select"
        placeholder="Genres"
        options={genresOptions}
        onChange={onGenresChange}
      />
    )
  };

  return (
    <TabsLayout>
      <Col className="all-movies__wrapper" span={24}>
        {/* Search Bar */}
        <div className="search-bar">
          <Input
            className="input"
            variant="search"
            placeholder="Enter search key..."
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Button
            className="btn-search"
            variant="link"
          >
            <IconSearch />
          </Button>
        </div>

        {/* Movie Table */}
        <MovieTable
          loading={SEARCH_MOVIES.loading || DISCOVER_MOVIES.loading}
          dataSource={movies}
          filters={columnFilters}
          sorters={columnSorters}
          pagination={{
            current: page,
            hideOnSinglePage: true,
            total: parseInt(totalResults),
            showTotal: total => `Total ${total} Movies`,
          }}
          onChange={onTableChange}
        />
      </Col>
    </TabsLayout>
  );
};

export default AllMovies;
