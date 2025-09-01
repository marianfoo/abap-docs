  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) →  [Reporting Events](javascript:call_link\('abenabap_processing_blocks.htm'\)) → 

INITIALIZATION

[Quick Reference](javascript:call_link\('abapinitialization_shortref.htm'\))

Syntax

INITIALIZATION.

Effect

This event keyword defines an event block for initializing an executable program. The associated event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") during the [flow](javascript:call_link\('abenreporting_process.htm'\)) of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), directly after LOAD-OF-PROGRAM and before the [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry") of any existing standard selection screen. This enables the input fields of the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") to be initialized once only, including those fields defined in the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") associated with the program.

Note

When an executable program defines a standard selection screen, it is called again by the ABAP runtime environment after execution, which raises the event INITIALIZATION again. In this case, the initialization of parameters or selection criteria of the selection screen is ignored, however, because they are automatically supplied with the preceding user input from the selection screen during the [selection screen event](javascript:call_link\('abenselection_screen_event_glosry.htm'\) "Glossary Entry") AT SELECTION-SCREEN OUTPUT. To initialize the selection screen explicitly for each call, the event AT SELECTION-SCREEN OUTPUT must be used.

Example

Prefills a parameter on the standard selection screen of an executable program when the event INITIALIZATION is raised.

PARAMETERS p\_langu TYPE pgl\_langu.
INITIALIZATION.
  p\_langu = sy-langu.