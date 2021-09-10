import {
  useLocation
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage(){
  const query = useQuery();

  // If the searchState exists, then show 
  
  return(
    <div>
      <h1>{query.get("q")}</h1>
    </div>
  )
}

export default SearchPage;