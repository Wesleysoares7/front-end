import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorites from "../hooks/useFavorites";

type CheckboxProps = {
  id: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckBoxFavorites: React.FC<CheckboxProps> = ({
  id,
  value,
  setValue,
}) => {
  const { handleFavorite } = useFavorites({ id, setValue, value });

  return (
    <label className="relative">
      {value ? (
        <AiFillHeart className="text-red-500 text-2xl transition-colors duration-300" />
      ) : (
        <AiOutlineHeart className="text-gray-400 text-2xl transition-colors duration-300" />
      )}
      <input
        className="hidden"
        type="checkbox"
        name="favorite"
        checked={value}
        onChange={handleFavorite}
      />
    </label>
  );
};

export default CheckBoxFavorites;
