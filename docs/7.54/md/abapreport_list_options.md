  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_statement.htm) →  [REPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport.htm) → 

REPORT - list\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_shortref.htm)

Syntax

... *\[*NO STANDARD PAGE HEADING*\]*
    *\[*LINE-SIZE width*\]*
    *\[*LINE-COUNT page\_lines*\[*(footer\_lines)*\]**\]* ...

Extras:

[1\. ... NO STANDARD PAGE HEADING](#!ABAP_ADDITION_1@1@)
[2\. ... LINE-SIZE width](#!ABAP_ADDITION_2@2@)
[3\. ... LINE-COUNT page\_lines*\[*(footer\_lines)*\]*](#!ABAP_ADDITION_3@3@)

Effect

These additions influence the basic list of the program.

Addition 1

... NO STANDARD PAGE HEADING

Effect

This addition suppresses the output of the [standard page header](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_page_header_glosry.htm "Glossary Entry") (standard header and column headers) in the basic list of the program and sets the system field sy-wtitl to the value "N". This setting can be overwritten when the list is created using the additions NO-TITLE*|*WITH-TITLE and NO-HEADING*|*WITH-HEADING of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page_options.htm).

Addition 2

... LINE-SIZE width

Effect

This addition specifies the line width of the basic list and the details list of the program to width characters and sets the system field sy-linsz to this value. The line width determines the number of characters in the line buffer as well as the number of columns in the list displayed. The value width must be specified directly as a positive number. The maximum line width is 1023.

If LINE-SIZE is not specified, the line width of the basic list is set to a standard width based on the window width of the current [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry"), but is at least as wide as a standard size GUI window. For the standard width, the content of sy-linsz is 0. LINE-SIZE overwrites the value passed by the (similarly named) addition LINE-SIZE of the statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_list_options.htm) and can be overwritten when the list is created by the (similarly named) addition LINE-SIZE of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page_options.htm).

Note

The current maximum line width is stored in the constant SLIST\_MAX\_LINESIZE of the [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry") SLIST. Also defined there is a type SLIST\_MAX\_LISTLINE of type c with length SLIST\_MAX\_LINESIZE. The constant SLIST\_MAX\_LINESIZE cannot be used in the statement REPORT but can be used in the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page.htm).

Addition 3

... LINE-COUNT page\_lines*\[*(footer\_lines)*\]*

Effect

This addition specifies the page length for the basic list of the program as page\_lines lines and fills the system field sy-linct with this value. If LINE-COUNT is not specified and if page\_lines is less than 0 or greater than 60000, the page length is set internally to 60000. This setting overwrites the value passed by the (identically named) addition LINE-SIZE of the statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_list_options.htm) and can be overwritten when the list is created by the (identically named) addition LINE-COUNT of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page_options.htm).

If a number is specified for footer\_lines, a corresponding number of lines are reserved for the [page footer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpage_footer_glosry.htm "Glossary Entry"), which can be described in the event block END-OF-PAGE.

page\_lines and footer\_lines must be specified directly as positive numbers. No sign can be specified for footer\_lines here.

Notes

-   The default value should be used for screen lists since, as a rule, page breaks specified using LINE-COUNT are not adjusted to the window size.
    
-   The default value should also be used for spool lists, so that the page size can be selected on a printer-specific basis. A spool list should be created in such a way that it provides satisfactory results for any page size.
    
-   Specifying a fixed line count is only useful for form-like lists with a fixed page layout. Here, however, it is always advisable to check whether these forms can be created by other means. This can be done, for example, by searching [SAP Help Portal](http://help.sap.com) for the term "form".
    

Example

The page length of the basic list is set to 65 lines, eight of which are reserved for the page footer. The line width is 132 characters.

REPORT z\_myreport LINE-COUNT 65(8) LINE-SIZE 132.