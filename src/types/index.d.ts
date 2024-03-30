export interface Courses {
    data: Course[]
}

export interface Course {
    id: string
    category: string
    description: string
    learn: string[]
    required: string[]
    title: string
    duration: string
    price: number
}

export interface TopBlogs {
    data: Daum[]
  }
  
  export interface TopBlog {
    id: string
    date: string
    category: string
    title: string
    cover_photo_url: string
    conclusion: string
    author_name: string
  }
  


  export interface Blog {
    data: Data
  }
  
  export interface BlogData {
    id: string
    date: string
    category: string
    title: string
    cover_photo_url: string
    conclusion: string
    author_name: string
    description: Description[]
  }
  
  export interface Description {
    id: string
    heading: string
    content: string[]
    blogsId: string
  }