import { baseApi } from "./baseApi";

export const todoApi = baseApi.injectEndpoints({
  endpoints: build => ({

    todoList: build.query({
      query: data => ({ url: '/todo/list', method: 'get', data }),
      transformResponse: response => {
        const todoList = response.todoList;
        return todoList;
      },
      providesTags: [{ type: 'TODO', id: 'LIST' }] as any
    }),
    todoAdd: build.mutation({
      query: data => ({ url: '/todo/add', method: 'post', data }),
    }),
    todoRemove: build.mutation({
      query: data => ({ url: '/todo/remove', method: 'update', data }),
    })

  })
});

export const { endpoints } = todoApi;