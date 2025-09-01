  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_blocks.htm) →  [Reporting Events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_processing_blocks.htm) → 

INITIALIZATION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization_shortref.htm)

Syntax

INITIALIZATION.

Effect

This event keyword defines an event block for initializing an executable program. The associated event is raised by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") during the [flow](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm) of an [executable program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), directly after LOAD-OF-PROGRAM and before the [selection screen processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") of any existing standard selection screen. This enables the input fields of the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") to be initialized once only, including those fields defined in the [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") associated with the program.

Note

When an executable program defines a standard selection screen, it is called again by the ABAP runtime environment after execution, which raises the event INITIALIZATION again. In this case, the initialization of parameters or selection criteria of the selection screen is ignored, however, because they are automatically supplied with the preceding user input from the selection screen during the [selection screen event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") AT SELECTION-SCREEN OUTPUT. To initialize the selection screen explicitly for each call, the event AT SELECTION-SCREEN OUTPUT must be used.

Example

Prefills a parameter on the standard selection screen of an executable program when the event INITIALIZATION is raised.

PARAMETERS p\_langu TYPE pgl\_langu.
INITIALIZATION.
  p\_langu = sy-langu.