import Image from "next/image";

type Cart = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};
export const CartItem = ({
  item,
  onDelete,
  onQuantityChange,
}: {
  item: Cart;
  onDelete: (id: number) => void;
  onQuantityChange: (id: number, change: number) => void;
}) => {
  return (
    <div className="grid w-full grid-cols-8 px-3 py-4 space-x-10 border-b border-gray-200 ">
      <div className="flex items-start w-full col-span-3  gap-5 md:col-span-4">
        <Image
          src={item.image}
          alt={item.name}
          width={200}
          height={200}
          className="object-cover object-center w-16 h-16 sm:w-20 sm:h-20 rounded-md"
        />

        <div className="flex flex-col justify-center h-full gap-2 py-2 md:justify-start">
          <h3 className="font-medium  text-sm  md:text-lg">{item.name}</h3>
          <p className="text-sm text-[#6F6F6F] max-w-[300px] md:block hidden">
            {item.description}
          </p>
        </div>
      </div>

      <div className="items-center hidden md:flex md:col-span-1 text-nowrap">
        <p className="text-lg tracking-wider">Rs {item.price}</p>
      </div>

      <div className="flex items-center col-span-2 space-x-4 select-none md:col-span-1 flex-nowrap">
        <button
          className="text-gray-500"
          onClick={() => onQuantityChange(item.id, -1)}
        >
          -
        </button>
        <span className="">{item.quantity}</span>
        <button
          onClick={() => onQuantityChange(item.id, 1)}
          className="text-gray-500"
        >
          +
        </button>
      </div>

      <div className="flex items-center col-span-2 md:col-span-1">
        <p className="text-sm tracking-wider md:text-lg text-nowrap">
          Rs {item.price * item.quantity}
        </p>
      </div>

      <div className="flex items-center col-span-1 select-none">
        <button
          onClick={() => onDelete(item.id)}
          className="text-red-600 hover:text-red-800 scale-110"
        >
          X
        </button>
      </div>
    </div>
  );
};
