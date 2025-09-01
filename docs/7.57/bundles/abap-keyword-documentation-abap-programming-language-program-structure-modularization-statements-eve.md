# ABAP - Keyword Documentation / ABAP - Programming Language / Program Structure / Modularization Statements / Event Blocks

Included pages: 9


### abenevent_blocks.htm

---
title: "Event Blocks"
description: |
  Event blocks are used to handle events in the ABAP runtime framework. They are introduced by an event key word and ended by the next processing block. Since there is no closing statement, it is recommended that the end of an event block is indicated with a comment line. Within an event block, no loc
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm"
abapFile: "abenevent_blocks.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenevent", "blocks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Event Blocks, ABENEVENT_BLOCKS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Event Blocks

Event blocks are used to handle events in the ABAP runtime framework. They are introduced by an event key word and ended by the next processing block. Since there is no closing statement, it is recommended that the end of an event block is indicated with a comment line.

Within an event block, no local data types or data objects can be declared. All declarative statements in event blocks are part of the global data declarations of the ABAP program, and are visible in all subsequent processing blocks. An event block works with the global data types and data objects of the [compilation unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompilation_unit_glosry.htm "Glossary Entry"), and therefore should not contain any separate declarations. Exception: The event blocks AT SELECTION-SCREEN ... and GET ..., which are implemented internally as procedures and can contain local data.

For reasons of data encapsulation, it is recommended that only very few functions are implemented in event blocks, and to call methods instead.

The following are the possible events:

-   [Program constructor event](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_constructor.htm)
    
    This event occurs in all [program types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_type_glosry.htm "Glossary Entry"), except for class pools and interface pools.
    
-   [Reporting events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_processing_blocks.htm)
    
    These events only occur in [executable programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry").
    
-   [Selection screen and list events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screen_events.htm) occur during [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") or [list processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_processing_glosry.htm "Glossary Entry").

Programming Guideline

[No implementations in dialog modules and event blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendial_mod_event_block_guidl.htm "Guideline")

Hints

-   At the end of each event block execution, the statement [NEW-LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-line.htm) is executed implicitly.
-   With the exception of AT SELECTION-SCREEN ... and GET ..., event blocks can be specified multiple times in a program. The event block [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection.htm) can also implicitly exist more than once. When an event occurs, all associated event blocks are executed in the order of their occurrence. Event blocks that are explicitly specified multiple times produce a warning from the extended program check.

Continue
[Program Constructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_constructor.htm)
[Reporting Events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_processing_blocks.htm)
[Selection Screen Events and List Events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screen_events.htm)


### abenprogram_constructor.htm

---
title: "Program Constructor"
description: |
  The program constructor can be used to initialize the global data of a program. It is introduced using the statement: -   LOAD-OF-PROGRAM(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) The associated event occurs when a program is loaded into the internal sess
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_constructor.htm"
abapFile: "abenprogram_constructor.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenprogram", "constructor"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Program Constructor, ABENPROGRAM_CONSTRUCTOR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement:

-   [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm)

The associated event occurs when a program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Hints

-   [Class pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.
-   The program constructor should only be used according to its purpose to initialize global program data. It should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions. Especially for [executable programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), the event block [INITIALIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm), that is executed as part of processing such a program, is preferable for use cases that involve user interactions.

Continue
[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm)


### abapload-of-program.htm

---
title: "LOAD-OF-PROGRAM"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program_shortref.htm) Syntax LOAD-OF-PROGRAM. Effect This event keyword defines the program constructor(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_constructor_glosry.htm 'Glossary E
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm"
abapFile: "abapload-of-program.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abapload", "program"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm) →  [Program Constructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_constructor.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LOAD-OF-PROGRAM, ABAPLOAD-OF-PROGRAM, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

LOAD-OF-PROGRAM

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program_shortref.htm)

Syntax

LOAD-OF-PROGRAM.

Effect

This event keyword defines the [program constructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_constructor_glosry.htm "Glossary Entry") of a function pool, executable program, module pool, or subroutine pool. The program constructor is an event block whose event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") if one of the executable programs listed above is loaded into the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

When a program is called using SUBMIT or a transaction code, a new internal session is opened each time a call is made and the event block is executed once for each call. Global data objects of the program can be initialized here. The event block must be fully executed, otherwise a runtime error occurs. This means that no [statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) can be executed that exit the event block without returning to it.

The first time an external [procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") or a [subscreen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubscreen_glosry.htm "Glossary Entry") is called, the [compilation unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompilation_unit_glosry.htm "Glossary Entry") of the called procedure is loaded into the internal session of the caller and the event LOAD-OF-PROGRAM is raised. The event block is executed before the called procedure. Each time a procedure of the same compilation unit is called again by a caller of the same internal session, the event LOAD-OF-PROGRAM is no longer raised.

Hints

-   The event LOAD-OF-PROGRAM should mainly be used to initialize global data when calling external procedures or [transactions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_glosry.htm "Glossary Entry").
-   Any statements that exit the event block LOAD-OF-PROGRAM like [RETURN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn.htm) raise the runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED and lead to errors from the [extended program check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_program_check_glosry.htm "Glossary Entry"). Although the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program.htm) does not cause a runtime error, it should still not be used.
-   The event LOAD-OF-PROGRAM should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions, because then it cannot be guaranteed that the event block is fully executed.
-   It is discouraged to send any [messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") in the event block LOAD-OF-PROGRAM that require user interaction and block the program flow, because this is not appropriate in the moment of loading a program. Since the [behavior of messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages_types.htm) depends on the context, where a program is loaded, you should not use them at all. A message of type E leads to runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED anyway.
-   For executable programs that are called using SUBMIT, it is recommended that the event [INITIALIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm) is used, since the [start values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") for parameter and selection criteria are set after LOAD-OF-PROGRAM (see [program flow after SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_process.htm)) and because its event block must not be fully executed.
-   If a program is only loaded because declarations are required of it, for example, when using [absolute type names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"), the LOAD-OF-PROGRAM event is not raised. The program constructor is only executed if an executable unit of the program is called afterwards.
-   [Class pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") of the global class defined in the class pool can be used instead.

Example

Sets a global data object for the language depending on the system field sy-langu in the event LOAD-OF-PROGRAM.

DATA g\_langu TYPE sy-langu.
LOAD-OF-PROGRAM.
  g\_langu = COND #( WHEN sy-langu = 'D' THEN 'D' ELSE 'E' ).


### abenprogram_constructor.htm

---
title: "Program Constructor"
description: |
  The program constructor can be used to initialize the global data of a program. It is introduced using the statement: -   LOAD-OF-PROGRAM(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) The associated event occurs when a program is loaded into the internal sess
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_constructor.htm"
abapFile: "abenprogram_constructor.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenprogram", "constructor"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Program Constructor, ABENPROGRAM_CONSTRUCTOR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Program Constructor

The program constructor can be used to initialize the global data of a program. It is introduced using the statement:

-   [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm)

The associated event occurs when a program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Hints

-   [Class pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.
-   The program constructor should only be used according to its purpose to initialize global program data. It should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions. Especially for [executable programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), the event block [INITIALIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm), that is executed as part of processing such a program, is preferable for use cases that involve user interactions.

Continue
[LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm)


### abenabap_processing_blocks.htm

---
title: "Reporting Events"
description: |
  The following are event key words for reporting(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_glosry.htm 'Glossary Entry') events: -   INITIALIZATION(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm), -   START-OF-SELECTION(https://he
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_processing_blocks.htm"
abapFile: "abenabap_processing_blocks.htm"
keywords: ["select", "do", "if", "try", "data", "abenabap", "processing", "blocks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Reporting Events, ABENABAP_PROCESSING_BLOCKS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Reporting Events

The following are event key words for [reporting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_glosry.htm "Glossary Entry") events:

-   [INITIALIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm),
-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection.htm),
-   [GET node](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) (obsolete, for logical databases only),
-   [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapend-of-selection.htm) (obsolete, for logical databases only).

Reporting events occur in a [predefined order](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_process.htm) and only in [executable programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") started with SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only starts with regular transaction codes (no reporting transactions) or external calls of their procedures are not connected to a SUBMIT statement.

When an executable program is connected to a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the assigned subroutine is [executed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_usage_executable.htm) in the [database program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_program_glosry.htm "Glossary Entry") before a reporting event is raised.

Continue
[INITIALIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm)
[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection.htm)


### abapinitialization.htm

---
title: "INITIALIZATION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization_shortref.htm) Syntax INITIALIZATION. Effect This event keyword defines an event block for initializing an executable program. The associated event is raised by the ABAP runtime framework(https://help.sa
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm"
abapFile: "abapinitialization.htm"
keywords: ["select", "do", "if", "try", "data", "abapinitialization"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm) →  [Reporting Events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INITIALIZATION, ABAPINITIALIZATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

INITIALIZATION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization_shortref.htm)

Syntax

INITIALIZATION.

Effect

This event keyword defines an event block for initializing an executable program. The associated event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") during the [flow](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_process.htm) of an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), directly after LOAD-OF-PROGRAM and before the [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") of any existing standard selection screen. Here, the input fields of the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") can be initialized only once, including those fields defined in the [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") linked with the program.

Hint

When an executable program defines a standard selection screen, it is called again by the ABAP runtime framework after it has been executed, whereby the event INITIALIZATION is raised again. However, the initialization of parameters or selection criteria of the selection screen no longer has any effect, since these are automatically filled with previous user entries on the selection screen during the [selection screen event](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") AT SELECTION-SCREEN OUTPUT. To initialize the selection screen explicitly for each call, the event AT SELECTION-SCREEN OUTPUT must be used.

Example

Prefills a parameter on the standard selection screen of an executable program when the event INITIALIZATION is raised.

PARAMETERS p\_langu TYPE pgl\_langu.
INITIALIZATION.
  p\_langu = sy-langu.


### abapstart-of-selection.htm

---
title: "START-OF-SELECTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection_shortref.htm) Syntax START-OF-SELECTION. Effect This event keyword defines the standard processing block of an executable program. The associated event is raised by the ABAP runtime framework(https:
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection.htm"
abapFile: "abapstart-of-selection.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "abapstart", "selection"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm) →  [Reporting Events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: START-OF-SELECTION, ABAPSTART-OF-SELECTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

START-OF-SELECTION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection_shortref.htm)

Syntax

START-OF-SELECTION.

Effect

This event keyword defines the standard processing block of an executable program. The associated event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") during the [processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_process.htm) of an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") after selection screen [processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") of any standard selection screen.

In an executable program, the following statements are assigned to an implicit START-OF-SELECTION event block, which is inserted before any explicit START-OF-SELECTION event block if one exists:

-   All statements that are not declaration and are listed before the first explicit [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry").
-   All functional statements of the program if it does not contain any explicit processing blocks,

Hint

If the program is linked to a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), preparatory work can be performed in START-OF-SELECTION before the logical database reads data. If the program is not linked to a logical database, this event block represents a "main program", so to speak, from which [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") or classic [screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") are called.

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

---
title: "Reporting Events"
description: |
  The following are event key words for reporting(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_glosry.htm 'Glossary Entry') events: -   INITIALIZATION(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm), -   START-OF-SELECTION(https://he
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_processing_blocks.htm"
abapFile: "abenabap_processing_blocks.htm"
keywords: ["select", "do", "if", "try", "data", "abenabap", "processing", "blocks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Reporting Events, ABENABAP_PROCESSING_BLOCKS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Reporting Events

The following are event key words for [reporting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_glosry.htm "Glossary Entry") events:

-   [INITIALIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm),
-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection.htm),
-   [GET node](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) (obsolete, for logical databases only),
-   [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapend-of-selection.htm) (obsolete, for logical databases only).

Reporting events occur in a [predefined order](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_process.htm) and only in [executable programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") started with SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only starts with regular transaction codes (no reporting transactions) or external calls of their procedures are not connected to a SUBMIT statement.

When an executable program is connected to a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the assigned subroutine is [executed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_usage_executable.htm) in the [database program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_program_glosry.htm "Glossary Entry") before a reporting event is raised.

Continue
[INITIALIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinitialization.htm)
[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection.htm)


### abenabap_screen_events.htm

---
title: "Selection Screen Events and List Events"
description: |
  Selection screen events and list events are events of classic dynpro(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm 'Glossary Entry') processing that are transformed into ABAP events by the ABAP runtime framework and are handled directly in the ABAP program instea
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screen_events.htm"
abapFile: "abenabap_screen_events.htm"
keywords: ["select", "do", "if", "try", "class", "abenabap", "screen", "events"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screen Events and List Events, ABENABAP_SCREEN_EVENTS, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screen Events and List Events

Selection screen events and list events are events of classic [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") processing that are transformed into ABAP events by the ABAP runtime framework and are handled directly in the ABAP program instead of in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry").

-   [Selection screen events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_events.htm) occur during [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry").
-   [List events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_lists_interactive.htm) occur during classic [list processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlist_processing_glosry.htm "Glossary Entry").

They are described in their respective environments.
