import img from "../../assets/Group.png";
import img2 from "../../assets/VK.png";
import img3 from "../../assets/Instagram.png";
import img4 from "../../assets/Telegram.png";
import img5 from "../../assets/Whatsapp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white p-[29px] mx-[165px] rounded-t-[30px] mt-[60px]">
        <div className="container flex justify-between">
          <Link to={"/"}>
            <h1 className="text-2xl">
              <strong>QPICK</strong>
            </h1>
          </Link>

          <ul>
            <li className="mb-2">
              <Link to={"/liked"}>Избранное</Link>
            </li>
            <li className="mb-2">
              <Link to={"/korzinka"}>Корзинa</Link>
            </li>
            <li>
              <Link to={"/kontact"}>Контакты</Link>
            </li>
          </ul>
          <div className="card">
            <h2 className="mb-7">
              <Link to={"/servise"}>Условия сервиса</Link>
            </h2>
            <div className="flex justify-between">
              <img src={img} alt="world" />
              <h2>Каз</h2>
              <h2>Pyc</h2>
              <h2>Eng</h2>
            </div>
          </div>
          <div className="flex justify-between w-[15%] h-[30px]">
            <img width={30} height={30} src={img2} alt="VK" />
            <img width={30} height={30} src={img3} alt="instagram" />
            <img width={30} height={30} src={img4} alt="telegram" />
            <img width={30} height={30} src={img5} alt="whatsapp" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
