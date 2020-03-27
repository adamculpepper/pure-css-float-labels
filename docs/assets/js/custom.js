$(function() {
	$('.select2').select2({
		placeholder: '- SELECT -',
	});

	// $('.select').select2({
	// 	placeholder: 'Select Name'
	// }).on('change select2:opening', function(e) {
	// 	if ($(this).val() != null) {
	// 		$(this).parent().find('.select2-container').addClass('select2-has-value');
	// 	} else {
	// 		$(this).parent().find('.select2-container').removeClass('select2-has-value');
	// 	}
	// }).on('select2:opening', function(e) {
	// 	var placeholder = $(this).parent().find('.select2-selection__placeholder').text() || $(this).parent().find('label').text();
	// 	var el = $(this).parent().find('.select2-container');

	// 	$(this).parent().find('label:not(.select2-float-label)').hide();

	// 	if (el.find('label.select2-float-label').length == 0) {
	// 		el.addClass('select2-has-opened').append('<label class="select2-float-label">' + placeholder + '</label>');
	// 	}
	// });
});