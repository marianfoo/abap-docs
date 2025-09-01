  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) → 

RESERVE

[Short Reference](javascript:call_link\('abapreserve_shortref.htm'\))

Syntax

RESERVE n LINES.

Effect

This statement creates a page break if there is not enough space left on the current list page between the last output and the page end or [page footer](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry"), as specified in n. n expects a data object of type i. No page break is triggered if the value of n is less than or equal to 0.

The page break raises the list event [END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\)) regardless of whether or not a page footer was defined in the program-initiating statement.

Furthermore, the statement RESERVE affects the behavior of the statement [BACK](javascript:call_link\('abapback.htm'\)).

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