  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: News Before Release 3.0, ABENNEWS-21, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

News Before Release 3.0

Changes were made in the following areas before development of SAP Basis Release 3.0 started:

[1\. Country-Specific Decimal Point and Date Representation](#!ABAP_MODIFICATION_1@1@)
[2\. Lists as Modal Dialog Boxes](#!ABAP_MODIFICATION_2@2@)
[3\. Line Width per List or List Level](#!ABAP_MODIFICATION_3@3@)
[4\. New Language Element DESCRIBE LIST](#!ABAP_MODIFICATION_4@4@)
[5\. Client-Independent ABAP SQL](#!ABAP_MODIFICATION_5@5@)
[6\. Client-Independent EXPORT/IMPORT](#!ABAP_MODIFICATION_6@6@)

Modification 1   

Country-Specific Decimal Point and Date Representation
The new language element [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) allows the decimal point and date representation for all subsequent output (WRITE) to be modified.

Modification 2   

Lists as Modal Dialog Boxes
Lists can now be sent as modal dialog boxes, if formatted using LEAVE TO LIST-PROCESSING in standalone [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") that
(a) ... have the appropriate attribute set in the dynpro properties.
(b) ... are called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) (more precisely using the addition ... STARTING AT ... ENDING AT).

Modification 3   

Line Width per List or List Level
Previously, the line width for a list was defined by specifying LINE-SIZE in the main program (the program started first in a [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry")). This meant that lists created by function modules could not define the line width themselves.
Now, the LINE-SIZE specified in the active ABAP program (the program in which the active dynpros calls its modules) applies. This setting can be changed explicitly per list level using the addition ... LINE-SIZE in [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)).

Modification 4   

New Language Element DESCRIBE LIST
Previously, DESCRIBE could be used to describe the properties of fields, structures, and internal tables. This is now also possible for lists using [DESCRIBE LIST](javascript:call_link\('abapdescribe_list.htm'\)).

Modification 5   

Client-Independent ABAP SQL
Table can now be accessed in any client using the addition CLIENT SPECIFIED with the ABAP SQL language elements [SELECT](javascript:call_link\('abapselect.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)).

Modification 6   

Client-Independent EXPORT/IMPORT
The addition CLIENT of the language elements [EXPORT ... TO DATABASE](javascript:call_link\('abapexport_data_cluster.htm'\)), IMPORT ... FROM DATABASE, and DELETE FROM DATABASE can now be used for client-independent access to appropriate client-dependent cluster databases.