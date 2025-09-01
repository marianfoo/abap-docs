  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) → 

Event Blocks

Event blocks are used to handle events in the ABAP runtime framework. They are introduced by an event key word and ended by the next processing block. Since there is no closing statement, it is recommended that the end of an event block is indicated with a comment line.

Within an event block, no local data types or data objects can be declared. All declarative statements in event blocks are part of the global data declarations of the ABAP program, and are visible in all subsequent processing blocks. An event block works with the global data types and data objects of the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"), and therefore should not contain any separate declarations. Exception: the event blocks AT SELECTION-SCREEN ... and GET ..., which are implemented internally as procedures and can contain local data.

For reasons of data encapsulation, it is recommended that only very few functions are implemented in event blocks, and to call methods instead.

The following are the possible events:

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