function getDataset(transdata)
{
	switch(transdata.assetclass)
	{
		case "EQ":
			return getEQData(transdata);
		case "MF":
			return getMFData(transdata);
		case "DEPO":
			return getDEPOData(transdata);
		default:
			return getBlankData(transdata);
	}
}

var dataset={
	"EQ":getEQData,
	"MF":getMFData,
	"DEPO":getDEPOData,
	"default":getBlankData
}
function getDataset(transdata)
{
	return 
	dataset[transdata.assetclass] 
	?dataset[transdata.assetclass].call(this,transdata);
    :dataset.default.call(this.transdata)
}

