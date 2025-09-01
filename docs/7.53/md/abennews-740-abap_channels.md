  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

ABAP Channels in Release 7.40, SP02

In Release 7.40, two new communication channels were introduced, which can also be connected to each other. ABAP Push Channels can be used only from [SP05](javascript:call_link\('abennews-740_sp05-abap_channels.htm'\)).

[1\. ABAP Messaging Channels](#!ABAP_MODIFICATION_1@1@)

[2\. New variants of WAIT UNTIL](#!ABAP_MODIFICATION_2@2@)

Modification 1

ABAP Messaging Channels

From Release 7.40, SP02, [ABAP Messaging Channels (AMC)](javascript:call_link\('abenamc.htm'\)) enable a new type of communication between AS ABAP programs, which goes beyond the limits of an AS Instance.

Modification 2

New Variants of WAIT UNTIL

The new variant [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)) waits for AMC messages in [ABAP Messaging Channels (AMC)](javascript:call_link\('abenamc.htm'\)). A further new variant, [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_until.htm'\)), waits for the callback routines of an [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry") and replaces the previous statement [WAIT UNTIL](javascript:call_link\('abapwait_obsolete.htm'\)) (which now only exists in an obsolete short form).