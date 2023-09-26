(function ($) {
  // Attach a custom validation function to the date field.
  Drupal.behaviors.customDateValidation = {
    attach: function (context, settings) {
      // Replace 'edit-field-start-date-certificate-0-value' with your field ID.
      var dateField = $('#edit-field-start-date-certificate-0-value-date', context);
      var errorElement = $('<div class="error-message"></div>'); // Create an error message element.

      // Attach a validation function on blur (when the field loses focus).
      dateField.once('customDateValidation').on('blur', function () {
        var startDateValue = dateField.val();
        if (startDateValue) {
          // Parse the date strings into Date objects.
          var today = new Date();
          var minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).toISOString().split("T")[0];
          var startDate = new Date(startDateValue);

          // Compare the dates.
          if (today >= startDate) {
            // Display the error message.
            errorElement.text('The date must be equal to or greater than today');
            errorElement.insertAfter(dateField);

            dateField.val(''); // Clear the field value.
            dateField.focus(); // Put the focus back on the field.
          } else {
            // Hide the error message if the date is valid.
            errorElement.remove();
          }
        }
      });
    }
  };
})(jQuery);
