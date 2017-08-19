function kgToLi(amountKg = 0) {
	const li = 2.2046;
	return (amountKg * (1 / li)).toFixed(4);
};

function liToKg(amountLi = 0){
	const li = 2.2046;
	return (amountLi * (li / 1)).toFixed(4);
};

export { kgToLi, liToKg };