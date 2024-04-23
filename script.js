document.addEventListener("DOMContentLoaded", function() {
    const checkBtn = document.getElementById("checkBtn");
  
    checkBtn.addEventListener("click", function() {
      checkPalindrome();
    });
  
    function checkPalindrome() {
      const word = document.getElementById("word").value.toLowerCase().replace(/[^a-z]/g, "");
      const reversedWord = word.split("").reverse().join("");
      const isPalindrome = word === reversedWord;
  
      if (isPalindrome) {
        document.getElementById("result").textContent = `"${word}" is a palindrome.`;
      } else {
        document.getElementById("result").textContent = `"${word}" is not a palindrome.`;
      }
    }
});
  