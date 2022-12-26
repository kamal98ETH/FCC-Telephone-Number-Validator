function telephoneCheck(str) {
    let validNum = /^\d{3}-\d{3}-\d{4}$|^\(\d{3}\)\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$|^\d{3} \d{3} \d{4}$|^\d{10}$|^1 \d{3} \d{3} \d{4}$|^1 \d{3}-\d{3}-\d{4}$|^1 \(\d{3}\) \d{3}-\d{4}$|^1\(\d{3}\)\d{3}-\d{4}$/;
    return validNum.test(str);
}