  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-751.htm) → 

Messages in Release 7.51

Modification

Implicit Message Type in IF\_T100\_DYN\_MSG

If the object reference variable oref in the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage.htm) (used to send a message) points to an object that includes the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_dyn_msg.htm), the addition TYPE can be omitted. The message type from the interface attribute MSGTY of the object is then used implicitly.