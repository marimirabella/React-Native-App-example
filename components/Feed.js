import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import screenStyles from "../styles/screenStyles";
import { getMovies } from "../api";
import MoviesList from "./MoviesList";
import Spinner from "./Spinner";
import Search from "./Search";

export default class Feed extends React.Component {
  state = {
    isLoading: false,
    isError: false,
    movies: [],
    page: 1,
    isUpdated: false,
    lastUpdated: null,
    selectedYear: "*",
    isLoadedAll: false,
    isNoMoviesFound: false
  };

  navigateToMovie = movieID => () => {
    this.props.navigation.navigate("Movie", {
      movie: this.state.movies.find(movie => movie.imdbID === movieID)
    });
  };

  loadMore = () => {
    this.setState(
      state => ({ page: state.page + 1 }),
      () => this.fetchMovies(true)
    );
  };

  fetchMovies = (isLoadMore = false) => {
    const { movies, page, selectedYear } = this.state;
    this.setState({
      isLoading: true
    });

    getMovies(page, selectedYear)
      .then((newMovies = []) => {
        if (newMovies.length === 0) {
          this.setState({
            isLoadedAll: isLoadMore,
            isNoMoviesFound: !isLoadMore
          });
        }

        if (isLoadMore) {
          movies.push(...newMovies);
        } else {
          this.setState({ movies: newMovies });
        }

        this.setState({
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          isError: true
        });
      });
  };

  onYearSelect = ([selectedYear]) => {
    this.setState(
      {
        selectedYear,
        page: 1,
        isLoadedAll: false,
        isNoMoviesFound: false
      },
      this.fetchMovies
    );
  };

  onRefresh = () => {
    this.setState({
      isUpdated: true,
      lastUpdated: new Date().toLocaleTimeString()
    });
  };

  render() {
    const {
      isLoading,
      movies,
      isUpdated,
      lastUpdated,
      isNoMoviesFound,
      isLoadedAll
    } = this.state;

    return (
      <View style={screenStyles.container}>
        <View style={screenStyles.wrapper}>
          <Text style={screenStyles.heading}>Movies Feed</Text>
        </View>
        {movies.length === 0 && !isNoMoviesFound && (
          <View style={screenStyles.wrapper}>
            <TouchableOpacity
              onPress={this.fetchMovies}
              style={screenStyles.button}
            >
              <Text style={screenStyles.buttonText}>Find stuff</Text>
            </TouchableOpacity>
          </View>
        )}
        {isUpdated && (
          <Text style={screenStyles.updatedTitle}>
            <Text>Last updated: </Text>
            <Text>{lastUpdated}</Text>
          </Text>
        )}
        {isLoading && <Spinner />}
        {(movies.length !== 0 || isLoadedAll || isNoMoviesFound) && (
          <Search onYearSelect={this.onYearSelect} />
        )}
        {isNoMoviesFound && (
          <Text style={screenStyles.noMovies}>
            Sorry, no movies were found! ;(
          </Text>
        )}
        <MoviesList
          fetchMovies={this.fetchMovies}
          loadMore={this.loadMore}
          refreshing={isLoading}
          onRefresh={this.onRefresh}
          navigateToMovie={this.navigateToMovie}
          {...{
            movies,
            isLoadedAll,
            isNoMoviesFound
          }}
        />
      </View>
    );
  }
}
