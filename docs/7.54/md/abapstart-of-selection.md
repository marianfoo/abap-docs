  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_blocks.htm) →  [Reporting Events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_processing_blocks.htm) → 

START-OF-SELECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapstart-of-selection_shortref.htm)

Syntax

START-OF-SELECTION.

Effect

This event keyword defines the standard processing block of an executable program. The associated event is raised by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") during the [running](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_process.htm) of an [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") after any standard selection screens have been [processed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

In an executable program, the following statements are assigned to an implicit START-OF-SELECTION event block, which is inserted by an explicit START-OF-SELECTION event block if one exists:

-   All statements that are not declaration and are listed before the first explicit [processing block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry").
    
-   All functional statements in the program if it does not contain any explicit processing blocks,
    

Note

If the program is associated with a [logical database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), preparatory tasks can be performed in START-OF-SELECTION before the logical database imports the data. If the program is not associated with a logical database, this event block becomes a type of "main program" from which [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") or classic [screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_glosry.htm "Glossary Entry") are called.

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