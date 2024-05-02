import { Wallet } from "../../components/wallet";
import { LastExchangeRate, wallets } from "../../data/data";
import {
  usdFormat,
  brlFormat,
  pygFormat,
  DateFormat,
} from "../../utils/format";
import { getTotaUSDlWallets } from "../../utils/wallet";

function Home() {
  const { valueBRL, valuePYG, day, month } = LastExchangeRate();
  return (
    <div className="flex flex-col py-2 m-2 w-96 right-0 bottom-0 top-0 absolute border rounded-xl text-white/75 bg-slate-700 overflow-hidden">
      <div className="px-2 pb-2 font-bold border-b text-2xl text-center">
        App Expenses Control
      </div>
      <div className="px-2 font-bold border-b text-xl flex gap-2 justify-between ">
        <div>Total</div>
        <div>{usdFormat.format(getTotaUSDlWallets(wallets))}</div>
      </div>
      <div className="px-2 font-bold border-b flex gap-2 justify-between ">
        <div>Cambio ({DateFormat(day, month)})</div>
        <div>{brlFormat.format(valueBRL)}</div>
        <div>{pygFormat.format(valuePYG)}</div>
      </div>
      <div className="px-2 flex flex-col flex-1 overflow-y-auto">
        {wallets
          .sort((a, b) => a.description.localeCompare(b.description))
          .map((wallet, key) => (
            <Wallet wallet={wallet} key={key} />
          ))}
      </div>
    </div>
  );
}

export default Home;
