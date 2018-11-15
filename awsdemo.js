function send(routing_key, payload) {
	var desc = payload['description'] || 'unknown';
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
			$('#result').append(`Sent a ${desc} event to ${routing_key}<br>`);
		},
		error: function(jqXHR, textStatus, textError) {
			console.log(jqXHR);
			$('#result').append(`Error sending ${desc} event to ${routing_key}<br>`);
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

	Object.keys(services).forEach(function(name) {
		$('#service-select').append($('<option/>', {
			value: services[name],
			text: name
		}));
	});
	$('#service-select').selectpicker('refresh');

	Object.keys(sequences).forEach(function(name) {
		$('#sequence-select').append($('<option/>', {
			value: name,
			text: name
		}));
	});
	$('#sequence-select').selectpicker('refresh');

	$('#send-button').click(function() {
		var key = $('#service-select').val();
		var payload_name = $('#payload-select').val();
		send(key, payloads[payload_name]);
	});

	$('#sequence-send-button').click(function() {
		var sequence = sequences[$('#sequence-select').val()];
		sequence.forEach(function(event) {
			setTimeout(send, event['delay'] * 1000, event['routing_key'], event['payload']);
		});
	});
}

$(document).ready(main);
