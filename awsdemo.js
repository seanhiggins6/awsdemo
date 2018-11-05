function send(routing_key, payload) {
	var message = {
		type: "POST",
		dataType: "json",
		contentType: "application/json",
		headers: {
			"Accept": "application/vnd.pagerduty+json;version=2.0"
		},
		url: `https://events.pagerduty.com/integration/${routing_key}/enqueue`,
		data: JSON.stringify(payload),
		success: function(data) {
			$('#result').append(`Sent a ${$('#payload-select').val()} event to ${$('#service-select').val()}<br>`);
		},
		error: function(jqXHR, textStatus, textError) {
			console.log(jqXHR);
			$('#result').append(`Error sending ${$('#payload-select').val()} event to ${$('#service-select').val()}<br>`);
		}

	}
	
	$.ajax(message);
}

function main() {
	$('.selectpicker').selectpicker();
	Object.keys(payloads).forEach(function(name) {
		$('#payload-select').append($('<option/>', {
			value: name,
			text: name
		}));
	});
	$('#payload-select').selectpicker('refresh');

	services.forEach(function(service) {
		$('#service-select').append($('<option/>', {
			value: service.key,
			text: service.name
		}));
	});
	$('#service-select').selectpicker('refresh');

	$('#send-button').click(function() {
		var key = $('#service-select').val();
		var payload_name = $('#payload-select').val();
		send(key, payloads[payload_name]);
	});
}

$(document).ready(main);
