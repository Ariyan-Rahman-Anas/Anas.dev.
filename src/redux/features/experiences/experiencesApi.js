import { baseApi } from "../../apis/baseApi";

const experiencesApi = baseApi.injectEndpoints({
    endpoints:builder=>({
        postExperience: builder.mutation({
            query: (experienceData) => ({
                url: "/experiences/create",
                method: "POST",
                body:experienceData
            }),
            invalidatesTags: ['experiences']
        }),
        getAllExperiences: builder.query({
            query: () => "/experiences/list",
            providesTags:["experiences"]
        })

    })
})

export const {
    usePostExperienceMutation,
    useGetAllExperiencesQuery
} = experiencesApi