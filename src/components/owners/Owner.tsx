import { memo } from "react";
import { TOwner } from '../../types/ownersTypes'
import Pet from '../pets/Pet';

const Owner = ({owner} : {owner: Partial<TOwner>}) => {
  const {name:ownerName, age: ownerAge} = owner;
  return (
    <article className="owner">
        <div className='ownerHeading'>{ownerName} <span className='smallText'> age - {ownerAge}</span></div>
        {
          <div className="petContainer">
            {owner.pets?.map((pet, index) => (
                <Pet key={index} pet={pet}></Pet>
            ))}
          </div>
        }
      </article>
  )
}

//memoize owner component to prevent un-necessary renderings
const OwnerMemoized = memo(Owner);
export default OwnerMemoized;