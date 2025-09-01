  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_processing_blocks.htm) → 

Regular Exiting of a Processing Block

A processing block is exited in a regular when reaching its end. For processing blocks that are concluded using an END statement, this is the end. Event blocks that are not concluded explicitly with a statement have an implicit conclusion after their last statement.

Depending on the processing block exited, the runtime environment behaves as follows:

-   In [procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry"), the program returns to after the point where they were called. The output parameters for which [pass by values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_value_glosry.htm "Glossary Entry") are defined are passed to the bound actual parameters.

-   In [dialog modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_module_glosry.htm "Glossary Entry"), the program returns to after the point in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") where they were called.

-   In [event blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_block_glosry.htm "Glossary Entry"), the control is given back to the runtime environment and the current process of the runtime environment continues with the program execution.

Example

Output before, during, and after execution of a procedure.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>write( \`In procedure\` ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>write( \`Before procedure\` ).
  demo=>main( ).
  cl\_demo\_output=>display( \`After procedure\` ).