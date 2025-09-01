  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Regular Exiting of a Processing Block, ABENEND_PROCESSING_BLOCKS, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Regular Exiting of a Processing Block

A processing block is terminated regularly when its end is reached. For processing blocks that are completed using an END statement, this is the end. Event blocks that are not completed explicitly with a statement have an implicit completion after their last statement.

Depending on the processing block that is exited, the runtime framework behaves as follows:

-   In [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), the program returns to the position after the procedure call. The output parameters for which [pass by values](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") are defined are passed to the bound actual parameters.
-   In [dialog modules](javascript:call_link\('abendialog_module_glosry.htm'\) "Glossary Entry"), the program returns to after the calling position in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry").
-   In [event blocks](javascript:call_link\('abenevent_block_glosry.htm'\) "Glossary Entry"), the control is returned back to the runtime framework and the current process of the runtime framework continues with the program execution.

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