  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_lists.htm) → 

NEW-PAGE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_shortref.htm)

Syntax

NEW-PAGE *\[*[page\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm)*\]* *\[* [spool\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm)*\]*.

Effect

This statement creates a new page in the current list and writes the subsequent list output into a spool list. The additions [page\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm) determine general properties of the new page. The additions [spool\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm) control the spool list output.

The statement NEW-PAGE completes the current page. If output was created by [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [ULINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapuline.htm) on the current page, a new page is created and the value in sy-pagno is increased by 1. An empty line is inserted between the individual pages. The [list cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_cursor_glosry.htm "Glossary Entry") is set to the first position of the first line under the standard page header of the new page.

The new page is created independently of the current list cursor position underneath the last line of the current page in which output was created.

Notes

-   The statement NEW-PAGE cannot be used to create empty pages.
    
-   The list event [END-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-page.htm) is not triggered. The event [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptop-of-page.htm) is triggered before the first output on the new page.
    

Continue
[NEW-PAGE - page\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm)
[NEW-PAGE - spool\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm)