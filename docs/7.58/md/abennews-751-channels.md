  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Channels%20in%20ABAP%20Release%207.51%2C%20ABENNEWS-751-CHANNELS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Channels in ABAP Release 7.51

[1\. Length Restriction for AMC and APC](#!ABAP_MODIFICATION_1@1@)
[2\. Suppressing AMC Messages](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Length Restriction for AMC and APC

The length restriction for messages that can be sent using [AMC](javascript:call_link\('abenamc.htm'\)) has been extended from approximately 30,000 bytes to approximately 1 MB. This limit can be increased even further by changing the profile parameter rdisp/long\_messages/max\_length.

The same applies to [APC](javascript:call_link\('abenapc.htm'\)) messages, which are sent with an attached client object using the interface IF\_APC\_WSP\_CLIENT\_CONN\_ATTACH.

Modification 2   

Suppressing AMC Messages

The new parameter I\_SUPPRESS\_ECHO of the method CREATE\_MESSAGE\_PRODUCER of the class CL\_AMC\_CHANNEL\_MANAGER can be used to control whether [AMC](javascript:call_link\('abenamc.htm'\)) messages can be sent to the current ABAP session or not.