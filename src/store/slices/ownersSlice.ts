import { API_OWNERS_TIMEOUT } from "../../constants/apiConstants";
import { OWNER_TAG } from "../../constants/ownerConstants";
import { TOwners } from "../../types/ownersTypes";
import { apiSlice } from "./apiSlice";

//assign tags for caching
const ownerApiWithTag = apiSlice.enhanceEndpoints({addTagTypes: [OWNER_TAG]})

//add endpoints for owners
export const ownersApiSlice = ownerApiWithTag.injectEndpoints({
  endpoints: builder => ({
    getOwners: builder.query<TOwners, void>({
      query: () => ({
        url: `/owners`,
        //if taking over > 2000ms, something is wrong so abort the request.
        //this timeout will take priority
        timeout: API_OWNERS_TIMEOUT
      }),
      providesTags: [OWNER_TAG] //for caching
    })
  })
})

/*hooks for endpoints are autogenerated*/
export const {
  useGetOwnersQuery
} = ownersApiSlice