  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP02](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740_sp02.htm) → 

ABAP Channels in Release 7.40, SP02

In Release 7.40, two new communication channels were introduced, which can also be connected to each other. ABAP Push Channels can be used only from [SP05](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740_sp05-abap_channels.htm).

[1\. ABAP Messaging Channels](#!ABAP_MODIFICATION_1@1@)
[2\. New variants of WAIT UNTIL](#!ABAP_MODIFICATION_2@2@)

Modification 1

ABAP Messaging Channels

From Release 7.40, SP02, [ABAP Messaging Channels (AMC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamc.htm) enable a new type of communication between AS ABAP programs, which goes beyond the limits of an AS instance.

Modification 2

New Variants of WAIT UNTIL

The new variant [WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_amc.htm) waits for AMC messages in [ABAP Messaging Channels (AMC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamc.htm). A further new variant, [WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_arfc.htm), waits for the callback routines of an [aRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarfc_glosry.htm "Glossary Entry") and replaces the previous statement [WAIT UNTIL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_obsolete.htm) (which now only exists in an obsolete short form).