import { BUY_CAKE, BUY_ICECREAM } from "./cakeTypes"

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}
