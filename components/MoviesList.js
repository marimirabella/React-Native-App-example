import React from "react";
import { Text, FlatList, View } from "react-native";

import screenStyles from "../styles/screenStyles";
import MovieThumbnail from "./MovieThumbnail";

export default class MoviesList extends React.Component {
  renderMovie = ({ item }) => (
    <MovieThumbnail movie={item} navigateToMovie={this.props.navigateToMovie} />
  );

  _keyExtractor = item => item.imdbID;

  onEndReached = () => {
    this.props.loadMore();
  };

  _onRefresh = () => {
    const { onRefresh, fetchMovies } = this.props;

    onRefresh();
    fetchMovies();
  };

  render() {
    const { movies, refreshing, isLoadedAll } = this.props;

    return (
      <>
        <View style={screenStyles.moviesWrapper}>
          {movies.length !== 0 && (
            <FlatList
              data={movies}
              scrollable
              keyExtractor={this._keyExtractor}
              renderItem={this.renderMovie}
              onRefresh={this._onRefresh}
              refreshing={refreshing}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={0.5}
            />
          )}
        </View>
        {isLoadedAll && (
          <Text style={screenStyles.noMovies}>No more movies...</Text>
        )}
      </>
    );
  }
}
