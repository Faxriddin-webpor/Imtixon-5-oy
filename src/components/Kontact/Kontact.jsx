import React from "react";
import img from "../../assets/Vector (20).png";
import img2 from "../../assets/Vector (21).png";
import img3 from "../../assets/Instagram.png";
import img4 from "../../assets/Telegram.png";
import img5 from "../../assets/Whatsapp.png";
import img6 from "../../assets/VK.png";

function Kontact() {
  return (
    <>
      <div className="flex justify-between mx-[260px]">
        <div>
          <div className="py-4 px-5 rounded-[30px] bg-white w-[750px] h-[550px] mb-[40px]">
            <h1 className="text-xl mb-2">
              <strong>Наш офис</strong>
            </h1>
            <div>
              <iframe
                className="mb-3 w-[700px] h-[440px] rounded-[10px] mx-auto"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2996.252639578038!2d69.244047!3d41.3251194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d%3A0x23ac4a5a705b84ab!2sNajot%20ta&#39;lim!5e0!3m2!1sru!2s!4v1681488131878!5m2!1sru!2s"
              ></iframe>
            </div>
            <div className="flex gap-4">
              <img className="max-h-[25px] mt-2" src={img} alt="img" />
              <div>
                <h2 className=" text-base">
                  <strong>Аксай-3а, 62ф, Алматы, Казахстан</strong>
                </h2>
                <p className="text-gray-500">3 этаж 35 кабинет</p>
              </div>
            </div>
          </div>
          <div className="flex gap-7">
            <img className="max-h-[50px]" src={img2} alt="img" />
            <h1 className="text-2xl">
              <strong>+7 777 777 77 77</strong>
            </h1>
          </div>
        </div>
       <div className="max-w-[88px] mr-[70px]">
       <div className="card max-h-[88px] p-6 rounded-[30px] bg-white mb-[22px]">
          <img width={40} height={40} src={img5} alt="img" />
        </div>
        <div className="card max-h-[88px] p-6 rounded-[30px] bg-white mb-[22px]">
          <img width={40} height={40} src={img6} alt="img" />
        </div>
        <div className="card max-h-[88px] p-6 rounded-[30px] bg-white mb-[22px]">
          <img width={40} height={40} src={img3} alt="img" />
        </div>
        <div className="card max-h-[88px] p-6 rounded-[30px] bg-white">
          <img width={40} height={40} src={img4} alt="img" />
        </div>
       </div>
      </div>
    </>
  );
}

export default Kontact;
