  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  N

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: NEW-PAGE, ABAPNEW-PAGE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

NEW-PAGE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page.htm)

Syntax

NEW-PAGE *\[*WITH-TITLE*|*NO-TITLE*\]*
         *\[*WITH-HEADING*|*NO-HEADING*\]*
         *\[*LINE-COUNT page\_lines*\]*
         *\[*LINE-SIZE width*\]*
         *\[*NO-TOPOFPAGE*\]*
         *\[* *{* PRINT ON *\[*NEW-SECTION*\]*
                       PARAMETERS pri\_params
                      *\[*ARCHIVE PARAMETERS arc\_params*\]*
                       NO DIALOG *}*
         *|* *{* PRINT OFF *}* *\]*.

Effect

Creates a new page in a list.

Additions   

-   [WITH-TITLE*|*NO-TITLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_options.htm)
    Switches the standard title on and off.
-   [WITH-HEADING*|*NO-HEADING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_options.htm)
    Switches the column headings on and off.
-   [LINE-COUNT page\_lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_options.htm)
    Defines the page length.
-   [LINE-SIZE page\_lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_options.htm)
    Defines the line width.
-   [NO-TOPOFPAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_options.htm)
    Suppresses the event TOP-OF-PAGE.
-   [PRINT ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm)
    Redirects the output statements to a spool list.
-   [NEW-SECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm)
    Creates a new [spool request](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspool_request_glosry.htm "Glossary Entry") with different spool parameters.
-   [PARAMETERS pri\_params](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm)
    Specifies the spool parameters in a structure pri\_params of type PRI\_PARAMS.
-   [ARCHIVE PARAMETERS arc\_params](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm)
    Specifies the archiving parameters in a structure arc\_params of type ARC\_PARAMS.
-   [NO DIALOG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm)
    Suppresses the spool dialog box.
-   [PRINT OFF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm)
    Closes the current spool list.