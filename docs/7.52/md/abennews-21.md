  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) → 

Changes Before Release 3.0

Changes were made in the following subjects before development for SAP Basis Release 3.0:

[1\. Country-specific decimal point and date format](#!ABAP_MODIFICATION_1@1@)
[2\. Lists as modal dialog boxes](#!ABAP_MODIFICATION_2@2@)
[3\. Line width for each list / list level](#!ABAP_MODIFICATION_3@3@)
[4\. New key word DESCRIBE LIST](#!ABAP_MODIFICATION_4@4@)
[5\. Cross-client SAP SQL](#!ABAP_MODIFICATION_5@5@)
[6\. Cross-client EXPORT/IMPORT](#!ABAP_MODIFICATION_6@6@)

Modification 1

Country-specific decimal point and date format:
The new key word [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) allows you to change the the decimal point and date format for all subsequent output (WRITE).

Modification 2

Lists as modal dialog boxes:
You can now display lists as modal dialog boxes, if the lists are formatted with LEAVE TO LIST-PROCESSING on [screens](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") that
\- have the appropriate attribute set in the screen attributes.
\- are called with [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) (more precisely with the addition
... STARTING AT ... ENDING AT).

Modification 3

Line width for each list / list level:
Previously, the line width for a list was defined by the LINE-SIZE specification in the main program (i.e. the program started first in a [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry")). This meant that lists created by function modules could not define the line width themselves.
Now, it is the LINE-SIZE specification of the active ABAP program (the program in which the active screen calls its modules). You can change this explicitly for each list level by using the addition ... LINE-SIZE with [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)).

Modification 4

New key word DESCRIBE LIST:
Previously, you could use DESCRIBE to describe the attributes of fields, field strings and internal tables. Now, you can also do this for lists by using [DESCRIBE LIST](javascript:call_link\('abapdescribe_list.htm'\)).

Modification 5

Cross-client SAP SQL:
By using the addition CLIENT SPECIFIED with the SAP SQL key words [SELECT](javascript:call_link\('abapselect.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), and [DELETE](javascript:call_link\('abapdelete.htm'\)), you can now access tables in any client.

Modification 6

Cross-client EXPORT/IMPORT:
By using the addition CLIENT with the key words [EXPORT ... TO DATABASE](javascript:call_link\('abapexport_data_cluster.htm'\)), IMPORT ... FROM DATABASE, and DELETE FROM DATABASE, you can now access the cluster databases in any client.