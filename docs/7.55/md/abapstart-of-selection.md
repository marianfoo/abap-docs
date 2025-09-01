  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) →  [Reporting Events](javascript:call_link\('abenabap_processing_blocks.htm'\)) → 

START-OF-SELECTION

[Short Reference](javascript:call_link\('abapstart-of-selection_shortref.htm'\))

Syntax

START-OF-SELECTION.

Effect

This event keyword defines the standard processing block of an executable program. The associated event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") during the [processing](javascript:call_link\('abenreporting_process.htm'\)) of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") after selection screen [processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry") of any standard selection screen.

In an executable program, the following statements are assigned to an implicit START-OF-SELECTION event block, which is inserted before any explicit START-OF-SELECTION event block if one exists:

-   All statements that are not declaration and are listed before the first explicit [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry").

-   All functional statements of the program if it does not contain any explicit processing blocks,

Hint

If the program is linked to a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), preparatory work can be performed in START-OF-SELECTION before the logical database reads data. If the program is not linked to a logical database, this event block represents a "main program", so to speak, from which [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") or classic [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") are called.

Example

The following program section shows the recommended use of START-OF-SELECTION in an executable program. A dedicated method is called instead of a function implementation.

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

The following three executable programs all have the same functionality:

The first program contains an explicit event block START-OF-SELECTION and shows the recommended arrangement.

REPORT ...
DATA text TYPE string.
START-OF-SELECTION.
  text = \`Hello World!\`.
  cl\_demo\_output=>display\_data( text ).

In the second program, there is an assignment before the first processing block, which constructs a second implicit event block START-OF-SELECTION before the explicit event block.

REPORT ...
DATA text TYPE string.
text = \`Hello World!\`.
START-OF-SELECTION.
  cl\_demo\_output=>display\_data( text ).

In the third program, there is no explicit processing block. All statements implicitly construct the event block START-OF-SELECTION.

REPORT ...
DATA text TYPE string.
text = \`Hello World!\`.
cl\_demo\_output=>display\_data( text ).

The third program has the same meaning as the first program. The second program, however, would have the following form if expressed explicitly:

REPORT ...
DATA text TYPE string.
START-OF-SELECTION.
  text = \`Hello World!\`.
START-OF-SELECTION.
  cl\_demo\_output=>display\_data( text ).