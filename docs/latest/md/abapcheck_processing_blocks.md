  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CHECK%2C%20processing_block%2C%20ABAPCHECK_PROCESSING_BLOCKS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CHECK, processing\_block

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_shortref.htm)

Syntax

CHECK [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm).

Effect

If the statement CHECK is listed outside a [loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_glosry.htm "Glossary Entry") and log\_exp is false, it terminates the current [processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). Any [logical expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm).

After the processing block is exited, the runtime framework behaves in the same way as when the [processing block is exited in the regular way](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenend_processing_blocks.htm), with the exception of the event block [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapload-of-program.htm) and the [reporting event block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_event_glosry.htm "Glossary Entry") GET. In particular, the output parameters of procedures are passed on to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using CHECK.
-   After the reporting event block GET is terminated using CHECK, any subordinate nodes in the hierarchy structure of the linked [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexit_procedure_guidl.htm "Guideline")

Hints

-   In a procedure (a method, function module, or subroutine), CHECK log\_exp works outside a loop in the same way as:
    
    IF NOT log\_exp.
      RETURN.
    ENDIF.
    
-   A further variant of the statement CHECK for exiting processing blocks is [CHECK SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_select-options.htm), which can only be used in [GET event blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget-.htm) for logical databases.

Example

This example shows a case where CHECK can be used outside a loop. At the start of a procedure, a prerequisite for executing the procedure is checked and the procedure exited if the check is not successful. In this case, the procedure must not be executed in the background.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth.
    CHECK sy-batch IS INITIAL.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    demo=>meth( ).
  ENDMETHOD.
ENDCLASS.