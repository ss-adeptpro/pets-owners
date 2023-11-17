import isNil from "lodash/isNil";
import isNaN from "lodash/isNaN";
import {isEmpty as isInputEmpty} from "lodash";
import { TPet } from "../types/ownersTypes";

const PET_TYPE_FILTER : string = 'cat';

/**
 * Group array of objects by given keys
 * @param keys keys to be grouped by
 * @param array objects to be grouped
 * @returns an object with objects in `array` grouped by `keys`
 */
export const groupListByKey = <T>(keys: (keyof T)[]) => (array: T[]): Record<string, T[]> =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = keys.map((key) => obj[key]).join('-');
    if(!isValidString(value))
      return {};

    //pull owners only with Cats (as per the pet type)
    const petsArray = obj?.pets && obj.pets.filter(pet => {  		
      return (pet.type.toLowerCase() === PET_TYPE_FILTER)
    })

    //sort the cats
    petsArray && petsArray.sort((a:TPet, b:TPet) => b.name.localeCompare(a.name))
    const objTemp = { ...obj, pets: petsArray };
    
    //exclude owners having no pets
    petsArray && (objectsByKeyValue[value.toLowerCase()] = (objectsByKeyValue[value.toLowerCase()] || []).concat(objTemp));
    
    return objectsByKeyValue;
  }, {} as Record<string, T[]>);


/**
 * Check if input string is empty
 * @param text string to be checked
 * @returns boolean
 */
export const isEmpty = function(text: string): boolean {
  return (!text || text.trim() === "");
};

/**
 * Check if input string is valid - Not allowed - NULL, NAN, blank, "", undefined
 * @param inputStr string to be checked
 * @returns boolean
 */
export const isValidString = (inputStr:string) => {
  return !isNil(inputStr) && !isNaN(inputStr) && !isInputEmpty(inputStr);
};
