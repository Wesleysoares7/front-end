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
    <label className="z-10">
      {value ? (
        <AiFillHeart className="text-red-600 bg-netural_colour-gray4 rounded-sm text-3xl absolute right-1/2" />
      ) : (
        <AiOutlineHeart
          className="text-zinc-300
        text-3xl absolute right-1/2 "
        />
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
