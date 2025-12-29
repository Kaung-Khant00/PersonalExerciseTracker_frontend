const API_ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    LOGOUT: "/auth/logout",
  },
  ACTIVITIES: {
    CREATE: "/activities/create",
    GET_ALL: "/activities",
    UPDATE: (id) => `/activities/update/${id}`,
    DELETE: (id) => `/activities/delete/${id}`,
  },
};

export default API_ROUTES;
