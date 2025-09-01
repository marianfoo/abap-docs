# ABAP - Keyword Documentation / ABAP - Programming Language / Program Structure / Program-initiating statements

Included pages: 9



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_program_statement.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_statement.htm)
- [abapreport.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm)
- [abapreport_list_options.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_list_options.htm)
- [abapprogram.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprogram.htm)
- [abapfunction-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfunction-pool.htm)
- [abapclass-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-pool.htm)
- [abapinterface-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterface-pool.htm)
- [abaptype-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptype-pool.htm)

**Bundle Contains**: 8 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.763Z

---

### abenabap_program_statement.htm

> **📖 Official SAP Documentation**: [abenabap_program_statement.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_statement.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) → 

Program-initiating statements

The program-initiating statements are:

-   [REPORT](javascript:call_link\('abapreport.htm'\))

-   [PROGRAM](javascript:call_link\('abapprogram.htm'\))

-   [FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\))

-   [CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\))

-   [INTERFACE-POOL](javascript:call_link\('abapinterface-pool.htm'\))

-   [TYPE-POOL](javascript:call_link\('abaptype-pool.htm'\)).

The initiating statement of each program depends on the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") specified in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry").

All statements that follow the program-initiating statements in the source code or that are included as [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are handled as a single unit by ABAP Compiler.

The first statement of every standalone ABAP program must be a program-initiating statement, and each program can only contain one of these statements. The only other statement allowed at the first position, instead of the initiating statement, is the statement INCLUDE. In this case, a program-initiating statement must appear at the first position of the program after the include program has been resolved during program generation.

Executable programs, module pools, function pools, class pools, interface pools, subroutine pools, and type pools are independent [compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"). Include programs, on the other hand, are only used in the context of compilation units.

Type pools, also referred to as type groups, are logically independent programs, in which no contain executable code but only type definitions and constant definitions can be stored. For this reason, type pools have their own program-initiating statement, TYPE-POOL.

Hint

The assignment of initiating statements to the program types defined in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") is not mandatory. However, the assignment described in the following sections should always be used. When a program is created, the appropriate statement is created automatically by the ABAP Workbench or ADT and should only be changed in the additions during editing. In particular, the keywords FUNCTION-POOL, CLASS-POOL, INTERFACE-POOL, and TYPE-POOL should only be created by the corresponding tools of the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") and never be entered manually in the source code in order to avoid unexpected system behavior.

Continue
[REPORT](javascript:call_link\('abapreport.htm'\))
[PROGRAM](javascript:call_link\('abapprogram.htm'\))
[FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\))
[CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\))
[INTERFACE-POOL](javascript:call_link\('abapinterface-pool.htm'\))
[TYPE-POOL](javascript:call_link\('abaptype-pool.htm'\))



**📖 Source**: [abenabap_program_statement.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_statement.htm)

### abapreport.htm

> **📖 Official SAP Documentation**: [abapreport.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-initiating statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

REPORT

[Short Reference](javascript:call_link\('abapreport_shortref.htm'\))

Syntax

REPORT rep *\[*[list\_options](javascript:call_link\('abapreport_list_options.htm'\))*\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*[DEFINING DATABASE ldb](javascript:call_link\('abapreport_defining.htm'\))*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Additions:

[1\. ... MESSAGE-ID mid](#!ABAP_ADDITION_1@1@)
[2\. ... REDUCED FUNCTIONALITY](#!ABAP_ADDITION_2@2@)

Effect

The statement REPORT introduces an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. The name rep must be specified directly. The optional additions [list\_options](javascript:call_link\('abapreport_list_options.htm'\)) can be used to affect the [basic list](javascript:call_link\('abenbasic_list_glosry.htm'\) "Glossary Entry") of the program. A [message class](javascript:call_link\('abenmessage_class_glosry.htm'\) "Glossary Entry") can be specified using MESSAGE-ID.

The addition [DEFINING DATABASE](javascript:call_link\('abapreport_defining.htm'\)) is used to define a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), whereas REDUCED FUNCTIONALITY should only be used for [PROGRAM](javascript:call_link\('abapprogram.htm'\)).

Hints

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](javascript:call_link\('abapprogram.htm'\)). In executable programs, PROGRAM means the same as REPORT and can be used with its additions. As a rule, however, executable programs should only be introduced using REPORT.

-   Although it is not absolutely necessary to specify the name rep, the name of the ABAP program from the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") should always be used.
    

Addition 1

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in the program in which only the message type and message number are specified. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in which the message class is specified override the addition MESSAGE-ID.

Example

Default setting of the message class DEMO\_FLIGHT for a program.

REPORT ... MESSAGE-ID demo\_flight.

Addition 2

... REDUCED FUNCTIONALITY

Effect

This addition is only intended for use with the statement [PROGRAM](javascript:call_link\('abapprogram.htm'\)) in subroutine pools and is described [there](javascript:call_link\('abapprogram.htm'\)).

Continue
[REPORT, list\_options](javascript:call_link\('abapreport_list_options.htm'\))



**📖 Source**: [abapreport.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm)

### abapreport_list_options.htm

> **📖 Official SAP Documentation**: [abapreport_list_options.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_list_options.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-initiating statements](javascript:call_link\('abenabap_program_statement.htm'\)) →  [REPORT](javascript:call_link\('abapreport.htm'\)) → 

REPORT, list\_options

[Short Reference](javascript:call_link\('abapreport_shortref.htm'\))

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

This addition suppresses the output of the [standard page header](javascript:call_link\('abenstandard_page_header_glosry.htm'\) "Glossary Entry") (standard header and column headers) in the basic list of the program and sets the system field sy-wtitl to the value "N". This setting can be overwritten when the list is created using the additions NO-TITLE*|*WITH-TITLE and NO-HEADING*|*WITH-HEADING of the statement [NEW-PAGE](javascript:call_link\('abapnew-page_options.htm'\)).

Addition 2

... LINE-SIZE width

Effect

This addition specifies the line width of the basic list and details list of the program to width characters and sets the system field sy-linsz to this value. The line width determines the number of characters in the line buffer as well as the number of columns in the list displayed. The value width must be specified directly as a positive number. The maximum line width is 1023.

If LINE-SIZE is not specified, the line width of the basic list is set to a standard width based on the window width of the current [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), but is at least as wide as a standard size GUI window. For the standard width, the content of sy-linsz is 0. The specification of LINE-SIZE overwrites the value passed to the identically named addition LINE-SIZE of the statement [SUBMIT](javascript:call_link\('abapsubmit_list_options.htm'\)) and can be overwritten when the list is created using the identically named addition LINE-SIZE of the statement [NEW-PAGE](javascript:call_link\('abapnew-page_options.htm'\)).

Hint

The current maximum line width is stored in the constant SLIST\_MAX\_LINESIZE of the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") SLIST. A type SLIST\_MAX\_LISTLINE of type c with length SLIST\_MAX\_LINESIZE is also defined there. The constant SLIST\_MAX\_LINESIZE cannot be used in the statement REPORT but can be used in the statement [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)).

Addition 3

... LINE-COUNT page\_lines*\[*(footer\_lines)*\]*

Effect

This addition specifies the page length for the basic list of the program as page\_lines lines and fills the system field sy-linct with this value. If LINE-COUNT is not specified and for page\_lines less than 0 or greater than 60000, the page length is set internally to 60000. This setting overwrites the value passed to the identically named addition LINE-SIZE of the statement [SUBMIT](javascript:call_link\('abapsubmit_list_options.htm'\)) and can be overwritten when the list is created by the identically named addition LINE-COUNT of the statement [NEW-PAGE](javascript:call_link\('abapnew-page_options.htm'\)).

The optional specification of a number for footer\_lines is used to reserve a corresponding number of lines for the [page footer](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry"), which can be described in the event block END-OF-PAGE.

page\_lines and footer\_lines must be specified directly as positive numbers and no sign can be specified for footer\_lines here.

Hints

-   The default value should be used for screen lists because page changes specified using LINE-COUNT are usually not adjusted to the window size.

-   The default value should also be used for spool lists, so that the page size can be selected on a printer-specific basis. A spool list should be created in such a way that it provides meaningful results for each page size.

-   Specifying a fixed line number only makes sense for form-like lists with a fixed page layout. However, a check should always be made whether such forms can be created by other means.
    

Example

The page length of the basic list is set to 65 lines, of which eight lines are reserved for the page footer. The line width is 132 characters.

REPORT z\_myreport LINE-COUNT 65(8) LINE-SIZE 132.



**📖 Source**: [abapreport_list_options.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_list_options.htm)

### abapreport.htm

> **📖 Official SAP Documentation**: [abapreport.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-initiating statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

REPORT

[Short Reference](javascript:call_link\('abapreport_shortref.htm'\))

Syntax

REPORT rep *\[*[list\_options](javascript:call_link\('abapreport_list_options.htm'\))*\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*[DEFINING DATABASE ldb](javascript:call_link\('abapreport_defining.htm'\))*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Additions:

[1\. ... MESSAGE-ID mid](#!ABAP_ADDITION_1@1@)
[2\. ... REDUCED FUNCTIONALITY](#!ABAP_ADDITION_2@2@)

Effect

The statement REPORT introduces an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. The name rep must be specified directly. The optional additions [list\_options](javascript:call_link\('abapreport_list_options.htm'\)) can be used to affect the [basic list](javascript:call_link\('abenbasic_list_glosry.htm'\) "Glossary Entry") of the program. A [message class](javascript:call_link\('abenmessage_class_glosry.htm'\) "Glossary Entry") can be specified using MESSAGE-ID.

The addition [DEFINING DATABASE](javascript:call_link\('abapreport_defining.htm'\)) is used to define a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), whereas REDUCED FUNCTIONALITY should only be used for [PROGRAM](javascript:call_link\('abapprogram.htm'\)).

Hints

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](javascript:call_link\('abapprogram.htm'\)). In executable programs, PROGRAM means the same as REPORT and can be used with its additions. As a rule, however, executable programs should only be introduced using REPORT.

-   Although it is not absolutely necessary to specify the name rep, the name of the ABAP program from the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") should always be used.
    

Addition 1

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in the program in which only the message type and message number are specified. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in which the message class is specified override the addition MESSAGE-ID.

Example

Default setting of the message class DEMO\_FLIGHT for a program.

REPORT ... MESSAGE-ID demo\_flight.

Addition 2

... REDUCED FUNCTIONALITY

Effect

This addition is only intended for use with the statement [PROGRAM](javascript:call_link\('abapprogram.htm'\)) in subroutine pools and is described [there](javascript:call_link\('abapprogram.htm'\)).

Continue
[REPORT, list\_options](javascript:call_link\('abapreport_list_options.htm'\))



**📖 Source**: [abapreport.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm)

### abapprogram.htm

> **📖 Official SAP Documentation**: [abapprogram.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprogram.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-initiating statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

PROGRAM

[Short Reference](javascript:call_link\('abapprogram_shortref.htm'\))

Syntax

PROGRAM prog *\[*[list\_options](javascript:call_link\('abapreport_list_options.htm'\))*\]*
             *\[*MESSAGE-ID mid*\]*
             *\[*REDUCED FUNCTIONALITY*\]*.

Addition:

[... REDUCED FUNCTIONALITY](#!ABAP_ONE_ADD@1@)

Effect

The statement PROGRAM introduces a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry") or a [subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. The name prog must be specified directly. The following applies for the additions:

-   In module pools, the additions [list\_options](javascript:call_link\('abapreport_list_options.htm'\)) and MESSAGE-ID of the statement PROGRAM have the same meaning as the identically named additions in the statement [REPORT](javascript:call_link\('abapreport.htm'\)). The addition REDUCED FUNCTIONALITY works only in subroutine pools and is otherwise ignored.

-   In subroutine pools, the specification of MESSAGE-ID has the same meaning as in the statement [REPORT](javascript:call_link\('abapreport.htm'\)). Any additions [list\_options](javascript:call_link\('abapreport_list_options.htm'\)) for the basic list are ignored, since subroutine pools do not have a separate [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry"). Output statements in subroutine pools write to the current list of the calling [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry"). The addition REDUCED FUNCTIONALITY only works in subroutine pools..
    

Hints

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](javascript:call_link\('abapreport.htm'\)). In module pools or subroutine pools, REPORT has the same meaning as PROGRAM and can be used with its additions. As a convention, module pools and subroutine pools should only be introduced by using PROGRAM.

-   The specification of prog is not absolutely necessary, but the name of the ABAP program from the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") should always be used.

-   The name of a module pool is not fixed, but should follow the naming conventions in ABAP Workbench, which specify that the name of module pools should start with "SAPM".
    

Addition

... REDUCED FUNCTIONALITY

Effect

This addition only has an effect in programs of program type [subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry") and otherwise produces a syntax check warning. In a subroutine pool that is introduced with the addition REDUCED FUNCTIONALITY, not all components that are loaded with a normal ABAP program are loaded. This reduces the [program load](javascript:call_link\('abenload_glosry.htm'\) "Glossary Entry") and memory consumption in the [session memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry"). However, the full ABAP language scope is not available for this.

-   The built-in structure [syst](javascript:call_link\('abensystem_fields.htm'\)) is not loaded. Instead of syst, the structure sy with the same meaning can be used.

-   The built-in structure [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)) is not loaded. The statements [LOOP AT SCREEN](javascript:call_link\('abaploop_at_screen.htm'\)) and [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)) are therefore not possible.

-   It is not possible to work with the [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") of the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry").

-   No support is available for [spooling lists](javascript:call_link\('abenprint.htm'\)). The corresponding additions of the statements [NEW-PAGE](javascript:call_link\('abapnew-page_print.htm'\)) and [SUBMIT](javascript:call_link\('abapsubmit_print_parameters.htm'\)) cannot be used.

If no parts of the missing functions are required, the addition REDUCED FUNCTIONALITY can be used to avoid the unnecessary resource consumption by subroutine pools.

Hints

-   The addition REDUCED FUNCTIONALITY also works in subroutine pools that were created with [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)).

-   The use of REDUCED FUNCTIONALITY is especially recommended for small subroutine pools that only contain simple help procedures

-   The use of REDUCED FUNCTIONALITY in a subroutine pool produces a syntax check warning that indicates that not all ABAP functions are available. If nonexistent functions are used, corresponding syntax errors are produced.



**📖 Source**: [abapprogram.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprogram.htm)

### abapfunction-pool.htm

> **📖 Official SAP Documentation**: [abapfunction-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfunction-pool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-initiating statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

FUNCTION-POOL

[Short Reference](javascript:call_link\('abapfunction-pool_shortref.htm'\))

Syntax

FUNCTION-POOL fpool *\[*[list\_options](javascript:call_link\('abapreport_list_options.htm'\))*\]*
                    *\[*MESSAGE-ID mid*\]*.

Effect

The statement FUNCTION-POOL introduces a [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. The additions of the statement FUNCTION-POOL have the same function as the additions of the statement [REPORT](javascript:call_link\('abapreport.htm'\)).

Function pools are maintained using the [Function Builder](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") tool in the [ABAP Workbench](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry"), where a [master program](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry") and subordinate [include programs](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") are generated automatically. The statement FUNCTION-POOL is created in the [top include](javascript:call_link\('abentop_include_glosry.htm'\) "Glossary Entry").

The full name of the master program of a function pool in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") consists of the prefix SAPL and the name fpool of the statement FUNCTION-POOL.

A function pool is used as a framework for [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") and is organized in include programs as follows.

-   A top include with the prefix "L" and the ending "TOP" in the declaration part of the function pool.

-   Optional include programs with the prefix "L" and the ending "D.." for the declaration of local classes within the top include.

-   An include program with the prefix "L" and the ending "UXX" in the implementation part of the function pool. This include program includes include programs with the ending "U.." for the implementation of each [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") of the function pool. This structure must not be changed.

-   Optional include programs with the prefix "L" and the ending "P.." for the implementation of the methods of local classes in the implementation part of the function pool.

-   Optional include programs with the prefix "L" and the ending "O.." for the implementation of [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") modules in the implementation part of the function pool.

-   Optional include programs with the prefix "L" and the ending "I.." for the implementation of [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") modules in the implementation part of the function pool.

-   Optional include programs with the prefix "L" and the ending "E.." for the implementation of [event blocks](javascript:call_link\('abenevent_block_glosry.htm'\) "Glossary Entry") in the implementation part of the function pool.

-   Optional include programs with the prefix "L" and the ending "F.." for the implementation of [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") in the implementation part of the function pool.

The periods ".." represent a two-digit number. The functionality of the Function Builder is based on compliance with this naming convention.

Example

Structure of the function pool SAPLABAP\_DOCU from include programs:

\*&---------------------------------------------------------------------\*
\*&  Function Pool SAPLABAP\_DOCU
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

The function pool includes the top include at the first position, which contains the statement FUNCTION-POOL and other include programs for data and class declarations:

\*&---------------------------------------------------------------------\*
\*&  Include           LABAP\_DOCUTOP
\*&---------------------------------------------------------------------\*
FUNCTION-POOL abap\_docu.
INCLUDE labap\_docud00.               " Global Data for Screens
INCLUDE labap\_docud01.               " Classes for Docu Display



**📖 Source**: [abapfunction-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfunction-pool.htm)

### abapclass-pool.htm

> **📖 Official SAP Documentation**: [abapclass-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-pool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-initiating statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

CLASS-POOL

[Short Reference](javascript:call_link\('abapclass-pool_shortref.htm'\))

Syntax

CLASS-POOL *\[*MESSAGE-ID id*\]*.

Effect

The statement CLASS-POOL introduces a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") for a [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program, after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") have been resolved. The addition MESSAGE-ID of the statement CLASS-POOL has the same meaning as in the statement [REPORT](javascript:call_link\('abapreport.htm'\)).

Class pools are maintained in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") in the ABAP Workbench or with the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). A [master program](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") and associated [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are generated automatically. The statement CLASS-POOL is created in the master program.

The full name of the master program of a class pool in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") starts with the name of the global class, is padded with the character \= up to and including position 30, and ends with "CP". The names of the include programs of a class pool included by the master program are constructed in exactly the same way as the name of the class pool itself, however they have different endings.

A class pool is organized in include programs as follows:

-   An include program with the ending CCDEF ([CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry")) for class-relevant local definitions.

-   Three include programs for the [declaration part](javascript:call_link\('abendeclaration_part_glosry.htm'\) "Glossary Entry") of the global class:

-   An include program with the ending CU that contains the statement [CLASS DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) of the global class and its public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry").

-   An include program with the ending CO that contains the public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the global class.

-   An include program with the ending CI that contains the private [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of the global class.

-   An include program with the ending CCMAC for [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry").

-   An include program with the ending CCIMP ([CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry")) for local definitions and implementations.

-   An include program with the ending CCAU ([test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry")) for local [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry").

-   An include program with the ending CMnnn where nnn is a numeric index for each method implementation of the global class.

Unlike in [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"), the actual structure of a class pool constructed from include programs is not shown in the Class Builder.

Programming Guideline

[Local Types for Global Classes](javascript:call_link\('abenlocal_type_glob_class_guidl.htm'\) "Guideline")

Hints

-   The statements that are allowed in a class pool are listed under [Statements in Class Pools and Interface Pools](javascript:call_link\('abenclass_interace_pools.htm'\)).

-   There is also a program ending with CS that consists of the [declaration part](javascript:call_link\('abendeclaration_part_glosry.htm'\) "Glossary Entry") and the [implementation part](javascript:call_link\('abenimplementation_part_glosry.htm'\) "Glossary Entry") of the global class.

Example

The name of the master program of the class pool of the global class CL\_ABAP\_BROWSER is CL\_ABAP\_BROWSER===============CP.



**📖 Source**: [abapclass-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-pool.htm)

### abapinterface-pool.htm

> **📖 Official SAP Documentation**: [abapinterface-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterface-pool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-initiating statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

INTERFACE-POOL

[Short Reference](javascript:call_link\('abapinterface-pool_shortref.htm'\))

Syntax

INTERFACE-POOL.

Effect

The statement INTERFACE-POOL introduces an [interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry"). It must be the first statement of an interface pool after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved.

Interface pools are maintained exclusively with the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") tool in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") or with the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), where a [master program](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") for a global interface including the statement INTERFACE-POOL is generated automatically.

The full name of the master program of an interface pool in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") starts with the name of the global interface, is padded with the character "=" up to and including position 30, and ends with "IP".

The names of the include programs of an interface pool included by the master program are constructed in exactly the same way as the name of the interface pool itself, however they have different endings. Unlike in [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"), the actual structure of an interface pool constructed from include programs is the internal responsibility of ABAP Workbench and the ABAP runtime environment and does not show up in the Class Builder.

Hint

The statements that are allowed in an interface pool are listed under [Statements in Class Pools and Interface Pools](javascript:call_link\('abenclass_interace_pools.htm'\)).

Example

The name of the master program of the interface pool of the global interface IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE is IF\_DEMO\_CR\_CAR\_RENTL\_SERVICE==IP.



**📖 Source**: [abapinterface-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinterface-pool.htm)

### abaptype-pool.htm

> **📖 Official SAP Documentation**: [abaptype-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptype-pool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abaptype-pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptype-pool.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-initiating statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

TYPE-POOL

[Short Reference](javascript:call_link\('abaptype-pool_shortref.htm'\))

Syntax

TYPE-POOL tpool.

Effect

The statement TYPE-POOL introduces a [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") called tpool. It must be the first statement of a type pool after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. Type pools are only defined in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") tool in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"), where an ABAP program is generated automatically, including the statement TYPE-POOL. The actual name of the program of a type pool in the repository does not completely match the name of the type pool and is only relevant internally.

Type pools can only contain the statements

-   [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)),

-   [INCLUDE TYPE*|*STRUCTURE](javascript:call_link\('abapinclude_type.htm'\))

-   [TYPES](javascript:call_link\('abaptypes.htm'\)),

-   [CONSTANTS](javascript:call_link\('abapconstants.htm'\)),

-   [DEFINE](javascript:call_link\('abapdefine.htm'\)) and [END-OF-DEFINITION](javascript:call_link\('abapend-of-definition.htm'\))

-   [CLASS ... DEFINITION DEFERRED PUBLIC](javascript:call_link\('abapclass_deferred.htm'\))

Here, the declared data types, constants, and [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") must start with the prefix tpool of the type pool. The elements declared in a type pool can be addressed statically or dynamically by their name in every ABAP program in which the type pool can be used. This program is loaded when an element of a type pool is first accessed.

Hints

-   Types in type pools are the predecessors for general type definitions in the ABAP Dictionary.

-   Since you can also define data types and constants in the public visibility section of global classes, type pools are obsolete and should no longer be created. Existing type pools can still be used.

-   To avoid conflicts in the type reference with the addition LIKE, you must ensure that constants in type pools do not have the same name as existing flat structures or database tables in ABAP Dictionary.

-   The name of a type pool can contain a maximum of five characters.

-   Previously, type pools had to be declared in ABAP programs using the [TYPE-POOLS](javascript:call_link\('abaptype-pools.htm'\)) statement before their elements could be accessed statically or dynamically. This restriction is now obsolete. The statement TYPE-POOLS is no longer necessary.
    

Example

Type pools with the definition of a table type.

TYPE-POOL mytgr.
TYPES mytgr\_spfli\_tab TYPE HASHED TABLE
                      OF spfli
                      WITH UNIQUE KEY carrid connid.
