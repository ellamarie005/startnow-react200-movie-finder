import { connect } from "react-redux";
import MovieSearchContainer from "./MovieSearchContainer";

function mapStoreToProps(store) {
  return {
    name: store.search.name,
    data: store.search.data,
    shortPlot: store.search.shortPlot
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);
