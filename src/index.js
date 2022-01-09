module.exports = function toReadable (number) {
    let ans ='';
    const oneToNine = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['','', 'hundred','thousand','million', 'billion','trillion'];
    let numberString = number.toString()
     let numberReversed = numberString.split('').reverse().join('')
    for (let i = 0; i < numberReversed.length; i++) {
        if (number === 0) {
            return 'zero'
        }
        if (numberReversed[i] !== '0') {
            if (i === 0 || i === 1) {
                const dozen = Number(numberString.slice(-2)) 
                    if (dozen < 20) {
                        ans += oneToNine[dozen]
                         if (i === 0) {
                             i++
                            }
                    } else {
                        ans = ans + dozens[Math.floor(dozen/10)];

                        if (dozen%10 !== 0) {
                        ans = ans + ' ' + oneToNine[dozen%10];
                    }
                    if (i === 0) {
                        i++
                       }
                    }

            } else {
                if (ans !== '') {
                    ans = ' ' + ans
                }
                ans = oneToNine[Number(numberReversed[i])] + ' ' + hundreds[i] + ans;
            }   
            }
    } 
    return ans
}