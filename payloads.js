var gd1 = {
  "Type": "Notification",
  "MessageId": "6075324b-6a29-5037-a334-6615f432c846",
  "TopicArn": "arn:aws:sns:us-east-1:785665517223:PD-GuardDuty",
  "Message": "{\"version\":\"0\",\"id\":\"0a02eb58-c6de-dbf4-0a08-69c8828f5723\",\"detail-type\":\"GuardDuty Finding\",\"source\":\"aws.guardduty\",\"account\":\"785665517223\",\"time\":\"2018-11-08T20:25:00Z\",\"region\":\"us-east-1\",\"resources\":[],\"detail\":{\"schemaVersion\":\"2.0\",\"accountId\":\"785665517223\",\"region\":\"us-east-1\",\"partition\":\"aws\",\"id\":\"f0b37a7d5504bba0ec3493e776a0c54f\",\"arn\":\"arn:aws:guardduty:us-east-1:785665517223:detector/42b37a41c84bb93843b6829029ead712/finding/f0b37a7d5504bba0ec3493e776a0c54f\",\"type\":\"UnauthorizedAccess:EC2/SSHBruteForce\",\"resource\":{\"resourceType\":\"Instance\",\"instanceDetails\":{\"instanceId\":\"i-99999999\",\"instanceType\":\"m3.xlarge\",\"launchTime\":\"2016-08-02T02:05:06Z\",\"platform\":null,\"productCodes\":[{\"productCodeId\":\"GeneratedFindingProductCodeId\",\"productCodeType\":\"GeneratedFindingProductCodeType\"}],\"iamInstanceProfile\":{\"arn\":\"GeneratedFindingInstanceProfileArn\",\"id\":\"GeneratedFindingInstanceProfileId\"},\"networkInterfaces\":[{\"ipv6Addresses\":[],\"networkInterfaceId\":\"eni-bfcffe88\",\"privateDnsName\":\"GeneratedFindingPrivateDnsName\",\"privateIpAddress\":\"10.0.0.1\",\"privateIpAddresses\":[{\"privateDnsName\":\"GeneratedFindingPrivateName\",\"privateIpAddress\":\"10.0.0.1\"}],\"subnetId\":\"GeneratedFindingSubnetId\",\"vpcId\":\"GeneratedFindingVPCId\",\"securityGroups\":[{\"groupName\":\"GeneratedFindingSecurityGroupName\",\"groupId\":\"GeneratedFindingSecurityId\"}],\"publicDnsName\":\"GeneratedFindingPublicDNSName\",\"publicIp\":\"198.51.100.0\"}],\"tags\":[{\"key\":\"GeneratedFindingInstaceTag1\",\"value\":\"GeneratedFindingInstaceValue1\"},{\"key\":\"GeneratedFindingInstaceTag2\",\"value\":\"GeneratedFindingInstaceTagValue2\"},{\"key\":\"GeneratedFindingInstaceTag3\",\"value\":\"GeneratedFindingInstaceTagValue3\"},{\"key\":\"GeneratedFindingInstaceTag4\",\"value\":\"GeneratedFindingInstaceTagValue4\"},{\"key\":\"GeneratedFindingInstaceTag5\",\"value\":\"GeneratedFindingInstaceTagValue5\"},{\"key\":\"GeneratedFindingInstaceTag6\",\"value\":\"GeneratedFindingInstaceTagValue6\"},{\"key\":\"GeneratedFindingInstaceTag7\",\"value\":\"GeneratedFindingInstaceTagValue7\"},{\"key\":\"GeneratedFindingInstaceTag8\",\"value\":\"GeneratedFindingInstaceTagValue8\"},{\"key\":\"GeneratedFindingInstaceTag9\",\"value\":\"GeneratedFindingInstaceTagValue9\"}],\"instanceState\":\"running\",\"availabilityZone\":\"GeneratedFindingInstaceAvailabilityZone\",\"imageId\":\"ami-99999999\",\"imageDescription\":\"GeneratedFindingInstaceImageDescription\"}},\"service\":{\"serviceName\":\"guardduty\",\"detectorId\":\"42b37a41c84bb93843b6829029ead712\",\"action\":{\"actionType\":\"NETWORK_CONNECTION\",\"networkConnectionAction\":{\"connectionDirection\":\"INBOUND\",\"remoteIpDetails\":{\"ipAddressV4\":\"198.51.100.0\",\"organization\":{\"asn\":\"-1\",\"asnOrg\":\"GeneratedFindingASNOrg\",\"isp\":\"GeneratedFindingISP\",\"org\":\"GeneratedFindingORG\"},\"country\":{\"countryName\":\"GeneratedFindingCountryName\"},\"city\":{\"cityName\":\"GeneratedFindingCityName\"},\"geoLocation\":{\"lat\":0,\"lon\":0}},\"remotePortDetails\":{\"port\":32794,\"portName\":\"Unknown\"},\"localPortDetails\":{\"port\":22,\"portName\":\"SSH\"},\"protocol\":\"TCP\",\"blocked\":false}},\"resourceRole\":\"TARGET\",\"additionalInfo\":{\"sample\":true},\"eventFirstSeen\":\"2018-11-08T20:19:20.202Z\",\"eventLastSeen\":\"2018-11-08T20:21:59.714Z\",\"archived\":false,\"count\":2},\"severity\":2,\"createdAt\":\"2018-11-08T20:19:20.202Z\",\"updatedAt\":\"2018-11-08T20:21:59.714Z\",\"title\":\"198.51.100.0 is performing SSH brute force attacks against i-99999999. \",\"description\":\"198.51.100.0 is performing SSH brute force attacks against i-99999999. Brute force attacks are used to gain unauthorized access to your instance by guessing the SSH password.\"}}",
  "Timestamp": "2018-11-08T20:26:03.242Z",
  "SignatureVersion": "1",
  "Signature": "LhAnPetDBBHT9q4QXrcrxjWGqyOilg1rBYkhwb6z00D2gLIvCXvw2CBS9IM95/iuIhW/UwJJgYizMAkcHfz2HkJ76hqD9fmmJr6ZPwjhj/BkECVKTkrQ1NqYj+aYELbI6wbaJashbsSnmxOKwfA5gFjj5nlV9oouwT7h4SPPFaJI1KFFFGH8Hz1vGt3VrXC7uqHNDvD4tJEX1ZMotV02ElBHexJ2XUFCtzx/NcSghld10MKEgLGMFLmaex936YfEvGgmHXNjPF02CwS3A9fX7oIg7Chj45f+QarcZgpUnmF7F6t1fIMinp9aDBd5gQ0pJHzbaqk9tc9aG1IqT7LYLg==",
  "SigningCertURL": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:785665517223:PD-GuardDuty:658275cf-64ca-4874-a4e5-d20b4aa45416"
};

var rdp_brute_force = {
  "Type": "Notification",
  "MessageId": "6f38ab2f-4ba1-5a96-86be-ff71d5bd0803",
  "TopicArn": "arn:aws:sns:us-east-1:785665517223:PD-GuardDuty",
  "Message": "{\"version\":\"0\",\"id\":\"ba891748-fd3c-7b26-c61b-a784914a514e\",\"detail-type\":\"GuardDuty Finding\",\"source\":\"aws.guardduty\",\"account\":\"785665517223\",\"time\":\"2018-11-08T20:25:03Z\",\"region\":\"us-east-1\",\"resources\":[],\"detail\":{\"schemaVersion\":\"2.0\",\"accountId\":\"785665517223\",\"region\":\"us-east-1\",\"partition\":\"aws\",\"id\":\"9ab37a7d551920d34ae1be4350c63772\",\"arn\":\"arn:aws:guardduty:us-east-1:785665517223:detector/42b37a41c84bb93843b6829029ead712/finding/9ab37a7d551920d34ae1be4350c63772\",\"type\":\"UnauthorizedAccess:EC2/RDPBruteForce\",\"resource\":{\"resourceType\":\"Instance\",\"instanceDetails\":{\"instanceId\":\"i-99999999\",\"instanceType\":\"m3.xlarge\",\"launchTime\":\"2016-08-02T02:05:06Z\",\"platform\":null,\"productCodes\":[{\"productCodeId\":\"GeneratedFindingProductCodeId\",\"productCodeType\":\"GeneratedFindingProductCodeType\"}],\"iamInstanceProfile\":{\"arn\":\"GeneratedFindingInstanceProfileArn\",\"id\":\"GeneratedFindingInstanceProfileId\"},\"networkInterfaces\":[{\"ipv6Addresses\":[],\"networkInterfaceId\":\"eni-bfcffe88\",\"privateDnsName\":\"GeneratedFindingPrivateDnsName\",\"privateIpAddress\":\"10.0.0.1\",\"privateIpAddresses\":[{\"privateDnsName\":\"GeneratedFindingPrivateName\",\"privateIpAddress\":\"10.0.0.1\"}],\"subnetId\":\"GeneratedFindingSubnetId\",\"vpcId\":\"GeneratedFindingVPCId\",\"securityGroups\":[{\"groupName\":\"GeneratedFindingSecurityGroupName\",\"groupId\":\"GeneratedFindingSecurityId\"}],\"publicDnsName\":\"GeneratedFindingPublicDNSName\",\"publicIp\":\"198.51.100.0\"}],\"tags\":[{\"key\":\"GeneratedFindingInstaceTag1\",\"value\":\"GeneratedFindingInstaceValue1\"},{\"key\":\"GeneratedFindingInstaceTag2\",\"value\":\"GeneratedFindingInstaceTagValue2\"},{\"key\":\"GeneratedFindingInstaceTag3\",\"value\":\"GeneratedFindingInstaceTagValue3\"},{\"key\":\"GeneratedFindingInstaceTag4\",\"value\":\"GeneratedFindingInstaceTagValue4\"},{\"key\":\"GeneratedFindingInstaceTag5\",\"value\":\"GeneratedFindingInstaceTagValue5\"},{\"key\":\"GeneratedFindingInstaceTag6\",\"value\":\"GeneratedFindingInstaceTagValue6\"},{\"key\":\"GeneratedFindingInstaceTag7\",\"value\":\"GeneratedFindingInstaceTagValue7\"},{\"key\":\"GeneratedFindingInstaceTag8\",\"value\":\"GeneratedFindingInstaceTagValue8\"},{\"key\":\"GeneratedFindingInstaceTag9\",\"value\":\"GeneratedFindingInstaceTagValue9\"}],\"instanceState\":\"running\",\"availabilityZone\":\"GeneratedFindingInstaceAvailabilityZone\",\"imageId\":\"ami-99999999\",\"imageDescription\":\"GeneratedFindingInstaceImageDescription\"}},\"service\":{\"serviceName\":\"guardduty\",\"detectorId\":\"42b37a41c84bb93843b6829029ead712\",\"action\":{\"actionType\":\"NETWORK_CONNECTION\",\"networkConnectionAction\":{\"connectionDirection\":\"INBOUND\",\"remoteIpDetails\":{\"ipAddressV4\":\"198.51.100.0\",\"organization\":{\"asn\":\"-1\",\"asnOrg\":\"GeneratedFindingASNOrg\",\"isp\":\"GeneratedFindingISP\",\"org\":\"GeneratedFindingORG\"},\"country\":{\"countryName\":\"GeneratedFindingCountryName\"},\"city\":{\"cityName\":\"GeneratedFindingCityName\"},\"geoLocation\":{\"lat\":0,\"lon\":0}},\"remotePortDetails\":{\"port\":1067,\"portName\":\"Unknown\"},\"localPortDetails\":{\"port\":3389,\"portName\":\"RDP\"},\"protocol\":\"TCP\",\"blocked\":false}},\"resourceRole\":\"TARGET\",\"additionalInfo\":{\"sample\":true},\"eventFirstSeen\":\"2018-11-08T20:19:20.242Z\",\"eventLastSeen\":\"2018-11-08T20:21:59.719Z\",\"archived\":false,\"count\":2},\"severity\":2,\"createdAt\":\"2018-11-08T20:19:20.242Z\",\"updatedAt\":\"2018-11-08T20:21:59.719Z\",\"title\":\"198.51.100.0 is performing RDP brute force attacks against i-99999999.\",\"description\":\"198.51.100.0 is performing RDP brute force attacks against i-99999999. Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password.\"}}",
  "Timestamp": "2018-11-08T20:26:04.788Z",
  "SignatureVersion": "1",
  "Signature": "jEPvr3fTeb8ped8Knn5rt1AbUIi4RLwFzsuFF0/ASv5PpHwx7DPkQNlylzU0YMoXnA1m+11Iz5Z/3jj+tUsNa9VYbsoVMLpmEwHJDsyDbykTBbE0At85xqSZnNOO13e9bhM2sEX8GsFWz34kB3RvYI+nmi39xRBK2sENnIcPN3Mw98H42nnpSvJVwRkZOdjR80jbd25qijy9ApuB4kQsUMsl2Uyny0sDrs/LLRETjjXwe79Pdrhic5SHpgnvUvA9Ek6IutA9PrN78sZGF6Uun1eAdavEvYAGERhRc7gP/nq82vS8F7zaoJhApX0cVUVklhzkeyjFfogGK83wCxr+VQ==",
  "SigningCertURL": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:785665517223:PD-GuardDuty:658275cf-64ca-4874-a4e5-d20b4aa45416"
};

var ssh_brute_force = {
  "Type": "Notification",
  "MessageId": "6075324b-6a29-5037-a334-6615f432c846",
  "TopicArn": "arn:aws:sns:us-east-1:785665517223:PD-GuardDuty",
  "Message": "{\"version\":\"0\",\"id\":\"0a02eb58-c6de-dbf4-0a08-69c8828f5723\",\"detail-type\":\"GuardDuty Finding\",\"source\":\"aws.guardduty\",\"account\":\"785665517223\",\"time\":\"2018-11-08T20:25:00Z\",\"region\":\"us-east-1\",\"resources\":[],\"detail\":{\"schemaVersion\":\"2.0\",\"accountId\":\"785665517223\",\"region\":\"us-east-1\",\"partition\":\"aws\",\"id\":\"f0b37a7d5504bba0ec3493e776a0c54f\",\"arn\":\"arn:aws:guardduty:us-east-1:785665517223:detector/42b37a41c84bb93843b6829029ead712/finding/f0b37a7d5504bba0ec3493e776a0c54f\",\"type\":\"UnauthorizedAccess:EC2/SSHBruteForce\",\"resource\":{\"resourceType\":\"Instance\",\"instanceDetails\":{\"instanceId\":\"i-99999999\",\"instanceType\":\"m3.xlarge\",\"launchTime\":\"2016-08-02T02:05:06Z\",\"platform\":null,\"productCodes\":[{\"productCodeId\":\"GeneratedFindingProductCodeId\",\"productCodeType\":\"GeneratedFindingProductCodeType\"}],\"iamInstanceProfile\":{\"arn\":\"GeneratedFindingInstanceProfileArn\",\"id\":\"GeneratedFindingInstanceProfileId\"},\"networkInterfaces\":[{\"ipv6Addresses\":[],\"networkInterfaceId\":\"eni-bfcffe88\",\"privateDnsName\":\"GeneratedFindingPrivateDnsName\",\"privateIpAddress\":\"10.0.0.1\",\"privateIpAddresses\":[{\"privateDnsName\":\"GeneratedFindingPrivateName\",\"privateIpAddress\":\"10.0.0.1\"}],\"subnetId\":\"GeneratedFindingSubnetId\",\"vpcId\":\"GeneratedFindingVPCId\",\"securityGroups\":[{\"groupName\":\"GeneratedFindingSecurityGroupName\",\"groupId\":\"GeneratedFindingSecurityId\"}],\"publicDnsName\":\"GeneratedFindingPublicDNSName\",\"publicIp\":\"198.51.100.0\"}],\"tags\":[{\"key\":\"GeneratedFindingInstaceTag1\",\"value\":\"GeneratedFindingInstaceValue1\"},{\"key\":\"GeneratedFindingInstaceTag2\",\"value\":\"GeneratedFindingInstaceTagValue2\"},{\"key\":\"GeneratedFindingInstaceTag3\",\"value\":\"GeneratedFindingInstaceTagValue3\"},{\"key\":\"GeneratedFindingInstaceTag4\",\"value\":\"GeneratedFindingInstaceTagValue4\"},{\"key\":\"GeneratedFindingInstaceTag5\",\"value\":\"GeneratedFindingInstaceTagValue5\"},{\"key\":\"GeneratedFindingInstaceTag6\",\"value\":\"GeneratedFindingInstaceTagValue6\"},{\"key\":\"GeneratedFindingInstaceTag7\",\"value\":\"GeneratedFindingInstaceTagValue7\"},{\"key\":\"GeneratedFindingInstaceTag8\",\"value\":\"GeneratedFindingInstaceTagValue8\"},{\"key\":\"GeneratedFindingInstaceTag9\",\"value\":\"GeneratedFindingInstaceTagValue9\"}],\"instanceState\":\"running\",\"availabilityZone\":\"GeneratedFindingInstaceAvailabilityZone\",\"imageId\":\"ami-99999999\",\"imageDescription\":\"GeneratedFindingInstaceImageDescription\"}},\"service\":{\"serviceName\":\"guardduty\",\"detectorId\":\"42b37a41c84bb93843b6829029ead712\",\"action\":{\"actionType\":\"NETWORK_CONNECTION\",\"networkConnectionAction\":{\"connectionDirection\":\"INBOUND\",\"remoteIpDetails\":{\"ipAddressV4\":\"198.51.100.0\",\"organization\":{\"asn\":\"-1\",\"asnOrg\":\"GeneratedFindingASNOrg\",\"isp\":\"GeneratedFindingISP\",\"org\":\"GeneratedFindingORG\"},\"country\":{\"countryName\":\"GeneratedFindingCountryName\"},\"city\":{\"cityName\":\"GeneratedFindingCityName\"},\"geoLocation\":{\"lat\":0,\"lon\":0}},\"remotePortDetails\":{\"port\":32794,\"portName\":\"Unknown\"},\"localPortDetails\":{\"port\":22,\"portName\":\"SSH\"},\"protocol\":\"TCP\",\"blocked\":false}},\"resourceRole\":\"TARGET\",\"additionalInfo\":{\"sample\":true},\"eventFirstSeen\":\"2018-11-08T20:19:20.202Z\",\"eventLastSeen\":\"2018-11-08T20:21:59.714Z\",\"archived\":false,\"count\":2},\"severity\":2,\"createdAt\":\"2018-11-08T20:19:20.202Z\",\"updatedAt\":\"2018-11-08T20:21:59.714Z\",\"title\":\"198.51.100.0 is performing SSH brute force attacks against i-99999999. \",\"description\":\"198.51.100.0 is performing SSH brute force attacks against i-99999999. Brute force attacks are used to gain unauthorized access to your instance by guessing the SSH password.\"}}",
  "Timestamp": "2018-11-08T20:26:03.242Z",
  "SignatureVersion": "1",
  "Signature": "LhAnPetDBBHT9q4QXrcrxjWGqyOilg1rBYkhwb6z00D2gLIvCXvw2CBS9IM95/iuIhW/UwJJgYizMAkcHfz2HkJ76hqD9fmmJr6ZPwjhj/BkECVKTkrQ1NqYj+aYELbI6wbaJashbsSnmxOKwfA5gFjj5nlV9oouwT7h4SPPFaJI1KFFFGH8Hz1vGt3VrXC7uqHNDvD4tJEX1ZMotV02ElBHexJ2XUFCtzx/NcSghld10MKEgLGMFLmaex936YfEvGgmHXNjPF02CwS3A9fX7oIg7Chj45f+QarcZgpUnmF7F6t1fIMinp9aDBd5gQ0pJHzbaqk9tc9aG1IqT7LYLg==",
  "SigningCertURL": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:785665517223:PD-GuardDuty:658275cf-64ca-4874-a4e5-d20b4aa45416"
};

var dns_data_exfiltration = {
  "Type": "Notification",
  "MessageId": "8cb4ecd3-43b1-5e45-93d5-b88dddad6257",
  "TopicArn": "arn:aws:sns:us-east-1:785665517223:PD-GuardDuty",
  "Message": "{\"version\":\"0\",\"id\":\"368bc236-f44d-e92d-624e-e90364f9f6b8\",\"detail-type\":\"GuardDuty Finding\",\"source\":\"aws.guardduty\",\"account\":\"785665517223\",\"time\":\"2018-11-08T20:25:03Z\",\"region\":\"us-east-1\",\"resources\":[],\"detail\":{\"schemaVersion\":\"2.0\",\"accountId\":\"785665517223\",\"region\":\"us-east-1\",\"partition\":\"aws\",\"id\":\"ceb37a7d54efa2dcd51bdf0c9aa55fb2\",\"arn\":\"arn:aws:guardduty:us-east-1:785665517223:detector/42b37a41c84bb93843b6829029ead712/finding/ceb37a7d54efa2dcd51bdf0c9aa55fb2\",\"type\":\"Trojan:EC2/DNSDataExfiltration\",\"resource\":{\"resourceType\":\"Instance\",\"instanceDetails\":{\"instanceId\":\"i-99999999\",\"instanceType\":\"t2.small\",\"launchTime\":\"2017-01-25T13:25:34Z\",\"platform\":null,\"productCodes\":[{\"productCodeId\":\"GeneratedFindingProductCodeId\",\"productCodeType\":\"GeneratedFindingProductCodeType\"}],\"iamInstanceProfile\":{\"arn\":\"GeneratedFindingInstanceProfileArn\",\"id\":\"GeneratedFindingInstanceProfileId\"},\"networkInterfaces\":[{\"ipv6Addresses\":[],\"networkInterfaceId\":\"eni-bfcffe88\",\"privateDnsName\":\"GeneratedFindingPrivateDnsName\",\"privateIpAddress\":\"10.0.0.1\",\"privateIpAddresses\":[{\"privateDnsName\":\"GeneratedFindingPrivateName\",\"privateIpAddress\":\"10.0.0.1\"}],\"subnetId\":\"GeneratedFindingSubnetId\",\"vpcId\":\"GeneratedFindingVPCId\",\"securityGroups\":[{\"groupName\":\"GeneratedFindingSecurityGroupName\",\"groupId\":\"GeneratedFindingSecurityId\"}],\"publicDnsName\":\"GeneratedFindingPublicDNSName\",\"publicIp\":\"198.51.100.0\"}],\"tags\":[{\"key\":\"GeneratedFindingInstaceTag1\",\"value\":\"GeneratedFindingInstaceValue1\"},{\"key\":\"GeneratedFindingInstaceTag2\",\"value\":\"GeneratedFindingInstaceTagValue2\"},{\"key\":\"GeneratedFindingInstaceTag3\",\"value\":\"GeneratedFindingInstaceTagValue3\"},{\"key\":\"GeneratedFindingInstaceTag4\",\"value\":\"GeneratedFindingInstaceTagValue4\"},{\"key\":\"GeneratedFindingInstaceTag5\",\"value\":\"GeneratedFindingInstaceTagValue5\"},{\"key\":\"GeneratedFindingInstaceTag6\",\"value\":\"GeneratedFindingInstaceTagValue6\"},{\"key\":\"GeneratedFindingInstaceTag7\",\"value\":\"GeneratedFindingInstaceTagValue7\"},{\"key\":\"GeneratedFindingInstaceTag8\",\"value\":\"GeneratedFindingInstaceTagValue8\"},{\"key\":\"GeneratedFindingInstaceTag9\",\"value\":\"GeneratedFindingInstaceTagValue9\"}],\"instanceState\":\"running\",\"availabilityZone\":\"GeneratedFindingInstaceAvailabilityZone\",\"imageId\":\"ami-99999999\",\"imageDescription\":\"GeneratedFindingInstaceImageDescription\"}},\"service\":{\"serviceName\":\"guardduty\",\"detectorId\":\"42b37a41c84bb93843b6829029ead712\",\"action\":{\"actionType\":\"DNS_REQUEST\",\"dnsRequestAction\":{\"domain\":\"GeneratedFindingAdditionalDomainName\",\"protocol\":\"0\",\"blocked\":true}},\"resourceRole\":\"ACTOR\",\"additionalInfo\":{\"domain\":\"GeneratedFindingThreatListName\",\"sample\":true},\"eventFirstSeen\":\"2018-11-08T20:19:20.159Z\",\"eventLastSeen\":\"2018-11-08T20:21:59.709Z\",\"archived\":false,\"count\":2},\"severity\":8,\"createdAt\":\"2018-11-08T20:19:20.159Z\",\"updatedAt\":\"2018-11-08T20:21:59.709Z\",\"title\":\"Data exfiltration through DNS queries from EC2 instance i-99999999.\",\"description\":\"EC2 instance i-99999999 is attempting to query domain names that resemble exfiltrated data. This could be an indication of a compromised instance.\"}}",
  "Timestamp": "2018-11-08T20:26:04.037Z",
  "SignatureVersion": "1",
  "Signature": "glBiuy4tAej9NF7aPUFREvEfKFKr+rajn4oRqOxTvkFrMBZLW5Qh9nipmhjO8ceV3yoejB1chvF0eve8hZ3cwC8lpleXuLL8uDZENa/OEkrlk7hOHrfzYS7/r55vzfnrVmR2Fv9zy2kO1tw15py+bIyHUcP3WH9mswTPug0ggoIaHBrUT1fEw5GUM9nQ4xRJ1L6YI4/sKkYDLmBZL8voy0rFihAyb9RDUIN+ANJ9ua08nvsJqc8f0Pm86i+AHZ48/Cg+yYk1tGg2Q/uKW7Nd3kCv/V18r8UVjBXO6RjIOpVE2tWI6r+Kpblrrclkr0qc0cYDKNcNkEo1VyLR/J157A==",
  "SigningCertURL": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:785665517223:PD-GuardDuty:658275cf-64ca-4874-a4e5-d20b4aa45416"
};


var guard_duty_changes = {
  "Type": "Notification",
  "MessageId": "1e0d416a-272a-598d-89cb-1534b9304fe4",
  "TopicArn": "arn:aws:sns:us-east-1:785665517223:PD-GuardDuty",
  "Message": "{\"version\":\"0\",\"id\":\"b743a338-c984-3b5f-6ef2-335b141c11d8\",\"detail-type\":\"GuardDuty Finding\",\"source\":\"aws.guardduty\",\"account\":\"785665517223\",\"time\":\"2018-11-08T20:25:00Z\",\"region\":\"us-east-1\",\"resources\":[],\"detail\":{\"schemaVersion\":\"2.0\",\"accountId\":\"785665517223\",\"region\":\"us-east-1\",\"partition\":\"aws\",\"id\":\"9eb37a7d54ef56bd3544c7944ff7ec11\",\"arn\":\"arn:aws:guardduty:us-east-1:785665517223:detector/42b37a41c84bb93843b6829029ead712/finding/9eb37a7d54ef56bd3544c7944ff7ec11\",\"type\":\"Stealth:IAMUser/LoggingConfigurationModified\",\"resource\":{\"resourceType\":\"AccessKey\",\"accessKeyDetails\":{\"accessKeyId\":\"GeneratedFindingAccessKeyId\",\"principalId\":\"GeneratedFindingPrincipalId\",\"userType\":\"IAMUser\",\"userName\":\"GeneratedFindingUserName\"}},\"service\":{\"serviceName\":\"guardduty\",\"detectorId\":\"42b37a41c84bb93843b6829029ead712\",\"action\":{\"actionType\":\"AWS_API_CALL\",\"awsApiCallAction\":{\"api\":\"GeneratedFindingAPIName\",\"serviceName\":\"GeneratedFindingAPIServiceName\",\"callerType\":\"Remote IP\",\"remoteIpDetails\":{\"ipAddressV4\":\"198.51.100.0\",\"organization\":{\"asn\":\"-1\",\"asnOrg\":\"GeneratedFindingASNOrg\",\"isp\":\"GeneratedFindingISP\",\"org\":\"GeneratedFindingORG\"},\"country\":{\"countryName\":\"GeneratedFindingCountryName\"},\"city\":{\"cityName\":\"GeneratedFindingCityName\"},\"geoLocation\":{\"lat\":0,\"lon\":0}},\"affectedResources\":{}}},\"resourceRole\":\"TARGET\",\"additionalInfo\":{\"recentApiCalls\":[{\"api\":\"GeneratedFindingAPIName1\",\"count\":2},{\"api\":\"GeneratedFindingAPIName2\",\"count\":2}],\"sample\":true},\"eventFirstSeen\":\"2018-11-08T20:19:20.158Z\",\"eventLastSeen\":\"2018-11-08T20:21:59.708Z\",\"archived\":false,\"count\":2},\"severity\":5,\"createdAt\":\"2018-11-08T20:19:20.158Z\",\"updatedAt\":\"2018-11-08T20:21:59.708Z\",\"title\":\"Unusual changes to API activity logging by GeneratedFindingUserName.\",\"description\":\"APIs commonly used to stop CloudTrail logging, delete existing logs and other such activity that erases any trace of activity in the account, was invoked by IAM principal GeneratedFindingUserName. Such activity is not typically seen from this principal.\"}}",
  "Timestamp": "2018-11-08T20:26:02.608Z",
  "SignatureVersion": "1",
  "Signature": "aEZ5bgxPe6mVHPAbtX4P8NLBXh3yEHVPpoYQXwxI8HRvUu9QlFXMxeT7jVgPGXsC/WVPCX34iPvhO6X07bV+ausn3hkrY2IS0Dhe+Q2ZvKvPnnYquyFIXG29sPSnVrVPmcAa0iua70kBSo9OGJ0V2E71NvmkEquyjrl5OG0f2ckz6V+E0D4gfu+/kAE61G9Nr6MzCpnaPh02agZZ0E3o4DDNy+HHiowGQ8RrFcB6TUEguSGfQPX09Ud+fdnrWBjDjrP/w+jb1ijzmZ7gyBuYz2OMfrWBxposmFEnS+qRkqmjO5LOkQW70g4LVctNbSLK/yNybXK2+jA7mcapm0VHQQ==",
  "SigningCertURL": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:785665517223:PD-GuardDuty:658275cf-64ca-4874-a4e5-d20b4aa45416"
};

var apis_invoked = {
  "Type": "Notification",
  "MessageId": "f5ec48ad-d6ab-5781-b041-1cf348b0edd6",
  "TopicArn": "arn:aws:sns:us-east-1:785665517223:PD-GuardDuty",
  "Message": "{\"version\":\"0\",\"id\":\"adf4dbb4-94dd-eaea-a076-b952733f0a6f\",\"detail-type\":\"GuardDuty Finding\",\"source\":\"aws.guardduty\",\"account\":\"785665517223\",\"time\":\"2018-11-08T20:25:00Z\",\"region\":\"us-east-1\",\"resources\":[],\"detail\":{\"schemaVersion\":\"2.0\",\"accountId\":\"785665517223\",\"region\":\"us-east-1\",\"partition\":\"aws\",\"id\":\"b8b37a7d5503c46a72d875e4293efd33\",\"arn\":\"arn:aws:guardduty:us-east-1:785665517223:detector/42b37a41c84bb93843b6829029ead712/finding/b8b37a7d5503c46a72d875e4293efd33\",\"type\":\"UnauthorizedAccess:IAMUser/UnusualASNCaller\",\"resource\":{\"resourceType\":\"AccessKey\",\"accessKeyDetails\":{\"accessKeyId\":\"GeneratedFindingAccessKeyId\",\"principalId\":\"GeneratedFindingPrincipalId\",\"userType\":\"IAMUser\",\"userName\":\"GeneratedFindingUserName\"}},\"service\":{\"serviceName\":\"guardduty\",\"detectorId\":\"42b37a41c84bb93843b6829029ead712\",\"action\":{\"actionType\":\"AWS_API_CALL\",\"awsApiCallAction\":{\"api\":\"GeneratedFindingAPIName\",\"serviceName\":\"GeneratedFindingAPIServiceName\",\"callerType\":\"Remote IP\",\"remoteIpDetails\":{\"ipAddressV4\":\"198.51.100.0\",\"organization\":{\"asn\":\"-1\",\"asnOrg\":\"GeneratedFindingASNOrg\",\"isp\":\"GeneratedFindingISP\",\"org\":\"GeneratedFindingORG\"},\"country\":{\"countryName\":\"GeneratedFindingCountryName\"},\"city\":{\"cityName\":\"GeneratedFindingCityName\"},\"geoLocation\":{\"lat\":0,\"lon\":0}},\"affectedResources\":{}}},\"resourceRole\":\"TARGET\",\"additionalInfo\":{\"unusual\":{\"isps\":\"17756\"},\"sample\":true},\"eventFirstSeen\":\"2018-11-08T20:19:20.199Z\",\"eventLastSeen\":\"2018-11-08T20:21:59.713Z\",\"archived\":false,\"count\":2},\"severity\":8,\"createdAt\":\"2018-11-08T20:19:20.199Z\",\"updatedAt\":\"2018-11-08T20:21:59.713Z\",\"title\":\"APIs invoked by GeneratedFindingUserName from an unusual network.\",\"description\":\"APIs invoked by principal GeneratedFindingUserName from an IP address that is registered to an unusual organization.\"}}",
  "Timestamp": "2018-11-08T20:26:03.089Z",
  "SignatureVersion": "1",
  "Signature": "KKQENDdT/coSAidVcYCziRCfzx4mP3hTF3wCwRpa++Dsa042WUTwECm2sNIjFUb6GREECad2Z5AR48P4l5EyTH2r4AlA9TeLh50p7Gxp5zfaHpC9bjuZynGZYn3NCWTQApMXw7Rtr8LL65mJuC+HY2Yb7RwukbdrquK+I7shLTZtu9A7TbWMn2dfHs8ovsF0FzyvlyhkMNahaHyX2Nj4Cf7L5lx7fTlBvExNaZv5Orw08OUhfW58ocRluUeORfzNuehhGnPXA8Z4TKL+JgGT6y/2oaAkuThICzUxei9jR0rkz260y6VxN/p8m4KDFbgiM3OZBHbQQVx/2JU0YwoM+g==",
  "SigningCertURL": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:785665517223:PD-GuardDuty:658275cf-64ca-4874-a4e5-d20b4aa45416"
};

var ct_add_user_to_group = {
    "Records": [
    {
        "eventVersion": "1.0",
        "userIdentity":
        {
            "type": "IAMUser",
            "principalId": "EX_PRINCIPAL_ID",
            "arn": "arn:aws:iam::123456789012:user/Alice",
            "accountId": "123456789012",
            "accessKeyId": "EXAMPLE_KEY_ID",
            "userName": "Alice",
            "sessionContext":
            {
                "attributes":
                {
                    "mfaAuthenticated": "false",
                    "creationDate": "2014-03-25T18:45:11Z"
                }
            }
        },
        "eventTime": "2014-03-25T21:08:14Z",
        "eventSource": "iam.amazonaws.com",
        "eventName": "AddUserToGroup",
        "awsRegion": "us-east-2",
        "sourceIPAddress": "127.0.0.1",
        "userAgent": "AWSConsole",
        "requestParameters":
        {
            "userName": "Bob",
            "groupName": "admin"
        },
        "responseElements": null
    }]
};

var phd_elb_api_issue = {
    "Type": "Notification",
    "Message":
    "{\"version\":\"0\",\"id\":\"7bf73129-1428-4cd3-a780-95db273d1602\",\"detail-type\":\"AWS Health Event\",\"source\":\"aws.health\",\"account\":\"123456789012\",\"time\":\"2016-06-05T06:27:57Z\",\"region\":\"ap-southeast-2\",\"resources\":[],\"detail\":{\"eventArn\":\"arn:aws:health:ap-southeast-2::event/AWS_ELASTICLOADBALANCING_API_ISSUE_90353408594353980\",\"service\":\"ELASTICLOADBALANCING\",\"eventTypeCode\":\"AWS_ELASTICLOADBALANCING_API_ISSUE\",\"eventTypeCategory\":\"issue\",\"startTime\":\"Sat, 04 Jun 2016 05:01:10 GMT\",\"endTime\":\"Sat, 04 Jun 2016 05:30:57 GMT\",\"eventDescription\":[{\"language\":\"en_US\",\"latestDescription\":\"A description of the event will be provided here\"}]}}",
    "SigningCertURL": "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
    "UnsubscribeURL": "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:785665517223:guard-duty:929fb486-5851-4cdc-8b25-8cc026afea70"
};

var phd_ec2_store_drive_west2 = {
  "Type" : "Notification",
  "Message" : "{\"version\": \"0\",\"id\": \"7bf73129-1428-4cd3-a780-95db273d1602\",\"detail-type\": \"AWS Health Event\",\"source\": \"aws.health\",\"account\": \"123456789012\",\"time\": \"2016-06-05T06:27:57Z\",\"region\": \"us-west-2\",\"resources\": [\"i-abcd1111\"],\"detail\": {    \"eventArn\": \"arn:aws:health:us-west-2::event/AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED_90353408594353980\",\"service\": \"EC2\",\"eventTypeCode\": \"AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED\",\"eventTypeCategory\": \"issue\",\"startTime\": \"Sat, 05 Jun 2016 15:10:09 GMT\",\"eventDescription\": [{\"language\": \"en_US\",\"latestDescription\": \"AWS has detected a performance degradation of one or more physical storage drives that backs the instance store volumes.\"}],\"affectedEntities\": [{\"entityValue\": \"i-abcd1111\"}]}\n}",
  "SigningCertURL" : "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:957132980467:PHD-test:7bdb10b4-7115-4b27-9057-d423ce900543"
};

var phd_ec2_store_drive_asia2 = {
  "Type" : "Notification",
  "Message" : "{\"version\": \"0\",\"id\": \"7bf73129-1428-4cd3-a780-95db273d1602\",\"detail-type\": \"AWS Health Event\",\"source\": \"aws.health\",\"account\": \"123456789012\",\"time\": \"2016-06-05T06:27:57Z\",\"region\": \"ap-southeast-2\",\"resources\": [\"i-abcd1111\"],\"detail\": {    \"eventArn\": \"arn:aws:health:ap-southeast-2::event/AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED_90353408594353980\",\"service\": \"EC2\",\"eventTypeCode\": \"AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED\",\"eventTypeCategory\": \"issue\",\"startTime\": \"Sat, 05 Jun 2016 15:10:09 GMT\",\"eventDescription\": [{\"language\": \"en_US\",\"latestDescription\": \"AWS has detected a performance degradation of one or more physical storage drives that backs the instance store volumes.\"}],\"affectedEntities\": [{\"entityValue\": \"i-abcd1111\"}]}\n}",
  "SigningCertURL" : "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:957132980467:PHD-test:7bdb10b4-7115-4b27-9057-d423ce900543"
};

var phd_ec2_store_drive_west1 = {
  "Type" : "Notification",
  "Message" : "{\"version\": \"0\",\"id\": \"7bf73129-1428-4cd3-a780-95db273d1602\",\"detail-type\": \"AWS Health Event\",\"source\": \"aws.health\",\"account\": \"123456789012\",\"time\": \"2016-06-05T06:27:57Z\",\"region\": \"us-west-1\",\"resources\": [\"i-abcd1111\"],\"detail\": {    \"eventArn\": \"arn:aws:health:us-west-1::event/AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED_90353408594353980\",\"service\": \"EC2\",\"eventTypeCode\": \"AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED\",\"eventTypeCategory\": \"issue\",\"startTime\": \"Sat, 05 Jun 2016 15:10:09 GMT\",\"eventDescription\": [{\"language\": \"en_US\",\"latestDescription\": \"AWS has detected a performance degradation of one or more physical storage drives that backs the instance store volumes.\"}],\"affectedEntities\": [{\"entityValue\": \"i-abcd1111\"}]}\n}",
  "SigningCertURL" : "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:957132980467:PHD-test:7bdb10b4-7115-4b27-9057-d423ce900543"
};

var phd_ebs_volume_lost = {
  "Type" : "Notification",
  "Message" : "{\n\t\"version\": \"0\",\n\t\"id\": \"af453f29-628d-a62e-f67b-3f49df35e0b1\",\n\t\"detail-type\": \"AWS Health Event\",\n\t\"source\": \"aws.health\",\n\t\"account\": \"202461451200\",\n\t\"time\": \"2018-09-18T04:01:40Z\",\n\t\"region\": \"us-east-1\",\n\t\"resources\": [\n\t\t\"vol-dummy\"\n\t],\n\t\"detail\": {\n\t\t\"eventArn\": \"arn:aws:health:us-east-1::event/EBS/AWS_EBS_VOLUME_LOST/AWS_EBS_VOLUME_LOST_event-1537390908739\",\n\t\t\"service\": \"EBS\",\n\t\t\"eventTypeCode\": \"AWS_EBS_VOLUME_LOST\",\n\t\t\"eventTypeCategory\": \"scheduledChange\",\n\t\t\"startTime\": \"Tue, 18 Sep 2018 04:01:40 GMT\",\n\t\t\"eventDescription\": [{\n\t\t\t\"language\": \"en_US\",\n\t\t\t\"latestDescription\": \"Your volume experienced a failure due to multiple component failures and we were unable to recover it. Although EBS volumes are designed for reliability, including being backed by multiple physical drives, we are still exposed to durability risks when multiple concurrent component failures occur before we are able to restore redundancy. We publish our durability expectations on the EBS detail page here (http://aws.amazon.com/ebs/details).\\\\n\\\\nFind out what you can do to fix this issue at https://aws.amazon.com/premiumsupport/knowledge-center/ebs-error-status/\\\\n\\\\nWe apologize for the inconvenience this may have caused you. If you have any further questions or comments regarding this matter, please contact us at: http://aws.amazon.com/support\"\n\t\t}],\n\t\t\"affectedEntities\": [{\n\t\t\t\"entityValue\": \"vol-dummy\"\n\t\t}]\n\t}\n}",
  "SigningCertURL" : "https://sns.us-west-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:957132980467:PHD-test:7bdb10b4-7115-4b27-9057-d423ce900543"
};

var new_relic_response_time_increase = {
  "client": "New Relic",
  "client_url": "https://rpm.newrelic.com/accounts/1218847/incidents/17615637",
  "description": "Alert open: Response Time > 3000ms - Server: ip-172-30-0-227",
  "event_type": "trigger",
  "incident_key": "/Alert/1218847/17615637/13317445",
  "details": {
    "ConfigurationItem": "ACME ENET",
    "AlertMessage": "Email dispatch delay from AM-FLOR-APVM012 server. Delay: 870 secs",
    "CI": "ACME ENET",
    "Priority": "2 - High"
  }
}

var payloads = {
    "CloudTrail: Add User To Group": ct_add_user_to_group,
    "GuardDuty: RDP Brute Force Attack": rdp_brute_force,
    "GuardDuty: SSH Brute Force Attack": ssh_brute_force,
    "GuardDuty: DNS Data Exfiltration": dns_data_exfiltration,
    "GuardDuty: GuardDuty Changes": guard_duty_changes,
    "GuardDuty: API's invoked": apis_invoked,
    "PHD: Elastic Load Balancer API Issue": phd_elb_api_issue,
    "PHD: EC2 Store Drive Issue (US West 1)": phd_ec2_store_drive_west1,
    "PHD: EC2 Store Drive Issue (US West 2)": phd_ec2_store_drive_west2,
    "PHD: EC2 Store Drive Issue (AP SouthEast 2)": phd_ec2_store_drive_asia2,
    "PHD: EBS Volume Lost (US East 1)": phd_ebs_volume_lost,
    "New Relic: Response Time Increase": new_relic_response_time_increase
    
};
