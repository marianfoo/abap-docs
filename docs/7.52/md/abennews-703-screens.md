  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0, EhP3 and 7.3, EhP1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-703.htm) → 

Selection Screens and Lists in Release 7.0, EhP3 and 7.3
EhP1

[1\. Extended field lengths on selection screens](#!ABAP_MODIFICATION_1@1@)

[2\. Handling spool lists](#!ABAP_MODIFICATION_2@2@)

Modification 1

Extended Field Lengths on Selection Screens

The maximum length of input fields on selection screens has been increased from 132 to 255 for parameters and from 45 to 255 for selection criteria. To allow values to be passed using [SUBMIT WITH SELECTION TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm), a new data type RSPARAMSL\_255, which supports this maximum length, has been added to ABAP Dictionary.

Modification 2

Handling Spool Lists

If a [spool list level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_level_glosry.htm "Glossary Entry") stacked in a preceding [spool list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_glosry.htm "Glossary Entry") is closed using [NEW-PAGE PRINT OFF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm), the preceding spool list is now always resumed. Previously, a new spool list was opened in this case if the spool parameters were different and the existing spool list resumed only if the spool parameters were identical.

When the system returns to the spool list, the system field sy-spono is switched to the associated number of the spool request directly when the statement NEW-PAGE PRINT OFF is executed. Previously, sy-spono was not modified directly but only in the next output statement sent to a spool list.