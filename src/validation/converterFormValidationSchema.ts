import {z, ZodType} from 'zod'
import {IForm} from "@/interfaces/interfaces";

const isAmountGreaterThanZero = (amount: string) => +amount > 0
export const converterFormValidationSchema:ZodType<IForm> = z.object({
  date: z.string().min(1),
  amountToSell: z.string().min(1).refine(isAmountGreaterThanZero),
  amountToBuy: z.string().min(1).refine(isAmountGreaterThanZero),
  currencyToSell: z.string().min(1),
  currencyToBuy: z.string().min(1)
})