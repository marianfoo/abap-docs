# ABAP - Keyword Documentation / ABAP - Reference / Program Layout / Introductory Statements for Programs

Included pages: 9


### abenabap_program_statement.htm

---
title: "Introductory Statements for Programs"
description: |
  The introductory statements for programs are as follows: -   REPORT(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm) -   PROGRAM(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm) -   FUNCTION-POOL(https://help.sap.com/doc/abapdocu_752_index_h
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm"
abapFile: "abenabap_program_statement.htm"
keywords: ["do", "if", "case", "try", "class", "types", "abenabap", "program", "statement"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) → 

Introductory Statements for Programs

The introductory statements for programs are as follows:

-   [REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm)
    
-   [PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm)
    
-   [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction-pool.htm)
    
-   [CLASS-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-pool.htm)
    
-   [INTERFACE-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface-pool.htm)
    
-   [TYPE-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pool.htm).
    

The introductory statement of each program depends on the [program type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_type_glosry.htm "Glossary Entry") specified in the [program attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry").

All statements that follow the introductory statements in the source code or that are included as [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") are handled as a single unit by ABAP Compiler.

The first statement of every standalone ABAP program must be an introductory statement and each program can only contain one of these statements. The only other statement allowed in the first position (alongside the introductory statement) is the statement INCLUDE. In this case, an introductory statement for a program must appear in the first position of the program after the include program is resolved when the program is generated.

Executable programs, module pools, function groups, class pools, interface pools, subroutine pools, and type groups are standalone [compilation units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). Include programs, on the other hand, are only used in the context of compilation units.

Type groups, also known as type pools, are standalone programs from a logical point of view. However, they do not contain executable code but only type definitions and constant definitions. For this reason, type groups have their own introductory program statement, TYPE-POOL.

Note

From a syntax point of view, it is not mandatory to assign introductory program statements to the program types defined in the [program attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"). The assignments described in the following sections, however, should always be used. When a program is created, the appropriate statement is created automatically by ABAP Workbench and should be changed only in the additions, when editing. In particular, the keywords FUNCTION-POOL, CLASS-POOL, INTERFACE-POOL, and TYPE-POOL should be created solely by the respective tools of [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry") and never be entered in the source code themselves, to avoid unexpected system behavior.

Continue
[REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm)
[PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm)
[FUNCTION-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction-pool.htm)
[CLASS-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-pool.htm)
[INTERFACE-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface-pool.htm)
[TYPE-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pool.htm)


### abapreport.htm

---
title: "REPORT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_shortref.htm) Syntax REPORT rep list_options(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm) MESSAGE-ID mid DEFINING DATABASE ldb(https://help.sap.
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm"
abapFile: "abapreport.htm"
keywords: ["do", "if", "try", "class", "data", "abapreport"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) → 

REPORT

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_shortref.htm)

Syntax

REPORT rep *\[*[list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm)*\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*[DEFINING DATABASE ldb](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_defining.htm)*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Extras:

[1\. ... MESSAGE-ID mid](#!ABAP_ADDITION_1@1@)
[2\. ... REDUCED FUNCTIONALITY](#!ABAP_ADDITION_2@2@)

Effect

The statement REPORT introduces an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. The name rep must be specified directly. The optional additions [list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm) can be used to modify the [basic list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbasic_list_glosry.htm "Glossary Entry") of the program. A [message class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_class_glosry.htm "Glossary Entry") can be specified using MESSAGE-ID.

The addition [DEFINING DATABASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_defining.htm) is used to define a [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), whereas REDUCED FUNCTIONALITY should only be used for [PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm).

Notes

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm). In executable programs, PROGRAM means the same as REPORT and can be used with the additions of REPORT. As a rule, however, executable programs should only be introduced using REPORT.
    
-   Although it is not absolutely necessary to specify the name rep, the name of the ABAP program from the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") should always be used.
    

Addition 1

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) in the program. Here, only the message type and message number are specified in the statement. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) in which the message class is specified override the addition MESSAGE-ID.

Example

Default setting of the message class Z\_MY\_MESSAGES for the program Z\_MY\_REPORT.

REPORT z\_my\_report MESSAGE-ID z\_my\_messages.

Addition 2

... REDUCED FUNCTIONALITY

Effect

This addition is only intended for use with the statement [PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm) in subroutine pools and is described [there](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm).

Continue
[REPORT - list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm)


### abapreport_list_options.htm

---
title: "Syntax"
description: |
  ... NO STANDARD PAGE HEADING LINE-SIZE width LINE-COUNT page_lines(footer_lines) ... Extras: 1. ... NO STANDARD PAGE HEADING(#!ABAP_ADDITION_1@1@) 2. ... LINE-SIZE width(#!ABAP_ADDITION_2@2@) 3. ... LINE-COUNT page_lines(footer_lines)(#!ABAP_ADDIT
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm"
abapFile: "abapreport_list_options.htm"
keywords: ["select", "do", "if", "case", "try", "abapreport", "list", "options"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) →  [REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm) → 

REPORT - list\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_shortref.htm)

Syntax

... *\[*NO STANDARD PAGE HEADING*\]*
    *\[*LINE-SIZE width*\]*
    *\[*LINE-COUNT page\_lines*\[*(footer\_lines)*\]**\]* ...

Extras:

[1\. ... NO STANDARD PAGE HEADING](#!ABAP_ADDITION_1@1@)
[2\. ... LINE-SIZE width](#!ABAP_ADDITION_2@2@)
[3\. ... LINE-COUNT page\_lines*\[*(footer\_lines)*\]*](#!ABAP_ADDITION_3@3@)

Effect

These additions modify the basic list of the program.

Addition 1

... NO STANDARD PAGE HEADING

Effect

This addition suppresses the output of the [standard page header](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_page_header_glosry.htm "Glossary Entry") (standard header and column headers) in the basic list of the program and sets the system field sy-wtitl to the value "N". This setting can be overwritten when the list is created using the additions NO-TITLE*|*WITH-TITLE and NO-HEADING*|*WITH-HEADING of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm).

Addition 2

... LINE-SIZE width

Effect

This addition specifies the line width of the basic list and the details list of the program to width characters and sets the system field sy-linsz to this value. The line width determines the number of characters in the line buffer as well as the number of columns in the list displayed. The value width must be specified directly as a positive number. The maximum line width is 1023.

If LINE-SIZE is not specified, the line width of the basic list is set to a standard width based on the window width of the current [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry"), but is at least as wide as a standard size GUI window. For the standard width, the content of sy-linsz is 0. If specified, LINE-SIZE overwrites the value of the addition LINE-SIZE of the statement [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_list_options.htm) and can be overwritten when the list is created using the addition LINE-SIZE of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm).

Note

The current maximum line width is stored in the constant SLIST\_MAX\_LINESIZE of the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") SLIST. Also defined there is a type SLIST\_MAX\_LISTLINE of type c with length SLIST\_MAX\_LINESIZE. The constant SLIST\_MAX\_LINESIZE cannot be used in the statement REPORT but can be used in the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm).

Addition 3

... LINE-COUNT page\_lines*\[*(footer\_lines)*\]*

Effect

This addition specifies the page length for the basic list of the program as page\_lines lines and fills the system field sy-linct with this value. If LINE-COUNT is not specified and if page\_lines is less than 0 or greater than 60000, the page length is set internally to 60000. This setting overwrites the value passed by the (identically named) addition LINE-SIZE of the statement [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_list_options.htm) and can be overwritten when the list is created by the (identically named) addition LINE-COUNT of the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm).

If a number is specified for footer\_lines, a corresponding number of lines are reserved for the [page footer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_footer_glosry.htm "Glossary Entry"), which can be described in the event block END-OF-PAGE.

page\_lines and footer\_lines must be specified directly as positive numbers. No sign can be specified for footer\_lines here.

Notes

-   The default value should be used for screen lists since, as a rule, page breaks specified using LINE-COUNT are not adjusted to the window size.
    
-   The default value should also be used for spool lists, so that the page size can be selected on a printer-specific basis. A spool list should be created in such a way that it provides satisfactory results for any page size.
    
-   It is only useful to specify a fixed line count in the case of form-like lists with a fixed page layout. Here, however, it is always advisable to check whether these forms can be created by other means. This can be done, for example, by searching [SAP Help Portal](http://help.sap.com) for the term "form".
    

Example

Sets the page length of the basic list to 65 lines, eight of which are reserved for the page footer. The line width is 132 characters.

REPORT z\_myreport LINE-COUNT 65(8) LINE-SIZE 132.


### abapreport.htm

---
title: "REPORT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_shortref.htm) Syntax REPORT rep list_options(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm) MESSAGE-ID mid DEFINING DATABASE ldb(https://help.sap.
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm"
abapFile: "abapreport.htm"
keywords: ["do", "if", "try", "class", "data", "abapreport"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) → 

REPORT

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_shortref.htm)

Syntax

REPORT rep *\[*[list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm)*\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*[DEFINING DATABASE ldb](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_defining.htm)*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Extras:

[1\. ... MESSAGE-ID mid](#!ABAP_ADDITION_1@1@)
[2\. ... REDUCED FUNCTIONALITY](#!ABAP_ADDITION_2@2@)

Effect

The statement REPORT introduces an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. The name rep must be specified directly. The optional additions [list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm) can be used to modify the [basic list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbasic_list_glosry.htm "Glossary Entry") of the program. A [message class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_class_glosry.htm "Glossary Entry") can be specified using MESSAGE-ID.

The addition [DEFINING DATABASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_defining.htm) is used to define a [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), whereas REDUCED FUNCTIONALITY should only be used for [PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm).

Notes

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm). In executable programs, PROGRAM means the same as REPORT and can be used with the additions of REPORT. As a rule, however, executable programs should only be introduced using REPORT.
    
-   Although it is not absolutely necessary to specify the name rep, the name of the ABAP program from the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") should always be used.
    

Addition 1

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) in the program. Here, only the message type and message number are specified in the statement. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) in which the message class is specified override the addition MESSAGE-ID.

Example

Default setting of the message class Z\_MY\_MESSAGES for the program Z\_MY\_REPORT.

REPORT z\_my\_report MESSAGE-ID z\_my\_messages.

Addition 2

... REDUCED FUNCTIONALITY

Effect

This addition is only intended for use with the statement [PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm) in subroutine pools and is described [there](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm).

Continue
[REPORT - list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm)


### abapprogram.htm

---
title: "PROGRAM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram_shortref.htm) Syntax PROGRAM prog list_options(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm) MESSAGE-ID mid REDUCED FUNCTIONALITY. Addition:
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm"
abapFile: "abapprogram.htm"
keywords: ["loop", "do", "if", "try", "types", "abapprogram"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) → 

PROGRAM

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram_shortref.htm)

Syntax

PROGRAM prog *\[*[list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm)*\]*
             *\[*MESSAGE-ID mid*\]*
             *\[*REDUCED FUNCTIONALITY*\]*.

Addition:

[... REDUCED FUNCTIONALITY](#!ABAP_ONE_ADD@1@)

Effect

The statement PROGRAM introduces a [module pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodul_pool_glosry.htm "Glossary Entry") or a [subroutine pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_pool_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. The name prog must be specified directly. The following applies to the additions:

-   In module pools, the additions [list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm) and MESSAGE-ID of the statement PROGRAM have the same meaning as the additions of the same name in the statement [REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm). The addition REDUCED FUNCTIONALITY works only in subroutine pools and is otherwise ignored.
    
-   In subroutine pools, MESSAGE-ID (if specified) has the same meaning as in the statement [REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm). The possible additions [list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm) for the basic list are ignored, since subroutine pools do not have a separate [list buffer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_buffer_glosry.htm "Glossary Entry"). Output statements in subroutine pools write to the current list of the calling [main program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_program_glosry.htm "Glossary Entry"). The addition REDUCED FUNCTIONALITY only works in subroutine pools..
    

Notes

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm). In module pools or subroutine pools, REPORT has the same meaning as PROGRAM and can be used with its additions. As a rule, module pools and subroutine pools should only be introduced by using PROGRAM.
    
-   The name prog is not absolutely necessary, but the name of the ABAP program from the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") should always be used.
    
-   The name of a module pool is not fixed, but should follow the naming conventions in ABAP Workbench. These specify that the name of module pools should start with "SAPM".
    

Addition

... REDUCED FUNCTIONALITY

Effect

This addition only has an effect in programs of program type [subroutine pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_pool_glosry.htm "Glossary Entry"). In other program types, the syntax check raises a warning. In a subroutine pool introduced with the addition REDUCED FUNCTIONALITY, not all components that are usually loaded with an ABAP program are loaded. This reduces the [program load](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenload_glosry.htm "Glossary Entry") and memory consumption in the [program memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroll_area_glosry.htm "Glossary Entry"). This means that the full ABAP language range is not available.

-   The built-in structure [syst](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm) is not loaded. Instead of syst, the structure sy with the same meaning can be used.
    
-   The built-in structure [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_structure_obsolete.htm) is not loaded. The statements [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_screen.htm) and [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_screen.htm) are then not possible.
    
-   It is not possible to work with the [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") of the [main program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current [program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_group_glosry.htm "Glossary Entry").
    
-   No support is available for [spooling lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm). The corresponding additions of the statements [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm) and [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_print_parameters.htm) cannot be changed.
    

If none of the missing functions are required, the addition REDUCED FUNCTIONALITY can be used to avoid the unnecessary resources being consumed by subroutine pools.

Notes

-   The addition REDUCED FUNCTIONALITY also works in subroutine pools which were created with [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_subroutine_pool.htm).
    
-   The use of REDUCED FUNCTIONALITY is especially recommended for small subroutine pools which only contain simple help procedures
    
-   The use of REDUCED FUNCTIONALITY in a subroutine pool produces a warning from the syntax check, indicating that not all ABAP functions are available. If nonexistent functions are used, corresponding syntax errors are produced.


### abapfunction-pool.htm

---
title: "FUNCTION-POOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction-pool_shortref.htm) Syntax FUNCTION-POOL fpool list_options(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm) MESSAGE-ID mid. Effect The statement FUNCTIO
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction-pool.htm"
abapFile: "abapfunction-pool.htm"
keywords: ["do", "try", "method", "class", "data", "abapfunction", "pool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) → 

FUNCTION-POOL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction-pool_shortref.htm)

Syntax

FUNCTION-POOL fpool *\[*[list\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport_list_options.htm)*\]*
                    *\[*MESSAGE-ID mid*\]*.

Effect

The statement FUNCTION-POOL introduces a [function group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. The additions of the statement FUNCTION-POOL have the same function as the additions of the statement [REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm).

Function groups are defined using the [Function Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenframe_program_glosry.htm "Glossary Entry") tool in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry"). Here, a [master program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_builder_glosry.htm "Glossary Entry") and subordinate [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry") are generated automatically. The statement FUNCTION-POOL is created in the [top include](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentop_include_glosry.htm "Glossary Entry").

The full name of the master program of a function group in the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") consists of the prefix SAPL and the name fpool of the statement FUNCTION-POOL.

A function group is used as a container for [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_module_glosry.htm "Glossary Entry") and is organized in include programs as follows.

-   One top include with the prefix "L" and the ending "TOP" in the declaration part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "D.." for declaring local classes within the top include.
    
-   One include program with the prefix "L" and the ending "UXX" in the implementation part of the function group. This include program includes include programs with the ending "U.." for implementing each [function module](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_module_glosry.htm "Glossary Entry") of the function group. This structure must not be changed.
    
-   Optional include programs with the prefix "L" and the ending "P.." for implementing the methods of local classes in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "O.." for implementing [PBO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpbo_glosry.htm "Glossary Entry") modules in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "I.." for implementing [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") modules in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "E.." for implementing [event blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_block_glosry.htm "Glossary Entry") in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "F.." for implementing [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_glosry.htm "Glossary Entry") in the implementation part of the function group.
    

The periods ".." represent a two-digit number. The functions in Function Builder are based on adherence to this naming convention.

Example

Constructs the function group SAPLABAP\_DOCU from include programs:

\*&---------------------------------------------------------------------\*
\*&  Function Group SAPLABAP\_DOCU
\*&---------------------------------------------------------------------\*
INCLUDE labap\_docutop.               " Global Declarations
INCLUDE labap\_docue00.               " Load of Program
INCLUDE labap\_docuuxx.               " Function Modules
INCLUDE labap\_docuo01.               " PBO Modules
INCLUDE labap\_docui01.               " PAI Modules
INCLUDE labap\_docue01.               " Handling of Runtime-Events
INCLUDE labap\_docup01.               " Class implementations
INCLUDE labap\_docup02.
INCLUDE labap\_docup03.
INCLUDE labap\_docup04.

The function group includes the top include in the first place. This include contains the statement FUNCTION-POOL and other include programs for data and class declarations:

\*&---------------------------------------------------------------------\*
\*&  Include           LABAP\_DOCUTOP
\*&---------------------------------------------------------------------\*
FUNCTION-POOL abap\_docu.
INCLUDE labap\_docud00.               " Global Data for Screens
INCLUDE labap\_docud01.               " Classes for Docu Display


### abapclass-pool.htm

---
title: "CLASS-POOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-pool_shortref.htm) Syntax CLASS-POOL MESSAGE-ID id. Effect The statement CLASS-POOL introduces a class pool(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm 'Glossary
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-pool.htm"
abapFile: "abapclass-pool.htm"
keywords: ["do", "if", "try", "class", "abapclass", "pool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) → 

CLASS-POOL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-pool_shortref.htm)

Syntax

CLASS-POOL *\[*MESSAGE-ID id*\]*.

Effect

The statement CLASS-POOL introduces a [class pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program, after any [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") have been resolved. The addition MESSAGE-ID of the statement CLASS-POOL has the same meaning as in the statement [REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreport.htm).

Class pools are edited in [Class Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm "Glossary Entry") in ABAP Workbench. Here, a [master program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenframe_program_glosry.htm "Glossary Entry") for a global class and associated [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") are generated automatically. The statement CLASS-POOL is created in the master program.

The full name of the master program of a class pool in the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") starts with the name of the global class, is padded with the character "=" up to and including position 30, and ends with "CP".

The names of the include programs of a class pool included by the master program are constructed in exactly the same way as the name of the class pool itself, however they have different endings. Unlike in [function groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry"), the actual structure of a class pool constructed from include programs is the internal responsibility of ABAP Workbench and the ABAP runtime environment and is not displayed in Class Builder.

Note

The statements permitted in a class pool are listed under [Statements in Class Pools and Interface Pools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoo_differences_class_lib.htm).

Example

The name of the master program of the class pool of the global class CL\_ABAP\_BROWSER is CL\_ABAP\_BROWSER===============CP.


### abapinterface-pool.htm

---
title: "INTERFACE-POOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface-pool_shortref.htm) Syntax INTERFACE-POOL. Effect The statement INTERFACE-POOL introduces an interface pool(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_pool_glosry.htm 'Glossary E
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface-pool.htm"
abapFile: "abapinterface-pool.htm"
keywords: ["do", "if", "try", "class", "abapinterface", "pool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) → 

INTERFACE-POOL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface-pool_shortref.htm)

Syntax

INTERFACE-POOL.

Effect

The statement INTERFACE-POOL introduces an [interface pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_pool_glosry.htm "Glossary Entry"). It must be the first statement of an interface pool after any [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved.

Interface pools are edited only with the tool [Class Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). A [master program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenframe_program_glosry.htm "Glossary Entry") for a global interface including the statement INTERFACE-POOL is generated automatically.

The full name of the master program of an interface pool in the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") starts with the name of the global interface, is padded with the character "=" up to and including position 30, and ends with "IP".

The names of the include programs of an interface pool included by the master program are constructed in exactly the same way as the name of the interface pool itself, however they have different endings. Unlike in [function groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry"), the actual structure of an interface pool constructed from include programs is the internal responsibility of ABAP Workbench and the ABAP runtime environment and is not displayed in Class Builder.

Note

The statements permitted in an interface pool are listed under [Statements in Class Pools and Interface Pools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoo_differences_class_lib.htm).

Example

The name of the master program of the interface pool of the global interface IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE is IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE==IP.


### abaptype-pool.htm

---
title: "TYPE-POOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pool_shortref.htm) Syntax TYPE-POOL tpool. Effect The statement TYPE-POOL introduces a type group(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm 'Glossary Entry') called tp
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pool.htm"
abapFile: "abaptype-pool.htm"
keywords: ["do", "try", "class", "data", "types", "abaptype", "pool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) → 

TYPE-POOL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pool_shortref.htm)

Syntax

TYPE-POOL tpool.

Effect

The statement TYPE-POOL introduces a [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") called tpool. It must be the first statement of a type group after any [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. Type groups are only defined in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). Here, an ABAP program is generated automatically, including the statement TYPE-POOL. The actual name of the program of a type group in the repository does not completely match the name of the type group and is of internal relevance only.

Type groups can only contain the following statements:

-   [INCLUDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_prog.htm),
    
-   [INCLUDE TYPE*|*STRUCTURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type.htm)
    
-   [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm),
    
-   [CONSTANTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconstants.htm),
    
-   [DEFINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdefine.htm) and [END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-definition.htm)
    
-   [CLASS ... DEFINITION DEFERRED PUBLIC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_deferred.htm)
    

Here, the declared data types, constants, and [macros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") must be prefixed with the name tpool of the type group. The elements declared in a type group can be addressed statically or dynamically by name in every ABAP program in which the type group can be used. The type group is loaded when an element of a type group is first accessed.

Notes

-   Types in type groups are the predecessors for general type definitions in ABAP Dictionary.
    
-   Since it is possible to also define data types and constants in the public visibility section of global classes, type groups are obsolete and should no longer be created. Existing type groups can still be used.
    
-   To avoid conflicts in the type reference with the addition LIKE, it must be ensured that constants in type groups do not have the same name as existing flat structures or database tables in ABAP Dictionary.
    
-   The name of a type group may contain a maximum of five characters.
    
-   Previously, type groups had to be made known in ABAP programs using the statement [TYPE-POOLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pools.htm) before their elements could be accessed statically or dynamically. This restriction is now obsolete. The statement TYPE-POOLS is no longer necessary.
    

Example

Type group with the definition of a table type.

TYPE-POOL mytgr.
TYPES mytgr\_spfli\_tab TYPE HASHED TABLE
                      OF spfli
                      WITH UNIQUE KEY carrid connid.
