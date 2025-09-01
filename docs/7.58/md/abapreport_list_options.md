  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Program-Initiating Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_statement.htm) →  [REPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreport.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REPORT%2C%20list_options%2C%20ABAPREPORT_LIST_OPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REPORT, list\_options

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreport_shortref.htm)

Syntax

... *\[*NO STANDARD PAGE HEADING*\]*
    *\[*LINE-SIZE width*\]*
    *\[*LINE-COUNT page\_lines*\[*(footer\_lines)*\]**\]* ...

Additions:

[1\. ... NO STANDARD PAGE HEADING](#!ABAP_ADDITION_1@1@)
[2\. ... LINE-SIZE width](#!ABAP_ADDITION_2@2@)
[3\. ... LINE-COUNT page\_lines*\[*(footer\_lines)*\]*](#!ABAP_ADDITION_3@3@)

Effect

These additions affect the basic list of the program.

Addition 1   

... NO STANDARD PAGE HEADING

Effect

This addition suppresses the output of the [standard page header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_page_header_glosry.htm "Glossary Entry") (standard header and column headers) in the basic list of the program and sets the system field sy-wtitl to the value N. This setting can be overwritten when the list is created using the additions NO-TITLE*|*WITH-TITLE and NO-HEADING*|*WITH-HEADING of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-page_options.htm).

Addition 2   

... LINE-SIZE width

Effect

This addition specifies the line width of the basic list and details list of the program to width characters and sets the system field sy-linsz to this value. The line width determines the number of characters in the line buffer as well as the number of columns in the list displayed. The value width must be specified directly as a positive number. The maximum line width is 1023.

If LINE-SIZE is not specified, the line width of the basic list is set to a standard width based on the window width of the current [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry"), but is at least as wide as a standard size GUI window. For the standard width, the content of sy-linsz is 0. The specification of LINE-SIZE overwrites the value passed to the identically named addition LINE-SIZE of the statement [SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit_list_options.htm) and can be overwritten when the list is created using the identically named addition LINE-SIZE of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-page_options.htm).

Hint

The current maximum line width is stored in the constant SLIST\_MAX\_LINESIZE of the [type pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry") SLIST. A type SLIST\_MAX\_LISTLINE of type c with length SLIST\_MAX\_LINESIZE is also defined there. The constant SLIST\_MAX\_LINESIZE cannot be used in the statement REPORT but can be used in the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-page.htm).

Addition 3   

... LINE-COUNT page\_lines*\[*(footer\_lines)*\]*

Effect

This addition specifies the page length for the basic list of the program as page\_lines lines and fills the system field sy-linct with this value. If LINE-COUNT is not specified and for page\_lines less than 0 or greater than 60000, the page length is set internally to 60000. This setting overwrites the value passed to the identically named addition LINE-SIZE of the statement [SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit_list_options.htm) and can be overwritten when the list is created by the identically named addition LINE-COUNT of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapnew-page_options.htm).

The optional specification of a number for footer\_lines is used to reserve a corresponding number of lines for the [page footer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpage_footer_glosry.htm "Glossary Entry"), which can be described in the event block END-OF-PAGE.

page\_lines and footer\_lines must be specified directly as positive numbers and no sign can be specified for footer\_lines here.

Hints

-   The default value should be used for screen lists because page changes specified using LINE-COUNT are usually not adjusted to the window size.
-   The default value should also be used for spool lists, so that the page size can be selected on a printer-specific basis. A spool list should be created in such a way that it provides meaningful results for each page size.
-   Specifying a fixed line number only makes sense for form-like lists with a fixed page layout. However, a check should always be made on whether such forms can be created by other means.

Example

The page length of the basic list is set to 65 lines, of which eight lines are reserved for the page footer. The line width is 132 characters.

REPORT myreport LINE-COUNT 65(8) LINE-SIZE 132.