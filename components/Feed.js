import React from "react";
import { View } from "react-native";

import feedStyles from "../styles/feedStyles";
import { getMovies } from "../api";
import MoviesList from "./MoviesList";
import Spinner from "./Spinner";
import Search from "./Search";
import FindStuffButton from "./FindStuffButton";
import Heading from "./Heading";
import UpdatedInfo from "./UpdatedInfo";
import NoMoviesInfo from "./NoMoviesInfo";

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

  navigateToMovie = movieID => {
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
        isNoMoviesFound: false,
        isUpdated: false
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

    const isButtonVisible =
      movies.length === 0 && !isLoading && !isNoMoviesFound;
    const isSearchVisible =
      movies.length !== 0 || isLoadedAll || isNoMoviesFound;

    return (
      <View style={feedStyles.container}>
        <Heading />
        {isButtonVisible && <FindStuffButton fetchMovies={this.fetchMovies} />}
        {isUpdated && <UpdatedInfo lastUpdated={lastUpdated} />}
        {isLoading && <Spinner />}
        {isSearchVisible && <Search onYearSelect={this.onYearSelect} />}
        {isNoMoviesFound && <NoMoviesInfo />}
        <MoviesList
          fetchMovies={this.fetchMovies}
          loadMore={this.loadMore}
          refreshing={isLoading}
          onRefresh={this.onRefresh}
          navigateToMovie={this.navigateToMovie}
          {...{
            movies,
            isLoadedAll
          }}
        />
      </View>
    );
  }
}
