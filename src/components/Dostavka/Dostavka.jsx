import React from "react";
import img from "../../assets/Vector (26).png";
import img2 from "../../assets/check-box.png";
import { Link } from "react-router-dom";

function Dostavka() {
  return (
    <>
      <div className="container">
        <h1 className="text-xl ml-[175px] mb-5">
          <strong>Оформление заказа</strong>
        </h1>
        <div className="flex justify-between mx-[280px] mb-[100px]">
          <div className="card bg-white rounded-[30px] py-[25px] px-[40px]">
            <div className="flex justify-between mb-[20px]">
              <h1 className="text-xl">
                <strong>Доставка курьером</strong>
              </h1>
              <h1 className="text-xl">
                <strong>49 $</strong>
              </h1>
            </div>
            <iframe
              className="w-[375px] h-[145px] rounded-[10px] mx-auto mb-[20px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2996.252639578038!2d69.244047!3d41.3251194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d%3A0x23ac4a5a705b84ab!2sNajot%20ta&#39;lim!5e0!3m2!1sru!2s!4v1681488131878!5m2!1sru!2s"
            ></iframe>
            <div className="flex mb-[20px]">
              <img className="my-1 mr-[20px]" src={img} alt="img" />
              <h1 className="text-xl">Адрес доставки</h1>
            </div>
            <select
              className="bg-[#D6D6D6] w-[370px] p-[14px] rounded-[15px] mb-[10px] text-[#8E8E8E]"
              name="select"
            >
              <option selected disabled>
                Город{" "}
              </option>
              <option value="select">Ташкент</option>
              <option value="select">Андижан</option>
              <option value="select">Фаргана</option>
              <option value="select">Бухара</option>
              <option value="select">Самарканд</option>
            </select>
            <br />
            <input
              className="p-[14px] rounded-[15px] bg-[#D6D6D6] w-[370px] mb-[10px] text-[#8E8E8E]"
              type="text"
              placeholder="Улица / Район"
            />
            <br />
            <div className="flex justify-between mb-[10px]">
              <input
                className="p-[14px] rounded-[15px] bg-[#D6D6D6] w-[170px] text-[#8E8E8E]"
                type="text"
                placeholder="Дом"
              />
              <input
                className="p-[14px] rounded-[15px] bg-[#D6D6D6] w-[170px]  text-[#8E8E8E]"
                type="text"
                placeholder="Подъезд"
              />
            </div>
            <input
              className="p-[14px] rounded-[15px] bg-[#D6D6D6] w-[170px] text-[#8E8E8E]"
              type="text"
              placeholder="Квартира"
            />
          </div>
          <div>
            <div className="card bg-white rounded-[30px] py-[15px] px-[20px] w-[444px] h-[155px] mb-[23px]">
              <h1 className="text-2xl mb-3">
                <strong>Ваш заказ</strong>
              </h1>
              <div className="flex justify-between mb-[5px]">
                <h2 className="text-base">1x</h2>
                <h2 className="text-base">Что вы получили</h2>
                <h2 className="text-base">$ 999.99</h2>
              </div>
              <div className="flex justify-between ml-[118px] mb-[5px]">
                <h2 className="text-base">Доставка</h2>
                <h2 className="text-base">$ 999.99</h2>
              </div>
              <div className="flex justify-between ml-[118px] ">
                <h2 className="text-base">К оплате</h2>
                <h2 className="text-base">$ 999.99</h2>
              </div>
            </div>
            <div className="card bg-white rounded-[30px] py-[15px] px-[20px] w-[444px] h-[127px] mb-[28px]">
              <h1 className="text-2xl mb-3">
                <strong>Способ оплаты</strong>
              </h1>
              <div className="flex justify-between mb-[5px]">
                <h2 className="text-base">
                  <img width={22} src={img2} alt="img" />
                </h2>
                <h2 className="text-base">Счет на kaspi.kz</h2>
                <h2 className="text-base">
                  <img width={22} src={img2} alt="img" />
                </h2>
              </div>
              <div className="flex justify-between mb-[5px]">
                <h2 className="text-base">
                  <img width={22} src={img2} alt="img" />
                </h2>
                <h2 className="text-base text-gray-600">
                  <strong>Есть промокод?</strong>
                </h2>
                <h2 className="text-base">#$</h2>
              </div>
            </div>
            <div className="card bg-white rounded-[30px] py-[15px] px-[20px] w-[444px] h-[127px] mb-[35px]">
              <h1 className="text-2xl mb-3">
                <strong>Номер получателя</strong>
              </h1>
              <input
                className="p-[14px] rounded-[15px] bg-[#D6D6D6] w-[405px] mb-[10px] text-[#8E8E8E]"
                type="text"
                placeholder="+7 ____ ____ ___ ___"
              />
            </div>
            <Link to={'/zakaz'}>
            <button className="bg-black text-center py-[14px] w-[444px] text-white rounded-[10px]">Закончить оформление</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dostavka;
