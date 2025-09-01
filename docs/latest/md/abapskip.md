  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SKIP%2C%20ABAPSKIP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SKIP

[Short Reference](javascript:call_link\('abapskip_shortref.htm'\))

Syntax

SKIP *{* *\[*n*\]*
     *|* *{*TO LINE line*}* *}*.

Variants:

[1\. SKIP *\[*n*\]*.](#!ABAP_VARIANT_1@1@)
[2\. SKIP TO LINE line.](#!ABAP_VARIANT_2@2@)

Effect

Positions the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") relative to the current line or in any other line.

Variant 1   

SKIP *\[*n*\]*.

Effect

This statement positions the list cursor relative to the current line. The new line is determined by the value of n. n expects a data object of type i. If the value of n is less than or equal to 0, the statement is ignored. If n is not specified, the statement is executed as if n contains the value 1.

The cursor is positioned as follows:

-   If the line of the current list cursor was set using an output statement ([WRITE](javascript:call_link\('abapwrite-.htm'\)), [ULINE](javascript:call_link\('abapuline.htm'\))), the list cursor is set the first position of the line that is n lines under the current line.
-   If the lines of the current list cursor was set using a positioning statement ([BACK](javascript:call_link\('abapback.htm'\)), [NEW-LINE](javascript:call_link\('abapnew-line.htm'\)), [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)), SKIP), the list cursor is set in the current position in the line that is n minus 1 lines under the current line.

The following special conditions should be noted:

-   If the list cursor cannot be positioned on the current page, a new page is created, which includes any [page footers](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry") that the current page may have. The list cursor is positioned in the first position of the first line under the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") of the new page.
-   The statement is only executed at the start of the page if this page is the first in a list level, or it was created using the statement NEW-PAGE.

Hint

In most cases, this variant of the statement SKIP works as if it creates n blank lines. It should be noted, however, that these blank lines have no content that can be formatted using the [FORMAT](javascript:call_link\('abapformat.htm'\)) statement. Blank lines that can be formatted can only be created using the WRITE statement in combination with [SET BLANK LINES](javascript:call_link\('abapset_blank_lines.htm'\)) ON.

Variant 2   

SKIP TO LINE line.

Effect

This statement positions the list cursor in the first position of the line on the current page whose number is determined by the value in line. line expects a data object of type i. If the value of line is less than or equal to 0, or greater than the page length defined in sy-linct using the addition [LINE-COUNT](javascript:call_link\('abapnew-page_options.htm'\)) of the program-initiating statement, or [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)), the addition TO LINE is ignored and the statement SKIP without additions is executed instead.

Hint

If the list cursor is positioned in the first list line using SKIP TO LINE, and the list has a standard page header, the output in the first line is overwritten by the standard header. If, however, the cursor is positioned using SKIP TO LINE in the lines of page headers and page footers that are defined for [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\)) and [END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\)), the page headers or footers are overwritten.

Example

The first SKIP statement creates a blank line for the event TOP-OF-PAGE. The second SKIP statement positions the list cursor in this line.

REPORT demo\_skip NO STANDARD PAGE HEADING.
DATA sum TYPE i.
TOP-OF-PAGE.
  SKIP.
  ULINE.
START-OF-SELECTION.
  DO 10 TIMES.
    WRITE / sy-index.
    sum += sy-index.
  ENDDO.
  SKIP TO LINE 1.
  WRITE: 'Numbers with sum' COLOR COL\_HEADING,
          sum               COLOR COL\_TOTAL.