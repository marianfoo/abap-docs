  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages in Release 7.54, ABENNEWS-754-MESSAGES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

Messages in Release 7.54

Modification

Implicit Message Type in IF\_T100\_DYN\_MSG

If the object reference variable oref in the variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)) of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) for sending a message points to an object that includes the system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)), the addition TYPE can be omitted and the message type from the interface attribute MSGTY of the object is used implicitly.

Until now, however, the statement MESSAGE oref could only have the further additions [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) and [DISPLAY LIKE](javascript:call_link\('abapmessage.htm'\)) if TYPE was specified explicitly. These additions are now also possible if TYPE is not specified.