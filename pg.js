  // step4
  let copyIcon=document.getElementById('icon')
  copyIcon.addEventListener('click',()=>{
      let password=document.getElementById('butn').innerText
      navigator.clipboard.writeText(password);
      let button=document.getElementById('butn')
      button.style.backgroundColor="grey"
      setTimeout(()=>{
        button.style.backgroundColor="white"
      },200)
  })

// step 3
let display=(code)=>{
  let newcode=document.getElementById('butn')
  newcode.innerText=code


}
// step 2
let generateCode=()=>{
    let smallAlphabet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let smallAlpha1=smallAlphabet[Math.floor(Math.random() * 26)]
    let smallAlpha2=smallAlphabet[Math.floor(Math.random() * 26)]
    
    
    let capitalAlphabet=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let capitalAlpha1=capitalAlphabet[Math.floor(Math.random() * 26)]
    let capitalAlpha2=capitalAlphabet[Math.floor(Math.random() * 26)]
    
    let digit=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let number1=digit[Math.floor(Math.random() * 10)]
    let number2=digit[Math.floor(Math.random() * 10)]
    
    let specialCharacter=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", "'", "\"", "<", ">", ",", ".", "?", "/", "|", "\\","~","`"]
    let special1=specialCharacter[Math.floor(Math.random() * 32)]
    let special2=specialCharacter[Math.floor(Math.random() * 32)]
    
    let code=smallAlpha1 + capitalAlpha1 +special1+smallAlpha2+number1+number2 +capitalAlpha2+special2
    display(code)
}
// step1
button=document.getElementById('butn1')
button.addEventListener('click',()=>{
   generateCode();
})