# ABAP - Keyword Documentation / ABAP - Programming Language / Program Structure / Modularization Statements / Event Blocks

Included pages: 9


### abenevent_blocks.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) → 

Event Blocks

Event blocks are used to handle events in the ABAP runtime environment. They are introduced by an event key word and ended by the next processing block. Since there is no closing statement, it is recommend that the end of an event block is indicated with a comment line.

Within an event block, no local data types or data objects can be declared. All declarative statements in event blocks belong to the global data declarations of the ABAP program, and are visible in all subsequent processing blocks. An event block works with the global data types and data objects of the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"), and therefore should not contain any own declarations. Exception: the event blocks AT SELECTION-SCREEN ... and GET ..., which are implemented internally as procedures and can contain local data.

For reasons of data encapsulation, it is recommended to only implement little functionality in event blocks, and to call methods instead.

There are the following events:

-   [Program constructor event](javascript:call_link\('abenprogram_constructor.htm'\))
    This event occurs in all [program types](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry"), except for class pools and interface pools.

-   [Reporting events](javascript:call_link\('abenabap_processing_blocks.htm'\))
    These events only occur in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry").

-   [Selection screen and list events](javascript:call_link\('abenabap_screen_events.htm'\)) occur during [selection screen processing](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") or [list processing](javascript:call_link\('abenlist_processing_glosry.htm'\) "Glossary Entry").

Programming Guideline

[No implementations in dialog modules and event blocks](javascript:call_link\('abendial_mod_event_block_guidl.htm'\) "Guideline")

Hints

-   At the end of each event block execution, the statement [NEW-LINE](javascript:call_link\('abapnew-line.htm'\)) is executed implicitly.

-   With the exception of AT SELECTION-SCREEN ... and GET ..., event blocks can be specified multiple times in a program. The event block [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)) can also implicitly exist more than once. When an event occurs, all associated event blocks are executed in the order of their occurrence. Event blocks that are explicitly specified multiple times produce a warning from the extended program check.

Continue
[Program Constructor](javascript:call_link\('abenprogram_constructor.htm'\))
[Reporting Events](javascript:call_link\('abenabap_processing_blocks.htm'\))
[Selection Screen Events and List Events](javascript:call_link\('abenabap_screen_events.htm'\))


### abenprogram_constructor.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) → 

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement:

-   [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\))

The associated event occurs when a program is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Hint

[Class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") do not have a program constructor, since the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") from the global class defined in the class pool can be used instead.

Continue
[LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\))


### abapload-of-program.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) →  [Program Constructor](javascript:call_link\('abenprogram_constructor.htm'\)) → 

LOAD-OF-PROGRAM

[Short Reference](javascript:call_link\('abapload-of-program_shortref.htm'\))

Syntax

LOAD-OF-PROGRAM.

Effect

This event keyword defines the [program constructor](javascript:call_link\('abenprogram_constructor_glosry.htm'\) "Glossary Entry") of a function pool , executable program, module pool, or subroutine pool. The program constructor is an event block whose event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") if one of the executable programs listed above is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

When a program is called using SUBMIT or a transaction code, a new internal session is opened each time a call is made and the event block is executed once for each call. Global data objects of the program can be initialized here. The event block must be fully executed, otherwise a runtime error occurs. This means that no [statements](javascript:call_link\('abenleave_program_units.htm'\)) can be specified that exit the event block without returning to it.

The first time an external [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") or a [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") is called, the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") of the called procedure is loaded into the internal session of the caller and the event LOAD-OF-PROGRAM is raised. The event block is executed before the called procedure. Each time a procedure of the same compilation unit is called again by a caller of the same internal session, the event LOAD-OF-PROGRAM is no longer raised.

Hints

-   The event LOAD-OF-PROGRAM should mainly be used to initialize global data when calling external procedures or [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"). For executable programs that are called using SUBMIT, it is recommended to use the event INITIALIZATION, since the [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") for parameter and selection criteria are set after LOAD-OF-PROGRAM (see [program flow after SUBMIT](javascript:call_link\('abenreporting_process.htm'\))).
    

-   If a program is only loaded because declarations are required of it, for example, when using [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"), the LOAD-OF-PROGRAM event is not raised. The program constructor is only executed if an executable unit of the program is called afterwards.
    

-   [Class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") do not have a program constructor, since the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") of the global class defined in the class pool can be used instead.

Example

Sets a global data object for the language depending on the system field sy-langu in the event LOAD-OF-PROGRAM.

DATA g\_langu TYPE sy-langu.
LOAD-OF-PROGRAM.
  g\_langu = COND #( WHEN sy-langu = 'D' THEN 'D' ELSE 'E' ).


### abenprogram_constructor.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) → 

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement:

-   [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\))

The associated event occurs when a program is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Hint

[Class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") do not have a program constructor, since the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") from the global class defined in the class pool can be used instead.

Continue
[LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\))


### abenabap_processing_blocks.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) → 

Reporting Events

The following are event key words for [reporting](javascript:call_link\('abenreporting_glosry.htm'\) "Glossary Entry") events:

-   [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)),

-   [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)),

-   [GET node](javascript:call_link\('abapget-.htm'\)) (obsolete, for logical databases only),

-   [END-OF-SELECTION](javascript:call_link\('abapend-of-selection.htm'\)) (obsolete, for logical databases only).

Reporting events occur in a [predefined order](javascript:call_link\('abenreporting_process.htm'\)) and only in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") started with SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only the start with normal transaction codes (no reporting transactions) or external calls of their procedures are not connected to a SUBMIT statement.

When an executable program is connected to a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), the assigned subroutine is [executed](javascript:call_link\('abenldb_usage_executable.htm'\)) in the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") before a reporting event is raised. in

Continue
[INITIALIZATION](javascript:call_link\('abapinitialization.htm'\))
[START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\))


### abapinitialization.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) →  [Reporting Events](javascript:call_link\('abenabap_processing_blocks.htm'\)) → 

INITIALIZATION

[Short Reference](javascript:call_link\('abapinitialization_shortref.htm'\))

Syntax

INITIALIZATION.

Effect

This event keyword defines an event block for initializing an executable program. The associated event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") during the [flow](javascript:call_link\('abenreporting_process.htm'\)) of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), directly after LOAD-OF-PROGRAM and before the [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry") of any existing standard selection screen. Here, the input fields of the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") can be initialized only once, including those fields defined in the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") associated with the program.

Hint

When an executable program defines a standard selection screen, it is called again by the ABAP runtime environment after it has been executed, whereby the event INITIALIZATION is raised again. However, the initialization of parameters or selection criteria of the selection screen no longer has any effect, since these are automatically filled with previous user entries on the selection screen during the [selection screen event](javascript:call_link\('abenselection_screen_event_glosry.htm'\) "Glossary Entry") AT SELECTION-SCREEN OUTPUT. To initialize the selection screen explicitly for each call, the event AT SELECTION-SCREEN OUTPUT must be used.

Example

Prefills a parameter on the standard selection screen of an executable program when the event INITIALIZATION is raised.

PARAMETERS p\_langu TYPE pgl\_langu.
INITIALIZATION.
  p\_langu = sy-langu.


### abapstart-of-selection.htm

  

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


### abenabap_processing_blocks.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) → 

Reporting Events

The following are event key words for [reporting](javascript:call_link\('abenreporting_glosry.htm'\) "Glossary Entry") events:

-   [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)),

-   [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)),

-   [GET node](javascript:call_link\('abapget-.htm'\)) (obsolete, for logical databases only),

-   [END-OF-SELECTION](javascript:call_link\('abapend-of-selection.htm'\)) (obsolete, for logical databases only).

Reporting events occur in a [predefined order](javascript:call_link\('abenreporting_process.htm'\)) and only in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") started with SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only the start with normal transaction codes (no reporting transactions) or external calls of their procedures are not connected to a SUBMIT statement.

When an executable program is connected to a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), the assigned subroutine is [executed](javascript:call_link\('abenldb_usage_executable.htm'\)) in the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") before a reporting event is raised. in

Continue
[INITIALIZATION](javascript:call_link\('abapinitialization.htm'\))
[START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\))


### abenabap_screen_events.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) → 

Selection Screen Events and List Events

Selection screen events and list events are events of classic [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") processing that are transformed into ABAP events by the ABAP runtime environment and are handled directly in the ABAP program instead of in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry").

-   [Selection screen events](javascript:call_link\('abenselection_screen_events.htm'\)) occur during [selection screen processing](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry").

-   [List events](javascript:call_link\('abenabap_lists_interactive.htm'\)) occur during classic [list processing](javascript:call_link\('abenlist_processing_glosry.htm'\) "Glossary Entry").

They are described in their respective environments.
