import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_photo_list = createAsyncThunk(
  "photos/api_v1_photo_list",
  async payload => {
    const response = await apiService.api_v1_photo_list(payload)
    return response.data
  }
)
export const api_v1_photo_create = createAsyncThunk(
  "photos/api_v1_photo_create",
  async payload => {
    const response = await apiService.api_v1_photo_create(payload)
    return response.data
  }
)
export const api_v1_photo_retrieve = createAsyncThunk(
  "photos/api_v1_photo_retrieve",
  async payload => {
    const response = await apiService.api_v1_photo_retrieve(payload)
    return response.data
  }
)
export const api_v1_photo_update = createAsyncThunk(
  "photos/api_v1_photo_update",
  async payload => {
    const response = await apiService.api_v1_photo_update(payload)
    return response.data
  }
)
export const api_v1_photo_partial_update = createAsyncThunk(
  "photos/api_v1_photo_partial_update",
  async payload => {
    const response = await apiService.api_v1_photo_partial_update(payload)
    return response.data
  }
)
export const api_v1_photo_destroy = createAsyncThunk(
  "photos/api_v1_photo_destroy",
  async payload => {
    const response = await apiService.api_v1_photo_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_photo_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_photo_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_photo_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_photo_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_photo_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_photo_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_photo_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_photo_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_photo_list,
  api_v1_photo_create,
  api_v1_photo_retrieve,
  api_v1_photo_update,
  api_v1_photo_partial_update,
  api_v1_photo_destroy,
  slice: photosSlice
}
