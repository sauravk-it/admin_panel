export const endpoints = {
  account: {
    login: "api/v1/admin/login",
    logout: "api/v1/admin/logout",
    add_user: "api/v1/admin/add",
    user: "api/v1/admin/me",
    user_list: "api/v1/admin/accounts"
  },
  orders: {
    latest: 'api/v1/order/admin/latest-order',
  },
  vendors: {
    list: "api/v1/vendor/all",
    add: "api/v1/vendor/add",
    update: "api/v1/vendor",
    updateByid: "api/v1/admin",
  },
  stations: {
    list: "api/v1/station",
    add: "api/v1/station",
  },

}