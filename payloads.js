var gd1 = {
    "client": "AWS Console",
    "details": {
        "version": "0"
    }
};

var gd2 = {
  "client": "AWS Console",
  "client_url": "https://us-west-2.console.aws.amazon.com/guardduty/home?region=us-west-2#/findings?macros=current&fId=2ab35569068ee10579b5abdbe10e679f",
  "description": "GuardDuty Finding: 198.51.100.0 is performing SSH brute force attacks against i-99999999. ",
  "event_type": "trigger",
  "service_key": "49f08aff4dd849dab0794c81fbfa326f",
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

var payloads = {
    'GuardDuty 1': gd1,
    'GuardDuty 2': gd2
};