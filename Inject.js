var flagCheckerS = {

// Welcome to my first self built application, its high level and extremely basic, feel free to judge and make recommendations (I'm popping off)

// Keeping incase there are cases where too many alerts are an issue:
//var singleAlert = run_once(function(){
//alert(potentialFlag);
//};)

// List of each Error to be used by the application stores as properties of the errorList Object
errorList: elist = {
	error1: "The discount amount can't be greater",
	error2: "Export::LimitReachedForFreePriceTier",
	error3: "TaxRateService::MissingTaxTypeAfterSaveError",
	error4: "agency is not selected",
	error5: "DuplicateNameError",
	error6: "Tax rate must be Active",
	error7: "MultipleMatchedCodesError",
	error8: "InvalidAccountTypeError: Invalid account type: For an stock product",
	error9: "Item code '",
	error10: "Net::ReadTimeout",
	error11: "undefined method downcase for ",
	error12: "MultiCurrencyNotEnabledError",
	error13: "undefined method `[]' for nil:NilClass",
	error14: "Client::Unauthorized",
	error15: "BusinessValidationError: Please enter at least one line item",
	error16: "",
	error17: "",
	error18: "",
	error19: "",
	error20: "",
	error21: "",

//List of each Feature Flag to be used per Error above (each error is connected to each flag by the error number, i.e "error1" uses "flag1".  These are stored in the same way as "errorList"
},
flagList: fList = {
	flag1: "use_cart_discount_if_no_refund_lines_present",
	flag2: "The Merchant has reached the limit of exports for this month!",
	flag3: "xero_stop_tax_name_truncation",
	flag4: "Please review account settings & add required agencies",
	flag5: "qbo_sanitize_customer_names",
	flag6: "Check the tax used by the order, check the api to see if archived, may need tax rate mapping changed by Developers",
	flag7: "qbo_find_or_create_tax_code_when_multiple_matches_found",
	flag8: " removing: export_items_as_inventory_items FF is present",
	flag9: "xero_clear_invalid_mappings_before_product_export",
	flag10: "xero_add_customer_api_pagination, typically only works for merchants with large customer base.",
	flag11: "xero_alternate_sku_code_generation",
	flag12: "Shop is potentially set up in a single currency, but their 'homecurrency' is a different currency, they need to match. ",
	flag13: "qbo_taxes_by_line_item_including_shipping_lines",
	flag14: "Merchant is potentially disconnected, ask for reconnection.",
	flag15: "Try: use_cart_discount_if_no_refund_lines_present",
	flag16: "",
	flag17: "",
	flag18: "",
	flag19: "",
	flag20: "",
	flag21: "",

},

//Actual function that checks the page for a certain substring (the error) and alerts the browser based on what error is found.
errorCheck: function (errorTitle, potentialFlag) {
var tde = document.querySelectorAll('td');
for (i = 0; i < tde.length; i++) {
if (tde[i].innerHTML.includes(errorTitle)) {
alert(potentialFlag) } else { console.log('no error found')}
}
},

// The rest below is running the application for each flag (needs to be done manually for each error as stated below because I'm dumb) I could iterate through this using a loop and set the numbers to i, but this is only a prototype currently

// This is each seperate function for each list item( errors and Flags)
runCheck1: function() {
	this.errorCheck(flagCheckerS.errorList.error1, flagCheckerS.flagList.flag1)
},
runCheck2: function() {
	this.errorCheck(flagCheckerS.errorList.error2, flagCheckerS.flagList.flag2)
},
runCheck3: function() {
	this.errorCheck(flagCheckerS.errorList.error3, flagCheckerS.flagList.flag3)
},
runCheck4: function() {
	this.errorCheck(flagCheckerS.errorList.error4, flagCheckerS.flagList.flag4)
},
runCheck5: function() {
	this.errorCheck(flagCheckerS.errorList.error5, flagCheckerS.flagList.flag5)
},
runCheck6: function() {
	this.errorCheck(flagCheckerS.errorList.error6, flagCheckerS.flagList.flag6)
},
runCheck7: function() {
	this.errorCheck(flagCheckerS.errorList.error7, flagCheckerS.flagList.flag7)
},
runCheck8: function() {
	this.errorCheck(flagCheckerS.errorList.error8, flagCheckerS.flagList.flag8)
},
runCheck9: function() {
	this.errorCheck(flagCheckerS.errorList.error9, flagCheckerS.flagList.flag9)
},
runCheck10: function() {
	this.errorCheck(flagCheckerS.errorList.error10, flagCheckerS.flagList.flag10)
},
runCheck11: function() {
	this.errorCheck(flagCheckerS.errorList.error11, flagCheckerS.flagList.flag11)
},
runCheck12: function() {
	this.errorCheck(flagCheckerS.errorList.error12, flagCheckerS.flagList.flag12)
},
runCheck13: function() {
	this.errorCheck(flagCheckerS.errorList.error13, flagCheckerS.flagList.flag13)
},
runCheck14: function() {
	this.errorCheck(flagCheckerS.errorList.error14, flagCheckerS.flagList.flag14)
},
runCheck15: function() {
	this.errorCheck(flagCheckerS.errorList.error15, flagCheckerS.flagList.flag15)
},


// This is the function that runs all functions built for each list item (each error and flag)
runAll: function() {
this.runCheck1();
this.runCheck2();
this.runCheck3();
this.runCheck4();
this.runCheck5();
this.runCheck6();
this.runCheck7();
this.runCheck8();
this.runCheck9();
this.runCheck10();
this.runCheck11();
this.runCheck12();
this.runCheck13();
this.runCheck14();
this.runCheck15();
},
};



(function() {
	flagCheckerS.runAll();
})();
