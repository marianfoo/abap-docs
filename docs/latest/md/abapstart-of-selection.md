  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_blocks.htm) →  [Reporting Events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20START-OF-SELECTION%2C%20ABAPSTART-OF-SELECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

START-OF-SELECTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapstart-of-selection_shortref.htm)

Syntax

START-OF-SELECTION.

Effect

This event keyword defines the standard processing block of an executable program. The associated event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") during the [processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_process.htm) of an [executable program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry") after selection screen [processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") of any standard selection screen.

In an executable program, the following statements are assigned to an implicit START-OF-SELECTION event block, which is inserted before any explicit START-OF-SELECTION event block if one exists:

-   All statements that are not declaration and are listed before the first explicit [processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry").
-   All functional statements of the program if it does not contain any explicit processing blocks,

Hint

If the program is linked to a [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), preparatory work can be performed in START-OF-SELECTION before the logical database reads data. If the program is not linked to a logical database, this event block represents a main program, so to speak, from which [procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") or classic [screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") are called.

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