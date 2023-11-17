import { TPet } from "../../types/ownersTypes"

const Pet = ({pet} : {pet: TPet}) => {
  //console.log('pet ', pet)
  return (
    <div>{pet.name}</div>
  )
}

export default Pet