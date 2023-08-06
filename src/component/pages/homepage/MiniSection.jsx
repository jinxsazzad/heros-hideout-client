import { BiHappy } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
const MiniSection = () => {
  return (
    <section>
      <div className="md:flex items-center justify-between gap-3 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 p-7">
        <div className="flex justify-center items-center border-e-2 px-4 border-gray-500">
          <BiHappy className="text-7xl text-white" />
          <div>
            <h4 className="text-2xl font-semibold text-white">
              100% Satisfaction
            </h4>
            <p className="text-white">If You Are Unable</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center border-e-2 px-4 border-gray-500">
            <MdSupportAgent className="text-7xl text-white" />
            <div>
              <h4 className="text-2xl font-semibold text-white">
                Online Support
              </h4>
              <p className="text-white">Any Time Support</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center border-e-2 px-4 border-gray-500">
            <RiMoneyDollarCircleLine className="text-7xl text-white" />
            <div>
              <h4 className="text-2xl font-semibold text-white">
                Money Returns
              </h4>
              <p className="text-white">Back Guarantee In 7 Days</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center px-4">
            <TbDiscount2 className="text-7xl text-white" />
            <div>
              <h4 className="text-2xl font-semibold text-white">
                Member Discount
              </h4>
              <p className="text-white">On Customer's First order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniSection;
