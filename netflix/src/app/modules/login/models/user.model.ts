export interface User {
  id: string,
  fullName: string,
  email: string,
  password: string,
  profiles: UserProfile[]
}

export interface RegisterUser {
  fullName: string,
  email: string,
  password: string,
}

export interface CurrentUser {
  email: string,
  password: string,
}

export interface UserProfile {
  name: string,
  avatar: string,
  favoriteMovies: any[]
}
