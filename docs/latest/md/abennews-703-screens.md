  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0, EhP3 and 7.3, EhP1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-703.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20and%20Lists%20in%20ABAP%20Release%207.0%2C%20EhP3%20and%207.3%2C%20EhP1%2C%20ABENNEWS-703-SCREENS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens and Lists in ABAP Release 7.0, EhP3 and 7.3, EhP1

[1\. Extended Field Lengths on Selection Screens](#!ABAP_MODIFICATION_1@1@)
[2\. Handling Spool Lists](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Extended Field Lengths on Selection Screens

The maximum length of input fields on selection screens has been increased from 132 to 255 for parameters and from 45 to 255 for selection criteria. To allow values to be passed using [SUBMIT WITH SELECTION TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_selscreen_parameters.htm), a new data type RSPARAMSL\_255, which supports this maximum length, has been added to ABAP Dictionary.

Modification 2   

Handling Spool Lists

If a [spool list level](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspool_list_level_glosry.htm "Glossary Entry") stacked in a preceding [spool list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspool_list_glosry.htm "Glossary Entry") is closed using [NEW-PAGE PRINT OFF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnew-page_print.htm), the preceding spool list is now always resumed. Previously, a new spool list was opened in this case if the spool parameters were different and the existing spool list resumed only if the spool parameters were identical.

When the system returns to the spool list, the system field sy-spono is switched to the associated number of the spool request directly when the statement NEW-PAGE PRINT OFF is executed. Previously, sy-spono was not modified directly but only in the next output statement sent to a spool list.