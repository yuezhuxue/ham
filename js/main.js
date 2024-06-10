function getBaseName(strPath){
	let strA = strPath.split("/");
	let strB = strA[strA.length -1].split(".")[0]
	return strB
}
function getLevelName(strCheck){
    if(strCheck==="aa"){
		return "A";
	}else if(strCheck==="ba"){
	    return "BA";
	}else if(strCheck==="bb"){
	    return "BB";
	}else if(strCheck==="ab"){
	    return "B";
	}else if(strCheck==="ca"){
	    return "CA";
	}else if(strCheck==="cb"){
	    return "CB";
	}else if(strCheck==="cc"){
	    return "CC";
	}else if(strCheck==="abc"){
	    return "C";
	}else{
		return "N";
	}
}
function getRealCount(strCheck){
    if(strCheck==="aa"){
		return 365;
	}else if(strCheck==="ba"){
	    return 210;
	}else if(strCheck==="bb"){
	    return 479;
	}else if(strCheck==="ab"){
	    return 689;
	}else if(strCheck==="ca"){
	    return 211;
	}else if(strCheck==="cb"){
	    return 477;
	}else if(strCheck==="cc"){
	    return 378;
	}else if(strCheck==="abc"){
	    return 1066;
	}else{
		return -1;
	}
}
function getImagePath(){
	return "https://yuezhuxue.github.io/ham/images/pic/";
}
