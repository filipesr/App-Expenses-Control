import { TypeAmount } from "../../interfaces/typeAmount";
import { CurrFormat, DateFormat } from "../../utils/format";

type props = {
  amount: TypeAmount;
  currency: string;
};

export const Amount = ({ amount, currency }: props) => {
  const { description, value, day, month, year } = amount;
  return (
    <div
      className="flex pl-2 gap-2 hover:bg-slate-600 text-sm cursor-zoom-in"
      title={`${DateFormat(day, month, year)}`}
    >
      <div>{DateFormat(day)}</div>
      <div className="flex-1">{description}</div>
      <div>{CurrFormat(currency).format(value)}</div>
    </div>
  );
};
