import { baseApi } from "../../apis/baseApi";

const specalitisApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getSpecalities: builder.query({
            query: () => "/specalities/list",
            providesTags:["specalities"]
        }),
        editSpecalities:builder.mutation({
            query: (id, editData) => ({
                url: `/specalities/edit/${id}`,
                method: "PATCH",
                body: editData,
            }),
            providesTags:["specalities"]
        })
    })
})

export const {
    useGetSpecalitiesQuery,
    useEditSpecalitiesMutation
} = specalitisApi