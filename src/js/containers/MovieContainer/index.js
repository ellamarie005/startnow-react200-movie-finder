import { connect } from "react-redux";
import MovieDetailContainer from "./MovieDetailContainer";

function mapStoreToProps(store) {
  return {
    movieInfo: store.search.movieInfo,
    data: store.search.data
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);
