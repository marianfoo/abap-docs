  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Creating Lists](javascript:call_link\('abenabap_lists.htm'\)) → 

NEW-PAGE

[Quick Reference](javascript:call_link\('abapnew-page_shortref.htm'\))

Syntax

NEW-PAGE *\[*[page\_options](javascript:call_link\('abapnew-page_options.htm'\))*\]* *\[* [spool\_options](javascript:call_link\('abapnew-page_print.htm'\))*\]*.

Effect

This statement creates a new page in the current list and writes the subsequent list output into a spool list. The additions [page\_options](javascript:call_link\('abapnew-page_options.htm'\)) determine general properties of the new page. The additions [spool\_options](javascript:call_link\('abapnew-page_print.htm'\)) control the spool list output.

The statement NEW-PAGE completes the current page. If output was created by [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [ULINE](javascript:call_link\('abapuline.htm'\)) on the current page, a new page is created and the value in sy-pagno is increased by 1. An empty line is inserted between the individual pages. The [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") is set to the first position of the first line under the standard page header of the new page.

The new page is created independently of the current list cursor position underneath the last line of the current page in which output was created.

Notes

-   The statement NEW-PAGE cannot be used to create empty pages.
    
-   The statement NEW-PAGE does not raise the list event [END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\)). This list event is raised only if the page footer or page end is reached when the list is being written. If NEW-PAGE is executed at precisely this event, it just seems like END-OF-PAGE was reached by this statement, like for any other statement.
    
-   The event [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\)) is triggered before the first output on the new page.
    

Continue
[NEW-PAGE - page\_options](javascript:call_link\('abapnew-page_options.htm'\))
[NEW-PAGE - spool\_options](javascript:call_link\('abapnew-page_print.htm'\))