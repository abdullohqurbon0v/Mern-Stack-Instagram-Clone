export interface ChildProps {
  children: React.ReactNode
}

export interface IUser {
  user: {
    profileImage: string,
    username: string,
    fullName: string
  }
}


export interface IPost extends IUser {
  PostImage: string,
  totalLikes: number,
  description: string,
  createdAt: string,
  id: number
}