export interface HomeInterface {
    section: string,
    films: FilmsInterface[]
}
export interface FilmsInterface {
    title: string,
    image: ImageInterface
}    
export interface ImageInterface {
    src: string,
    alt: string
}
