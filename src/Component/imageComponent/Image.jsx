import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FixDetailsPageId } from "../../contexts/FixDetailsPageId";
const Image = ({ id, image }) => {
const {moveTo}=useContext(FixDetailsPageId)
  return (
    <div onClick={() => moveTo(id)} style={{ cursor: "pointer" }}>
      <img
        className='w-100 d-block '
        style={{ borderRadius: 2 }}
        src={image}
        alt='book'
      />
    </div>
  );
};

export default Image;
