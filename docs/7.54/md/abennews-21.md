  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) → 

Changes Before Release 3.0

Changes were made in the following areas before development of SAP Basis Release 3.0 started:

[1\. Country-specific decimal point and date representation](#!ABAP_MODIFICATION_1@1@)
[2\. Lists as modal dialog boxes](#!ABAP_MODIFICATION_2@2@)
[3\. Line width per list/list level](#!ABAP_MODIFICATION_3@3@)
[4\. New language element DESCRIBE LIST](#!ABAP_MODIFICATION_4@4@)
[5\. Cross-client ABAP SQL](#!ABAP_MODIFICATION_5@5@)
[6\. Cross-client EXPORT/IMPORT](#!ABAP_MODIFICATION_6@6@)

Modification 1

Country-Specific Decimal Point and Date Representation
The new language element [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) allows the decimal point and date representation for all subsequent output (WRITE) to be modified.

Modification 2

Lists as Modal Dialog Boxes
Lists can now be sent as modal dialog boxes, if formatted using LEAVE TO LIST-PROCESSING in standalone [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") that
(a) ... have the appropriate attribute set in the dynpro attributes.
(b) ... are called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) (more precisely using the addition ... STARTING AT ... ENDING AT).

Modification 3

Line Width per List/List Level
Previously, the line width for a list was defined by specifying LINE-SIZE in the main program (the program started first in a [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry")). This meant that lists created by function modules could not define the line width themselves.
Now, the LINE-SIZE specified in the active ABAP program (the program in which the active dynpros calls its modules) applies. This setting can be changed explicitly per list level using the addition ... LINE-SIZE in [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)).

Modification 4

New Language Element DESCRIBE LIST
Previously, DESCRIBE could be used to describe the attributes of fields, structures, and internal tables. This is now also possible for lists using [DESCRIBE LIST](javascript:call_link\('abapdescribe_list.htm'\)).

Modification 5

Cross-Client ABAP SQL
Table can now be accessed in any client using the addition CLIENT SPECIFIED with the ABAP SQL language elements [SELECT](javascript:call_link\('abapselect.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)).

Modification 6

Cross-Client EXPORT/IMPORT
The addition CLIENT of the language elements [EXPORT ... TO DATABASE](javascript:call_link\('abapexport_data_cluster.htm'\)), IMPORT ... FROM DATABASE, and DELETE FROM DATABASE can now be used for cross-client access to appropriate client-specific cluster databases.