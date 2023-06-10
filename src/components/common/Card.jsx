import React from "react";
import { Link } from "react-router-dom";
import DescriptionIcon from '@mui/icons-material/Description';

function Card({_id,name}) {
  return (
    <Link>
      <button value={_id} className='w-full border flex justify-start items-center p-2 gap-3'>
        <DescriptionIcon/>
        {name}
      </button>
    </Link>
  );
}

export default Card;