export const USER = 'user'
export const isAuthenticated = () => localStorage.getItem(USER) !== null
export const getUser = () => JSON.parse(localStorage.getItem(USER))
export const login = user => {
  localStorage.setItem(USER, JSON.stringify(user))
}
export const logout = () => {
  localStorage.removeItem(USER)
}
