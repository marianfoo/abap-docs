  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-751.htm) → 

ABAP Channels in Release 7.51

[1\. Length Restriction for AMC and APC](#!ABAP_MODIFICATION_1@1@)
[2\. Suppressing AMC Messages](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Length Restriction for AMC and APC

The length restriction for messages that can be sent using [AMC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamc.htm) has been extended from approximately 30,000 bytes to approximately 1 MB. This limit can be increased even further by changing the profile parameter rdisp/long\_messages/max\_length.

The same applies to [APC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapc.htm) messages, which are sent with an attached client object using the interface IF\_APC\_WSP\_CLIENT\_CONN\_ATTACH.

Modification 2   

Suppressing AMC Messages

The new parameter I\_SUPPRESS\_ECHO of the method CREATE\_MESSAGE\_PRODUCER of the class CL\_AMC\_CHANNEL\_MANAGER can be used to control whether [AMC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamc.htm) messages can be sent to the current ABAP session or not.