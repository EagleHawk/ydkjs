function postTransaction() {

	if (isTransactionvalid()) {
		return saveTransaction();
	} else {
		return rejectTransaction();
	}
}


function postTransaction() {
	return isTransactionvalid() ?
		saveTransaction() : rejectTransaction();
}


function postTransaction(transdata)
{
	if(transdata.assetclass=="MF"){
		return saveMFTransaction(transdata);
	}
	else if( transdata.assetclass=="EQ"){
		return saveEQTransaction(transdata);
	}
	else if(transdata.assetclass=="DEPO"){
		return saveDEPOTransaction(transdata);
	}
	else{
		return rejectTransaction(transdata);
	}
}

function postTransaction(transdata)
{
	return 
	transdata.assetclass=="MF"   ? saveMFTransaction(transdata);
	transdata.assetclass=="EQ" 	 ? saveEQTransaction(transdata);
	transdata.assetclass=="DEPO" ? saveDEPOTransaction(transdata);
								 : rejectTransaction(transdata);
}















