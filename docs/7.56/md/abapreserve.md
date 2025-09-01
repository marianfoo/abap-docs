  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists.htm) → 

RESERVE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreserve_shortref.htm)

Syntax

RESERVE n LINES.

Effect

This statement creates a page break if there is not enough space left on the current list page between the last output and the page end or [page footer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpage_footer_glosry.htm "Glossary Entry"), as specified in n. n expects a data object of type i. No page break is triggered if the value of n is less than or equal to 0.

The page break raises the list event [END-OF-PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-of-page.htm) regardless of whether or not a page footer was defined in the program-initiating statement.

Furthermore, the statement RESERVE affects the behavior of the statement [BACK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapback.htm).

Hint

If the page length is greater than the value of n, the RESERVE statement can be used to define blocks of lines that can only be displayed completely on one page.

Example

The three lines produced by the DO loop and the blank line that follows them form a line block and are not separated by page breaks.

REPORT NO STANDARD PAGE HEADING LINE-COUNT 10(2).
START-OF-SELECTION.
  DO 5 TIMES.
    RESERVE 4 LINES.
    WRITE: / '1', / '2', / '3'.
    SKIP.
  ENDDO.
END-OF-PAGE.
  ULINE.
  WRITE sy-pagno.