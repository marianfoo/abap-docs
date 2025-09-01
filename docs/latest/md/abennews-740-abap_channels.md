  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Channels%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-ABAP_CHANNELS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

ABAP Channels in ABAP Release 7.40, SP02

In ABAP release 7.40, two new communication channels were introduced, which can also be connected to each other. ABAP push channels can be used only from [SP05](javascript:call_link\('abennews-740_sp05-abap_channels.htm'\)).

[1\. ABAP Messaging Channels](#!ABAP_MODIFICATION_1@1@)
[2\. New Variants of WAIT UNTIL](#!ABAP_MODIFICATION_2@2@)

Modification 1   

ABAP Messaging Channels

From ABAP release 7.40, SP02, [ABAP Messaging Channels (AMC)](javascript:call_link\('abenamc.htm'\)) enable a new type of communication between AS ABAP programs, which goes beyond the limits of an AS instance.

Modification 2   

New Variants of WAIT UNTIL

The new variant [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)) waits for AMC messages in [ABAP Messaging Channels (AMC)](javascript:call_link\('abenamc.htm'\)). A further new variant, [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)), waits for the callback routines of an [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry") and replaces the previous statement [WAIT UNTIL](javascript:call_link\('abapwait_obsolete.htm'\)) (which now only exists in an obsolete short form).