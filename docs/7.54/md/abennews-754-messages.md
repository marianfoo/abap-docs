  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

Messages in Release 7.54

[1\. Implicit message type in IF\_T100\_DYN\_MSG](#!ABAP_MODIFICATION_1@1@)

Modification 1

Implicit Message Type in IF\_T100\_DYN\_MSG

If the object reference variable oref in the variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)) of the statement [](javascript:call_link\('abapmessage.htm'\))[MESSAGE](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) (for sending a message) points to an object that includes the system interface IF\_T100\_DYN\_MSG, the addition TYPE can be omitted and the message type from the interface attribute MSGTY of the object is used implicitly.

Until now, however, the statement MESSAGE oref could only have the further additions [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) and [DISPLAY LIKE](javascript:call_link\('abapmessage.htm'\)) if TYPE was specified explicitly. These additions are now also possible if TYPE is not specified.