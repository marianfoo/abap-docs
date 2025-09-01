  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_lists.htm) →  [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm) → 

NEW-PAGE - page\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_shortref.htm)

Syntax

... *\[*WITH-TITLE*|*NO-TITLE*\]*
    *\[*WITH-HEADING*|*NO-HEADING*\]*
    *\[*LINE-COUNT page\_lines*\]*
    *\[*LINE-SIZE width*\]*
    *\[*NO-TOPOFPAGE*\]* ...

Extras:

[1\. ... WITH-TITLE*|*NO-TITLE](#!ABAP_ADDITION_1@1@)
[2\. ... WITH-HEADING*|*NO-HEADING](#!ABAP_ADDITION_2@2@)
[3\. ... LINE-COUNT page\_lines](#!ABAP_ADDITION_3@3@)
[4\. ... LINE-SIZE width](#!ABAP_ADDITION_4@4@)
[5\. ... NO-TOPOFPAGE](#!ABAP_ADDITION_5@5@)

Effect

These additions set properties of the list for all subsequent pages of the current list level, until they are set again in another NEW-PAGE statement. The additions override additions of the same name in the introductory program statement.

Addition 1

... WITH-TITLE*|*NO-TITLE

Addition 2

... WITH-HEADING*|*NO-HEADING

Effect

These additions specify which components of the standard page header are produced for the subsequent pages of the current list level. The standard page header consists of a standard title and column headings.

The additions WITH-TITLE and NO-TITLE switch the output of the standard title on or off for the subsequent pages. The predefined default setting for basic lists is WITH-TITLE, and for details lists is NO-TITLE.

The additions WITH-HEADING and NO-HEADING switch the output of the column headings on or off for all subsequent pages. The predefined default setting for basic lists is WITH-HEADING, and for details lists is NO-HEADING.

Note

For basic lists, these additions override the setting made in the introductory program statement. The addition NO STANDARD PAGE HEADING used there functions in the same way as when NO-TITLE and NO-HEADING are used simultaneously, with the exception that the latter do not have an impact on the system field sy-wtitl.

Addition 3

... LINE-COUNT page\_lines

Effect

This addition sets the page length of the subsequent pages of the current list level to the value in page\_lines and sets sy-linct to this value. page\_lines expects a data object of type i. If the value of page\_lines is less than or equal to 0 or greater than 60000, the page length is set to 60000. For the basic list, the addition overrides the page length specified in the introductory program statement.

The page length determines how many lines including [page header](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_header_glosry.htm "Glossary Entry") and [page footer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_footer_glosry.htm "Glossary Entry") can be written to a list page. If output is written to a line outside the current page length or in the area reserved for the page footer of a basic list, a new page is created automatically.

Notes

The lines reserved in the introductory program statement for the page footer of the basic list cannot be changed with the addition LINE-COUNT of the statement NEW-PAGE. Page footers cannot be created for details lists.

-   The default value should be used for screen lists since, as a rule, page breaks specified using LINE-COUNT are not adjusted to the window size.
    
-   The default value should also be used for spool lists, so that the page size can be selected on a printer-specific basis. A spool list should be created in such a way that it provides satisfactory results for any page size.
    
-   Specifying a fixed line count is only useful for form-like lists with a fixed page layout. Here, however, always check whether these forms can be created by other means. For example, search the [SAP Help Portal](http://help.sap.com) for the term "form".
    

Example

The following code demonstrates automatic page breaks in a basic list. The pages have two-line page headers and page footers defined after [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptop-of-page.htm) and [END-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-page.htm). The page length is specified after NEW-PAGE. The program displays five pages.

REPORT NO STANDARD PAGE HEADING LINE-COUNT 0(2).
TOP-OF-PAGE.
  WRITE sy-pagno.
  ULINE.
END-OF-PAGE.
  ULINE.
  WRITE 'Footer'.
START-OF-SELECTION.
  NEW-PAGE LINE-COUNT 6.
  DO 10 TIMES.
    WRITE / sy-index.
  ENDDO.

Addition 4

... LINE-SIZE width

Effect

This addition sets the page width of the current list level to the value in width and sets sy-linsz to this value. The line width determines the number of characters in the line buffer as well as the number of columns in the list displayed. width expects a data object of type i. The value of width must not be negative. If the value of width is equal to 0 or greater than 1023, the line width is set to a default width, which is based on the window width of the current [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") (sy-scols), but is at least as wide as the width of a standard sized GUI window. For the basic list, the addition overrides the page width specified in the introductory program statement.

The addition has an effect only if no output has yet been sent to the current list level. The page width of a list that has already been written cannot be changed.

Note

The current maximum line width is stored in the constants slist\_max\_linesize of the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") SLIST. A type slist\_max\_listline of type c and length slist\_max\_linesize is also defined there.

Example

Creates a basic list and details lists with various page widths. Only the standard title of the standard page header is displayed.

REPORT demo NO STANDARD PAGE HEADING.
START-OF-SELECTION.
  NEW-PAGE WITH-TITLE LINE-SIZE 40.
  WRITE 'Basic list'.
AT LINE-SELECTION.
  NEW-PAGE WITH-TITLE LINE-SIZE 20.
  WRITE 'Secondary list'.

Addition 5

... NO-TOPOFPAGE

Effect

This addition suppresses the event [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptop-of-page.htm) on the new page and on all automatically created pages of the current list level up to the next statement NEW-PAGE. If the addition NO-TOPOFPAGE is not specified, the event TOP-OF-PAGE is raised before the output is sent to a new page.

Example

The following program creates six pages. The event TOP-OF-PAGE is raised only on the first page.

REPORT demo NO STANDARD PAGE HEADING.
START-OF-SELECTION.
  ULINE.
  NEW-PAGE NO-TOPOFPAGE LINE-COUNT 2.
  DO 10 TIMES.
    WRITE / sy-index.
  ENDDO.
TOP-OF-PAGE.
  WRITE 'Basic list'.