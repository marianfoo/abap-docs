  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.54](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20in%20ABAP%20Release%207.54%2C%20ABENNEWS-754-MESSAGES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages in ABAP Release 7.54

Modification

Implicit Message Type in IF\_T100\_DYN\_MSG

If the object reference variable oref in the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) for sending a message points to an object that includes the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm), the addition TYPE can be omitted and the message type from the interface attribute MSGTY of the object is used implicitly.

Until now, however, the statement MESSAGE oref could only have the further additions [RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm) and [DISPLAY LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) if TYPE was specified explicitly. These additions are now also possible if TYPE is not specified.