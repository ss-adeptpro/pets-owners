import { useMemo } from "react";
import { useGetOwnersQuery } from "../../store/slices/ownersSlice";
import Owner from "./Owner";
import { groupListByKey } from "../../helpers/util";
import Loader from "../Loader/Loader";
import useApiError from "../../hooks/useApiError";
import Error from "../error/error";

const Owners = () => {  
  //assign a default empty array to data in case it's undefined, and we always have an array to sort on
  const {
    data : owners = [], isFetching, isSuccess, isError, error
  } = useGetOwnersQuery();

  const errMsg = useApiError(error);

  //useMemo:  caching to avoid re-grouping and sorting on every rerender
  const groupedOwners = useMemo(() => {
    const groupOwnersByCategory = groupListByKey(['gender'])
    const groupedOwners = groupOwnersByCategory(owners);
    return groupedOwners
  }, [owners])

  let content

  if (isFetching) {
    //show spinner
    content = <Loader />
  } else if (isSuccess) {
    content = Object.entries(groupedOwners).map(([gender, owners]) => (
        <div className="ownerContainer" key={gender}>
          <div className="bigText alignLeft">{gender.toUpperCase()}</div>
          <div className="ownerDetails">
                {owners.map((owner, ownerIndex) => (
                    <Owner key={ownerIndex} owner={owner}></Owner>
                ))}
          </div>
        </div>
      ))
  } else if (isError) {    
    content = <Error errorMsg={errMsg} />
  }
  
  return (
    <div className="ownersList">
      <div className="title">CAT Owners</div>
      {content}      
    </div>
  )
}

export default Owners