// complete the given function

function palindrome(str){
	const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();  
    
    // Check if the string is the same forwards and backwards  
    const reversedStr = normalizedStr.split('').reverse().join('');  
    
    return normalizedStr === reversedStr;  

}
module.exports = palindrome
