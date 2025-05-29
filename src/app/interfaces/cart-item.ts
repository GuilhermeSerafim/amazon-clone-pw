export interface CartItem {
    id: string,
    img: string,
    title: string,
    stars: number | undefined,
    reviews: number | undefined,
    price: number | undefined,
    oldPrice?: number | undefined,
    delivery: string | undefined,
    colors?: string[] | undefined,
    deal?: boolean | undefined,
    disabled: boolean | undefined
}
