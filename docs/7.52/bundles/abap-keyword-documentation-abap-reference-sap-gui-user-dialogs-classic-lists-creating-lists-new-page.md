# ABAP - Keyword Documentation / ABAP - Reference / SAP GUI User Dialogs / Classic Lists / Creating Lists / NEW-PAGE

Included pages: 3


### abapnew-page.htm

---
title: "NEW-PAGE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_shortref.htm) Syntax NEW-PAGE page_options(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm)  spool_options(https://help.sap.com/doc/abapdocu_752_index_htm/7
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm"
abapFile: "abapnew-page.htm"
keywords: ["insert", "do", "if", "try", "class", "abapnew", "page"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_lists.htm) → 

NEW-PAGE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_shortref.htm)

Syntax

NEW-PAGE *\[*[page\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm)*\]* *\[* [spool\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm)*\]*.

Effect

This statement creates a new page in the current list and writes the subsequent list output into a spool list. The additions [page\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm) determine general properties of the new page. The additions [spool\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm) control the spool list output.

The statement NEW-PAGE completes the current page. If output was created by [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [ULINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapuline.htm) on the current page, a new page is created and the value in sy-pagno is increased by 1. An empty line is inserted between the individual pages. The [list cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_cursor_glosry.htm "Glossary Entry") is set to the first position of the first line under the standard page header of the new page.

The new page is created independently of the current list cursor position underneath the last line of the current page in which output was created.

Notes

-   The statement NEW-PAGE cannot be used to create empty pages.
    
-   The list event [END-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-page.htm) is not triggered. The event [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptop-of-page.htm) is triggered before the first output on the new page.
    

Continue
[NEW-PAGE - page\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm)
[NEW-PAGE - spool\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm)


### abapnew-page_options.htm

---
title: "Syntax"
description: |
  ... WITH-TITLENO-TITLE WITH-HEADINGNO-HEADING LINE-COUNT page_lines LINE-SIZE width NO-TOPOFPAGE ... Extras: 1. ... WITH-TITLENO-TITLE(#!ABAP_ADDITION_1@1@) 2. ... WITH-HEADINGNO-HEADING(#!ABAP_ADDITION_2@2@) 3. ... LINE-COUNT page_lines
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm"
abapFile: "abapnew-page_options.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abapnew", "page", "options"]
---

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


### abapnew-page_print.htm

---
title: "Syntax"
description: |
  ...  PRINT ON NEW-SECTION PARAMETERS pri_params ARCHIVE PARAMETERS arc_params NO DIALOG    PRINT OFF  ... Extras: 1. ... PRINT ON NEW-SECTION(#!ABAP_ADDITION_1@1@) 2. ... PARAMETERS pri_params(#!ABAP_ADDITION_2@2@) 3. ... ARCHIVE PARAMETERS arc_para
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm"
abapFile: "abapnew-page_print.htm"
keywords: ["select", "do", "while", "if", "try", "catch", "class", "data", "types", "abapnew", "page", "print"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_lists.htm) →  [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm) → 

NEW-PAGE - spool\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_shortref.htm)

Syntax

... *{* PRINT ON *\[*NEW-SECTION*\]* PARAMETERS pri\_params
                             *\[*ARCHIVE PARAMETERS arc\_params*\]*
                             NO DIALOG *}*
  *|* *{* PRINT OFF *}* ...

Extras:

[1\. ... PRINT ON *\[*NEW-SECTION*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... PARAMETERS pri\_params](#!ABAP_ADDITION_2@2@)
[3\. ... ARCHIVE PARAMETERS arc\_params](#!ABAP_ADDITION_3@3@)
[4\. ... NO DIALOG](#!ABAP_ADDITION_4@4@)
[5\. ... PRINT OFF](#!ABAP_ADDITION_5@5@)

Effect

The addition PRINT ON writes all subsequent output statements to a [spool list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm). The additions *\[*ARCHIVE*\]* PARAMETERS are used to define the spool parameters and the archiving parameters of the [spool request](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspool_request_glosry.htm "Glossary Entry"). The addition PRINT OFF closes a spool list that has been started with the addition PRINT ON.

Addition 1

... PRINT ON *\[*NEW-SECTION*\]*

Effect

The addition PRINT ON creates a new [spool list level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_level_glosry.htm "Glossary Entry"). The first output statement after NEW-PAGE PRINT ON opens a new [spool request](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspool_request_glosry.htm "Glossary Entry") and writes to a [spool list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_glosry.htm "Glossary Entry") in the [SAP spool system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_spool_system_glosry.htm "Glossary Entry"). The number of the spool request is passed to sy-spono by the first output statement. While it is being created, the spool list is sent page by page to the SAP spool system.

-   If the current list is a screen list, its creation is interrupted and the new spool list level is stacked in it.
    
-   If the current list is a [spool list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm) not created with NEW-PAGE PRINT ON, its creation is interrupted and the new spool list level is stacked in it.
    
-   If the current list is a [spool list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm) created using NEW-PAGE PRINT ON and the addition NEW-SECTION is not used, a handleable exception of the class CX\_SY\_NESTED\_PRINT\_ON is raised.
    
-   If the current list is a [spool list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm) created using NEW-PAGE PRINT ON, the addition NEW-SECTION is used, the specified spool parameters match those of the new list, and the spool parameter PRNEW in the structure pri\_params is initial, no new spool request is opened and the output is written to the current spool list. If the spool parameters define the output of a cover sheet, the cover sheet is printed again before the following output as a spacer sheet.
    
-   If the current list is a [spool list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm) created using NEW-PAGE PRINT ON, the addition NEW-SECTION is used, and the specified spool parameters do not match those of the new list or the spool parameter PRNEW in structure pri\_params is not initial, the current spool request is closed implicitly by NEW-PAGE PRINT OFF and a new spool request is created.
    

It is not possible to use NEW-PAGE PRINT ON to stack another spool list level directly on to a spool list level created using NEW-PAGE PRINT ON.

A spool list level created using NEW-PAGE PRINT ON can be closed by either NEW-PAGE PRINT OFF, NEW-PAGE PRINT ON NEW-SECTION, the end of the program, or by leaving a dynpro sequence.

Notes

-   Each statement NEW-PAGE PRINT ON should be closed explicitly using NEW-PAGE PRINT OFF before the program end or before leaving a dynpro sequence.
    
-   The addition NEW-SECTION can be used to avoid the exception CX\_SY\_NESTED\_PRINT\_ON. When using NEW-SECTION, the output can also be continued into the previous spool list, which is not possible when an exception is handled with CATCH.
    
-   As well as the addition NEW-SECTION, the obsolete statement [NEW-SECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-section.htm) can also be used outside of classes. However it does not enable spool parameters to be specified.
    

Executable Example

[Lists, Spooling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_abexa.htm).

Addition 2

... PARAMETERS pri\_params

Addition 3

... ARCHIVE PARAMETERS arc\_params

Addition 4

... NO DIALOG

Effect

These additions provide the spool request with [spool parameters and archiving parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters.htm). The latter are necessary if the spool list is archived using [ArchiveLink](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_archivelink_glosry.htm "Glossary Entry").

The addition PARAMETERS passes the spool parameters in a structure pri\_params of data type PRI\_PARAMS from ABAP Dictionary. If archiving is specified in pri\_params, archiving parameters must be passed using the addition ARCHIVE PARAMETERS in a structure arc\_params of data type ARC\_PARAMS from ABAP Dictionary.

Structures of data types PRI\_PARAMS and ARC\_PARAMS must be filled by the function module [GET\_PRINT\_PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_function.htm). When calling the function module, either individual or all spool parameters can be set in the program and/or a spool dialog window displayed. The function module creates a set of valid spool and archiving parameters for use as pri\_params and arc\_params and adds these to its output parameters.

If the structures pri\_params or arc\_params are initial, the spool parameters or archiving parameters created by a call of the function modules GET\_PRINT\_PARAMETERS with initial input values are used.

The addition NO DIALOG suppresses the spool dialog window that by default appears when using the addition PRINT ON.

Notes

-   These additions must always be used as indicated here. It is particularly important that the standard spool dialog box be suppressed. When using the default spool dialog window, the Back function is not available because the system cannot return to a point before a statement after spooling has been switched on by such a statement. Printing can only be exited using Exit, which ends the entire program. If the user exits the GUI window by choosing Cancel, inconsistent spool parameters can be produced. Instead, the spool dialog window can be displayed by calling the function module [GET\_PRINT\_PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_function.htm). This function module has an output parameter VALID that indicates the consistency of the spool parameters created.
    
-   The use of the addition NO DIALOG without simultaneously passing spool parameters is allowed only outside of ABAP Objects and produces a warning in the syntax check. In other objects, the spool parameters are derived from the user master record, if possible.
    
-   As well as the additions shown here, there is a range of other additions for an [obsolete specification of spool parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print_obsolete.htm), which should no longer be used.
    

Example

Creates spool lists during the list event [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_line-selection.htm). The spool parameters are defined by the function module GET\_PRINT\_PARAMETERS before the basic list is created.

REPORT demo NO STANDARD PAGE HEADING.
DATA: spfli\_wa TYPE spfli,
      sflight\_wa TYPE sflight.
DATA: print\_parameters TYPE pri\_params,
      valid\_flag       TYPE c LENGTH 1.
START-OF-SELECTION.
  CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
    IMPORTING
      out\_parameters       = print\_parameters
      valid                = valid\_flag
    EXCEPTIONS
      invalid\_print\_params = 2
      OTHERS               = 4.
  IF valid\_flag = 'X' AND sy-subrc = 0.
    SELECT carrid, connid
           FROM spfli
           INTO CORRESPONDING FIELDS OF @spfli\_wa.
      WRITE: / spfli\_wa-carrid, spfli\_wa-connid.
      HIDE:    spfli\_wa-carrid, spfli\_wa-connid.
    ENDSELECT.
  ELSE.
    ...
  ENDIF.
AT LINE-SELECTION.
  NEW-PAGE PRINT ON PARAMETERS print\_parameters
                    NO DIALOG.
  SELECT \*
         FROM sflight
         WHERE carrid = @spfli\_wa-carrid AND
               connid = @spfli\_wa-connid
         INTO @sflight\_wa.
    WRITE: / sflight\_wa-carrid, sflight\_wa-connid,
             sflight\_wa-fldate ...
  ENDSELECT.
  NEW-PAGE PRINT OFF.

Addition 5

... PRINT OFF

Effect

The addition PRINT OFF closes a [spool list level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_level_glosry.htm "Glossary Entry") created using NEW-PAGE PRINT ON, sends the current page to the SAP spool system, and releases the associated spool request. Output statements that follow NEW-PAGE PRINT OFF write to the screen list or spool list where the spool list level closed by PRINT OFF was [stacked](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_spool.htm). When the system returns to the print list, the system field sy-spono is switched to the number of the associated spool request directly when the statement NEW-PAGE PRINT OFF is executed.

NEW-PAGE PRINT OFF is ignored by spool list levels not been created using NEW-PAGE PRINT ON.

Note

At the end of the program and at every list event [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_line-selection.htm), [AT PFnn](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_pfnn.htm), and [AT USER-COMMAND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_user-command.htm), the statement NEW-PAGE PRINT OFF is executed implicitly.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_NESTED\_PRINT\_ON

-   Cause: Stacked NEW-PAGE PRINT ON.
    Runtime error: NESTED\_PRINT\_ON
