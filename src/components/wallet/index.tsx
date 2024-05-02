import { useState } from "react";
import { TypeWallet } from "../../interfaces/typeWallet";
import { Amount } from "./amount";

// import { FaPlus, FaMinus } from "react-icons/fa";
import { CurrFormat } from "../../utils/format";
type props = {
  wallet: TypeWallet;
};

export const Wallet = ({ wallet }: props) => {
  const [showIncoming, setShowIncoming] = useState(false);
  const [showOutcoming, setShowOutcoming] = useState(false);

  const handleShow = () => {
    setShowIncoming(!(showIncoming && showOutcoming));
    setShowOutcoming(!(showIncoming && showOutcoming));
  };
  const handleShowIncoming = () => setShowIncoming((show) => !show);
  const handleShowOutcoming = () => setShowOutcoming((show) => !show);

  const { description, value, currency, incoming, outcoming } = wallet;
  return (
    <div className="border-b pl-2 flex flex-col gap-2 mt-4 pb-2">
      <div className="flex">
        <div
          className="flex-1 font-bold cursor-pointer select-none text-xl"
          onClick={handleShow}
        >
          {description}
        </div>
        <div>{CurrFormat(currency).format(value)}</div>
      </div>
      {incoming.length > 0 && (
        <div className={`${incoming.length > 0 ? "visible" : "h-0 invisible"}`}>
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={handleShowIncoming}
          >
            <div>{incoming.length}</div>
            Incoming:
          </div>
          <div
            className={` transition-all ${
              showIncoming ? "max-h-96" : "max-h-0 overflow-hidden"
            }`}
          >
            {incoming.map((amount, key) => (
              <Amount key={key} currency={currency} amount={amount} />
            ))}
          </div>
        </div>
      )}
      {outcoming.length > 0 && (
        <div
          className={`${outcoming.length > 0 ? "visible" : "h-0 invisible"}`}
        >
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleShowOutcoming}
          >
            <div>{outcoming.length}</div>
            Outcoming:
          </div>
          <div
            className={` transition-all ${
              showOutcoming ? "max-h-96" : "max-h-0 overflow-hidden"
            }`}
          >
            {outcoming.map((amount, key) => (
              <Amount key={key} currency={currency} amount={amount} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
