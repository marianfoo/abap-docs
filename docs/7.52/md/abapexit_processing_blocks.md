  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

EXIT - processing\_block

[Quick Reference](javascript:call_link\('abapexit_shortref.htm'\))

Syntax

EXIT.

Effect

If the statement EXIT is located outside a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry"), the statement immediately terminates the current [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry").

After the processing block is exited, the runtime environment responds in the same way as when the [processing block is exited in a regular way](javascript:call_link\('abenend_processing_blocks.htm'\)) (with the exception of the event block [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) and the [reporting event blocks](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") START-OF-SELECTION and GET). In particular, the output parameters of procedures are passed to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using EXIT.
    
-   After the reporting event blocks START-OF-SELECTION and GET have been exited using EXIT, the runtime environment does not trigger any more reporting events; instead, it calls the list processor directly to display the basic list.
    

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Example

The method main contains two EXIT statements. Whereas the first statement exits the LOOP loop, the second statement exits the entire method. The RETURN statement should be used instead of the EXIT statement.

TYPES:
  BEGIN OF line,
    col1 TYPE string,
    col2 TYPE string,
  END OF line,
  itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING char TYPE string
                                 itab TYPE itab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    LOOP AT itab INTO DATA(wa).
      FIND char IN wa-col1 RESPECTING CASE.
      IF sy-subrc = 0.
        EXIT.
      ENDIF.
    ENDLOOP.
    FIND to\_upper( char ) IN wa-col2 RESPECTING CASE.
    IF sy-subrc <> 0.
      EXIT.                   "works as RETURN here!
    ENDIF.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(itab) = VALUE itab(
    ( col1 = \`aaaa\` col2 = \`AAAA\` )
    ( col1 = \`bbbb\` col2 = \`XXXX\` )
    ( col1 = \`cccc\` col2 = \`CCCC\` ) ).
  demo=>main( char = \`b\`
              itab = itab ).