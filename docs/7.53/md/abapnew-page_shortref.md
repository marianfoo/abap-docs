  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  N

NEW-PAGE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page.htm)

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

-   [WITH-TITLE*|*NO-TITLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_options.htm)
    Switches the standard title on and off.
    
-   [WITH-HEADING*|*NO-HEADING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_options.htm)
    Switches the column headings on and off.
    
-   [LINE-COUNT page\_lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_options.htm)
    Defines the page length.
    
-   [LINE-SIZE page\_lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_options.htm)
    Defines the line width.
    
-   [NO-TOPOFPAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_options.htm)
    Suppresses the event TOP-OF-PAGE.
    
-   [PRINT ON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_print.htm)
    Redirects the output statements to a spool list.
    
-   [NEW-SECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_print.htm)
    Creates a new [spool request](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspool_request_glosry.htm "Glossary Entry") with different spool parameters.
    
-   [PARAMETERS pri\_params](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_print.htm)
    Specifies the spool parameters in a structure pri\_params of type PRI\_PARAMS.
    
-   [ARCHIVE PARAMETERS arc\_params](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_print.htm)
    Specifies the archiving parameters in a structure arc\_params of type ARC\_PARAMS.
    
-   [NO DIALOG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_print.htm)
    Suppresses the spool dialog window.
    
-   [PRINT OFF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_print.htm)
    Closes the current spool list.