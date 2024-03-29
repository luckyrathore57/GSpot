import { z } from "zod";

export const GetFeedSchema=z.object({
    postno:z.number()

})