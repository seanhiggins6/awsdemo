var sequences = {
	"Ken Sequence 1": [
		{
			"routing_key": services["01 Ken CloudWatch"],
			"payload": payloads["GuardDuty: RDP Brute Force Attack"],
			"delay": 0
		},
		{
			"routing_key": services["01 Ken CloudWatch"],
			"payload": payloads["GuardDuty: SSH Brute Force Attack"],
			"delay": 1
		},
		{
			"routing_key": services["01 Ken CloudWatch"],
			"payload": payloads["GuardDuty: DNS Data Exfiltration"],
			"delay": 10
		}

	],
	"Eric Sequence 1": [
		{
			"routing_key": services["02 Eric CloudWatch"],
			"payload": payloads["GuardDuty: RDP Brute Force Attack"],
			"delay": 0
		},
		{
			"routing_key": services["02 Eric CloudWatch"],
			"payload": payloads["GuardDuty: SSH Brute Force Attack"],
			"delay": 1
		},
		{
			"routing_key": services["02 Eric CloudWatch"],
			"payload": payloads["GuardDuty: DNS Data Exfiltration"],
			"delay": 10
		}
	]
};