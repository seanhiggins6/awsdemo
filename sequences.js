var sequences = {
	"Demo Station 1: GuardDuty": [
		{
			"routing_key": services["01 Ken GuardDuty"],
			"payload": payloads["GuardDuty: RDP Brute Force Attack"],
			"delay": 0
		},
		{
			"routing_key": services["01 Ken GuardDuty"],
			"payload": payloads["GuardDuty: SSH Brute Force Attack"],
			"delay": 1
		},
		{
			"routing_key": services["01 Ken GuardDuty"],
			"payload": payloads["GuardDuty: DNS Data Exfiltration"],
			"delay": 10
		}

	],
	"Demo Station 1: Personal Health Dashboard": [
		{
			"routing_key": services["01 Ken PHD"],
			"payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
			"delay": 0
		},
		{
			"routing_key": services["01 Ken New Relic"],
			"payload": payloads["New Relic: Response Time Increase"],
			"delay": 1
		},
		{
			"routing_key": services["01 Ken PHD"],
			"payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
			"delay": 2
		},
		{
			"routing_key": services["01 Ken PHD"],
			"payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
			"delay": 3
		}

	],
	"Eric Sequence 1": [
		{
			"routing_key": services["02 Eric GuardDuty"],
			"payload": payloads["GuardDuty: RDP Brute Force Attack"],
			"delay": 0
		},
		{
			"routing_key": services["02 Eric GuardDuty"],
			"payload": payloads["GuardDuty: SSH Brute Force Attack"],
			"delay": 1
		},
		{
			"routing_key": services["02 Eric GuardDuty"],
			"payload": payloads["GuardDuty: DNS Data Exfiltration"],
			"delay": 10
		}
	]
};
