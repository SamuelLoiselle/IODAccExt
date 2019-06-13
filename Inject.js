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
			"The Merchant has reached the limit of exports for this month!",
		],
		"TaxRateService::MissingTaxTypeAfterSaveError": [
			"xero_stop_tax_name_truncation",
		],
		"agency is not selected": [
			"Please review account settings & add required agencies",
		],
		"DuplicateNameError": [
			"qbo_sanitize_customer_names",
		],
		"Tax rate must be Active": [
			"Check the tax used by the order, check the API to see if archived, may need tax rate mapping changed by Developers",
		],
		"MultipleMatchedCodesError": [
			"qbo_find_or_create_tax_code_when_multiple_matches_found",
		],
		"InvalidAccountTypeError: Invalid account type: For an stock product": [
			"removing: export_items_as_inventory_items FF is present",
		],
		"Item code": [
			"xero_clear_invalid_mappings_before_product_export",
		],
		"Net::ReadTimeout": [
			"xero_add_customer_api_pagination, typically only works for merchants with large customer base.",
		],
		"undefined method downcase for": [
			"xero_alternate_sku_code_generation",
		],
		"MultiCurrencyNotEnabledError": [
			"Shop is potentially set up in a single currency, but their 'homecurrency' is a different currency, they need to match.",
		],
		"undefined method `[]' for nil:NilClass": [
			"qbo_taxes_by_line_item_including_shipping_lines",
		],
		"Client::Unauthorized": [
			"Merchant is potentially disconnected, ask for reconnection",
		],
		"BusinessValidationError: Please enter at least one line item": [
			"Try: use_cart_discount_if_no_refund_lines_present",
		],
		"TaxCodeMatcher::MultipleMatchedCodesError": [
			"qbo_find_or_create_tax_code_when_multiple_matches_found",
		],
		"Business Validation Error: We're sorry, QuickBooks encountered an error while calculating tax": [
	  ("https://boldapps.atlassian.net/browse/ACCOUNTING-709"),
		],
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
