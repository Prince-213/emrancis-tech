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