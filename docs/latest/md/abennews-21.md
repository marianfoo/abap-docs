  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20News%20Before%20ABAP%20Release%203.0%2C%20ABENNEWS-21%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

News Before ABAP Release 3.0

Changes were made in the following areas before development of ABAP release 3.0 started:

[1\. Country-Specific Decimal Point and Date Representation](#!ABAP_MODIFICATION_1@1@)
[2\. Lists as Modal Dialog Boxes](#!ABAP_MODIFICATION_2@2@)
[3\. Line Width per List or List Level](#!ABAP_MODIFICATION_3@3@)
[4\. New Language Element DESCRIBE LIST](#!ABAP_MODIFICATION_4@4@)
[5\. Client-Independent ABAP SQL](#!ABAP_MODIFICATION_5@5@)
[6\. Client-Independent EXPORT/IMPORT](#!ABAP_MODIFICATION_6@6@)

Modification 1   

Country-Specific Decimal Point and Date Representation

The new language element [SET COUNTRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_country.htm) allows the decimal point and date representation for all subsequent output (WRITE) to be modified.

Modification 2   

Lists as Modal Dialog Boxes

Lists can now be sent as modal dialog boxes, if formatted using LEAVE TO LIST-PROCESSING in standalone [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") that

(a) ... have the appropriate attribute set in the dynpro properties.

(b) ... are called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_screen.htm) (more precisely using the addition ... STARTING AT ... ENDING AT).

Modification 3   

Line Width per List or List Level

Previously, the line width for a list was defined by specifying LINE-SIZE in the main program (the program started first in a [transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransaction_glosry.htm "Glossary Entry")). This meant that lists created by function modules could not define the line width themselves.

Now, the LINE-SIZE specified in the active ABAP program (the program in which the active dynpros calls its modules) applies. This setting can be changed explicitly per list level using the addition ... LINE-SIZE in [NEW-PAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnew-page.htm).

Modification 4   

New Language Element DESCRIBE LIST

Previously, DESCRIBE could be used to describe the properties of fields, structures, and internal tables. This is now also possible for lists using [DESCRIBE LIST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdescribe_list.htm).

Modification 5   

Client-Independent ABAP SQL

Table can now be accessed in any client using the addition CLIENT SPECIFIED with the ABAP SQL language elements [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm), [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm), and [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm).

Modification 6   

Client-Independent EXPORT/IMPORT

The addition CLIENT of the language elements [EXPORT ... TO DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm), IMPORT ... FROM DATABASE, and DELETE FROM DATABASE can now be used for client-independent access to appropriate client-dependent cluster databases.