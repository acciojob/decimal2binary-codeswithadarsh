function decimalToBinary(num) {
	
  //Write you code here
	let sum=""
	if(num==0)
	{
		return 0;
	}
	while(num>0)
		{
			sum=(num%2)+sum;
			num=Math.floor(num/2);
		}
	return sum;
  
}

window.decimalToBinary = decimalToBinary;