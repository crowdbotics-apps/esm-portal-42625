import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_listing_list = createAsyncThunk(
  "listings/api_v1_listing_list",
  async payload => {
    const response = await apiService.api_v1_listing_list(payload)
    return response.data
  }
)
export const api_v1_listing_create = createAsyncThunk(
  "listings/api_v1_listing_create",
  async payload => {
    const response = await apiService.api_v1_listing_create(payload)
    return response.data
  }
)
export const api_v1_listing_retrieve = createAsyncThunk(
  "listings/api_v1_listing_retrieve",
  async payload => {
    const response = await apiService.api_v1_listing_retrieve(payload)
    return response.data
  }
)
export const api_v1_listing_update = createAsyncThunk(
  "listings/api_v1_listing_update",
  async payload => {
    const response = await apiService.api_v1_listing_update(payload)
    return response.data
  }
)
export const api_v1_listing_partial_update = createAsyncThunk(
  "listings/api_v1_listing_partial_update",
  async payload => {
    const response = await apiService.api_v1_listing_partial_update(payload)
    return response.data
  }
)
export const api_v1_listing_destroy = createAsyncThunk(
  "listings/api_v1_listing_destroy",
  async payload => {
    const response = await apiService.api_v1_listing_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_listing_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_listing_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_listing_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_listing_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_listing_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_listing_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_listing_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_listing_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_listing_list,
  api_v1_listing_create,
  api_v1_listing_retrieve,
  api_v1_listing_update,
  api_v1_listing_partial_update,
  api_v1_listing_destroy,
  slice: listingsSlice
}
