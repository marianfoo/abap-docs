  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

CHECK - processing\_block

[Quick Reference](javascript:call_link\('abapcheck_shortref.htm'\))

Syntax

CHECK [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Effect

If the statement CHECK is located outside a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry") and log\_exp is false, this statement exits the current processing block. Any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") can be specified for [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

After the processing block is exited, the runtime environment proceeds in the same way as when the [processing block is exited in the regular way](javascript:call_link\('abenend_processing_blocks.htm'\)) (with the exception of the event block [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) and the [reporting event block](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") GET). In particular, the output parameters of procedures are passed to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using CHECK.
    
-   After the reporting event block GET is exited using CHECK, any subordinate nodes in the hierarchy structure of the associated [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") are no longer processed. The logical database reads the next row of the current node or next higher node, if it has reached the end of the hierarchy level.
    

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Notes

-   In a procedure (a method, function module, or subroutine), CHECK log\_exp works outside a loop in the same way as the following:
    

IF NOT log\_exp.
  RETURN.
ENDIF.

-   A further variant of the statement CHECK for exiting processing blocks is [CHECK SELECT-OPTIONS](javascript:call_link\('abapcheck_select-options.htm'\)). This can only be used in [GET event blocks](javascript:call_link\('abapget-.htm'\)) for logical databases.
    

Example

This example shows a case where CHECK can be used outside a loop. Right at the start of a procedure, a prerequisite for executing the procedure is checked (and the procedure exited if the check is not successful). In this case, the procedure cannot be executed in the background.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CHECK sy-batch IS INITIAL.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).