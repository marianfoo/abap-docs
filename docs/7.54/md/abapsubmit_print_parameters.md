  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Executable Programs](javascript:call_link\('abenabap_submit_report.htm'\)) →  [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) →  [SUBMIT - list\_options](javascript:call_link\('abapsubmit_list_options.htm'\)) → 

SUBMIT - spool\_options

[Quick Reference](javascript:call_link\('abapsubmit_shortref.htm'\))

Syntax

... SPOOL PARAMETERS pri\_params
    *\[*ARCHIVE PARAMETERS arc\_params*\]*
    WITHOUT SPOOL DYNPRO...

Effect

These additions are used to supply the [spool request](javascript:call_link\('abenspool_request_glosry.htm'\) "Glossary Entry") with spool and archiving parameters. The latter are necessary if the spool list is archived using [ArchiveLink](javascript:call_link\('abensap_archivelink_glosry.htm'\) "Glossary Entry").

The addition SPOOL PARAMETERS passes the [spool parameters](javascript:call_link\('abenprint_parameter_glosry.htm'\) "Glossary Entry") in a structure pri\_params of data type PRI\_PARAMS from ABAP Dictionary. If archiving is specified in pri\_params, archiving parameters must be passed using the addition ARCHIVE PARAMETERS in a structure arc\_params of data type ARC\_PARAMS from ABAP Dictionary.

Structures of data types PRI\_PARAMS and ARC\_PARAMS must be filled by the function module [GET\_PRINT\_PARAMETERS](javascript:call_link\('abenprint_parameters_function.htm'\)). When the function module is called, either individual spool parameters or all spool parameters can be set in the program and/or a spool dialog window displayed. The function module creates a set of valid spool and archiving parameters for use as pri\_params and arc\_params and adds these to its output parameters.

If the structures pri\_params or arc\_params are initial, the spool parameters or archiving parameters created by a call of the function modules GET\_PRINT\_PARAMETERS with initial input values are used.

The addition WITHOUT SPOOL DYNPRO suppresses the spool dialog box displayed as standard when the addition TO SAP-SPOOL is used.

Notes

-   These additions must always be used as indicated here. It is particularly important that the standard spool dialog box be suppressed. If the standard spool dialog box is used, inconsistent spool parameters may be passed to the program accessed if the user chooses Cancel to exit the GUI window. Instead, the spool dialog window can be displayed by calling the function module GET\_PRINT\_PARAMETERS. This function module has an output parameter VALID that indicates the consistency of the spool parameters created.
    
-   Use of the addition WITHOUT SPOOL DYNPRO without passing spool parameters is no longer allowed in ABAP objects. In other objects, the spool parameters are derived from the user master record, if possible.
    
-   Calling the spool dialog box with SUBMIT TO SAP-SPOOL has the disadvantage that the Back function is not available. After using this kind of statement to switch to spooling, the system cannot return to a point before the statement in question. Printing can only be exited using Exit, which ends the entire program. If Cancel is used to exit, inconsistent spool parameters can be passed to the program. To disconnect the spool dialog box from switching to spooling, it is recommended that the function module [GET\_PRINT\_PARAMETERS](javascript:call_link\('abenprint_parameters_function.htm'\)) is called.
    
-   The same [obsolete additions](javascript:call_link\('abapnew-page_print_obsolete.htm'\)) apply to the statement SUBMIT TO SAP-SPOOL as to the statement [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)).
    

Example

Create a record spool parameter with function module GET\_PRINT\_PARAMETERS and pass to a called program.

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters = params
            valid          = valid.
IF valid <> space.
  SUBMIT myreport TO SAP-SPOOL WITHOUT SPOOL DYNPRO
                  SPOOL PARAMETERS params.
ENDIF.