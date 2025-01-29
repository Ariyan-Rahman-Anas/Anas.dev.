import { baseApi } from './../../apis/baseApi';

const projectsApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        createProject: builder.mutation({
            query: (projectData) => ({
                url: "/projects/create",
                method: "POST",
                body:projectData
            }),
            invalidatesTags:["projects"]
        }),
        getAllProjects: builder.query({
            query: () => "/projects/all",
            providesTags:["projects"]
        }),
        getAllCategories: builder.query({
            query: () => "/projects/categories",
            providesTags: ["projects"]
        })
    })
})


export const {
    useCreateProjectMutation,
    useGetAllProjectsQuery,
    useGetAllCategoriesQuery
} = projectsApi