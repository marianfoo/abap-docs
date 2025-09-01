  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

ABAP Channels in Release 7.51

[1\. Length restriction for AMC](#!ABAP_MODIFICATION_1@1@)

[2\. Suppressing standalone AMC messages](#!ABAP_MODIFICATION_2@2@)

Modification 1

Length Restriction for AMC

The length restriction for messages that can be sent using [AMC](javascript:call_link\('abenamc.htm'\)) has been extended from approximately 30,000 bytes to approximately 1 MB. This limit can be increased even further by changing the profile parameter rdisp/long\_messages/max\_length.

The same applies to [APC](javascript:call_link\('abenapc.htm'\)) messages, which are sent with an attached client object using the interface IF\_APC\_WSP\_CLIENT\_CONN\_ATTACH.

Modification 2

Suppressing Standalone AMC Messages

The new parameter I\_SUPPRESS\_ECHO of the method CREATE\_MESSAGE\_PRODUCER of the class CL\_AMC\_CHANNEL\_MANAGER can be used to control whether [AMC](javascript:call_link\('abenamc.htm'\)) messages can be sent to the current ABAP session or not.