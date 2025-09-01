  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) →  [Reporting Events](javascript:call_link\('abenabap_processing_blocks.htm'\)) → 

START-OF-SELECTION

[Quick Reference](javascript:call_link\('abapstart-of-selection_shortref.htm'\))

Syntax

START-OF-SELECTION.

Effect

This event keyword defines the standard processing block of an executable program. The associated event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") during the [running](javascript:call_link\('abenreporting_process.htm'\)) of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") after any standard selection screens have been [processed](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

In an executable program, the following statements are assigned to an implicit START-OF-SELECTION event block, which is inserted by an explicit START-OF-SELECTION event block if one exists:

-   All statements that are not declaration and are listed before the first explicit [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry").
    
-   All functional statements in the program if it does not contain any explicit processing blocks,
    

Note

If the program is associated with a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), preparatory tasks can be performed in START-OF-SELECTION before the logical database imports the data. If the program is not associated with a logical database, this event block becomes a type of "main program" from which [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") or classic [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") are called.

Example

The following program section shows the recommended use of START-OF-SELECTION in an executable program. A dedicated method is called either instead of a function being implemented.

REPORT ...
CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD main.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cls=>main( ).

Example

The following three executable programs all work in exactly the same way:

The first program contains an explicit event block START-OF-SELECTION and shows the recommended arrangement.

REPORT test\_start\_of\_selection.
DATA text TYPE string.
START-OF-SELECTION.
  text = \`Hello World!\`.
  cl\_demo\_output=>display\_data( text ).

In the second program, an assignment is inserted before the first processing block, which constructs a second implicit event block START-OF-SELECTION before the explicit event block.

REPORT test\_start\_of\_selection.
DATA text TYPE string.
text = \`Hello World!\`.
START-OF-SELECTION.
  cl\_demo\_output=>display\_data( text ).

In the third program, there is no explicit processing block. All statements construct the event block START-OF-SELECTION implicitly.

REPORT test\_start\_of\_selection.
DATA text TYPE string.
text = \`Hello World!\`.
cl\_demo\_output=>display\_data( text ).

The third program has exactly the same meaning as the first program. The second program, in contrast, would have the following form if expressed explicitly:

REPORT test\_start\_of\_selection.
DATA text TYPE string.
START-OF-SELECTION.
  text = \`Hello World!\`.
START-OF-SELECTION.
  cl\_demo\_output=>display\_data( text ).