/**
 * [(lv.3)날짜-포맷팅-하기.js]
 *
 * 1) formatDate 함수를 작성하세요.
 * 2) Date 객체를 입력받아 "YYYY년 MM월 DD일 HH시 mm분" 형식으로 문자열을 반환하세요.
 * 3) 월, 일, 시, 분이 한 자리면 앞에 0을 붙이세요.
 * 4) 예: 2021년 1월 1일 1시 1분 → "2021년 01월 01일 01시 01분"
 *
 * @param {Date} date
 * @returns {string}
 */

function formatDate(date) {
    const stringDate = date.toLocaleString()
    let arrayDate = stringDate.split('. ')
    let arrayTime = arrayDate[3].slice(3).split(':')
    let isMorning = arrayDate[3].slice(0, 3)
    let plus12 = 0
    if (isMorning === '오후 ') {
        plus12 = 12
    }
    arrayDate.splice(3, 1, ...arrayTime)
    let filledDate = arrayDate.map((d, idx) => {
        if (idx === 3) {
            d = String(parseInt(d) + plus12)
        }
        return d.length > 1 ? d : '0' + d
    })
    console.log('plus12 =====>', filledDate[3], parseInt(filledDate[3]) + plus12);
    let result = `${filledDate[0]}년 ${filledDate[1]}월 ${filledDate[2]}일 ${filledDate[3]}시 ${filledDate[4]}분`
    return result
}

// export를 수정하지 마세요.
export { formatDate };
