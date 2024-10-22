import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export let FixDetailsPageId = createContext(null);

export const FixDetailsPageIdProvider = ({ children }) => {
  const navigate = useNavigate();
  const moveTo = (id) => {
    // مشكلة تظهر فى الصور المستخدمة فى كومبوننت سواجر عند السحب بسرعة تحدث مشكلة فى الايدى من الباك يضيف لل ايدى اكس وهذة الدالة لحل هذه المشكلة
    console.log(id);
    const num = +id;
    if (isNaN(num)) {
      const x = [...id];
      x.pop();
      const newId = x.join("");
      console.log(newId);
      navigate(`/details/${newId}/`);
    } else {
      navigate(`/details/${id}/`);
    }
  };

  return (
    <FixDetailsPageId.Provider value={{ moveTo }}>
      {children}
    </FixDetailsPageId.Provider>
  );
};

export default FixDetailsPageIdProvider;
