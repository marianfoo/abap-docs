# ABAP Keyword Documentation / ABAP − Reference / Program Layout / Modularization Statements / Event Blocks

Included pages: 9


### abenevent_blocks.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) → 

Event Blocks

Event blocks are used to handle events in the ABAP runtime environment. They are introduced by an event key word and finished by the next processing block. Since there is no closing statement, we recommend that you flag the end of an event block with a comment line.

Within an event block, no local data types or data objects can be declared. All declarative statements in event blocks belong to the ABAP program, and are visible in all subsequent processing blocks. An event block works with the global data types and data objects of the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry"), and therefore should not contain any of its own declarations. Exception: the event blocks AT SELECTION-SCREEN ... and GET ..., which are implemented internally as procedures and can contain local data).

For reasons of data encapsulation, it is advisable to only implement a few functions in event blocks, and to call methods instead.

The following events exist:

-   [Program constructor event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_constructor.htm)
    This event occurs in all [program types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_type_glosry.htm "Glossary Entry"), except for class pools and interface pools.

-   [Reporting Events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_processing_blocks.htm)
    These events only occur in [executable programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry").

-   [Selection screen and list events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screen_events.htm) occur during [selection screen processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") or [list processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_processing_glosry.htm "Glossary Entry").

Programming Guideline

[No implementations in dialog modules and event blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendial_mod_event_block_guidl.htm "Guideline")

Notes

-   When the execution of each event block is completed, the statement [NEW-LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-line.htm) is executed.

-   With the exception of AT SELECTION-SCREEN ... and GET ..., event blocks can be specified multiple times in a program. The event block [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection.htm) can also be specified more then once (implicitly). Whenever an event occurs, all associated event blocks are executed in the order of their occurrence. Where event blocks are specified implicitly multiple times, the extended program check produces a warning.

Continue
[Program Constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_constructor.htm)
[Reporting Events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_processing_blocks.htm)
[Selection Screen Events and List Events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screen_events.htm)


### abenprogram_constructor.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_blocks.htm) → 

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement

-   [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm)

by ':'. The associated event occurs when a program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Note

[Class pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.

Continue
[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm)


### abapload-of-program.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_blocks.htm) →  [Program Constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_constructor.htm) → 

LOAD-OF-PROGRAM

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program_shortref.htm)

Syntax

LOAD-OF-PROGRAM.

Effect

This event keyword defines the [program constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_constructor_glosry.htm "Glossary Entry") of an executable program, a module pool, a function group, or a subroutine pool. The program constructor is an event block whose event is raised by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") when one of the executable programs mentioned above is loaded into the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry").

When a program is called using SUBMIT or using a transaction code, a new internal session is opened in every call and the event block is executed once in every call. You can initialize global data objects of the program here. The event block must be fully executed, otherwise a runtime error occurs. This means that [statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_program_units.htm) can be specified that exit the event block without returning to it.

The first time an external [procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry") (subroutine or function module) or a [subscreen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubscreen_glosry.htm "Glossary Entry") is called, the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") of the called procedure is loaded into the internal session of the caller, thus raising the event LOAD-OF-PROGRAM. The event block is executed before the called procedure. Each time a procedure of the same master program is called again by a caller of the same internal session, the event LOAD-OF-PROGRAM is not raised.

Notes

-   The event LOAD-OF-PROGRAM should mainly be used to initialize global data when calling external procedures or [transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry"). If executable programs are called using SUBMIT, it is recommended that the event INITIALIZATION is used, since the [start values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstart_value_glosry.htm "Glossary Entry") for parameter and selection criteria are set after LOAD-OF-PROGRAM (see [program flow after SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm)).
    
-   If a program is only loaded because declarations are required from it, such as when using [absolute type names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"), the LOAD-OF-PROGRAM event is not raised. The program constructor is only executed if an executable unit of the program is called afterwards.
    
-   [Class pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.
    

Example

Sets a global data object for the language as specified by the system field sy-langu in the event LOAD-OF-PROGRAM.

DATA g\_langu TYPE sy-langu.
LOAD-OF-PROGRAM.
  g\_langu = COND #( WHEN sy-langu = 'D' THEN 'D' ELSE 'E' ).


### abenprogram_constructor.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_blocks.htm) → 

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement

-   [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm)

by ':'. The associated event occurs when a program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Note

[Class pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.

Continue
[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm)


### abenabap_processing_blocks.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_blocks.htm) → 

Reporting Events

The following are event key words for [reporting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_glosry.htm "Glossary Entry") events:

-   [INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm),

-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection.htm),

-   [GET node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget-.htm) (obsolete, for logical databases only),

-   [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-selection.htm) (obsolete, for logical databases only).

Reporting events are raised in a [predefined order](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm) and only in [executable programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") started using SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only starts using regular transaction codes (not reporting transactions) or external calls of their procedures do not raise SUBMITs.

When an executable program is associated with a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the assigned subroutine is [executed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_usage_executable.htm) in the [database program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_program_glosry.htm "Glossary Entry") before a reporting event is raised.

Continue
[INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm)
[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection.htm)


### abapinitialization.htm

  

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


### abapstart-of-selection.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_blocks.htm) →  [Reporting Events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_processing_blocks.htm) → 

START-OF-SELECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection_shortref.htm)

Syntax

START-OF-SELECTION.

Effect

This event keyword defines the standard processing block of an executable program. The associated event is raised by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") during the [running](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm) of an [executable program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") after any standard selection screens have been [processed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

In an executable program, the following statements are assigned to an implicit START-OF-SELECTION event block, which is inserted by an explicit START-OF-SELECTION event block if one exists:

-   All statements that are not declaration and are listed before the first explicit [processing block](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocessing_block_glosry.htm "Glossary Entry").
    
-   All functional statements in the program if it does not contain any explicit processing blocks,
    

Note

If the program is associated with a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), preparatory tasks can be performed in START-OF-SELECTION before the logical database imports the data. If the program is not associated with a logical database, this event block becomes a type of "main program" from which [procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry") or classic [screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") are called.

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


### abenabap_processing_blocks.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_blocks.htm) → 

Reporting Events

The following are event key words for [reporting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_glosry.htm "Glossary Entry") events:

-   [INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm),

-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection.htm),

-   [GET node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget-.htm) (obsolete, for logical databases only),

-   [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-selection.htm) (obsolete, for logical databases only).

Reporting events are raised in a [predefined order](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm) and only in [executable programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") started using SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only starts using regular transaction codes (not reporting transactions) or external calls of their procedures do not raise SUBMITs.

When an executable program is associated with a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the assigned subroutine is [executed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_usage_executable.htm) in the [database program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_program_glosry.htm "Glossary Entry") before a reporting event is raised.

Continue
[INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm)
[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection.htm)


### abenabap_screen_events.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_blocks.htm) → 

Selection Screen Events and List Events

Selection screen events and list events are events from classic [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") processing that are transformed into ABAP events by the ABAP runtime environment and handled directly in the ABAP program instead of in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry").

-   [Selection screen events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm) are raised in [selection screen processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry").

-   [List events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists_interactive.htm) are raised in classic [list processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_processing_glosry.htm "Glossary Entry").

Each are described in their respective environments.
