
/**
 * Function to, given a number, convert it into string and 
 * add some '0' (left-side) to make a 'length'-digit number.
 * 
 * For example, 626 would transform into '000626' if length = 6.
 * 
 * @param number original number.
 * @param length length of the new string.
 * 
 */
export const pad = (number: number, length: number): string => {
    let str = '' + number;

    while (str.length < length) {
        str = '0' + str;
    }
   
    return str;
}