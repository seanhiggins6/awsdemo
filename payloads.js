var gd1 = {
  "client": "AWS Console",
  "client_url": "https://us-west-2.console.aws.amazon.com/guardduty/home?region=us-west-2#/findings?macros=current&fId=2ab35569068ee10579b5abdbe10e679f",
  "description": "GuardDuty Finding: 198.51.100.0 is performing SSH brute force attacks against i-99999999. ",
  "event_type": "trigger",
  "details": {
    "version": "0",
    "id": "05f56b73-d87a-b3da-08b4-0011393a34e6",
    "detail-type": "GuardDuty Finding",
    "source": "aws.guardduty",
    "account": "957132980467",
    "time": "2018-11-02T21:35:04Z",
    "region": "us-west-2",
    "resources": [],
    "detail": {
      "schemaVersion": "2.0",
      "accountId": "957132980467",
      "region": "us-west-2",
      "partition": "aws",
      "id": "2ab35569068ee10579b5abdbe10e679f",
      "arn": "arn:aws:guardduty:us-west-2:957132980467:detector/84b35568c3651686951efb3f3070e3a2/finding/2ab35569068ee10579b5abdbe10e679f",
      "type": "UnauthorizedAccess:EC2/SSHBruteForce",
      "resource": {
        "resourceType": "Instance",
        "instanceDetails": {
          "instanceId": "i-99999999",
          "instanceType": "m3.xlarge",
          "launchTime": "2016-08-02T02:05:06Z",
          "platform": null,
          "productCodes": [
            {
              "productCodeId": "GeneratedFindingProductCodeId",
              "productCodeType": "GeneratedFindingProductCodeType"
            }
          ],
          "iamInstanceProfile": {
            "arn": "GeneratedFindingInstanceProfileArn",
            "id": "GeneratedFindingInstanceProfileId"
          },
          "networkInterfaces": [
            {
              "networkInterfaceId": "eni-bfcffe88",
              "privateIpAddresses": [
                {
                  "privateDnsName": "GeneratedFindingPrivateName",
                  "privateIpAddress": "10.0.0.1"
                }
              ],
              "subnetId": "GeneratedFindingSubnetId",
              "vpcId": "GeneratedFindingVPCId",
              "privateDnsName": "GeneratedFindingPrivateDnsName",
              "securityGroups": [
                {
                  "groupName": "GeneratedFindingSecurityGroupName",
                  "groupId": "GeneratedFindingSecurityId"
                }
              ],
              "publicIp": "198.51.100.0",
              "ipv6Addresses": [],
              "publicDnsName": "GeneratedFindingPublicDNSName",
              "privateIpAddress": "10.0.0.1"
            }
          ],
          "tags": [
            {
              "value": "GeneratedFindingInstaceValue1",
              "key": "GeneratedFindingInstaceTag1"
            },
            {
              "value": "GeneratedFindingInstaceTagValue2",
              "key": "GeneratedFindingInstaceTag2"
            },
            {
              "value": "GeneratedFindingInstaceTagValue3",
              "key": "GeneratedFindingInstaceTag3"
            },
            {
              "value": "GeneratedFindingInstaceTagValue4",
              "key": "GeneratedFindingInstaceTag4"
            },
            {
              "value": "GeneratedFindingInstaceTagValue5",
              "key": "GeneratedFindingInstaceTag5"
            },
            {
              "value": "GeneratedFindingInstaceTagValue6",
              "key": "GeneratedFindingInstaceTag6"
            },
            {
              "value": "GeneratedFindingInstaceTagValue7",
              "key": "GeneratedFindingInstaceTag7"
            },
            {
              "value": "GeneratedFindingInstaceTagValue8",
              "key": "GeneratedFindingInstaceTag8"
            },
            {
              "value": "GeneratedFindingInstaceTagValue9",
              "key": "GeneratedFindingInstaceTag9"
            }
          ],
          "instanceState": "running",
          "availabilityZone": "GeneratedFindingInstaceAvailabilityZone",
          "imageId": "ami-99999999",
          "imageDescription": "GeneratedFindingInstaceImageDescription"
        }
      },
      "service": {
        "serviceName": "guardduty",
        "detectorId": "84b35568c3651686951efb3f3070e3a2",
        "action": {
          "actionType": "NETWORK_CONNECTION",
          "networkConnectionAction": {
            "connectionDirection": "INBOUND",
            "remoteIpDetails": {
              "ipAddressV4": "198.51.100.0",
              "organization": {
                "asn": "-1",
                "asnOrg": "GeneratedFindingASNOrg",
                "isp": "GeneratedFindingISP",
                "org": "GeneratedFindingORG"
              },
              "country": {
                "countryName": "GeneratedFindingCountryName"
              },
              "city": {
                "cityName": "GeneratedFindingCityName"
              },
              "geoLocation": {
                "lat": 0,
                "lon": 0
              }
            },
            "remotePortDetails": {
              "port": 32794,
              "portName": "Unknown"
            },
            "localPortDetails": {
              "port": 22,
              "portName": "SSH"
            },
            "protocol": "TCP",
            "blocked": false
          }
        },
        "resourceRole": "TARGET",
        "additionalInfo": {
          "sample": true
        },
        "eventFirstSeen": "2018-10-25T10:43:04.605Z",
        "eventLastSeen": "2018-11-02T21:34:15.262Z",
        "archived": false,
        "count": 11
      },
      "severity": 2,
      "createdAt": "2018-10-25T10:43:04.605Z",
      "updatedAt": "2018-11-02T21:34:15.262Z",
      "title": "198.51.100.0 is performing SSH brute force attacks against i-99999999. ",
      "description": "198.51.100.0 is performing SSH brute force attacks against i-99999999. Brute force attacks are used to gain unauthorized access to your instance by guessing the SSH password."
    }
  }
};

var rdp_brute_force = {
    "version": "0",
    "id": "644024ac-9059-c685-363c-c334591d8131",
    "detail-type": "GuardDuty Finding",
    "source": "aws.guardduty",
    "account": "957132980467",
    "time": "2018-11-08T20:35:39Z",
    "region": "us-west-2",
    "resources": [],
    "detail": {
        "schemaVersion": "2.0",
        "accountId": "957132980467",
        "region": "us-west-2",
        "partition": "aws",
        "id": "aab355690690bed9accaad3fa6eb9589",
        "arn": "arn:aws:guardduty:us-west-2:957132980467:detector/84b35568c3651686951efb3f3070e3a2/finding/aab355690690bed9accaad3fa6eb9589",
        "type": "UnauthorizedAccess:EC2/RDPBruteForce",
        "resource": {
            "resourceType": "Instance",
            "instanceDetails": {
                "instanceId": "i-99999999",
                "instanceType": "m3.xlarge",
                "launchTime": "2016-08-02T02:05:06Z",
                "platform": null,
                "productCodes": [
                    {
                        "productCodeId": "GeneratedFindingProductCodeId",
                        "productCodeType": "GeneratedFindingProductCodeType"
                    }
                ],
                "iamInstanceProfile": {
                    "arn": "GeneratedFindingInstanceProfileArn",
                    "id": "GeneratedFindingInstanceProfileId"
                },
                "networkInterfaces": [
                    {
                        "networkInterfaceId": "eni-bfcffe88",
                        "privateIpAddresses": [
                            {
                                "privateDnsName": "GeneratedFindingPrivateName",
                                "privateIpAddress": "10.0.0.1"
                            }
                        ],
                        "subnetId": "GeneratedFindingSubnetId",
                        "vpcId": "GeneratedFindingVPCId",
                        "privateDnsName": "GeneratedFindingPrivateDnsName",
                        "securityGroups": [
                            {
                                "groupName": "GeneratedFindingSecurityGroupName",
                                "groupId": "GeneratedFindingSecurityId"
                            }
                        ],
                        "publicIp": "198.51.100.0",
                        "ipv6Addresses": [],
                        "publicDnsName": "GeneratedFindingPublicDNSName",
                        "privateIpAddress": "10.0.0.1"
                    }
                ],
                "tags": [
                    {
                        "value": "GeneratedFindingInstaceValue1",
                        "key": "GeneratedFindingInstaceTag1"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue2",
                        "key": "GeneratedFindingInstaceTag2"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue3",
                        "key": "GeneratedFindingInstaceTag3"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue4",
                        "key": "GeneratedFindingInstaceTag4"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue5",
                        "key": "GeneratedFindingInstaceTag5"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue6",
                        "key": "GeneratedFindingInstaceTag6"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue7",
                        "key": "GeneratedFindingInstaceTag7"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue8",
                        "key": "GeneratedFindingInstaceTag8"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue9",
                        "key": "GeneratedFindingInstaceTag9"
                    }
                ],
                "instanceState": "running",
                "availabilityZone": "GeneratedFindingInstaceAvailabilityZone",
                "imageId": "ami-99999999",
                "imageDescription": "GeneratedFindingInstaceImageDescription"
            }
        },
        "service": {
            "serviceName": "guardduty",
            "detectorId": "84b35568c3651686951efb3f3070e3a2",
            "action": {
                "actionType": "NETWORK_CONNECTION",
                "networkConnectionAction": {
                    "connectionDirection": "INBOUND",
                    "remoteIpDetails": {
                        "ipAddressV4": "198.51.100.0",
                        "organization": {
                            "asn": "-1",
                            "asnOrg": "GeneratedFindingASNOrg",
                            "isp": "GeneratedFindingISP",
                            "org": "GeneratedFindingORG"
                        },
                        "country": {
                            "countryName": "GeneratedFindingCountryName"
                        },
                        "city": {
                            "cityName": "GeneratedFindingCityName"
                        },
                        "geoLocation": {
                            "lat": 0,
                            "lon": 0
                        }
                    },
                    "remotePortDetails": {
                        "port": 1067,
                        "portName": "Unknown"
                    },
                    "localPortDetails": {
                        "port": 3389,
                        "portName": "RDP"
                    },
                    "protocol": "TCP",
                    "blocked": false
                }
            },
            "resourceRole": "TARGET",
            "additionalInfo": {
                "sample": true
            },
            "eventFirstSeen": "2018-10-25T10:43:04.609Z",
            "eventLastSeen": "2018-11-08T20:34:05.427Z",
            "archived": false,
            "count": 15
        },
        "severity": 2,
        "createdAt": "2018-10-25T10:43:04.609Z",
        "updatedAt": "2018-11-08T20:34:05.427Z",
        "title": "198.51.100.0 is performing RDP brute force attacks against i-99999999.",
        "description": "198.51.100.0 is performing RDP brute force attacks against i-99999999. Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password."
    }
};

var ssh_brute_force = {
    "version": "0",
    "id": "6c0304d5-39fb-e6f8-0808-187911fc982a",
    "detail-type": "GuardDuty Finding",
    "source": "aws.guardduty",
    "account": "957132980467",
    "time": "2018-11-08T20:35:38Z",
    "region": "us-west-2",
    "resources": [],
    "detail": {
        "schemaVersion": "2.0",
        "accountId": "957132980467",
        "region": "us-west-2",
        "partition": "aws",
        "id": "2ab35569068ee10579b5abdbe10e679f",
        "arn": "arn:aws:guardduty:us-west-2:957132980467:detector/84b35568c3651686951efb3f3070e3a2/finding/2ab35569068ee10579b5abdbe10e679f",
        "type": "UnauthorizedAccess:EC2/SSHBruteForce",
        "resource": {
            "resourceType": "Instance",
            "instanceDetails": {
                "instanceId": "i-99999999",
                "instanceType": "m3.xlarge",
                "launchTime": "2016-08-02T02:05:06Z",
                "platform": null,
                "productCodes": [
                    {
                        "productCodeId": "GeneratedFindingProductCodeId",
                        "productCodeType": "GeneratedFindingProductCodeType"
                    }
                ],
                "iamInstanceProfile": {
                    "arn": "GeneratedFindingInstanceProfileArn",
                    "id": "GeneratedFindingInstanceProfileId"
                },
                "networkInterfaces": [
                    {
                        "networkInterfaceId": "eni-bfcffe88",
                        "privateIpAddresses": [
                            {
                                "privateDnsName": "GeneratedFindingPrivateName",
                                "privateIpAddress": "10.0.0.1"
                            }
                        ],
                        "subnetId": "GeneratedFindingSubnetId",
                        "vpcId": "GeneratedFindingVPCId",
                        "privateDnsName": "GeneratedFindingPrivateDnsName",
                        "securityGroups": [
                            {
                                "groupName": "GeneratedFindingSecurityGroupName",
                                "groupId": "GeneratedFindingSecurityId"
                            }
                        ],
                        "publicIp": "198.51.100.0",
                        "ipv6Addresses": [],
                        "publicDnsName": "GeneratedFindingPublicDNSName",
                        "privateIpAddress": "10.0.0.1"
                    }
                ],
                "tags": [
                    {
                        "value": "GeneratedFindingInstaceValue1",
                        "key": "GeneratedFindingInstaceTag1"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue2",
                        "key": "GeneratedFindingInstaceTag2"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue3",
                        "key": "GeneratedFindingInstaceTag3"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue4",
                        "key": "GeneratedFindingInstaceTag4"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue5",
                        "key": "GeneratedFindingInstaceTag5"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue6",
                        "key": "GeneratedFindingInstaceTag6"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue7",
                        "key": "GeneratedFindingInstaceTag7"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue8",
                        "key": "GeneratedFindingInstaceTag8"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue9",
                        "key": "GeneratedFindingInstaceTag9"
                    }
                ],
                "instanceState": "running",
                "availabilityZone": "GeneratedFindingInstaceAvailabilityZone",
                "imageId": "ami-99999999",
                "imageDescription": "GeneratedFindingInstaceImageDescription"
            }
        },
        "service": {
            "serviceName": "guardduty",
            "detectorId": "84b35568c3651686951efb3f3070e3a2",
            "action": {
                "actionType": "NETWORK_CONNECTION",
                "networkConnectionAction": {
                    "connectionDirection": "INBOUND",
                    "remoteIpDetails": {
                        "ipAddressV4": "198.51.100.0",
                        "organization": {
                            "asn": "-1",
                            "asnOrg": "GeneratedFindingASNOrg",
                            "isp": "GeneratedFindingISP",
                            "org": "GeneratedFindingORG"
                        },
                        "country": {
                            "countryName": "GeneratedFindingCountryName"
                        },
                        "city": {
                            "cityName": "GeneratedFindingCityName"
                        },
                        "geoLocation": {
                            "lat": 0,
                            "lon": 0
                        }
                    },
                    "remotePortDetails": {
                        "port": 32794,
                        "portName": "Unknown"
                    },
                    "localPortDetails": {
                        "port": 22,
                        "portName": "SSH"
                    },
                    "protocol": "TCP",
                    "blocked": false
                }
            },
            "resourceRole": "TARGET",
            "additionalInfo": {
                "sample": true
            },
            "eventFirstSeen": "2018-10-25T10:43:04.605Z",
            "eventLastSeen": "2018-11-08T20:34:05.405Z",
            "archived": false,
            "count": 15
        },
        "severity": 2,
        "createdAt": "2018-10-25T10:43:04.605Z",
        "updatedAt": "2018-11-08T20:34:05.405Z",
        "title": "198.51.100.0 is performing SSH brute force attacks against i-99999999. ",
        "description": "198.51.100.0 is performing SSH brute force attacks against i-99999999. Brute force attacks are used to gain unauthorized access to your instance by guessing the SSH password."
    }
};

var dns_data_exfiltration = {
    "version": "0",
    "id": "3a574a8e-553e-824c-ef72-17525f0acc4c",
    "detail-type": "GuardDuty Finding",
    "source": "aws.guardduty",
    "account": "957132980467",
    "time": "2018-11-08T20:35:38Z",
    "region": "us-west-2",
    "resources": [],
    "detail": {
        "schemaVersion": "2.0",
        "accountId": "957132980467",
        "region": "us-west-2",
        "partition": "aws",
        "id": "eeb35569068b499870c97b5ce96ea0a1",
        "arn": "arn:aws:guardduty:us-west-2:957132980467:detector/84b35568c3651686951efb3f3070e3a2/finding/eeb35569068b499870c97b5ce96ea0a1",
        "type": "Trojan:EC2/DNSDataExfiltration",
        "resource": {
            "resourceType": "Instance",
            "instanceDetails": {
                "instanceId": "i-99999999",
                "instanceType": "t2.small",
                "launchTime": "2017-01-25T13:25:34Z",
                "platform": null,
                "productCodes": [
                    {
                        "productCodeId": "GeneratedFindingProductCodeId",
                        "productCodeType": "GeneratedFindingProductCodeType"
                    }
                ],
                "iamInstanceProfile": {
                    "arn": "GeneratedFindingInstanceProfileArn",
                    "id": "GeneratedFindingInstanceProfileId"
                },
                "networkInterfaces": [
                    {
                        "networkInterfaceId": "eni-bfcffe88",
                        "privateIpAddresses": [
                            {
                                "privateDnsName": "GeneratedFindingPrivateName",
                                "privateIpAddress": "10.0.0.1"
                            }
                        ],
                        "subnetId": "GeneratedFindingSubnetId",
                        "vpcId": "GeneratedFindingVPCId",
                        "privateDnsName": "GeneratedFindingPrivateDnsName",
                        "securityGroups": [
                            {
                                "groupName": "GeneratedFindingSecurityGroupName",
                                "groupId": "GeneratedFindingSecurityId"
                            }
                        ],
                        "publicIp": "198.51.100.0",
                        "ipv6Addresses": [],
                        "publicDnsName": "GeneratedFindingPublicDNSName",
                        "privateIpAddress": "10.0.0.1"
                    }
                ],
                "tags": [
                    {
                        "value": "GeneratedFindingInstaceValue1",
                        "key": "GeneratedFindingInstaceTag1"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue2",
                        "key": "GeneratedFindingInstaceTag2"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue3",
                        "key": "GeneratedFindingInstaceTag3"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue4",
                        "key": "GeneratedFindingInstaceTag4"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue5",
                        "key": "GeneratedFindingInstaceTag5"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue6",
                        "key": "GeneratedFindingInstaceTag6"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue7",
                        "key": "GeneratedFindingInstaceTag7"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue8",
                        "key": "GeneratedFindingInstaceTag8"
                    },
                    {
                        "value": "GeneratedFindingInstaceTagValue9",
                        "key": "GeneratedFindingInstaceTag9"
                    }
                ],
                "instanceState": "running",
                "availabilityZone": "GeneratedFindingInstaceAvailabilityZone",
                "imageId": "ami-99999999",
                "imageDescription": "GeneratedFindingInstaceImageDescription"
            }
        },
        "service": {
            "serviceName": "guardduty",
            "detectorId": "84b35568c3651686951efb3f3070e3a2",
            "action": {
                "actionType": "DNS_REQUEST",
                "dnsRequestAction": {
                    "domain": "GeneratedFindingAdditionalDomainName",
                    "protocol": "0",
                    "blocked": true
                }
            },
            "resourceRole": "ACTOR",
            "additionalInfo": {
                "domain": "GeneratedFindingThreatListName",
                "sample": true
            },
            "eventFirstSeen": "2018-10-25T10:43:04.598Z",
            "eventLastSeen": "2018-11-08T20:34:05.393Z",
            "archived": false,
            "count": 15
        },
        "severity": 8,
        "createdAt": "2018-10-25T10:43:04.598Z",
        "updatedAt": "2018-11-08T20:34:05.393Z",
        "title": "Data exfiltration through DNS queries from EC2 instance i-99999999.",
        "description": "EC2 instance i-99999999 is attempting to query domain names that resemble exfiltrated data. This could be an indication of a compromised instance."
    }
};


var guard_duty_changes = {
    "version": "0",
    "id": "b45f0931-ea89-349b-d203-f6b1cb145b3c",
    "detail-type": "GuardDuty Finding",
    "source": "aws.guardduty",
    "account": "957132980467",
    "time": "2018-11-08T20:35:39Z",
    "region": "us-west-2",
    "resources": [],
    "detail": {
        "schemaVersion": "2.0",
        "accountId": "957132980467",
        "region": "us-west-2",
        "partition": "aws",
        "id": "3eb35569068ae8ec3dabc5c77e74f491",
        "arn": "arn:aws:guardduty:us-west-2:957132980467:detector/84b35568c3651686951efb3f3070e3a2/finding/3eb35569068ae8ec3dabc5c77e74f491",
        "type": "Stealth:IAMUser/LoggingConfigurationModified",
        "resource": {
            "resourceType": "AccessKey",
            "accessKeyDetails": {
                "accessKeyId": "GeneratedFindingAccessKeyId",
                "principalId": "GeneratedFindingPrincipalId",
                "userType": "IAMUser",
                "userName": "GeneratedFindingUserName"
            }
        },
        "service": {
            "serviceName": "guardduty",
            "detectorId": "84b35568c3651686951efb3f3070e3a2",
            "action": {
                "actionType": "AWS_API_CALL",
                "awsApiCallAction": {
                    "api": "GeneratedFindingAPIName",
                    "serviceName": "GeneratedFindingAPIServiceName",
                    "callerType": "Remote IP",
                    "remoteIpDetails": {
                        "ipAddressV4": "198.51.100.0",
                        "organization": {
                            "asn": "-1",
                            "asnOrg": "GeneratedFindingASNOrg",
                            "isp": "GeneratedFindingISP",
                            "org": "GeneratedFindingORG"
                        },
                        "country": {
                            "countryName": "GeneratedFindingCountryName"
                        },
                        "city": {
                            "cityName": "GeneratedFindingCityName"
                        },
                        "geoLocation": {
                            "lat": 0,
                            "lon": 0
                        }
                    },
                    "affectedResources": {}
                }
            },
            "resourceRole": "TARGET",
            "additionalInfo": {
                "recentApiCalls": [
                    {
                        "count": 2,
                        "api": "GeneratedFindingAPIName1"
                    },
                    {
                        "count": 2,
                        "api": "GeneratedFindingAPIName2"
                    }
                ],
                "sample": true
            },
            "eventFirstSeen": "2018-10-25T10:43:04.597Z",
            "eventLastSeen": "2018-11-08T20:34:05.390Z",
            "archived": false,
            "count": 15
        },
        "severity": 5,
        "createdAt": "2018-10-25T10:43:04.597Z",
        "updatedAt": "2018-11-08T20:34:05.390Z",
        "title": "Unusual changes to API activity logging by GeneratedFindingUserName.",
        "description": "APIs commonly used to stop CloudTrail logging, delete existing logs and other such activity that erases any trace of activity in the account, was invoked by IAM principal GeneratedFindingUserName. Such activity is not typically seen from this principal."
    }
};

var apis_invoked = {
    "version": "0",
    "id": "0a97604e-15ce-1390-49a8-8b0863c06f15",
    "detail-type": "GuardDuty Finding",
    "source": "aws.guardduty",
    "account": "957132980467",
    "time": "2018-11-08T20:35:39Z",
    "region": "us-west-2",
    "resources": [],
    "detail": {
        "schemaVersion": "2.0",
        "accountId": "957132980467",
        "region": "us-west-2",
        "partition": "aws",
        "id": "54b35569068e045b62f9fc9a96f9b149",
        "arn": "arn:aws:guardduty:us-west-2:957132980467:detector/84b35568c3651686951efb3f3070e3a2/finding/54b35569068e045b62f9fc9a96f9b149",
        "type": "UnauthorizedAccess:IAMUser/UnusualASNCaller",
        "resource": {
            "resourceType": "AccessKey",
            "accessKeyDetails": {
                "accessKeyId": "GeneratedFindingAccessKeyId",
                "principalId": "GeneratedFindingPrincipalId",
                "userType": "IAMUser",
                "userName": "GeneratedFindingUserName"
            }
        },
        "service": {
            "serviceName": "guardduty",
            "detectorId": "84b35568c3651686951efb3f3070e3a2",
            "action": {
                "actionType": "AWS_API_CALL",
                "awsApiCallAction": {
                    "api": "GeneratedFindingAPIName",
                    "serviceName": "GeneratedFindingAPIServiceName",
                    "callerType": "Remote IP",
                    "remoteIpDetails": {
                        "ipAddressV4": "198.51.100.0",
                        "organization": {
                            "asn": "-1",
                            "asnOrg": "GeneratedFindingASNOrg",
                            "isp": "GeneratedFindingISP",
                            "org": "GeneratedFindingORG"
                        },
                        "country": {
                            "countryName": "GeneratedFindingCountryName"
                        },
                        "city": {
                            "cityName": "GeneratedFindingCityName"
                        },
                        "geoLocation": {
                            "lat": 0,
                            "lon": 0
                        }
                    },
                    "affectedResources": {}
                }
            },
            "resourceRole": "TARGET",
            "additionalInfo": {
                "unusual": {
                    "isps": "17756"
                },
                "sample": true
            },
            "eventFirstSeen": "2018-10-25T10:43:04.604Z",
            "eventLastSeen": "2018-11-08T20:34:05.403Z",
            "archived": false,
            "count": 15
        },
        "severity": 8,
        "createdAt": "2018-10-25T10:43:04.604Z",
        "updatedAt": "2018-11-08T20:34:05.403Z",
        "title": "APIs invoked by GeneratedFindingUserName from an unusual network.",
        "description": "APIs invoked by principal GeneratedFindingUserName from an IP address that is registered to an unusual organization."
    }
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

var payloads = {
    "CloudTrail: Add User To Group": ct_add_user_to_group,
    "GuardDuty: RDP Brute Force Attack": rdp_brute_force,
    "GuardDuty: SSH Brute Force Attack": ssh_brute_force,
    "GuardDuty: DNS Data Exfiltration": dns_data_exfiltration,
    "GuardDuty: GuardDuty Changes": guard_duty_changes,
    "GuardDuty: API's invoked": apis_invoked
};