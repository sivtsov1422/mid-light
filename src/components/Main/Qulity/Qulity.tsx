import { useState } from "react";
import property from "../../../data/property.json";
import { Property } from "../../../interfaces/index.ts";
import styled from "./index.module.css";
import arrow from "../../../imgs/icons/arrow.png";

const Qulity = () => {
  const [openId, setOpenId] = useState<null | number>(null);

  const handleClick = (id: number) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };
  return (
    <div>
      <div className={styled.container}>
        {property.propertyies.map((prop: Property, id: number) => (
          <div onClick={() => handleClick(id)} key={prop.id} className={styled.prop}>
            <div className={styled.closeContainer}>
              <h3 className={styled.accordion}>
                {prop.name}
              </h3>
              <img src={arrow} alt="" className={id === openId ? styled.arrowClose : styled.arrow} />
            </div>
            <div className={id === openId ? styled.open : styled.close}>
              <p className={styled.propDes}>{prop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qulity;
