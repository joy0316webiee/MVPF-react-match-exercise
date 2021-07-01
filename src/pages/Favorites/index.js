import React from 'react';
import { useSelector } from 'react-redux';

// layouts
import { TabsLayout } from '../../layouts';

// components
import { MovieTable } from '../../components/organisms';

const Favorites = () => {
  const { favorites } = useSelector(state => state.movie);

  return (
    <TabsLayout>
      <div className="favorites-wrapper">
        <MovieTable
          dataSource={favorites}
          pagination={{
            hideOnSinglePage: true,
            total: parseInt(favorites.length),
            showTotal: total => `Total ${total} Favorites`
          }}
        />
      </div>
    </TabsLayout>
  );
};

export default Favorites;
