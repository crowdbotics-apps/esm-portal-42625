import axios from "axios"
const esmportalAPI = axios.create({
  baseURL: "https://esm-portal-42625.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return esmportalAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_booking_list(payload) {
  return esmportalAPI.get(`/api/v1/booking/`)
}
function api_v1_booking_create(payload) {
  return esmportalAPI.post(`/api/v1/booking/`, payload.data)
}
function api_v1_booking_retrieve(payload) {
  return esmportalAPI.get(`/api/v1/booking/${payload.id}/`)
}
function api_v1_booking_update(payload) {
  return esmportalAPI.put(`/api/v1/booking/${payload.id}/`, payload.data)
}
function api_v1_booking_partial_update(payload) {
  return esmportalAPI.patch(`/api/v1/booking/${payload.id}/`, payload.data)
}
function api_v1_booking_destroy(payload) {
  return esmportalAPI.delete(`/api/v1/booking/${payload.id}/`)
}
function api_v1_listing_list(payload) {
  return esmportalAPI.get(`/api/v1/listing/`)
}
function api_v1_listing_create(payload) {
  return esmportalAPI.post(`/api/v1/listing/`, payload.data)
}
function api_v1_listing_retrieve(payload) {
  return esmportalAPI.get(`/api/v1/listing/${payload.id}/`)
}
function api_v1_listing_update(payload) {
  return esmportalAPI.put(`/api/v1/listing/${payload.id}/`, payload.data)
}
function api_v1_listing_partial_update(payload) {
  return esmportalAPI.patch(`/api/v1/listing/${payload.id}/`, payload.data)
}
function api_v1_listing_destroy(payload) {
  return esmportalAPI.delete(`/api/v1/listing/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return esmportalAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_package_list(payload) {
  return esmportalAPI.get(`/api/v1/package/`)
}
function api_v1_package_create(payload) {
  return esmportalAPI.post(`/api/v1/package/`, payload.data)
}
function api_v1_package_retrieve(payload) {
  return esmportalAPI.get(`/api/v1/package/${payload.id}/`)
}
function api_v1_package_update(payload) {
  return esmportalAPI.put(`/api/v1/package/${payload.id}/`, payload.data)
}
function api_v1_package_partial_update(payload) {
  return esmportalAPI.patch(`/api/v1/package/${payload.id}/`, payload.data)
}
function api_v1_package_destroy(payload) {
  return esmportalAPI.delete(`/api/v1/package/${payload.id}/`)
}
function api_v1_photo_list(payload) {
  return esmportalAPI.get(`/api/v1/photo/`)
}
function api_v1_photo_create(payload) {
  return esmportalAPI.post(`/api/v1/photo/`, payload.data)
}
function api_v1_photo_retrieve(payload) {
  return esmportalAPI.get(`/api/v1/photo/${payload.id}/`)
}
function api_v1_photo_update(payload) {
  return esmportalAPI.put(`/api/v1/photo/${payload.id}/`, payload.data)
}
function api_v1_photo_partial_update(payload) {
  return esmportalAPI.patch(`/api/v1/photo/${payload.id}/`, payload.data)
}
function api_v1_photo_destroy(payload) {
  return esmportalAPI.delete(`/api/v1/photo/${payload.id}/`)
}
function api_v1_service_list(payload) {
  return esmportalAPI.get(`/api/v1/service/`)
}
function api_v1_service_create(payload) {
  return esmportalAPI.post(`/api/v1/service/`, payload.data)
}
function api_v1_service_retrieve(payload) {
  return esmportalAPI.get(`/api/v1/service/${payload.id}/`)
}
function api_v1_service_update(payload) {
  return esmportalAPI.put(`/api/v1/service/${payload.id}/`, payload.data)
}
function api_v1_service_partial_update(payload) {
  return esmportalAPI.patch(`/api/v1/service/${payload.id}/`, payload.data)
}
function api_v1_service_destroy(payload) {
  return esmportalAPI.delete(`/api/v1/service/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return esmportalAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return esmportalAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return esmportalAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return esmportalAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return esmportalAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return esmportalAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return esmportalAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return esmportalAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return esmportalAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return esmportalAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return esmportalAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return esmportalAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_booking_list,
  api_v1_booking_create,
  api_v1_booking_retrieve,
  api_v1_booking_update,
  api_v1_booking_partial_update,
  api_v1_booking_destroy,
  api_v1_listing_list,
  api_v1_listing_create,
  api_v1_listing_retrieve,
  api_v1_listing_update,
  api_v1_listing_partial_update,
  api_v1_listing_destroy,
  api_v1_login_create,
  api_v1_package_list,
  api_v1_package_create,
  api_v1_package_retrieve,
  api_v1_package_update,
  api_v1_package_partial_update,
  api_v1_package_destroy,
  api_v1_photo_list,
  api_v1_photo_create,
  api_v1_photo_retrieve,
  api_v1_photo_update,
  api_v1_photo_partial_update,
  api_v1_photo_destroy,
  api_v1_service_list,
  api_v1_service_create,
  api_v1_service_retrieve,
  api_v1_service_update,
  api_v1_service_partial_update,
  api_v1_service_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
