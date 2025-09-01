  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_lists.htm) → 

NEW-PAGE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page_shortref.htm)

Syntax

NEW-PAGE *\[*[page\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page_options.htm)*\]* *\[* [spool\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page_print.htm)*\]*.

Effect

This statement creates a new page in the current list and writes the subsequent list output into a spool list. The additions [page\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page_options.htm) determine general properties of the new page. The additions [spool\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page_print.htm) control the spool list output.

The statement NEW-PAGE completes the current page. If output was created by [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) or [ULINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapuline.htm) on the current page, a new page is created and the value in sy-pagno is increased by 1. An empty line is inserted between the individual pages. The [list cursor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_cursor_glosry.htm "Glossary Entry") is set to the first position of the first line under the standard page header of the new page.

The new page is created independently of the current list cursor position underneath the last line of the current page in which output was created.

Hints

-   The statement NEW-PAGE cannot be used to create empty pages.

-   The statement NEW-PAGE does not raise the list event [END-OF-PAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapend-of-page.htm). This list event is raised only if the page footer or page end is reached when the list is being written. If NEW-PAGE is executed at exactly this event, it just seems like END-OF-PAGE was reached by this statement, like for any other statement.

-   The event [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptop-of-page.htm) is raised before the first output on the new page.
    

Continue
[NEW-PAGE, page\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page_options.htm)
[NEW-PAGE, spool\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page_print.htm)