  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Executable Programs](javascript:call_link\('abenabap_submit_report.htm'\)) →  [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) → 

SUBMIT - list\_options

[Quick Reference](javascript:call_link\('abapsubmit_shortref.htm'\))

Syntax

... *\[*LINE-SIZE width*\]*
    *\[*LINE-COUNT page\_lines*\]*
    *{* *\[*EXPORTING LIST TO MEMORY*\]*
    *|* *\[*TO SAP-SPOOL [spool\_options](javascript:call_link\('abapsubmit_print_parameters.htm'\))*\]* *}* ...

Extras:

[1\. ... LINE-SIZE width](#!ABAP_ADDITION_1@1@)
[2\. ... LINE-COUNT page\_lines](#!ABAP_ADDITION_2@2@)
[3\. ... EXPORTING LIST TO MEMORY](#!ABAP_ADDITION_3@3@)
[4\. ... TO SAP-SPOOL spool\_options](#!ABAP_ADDITION_4@4@)

Effect

These additions modify the basic list in the called program. While LINE-SIZE and LINE-COUNT modify the formatting, the other two additions determine the output type of the list.

EXPORTING LIST TO MEMORY saves the list to the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") and TO SAP-SPOOL sends it to the SAP spool system as a spool list. If you do not specify these additions, the basic list is displayed as a screen list.

Note

The additions only take effect the first time the called program is executed. If a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") is displayed in the called program, the runtime environment accesses the program again after it ends, and ignores the additions list\_options. This applies in particular to the addition TO SAP-SPOOL, because the basic list is displayed as a screen list and not as a spool list when the program is accessed again. For this reason, it is not advisable to use the addition VIA SELECTION-SCREEN when using list\_options.

Addition 1

... LINE-SIZE width

Addition 2

... LINE-COUNT page\_lines

Effect

These additions define the line width and page length of the basic list. They have the same effect as the additions of the same name in the introductory program statement for the called program. If the called program has the same additions in the introductory program statement, these overwrite the values specified for SUBMIT.

Example

Program calls using executable example program DEMO\_PROGRAM\_SUBMIT\_LINE.

SUBMIT (name) LINE-SIZE width LINE-COUNT length AND RETURN.

Executable Example

[Program Calls, Modifying the Basic List](javascript:call_link\('abensubmit_list_abexa.htm'\))

Addition 3

... EXPORTING LIST TO MEMORY

Effect

This addition stores the basic list for the program accessed in the ABAP Memory. It can only be used together with the addition AND RETURN.

The list is stored in the ABAP Memory as an internal table of the row type ABAPLIST, ABAPLIST being a structured data type in ABAP Dictionary.

The calling program can access the list stored once the program has been called, using function modules from the function group SLST.

-   The function module LIST\_FROM\_MEMORY loads the list from the ABAP memory to an internal table of the row type ABAPLIST.
    
-   The function module WRITE\_LIST inserts the content of an internal table of the row type ABAPLIST in the current list.
    
-   The function module DISPLAY\_LIST displays the content of an internal table of the row type ABAPLIST in a separate list dynpro.
    
-   The function module LIST\_TO\_ASCI converts the content of an internal table of the row type ABAPLIST to ASCII representation.
    

Note

The addition can only work if the function key Enter is not associated with a function code in the GUI status last defined for the called program.

Example

Once the program report has been called, the list stored there in the ABAP Memory is read using function modules and inserted in the current list.

DATA list\_tab TYPE TABLE OF abaplist.
SUBMIT report EXPORTING LIST TO MEMORY
              AND RETURN.
CALL FUNCTION 'LIST\_FROM\_MEMORY'
  TABLES
    listobject = list\_tab
  EXCEPTIONS
    not\_found  = 1
    OTHERS     = 2.
IF sy-subrc = 0.
  CALL FUNCTION 'WRITE\_LIST'
    TABLES
      listobject = list\_tab.
ENDIF.

Addition 4

... TO SAP-SPOOL spool\_options

Effect

If this addition is specified, a new [spool list level](javascript:call_link\('abenprint_list_level_glosry.htm'\) "Glossary Entry") is opened in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the called program and the first output statement for the basic list of this program creates a new [spool request](javascript:call_link\('abenspool_request_glosry.htm'\) "Glossary Entry"). All list output for the called program is passed page by page to the [SAP spool system](javascript:call_link\('abensap_spool_system_glosry.htm'\) "Glossary Entry") as a [spool list](javascript:call_link\('abenprint_list_glosry.htm'\) "Glossary Entry"). The additions [spool\_options](javascript:call_link\('abapsubmit_print_parameters.htm'\)) are used to define the spool and archiving parameters for the spool request.

Note

It is not possible to switch from the spool list to the screen list in the called program. The statement [NEW-PAGE PRINT OFF](javascript:call_link\('abapnew-page_print.htm'\)) does not modify a spool list level created using SUBMIT TO SAP-SPOOL.

Example

Calls an executable program and creates a spool request. When the name of the called program is passed to the input parameter REPORT of the function module GET\_PRINT\_PARAMETERS, the information about the line width and page length of the spool list is taken from the statement that introduces the program.

DATA: print\_parameters TYPE pri\_params,
      archi\_parameters TYPE arc\_params,
      valid\_flag       TYPE c LENGTH 1.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  EXPORTING
    report                 = 'SUBMITABLE'
    archive\_mode           = '3'
  IMPORTING
    out\_parameters       = print\_parameters
    out\_archive\_parameters = archi\_parameters
    valid                = valid\_flag
  EXCEPTIONS
    invalid\_print\_params = 2
    OTHERS                 = 4.
IF valid\_flag = 'X' AND sy-subrc = 0.
  SUBMIT submitable TO SAP-SPOOL
                    SPOOL PARAMETERS print\_parameters
                    ARCHIVE PARAMETERS archi\_parameters
                    WITHOUT SPOOL DYNPRO.
ENDIF.

Continue
[SUBMIT - spool\_options](javascript:call_link\('abapsubmit_print_parameters.htm'\))
![Example](exa.gif "Example") [Program Calls, Modifying the Basic List](javascript:call_link\('abensubmit_list_abexa.htm'\))