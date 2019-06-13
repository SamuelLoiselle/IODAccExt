var flagCheckerS = {

	// Welcome to my first self built application, its high level and extremely basic, feel free to judge and make recommendations (I'm popping off)

	// Keeping incase there are cases where too many alerts are an issue:
	//var singleAlert = run_once(function(){
	//alert(potentialFlag);
	//};)
	errorListThatIsCool: {
		"The discount amount can't be greater": [
			"Add this feature flag to merchants store: use_cart_discount_if_no_refund_lines_present",
		],
		"Export::LimitReachedForFreePriceTier": [
			'feature 1',
			'feature 2',
		],
		"TaxRateService::MissingTaxTypeAfterSaveError": [
			'feature 1',
			'feature 2',
		],
		"undefined method `[]' for nil:NilClass": [
			"qbo_taxes_by_line_item_including_shipping_lines",
		],
		"completed": [
			"qbo_taxes_by_line_item_including_shipping_lines",
		]
	},

	// List of each Error to be used by the application stores as properties of the errorList Object
	errorList: elist = {
		error1: "",
		error2: "",
		error3: "",
		error4: "agency is not selected",
		error5: "DuplicateNameError",
		error6: "Tax rate must be Active",
		error7: "MultipleMatchedCodesError",
		error8: "InvalidAccountTypeError: Invalid account type: For an stock product",
		error9: "Item code '",
		error10: "Net::ReadTimeout",
		error11: "undefined method downcase for ",
		error12: "MultiCurrencyNotEnabledError",
		error13: "",
		error14: "Client::Unauthorized",
		error15: "BusinessValidationError: Please enter at least one line item",
		error16: "TaxCodeMatcher::MultipleMatchedCodesError",
		error17: "Business Validation Error: We're sorry, QuickBooks encountered an error while calculating tax",
		error18: "",
		error19: "",
		error20: "",
		error21: "",

	//List of each Feature Flag to be used per Error above (each error is connected to each flag by the error number, i.e "error1" uses "flag1".  These are stored in the same way as "errorList"
	},
	flagList: fList = {
		flag1: "nothing!",
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
		flag16: "qbo_find_or_create_tax_code_when_multiple_matches_found",
		flag17: "",
		flag18: "",
		flag19: "",
		flag20: "",
		flag21: "",

	},

	errorCheck: function(errors) {
		var tdElements = document.querySelectorAll('td');
		tdElements.forEach(tdElement => {
			Object.keys(errors).forEach(errorName => {
				if(tdElement.innerHTML.includes(errorName)) {
					var errorFix = "Here's a list of Fixes for this error: \n" + errors[errorName].join(', ');
					alert(errorFix);
				} else {console.log('No errors identified on the page!')}
			})
		})
	}
};

(function() {
	flagCheckerS.errorCheck(flagCheckerS.errorListThatIsCool)
})();
