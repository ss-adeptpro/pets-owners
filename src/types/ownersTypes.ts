export type TGender = "Male" | "Female"

export type TPet = {
  "name": string,
  "type": string
}

export type TOwner = {
  "name": string,
  "gender": TGender
  "age": number,
  "pets": Array<TPet> | null
}

export type TOwners = Array<TOwner>