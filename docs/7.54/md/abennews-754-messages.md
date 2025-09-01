  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-754.htm) → 

Messages in Release 7.54

[1\. Implicit message type in IF\_T100\_DYN\_MSG](#!ABAP_MODIFICATION_1@1@)

Modification 1

Implicit Message Type in IF\_T100\_DYN\_MSG

If the object reference variable oref in the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_msg.htm) of the statement [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm)[MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenif_t100_dyn_msg.htm) (for sending a message) points to an object that includes the system interface IF\_T100\_DYN\_MSG, the addition TYPE can be omitted and the message type from the interface attribute MSGTY of the object is used implicitly.

Until now, however, the statement MESSAGE oref could only have the further additions [RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) and [DISPLAY LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) if TYPE was specified explicitly. These additions are now also possible if TYPE is not specified.