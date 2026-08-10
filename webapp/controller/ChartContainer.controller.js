sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/base/strings/formatMessage"
], function(jQuery, Controller, formatMessage) {
	"use strict";

	return Controller.extend("sap.suite.ui.commons.demo.tutorial.controller.ChartContainer", {
		formatMessage: formatMessage,
		onNavButtonPressed: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("home");
		},

		/**
		 * Determines the QC status of a temperature reading against its target.
		 *
		 * @param {float} fTemperature Actual measured temperature
		 * @param {float} fTarget Target temperature
		 * @returns {string} ObjectStatus state: Success, Warning, or Error
		 */
		getTemperatureState: function(fTemperature, fTarget) {
			var fDeviation = Math.abs(fTemperature - fTarget);

			if (fDeviation <= 0.5) {
				return "Success";
			} else if (fTemperature > fTarget) {
				return fDeviation <= 1.5 ? "Warning" : "Error";
			} else {
				return fDeviation <= 1.5 ? "Warning" : "Error";
			}
		}
	});
});
