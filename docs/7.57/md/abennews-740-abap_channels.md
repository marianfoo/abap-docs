  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Channels in Release 7.40, SP02, ABENNEWS-740-ABAP_CHANNELS, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Channels in Release 7.40, SP02

In Release 7.40, two new communication channels were introduced, which can also be connected to each other. ABAP push channels can be used only from [SP05](javascript:call_link\('abennews-740_sp05-abap_channels.htm'\)).

[1\. ABAP Messaging Channels](#!ABAP_MODIFICATION_1@1@)
[2\. New Variants of WAIT UNTIL](#!ABAP_MODIFICATION_2@2@)

Modification 1   

ABAP Messaging Channels

From Release 7.40, SP02, [ABAP Messaging Channels (AMC)](javascript:call_link\('abenamc.htm'\)) enable a new type of communication between AS ABAP programs, which goes beyond the limits of an AS instance.

Modification 2   

New Variants of WAIT UNTIL

The new variant [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)) waits for AMC messages in [ABAP Messaging Channels (AMC)](javascript:call_link\('abenamc.htm'\)). A further new variant, [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)), waits for the callback routines of an [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry") and replaces the previous statement [WAIT UNTIL](javascript:call_link\('abapwait_obsolete.htm'\)) (which now only exists in an obsolete short form).