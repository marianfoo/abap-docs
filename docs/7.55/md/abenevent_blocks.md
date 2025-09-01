---
title: "Event Blocks"
description: |
  Event blocks are used to handle events in the ABAP runtime environment. They are introduced by an event key word and ended by the next processing block. Since there is no closing statement, it is recommend that the end of an event block is indicated with a comment line. Within an event block, no loc
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_blocks.htm"
abapFile: "abenevent_blocks.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenevent", "blocks"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_modularization.htm) → 

Event Blocks

Event blocks are used to handle events in the ABAP runtime environment. They are introduced by an event key word and ended by the next processing block. Since there is no closing statement, it is recommend that the end of an event block is indicated with a comment line.

Within an event block, no local data types or data objects can be declared. All declarative statements in event blocks belong to the global data declarations of the ABAP program, and are visible in all subsequent processing blocks. An event block works with the global data types and data objects of the [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry"), and therefore should not contain any own declarations. Exception: the event blocks AT SELECTION-SCREEN ... and GET ..., which are implemented internally as procedures and can contain local data.

For reasons of data encapsulation, it is recommended to only implement little functionality in event blocks, and to call methods instead.

There are the following events:

-   [Program constructor event](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_constructor.htm)
    This event occurs in all [program types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_type_glosry.htm "Glossary Entry"), except for class pools and interface pools.

-   [Reporting events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_processing_blocks.htm)
    These events only occur in [executable programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry").

-   [Selection screen and list events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screen_events.htm) occur during [selection screen processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry") or [list processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_processing_glosry.htm "Glossary Entry").

Programming Guideline

[No implementations in dialog modules and event blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendial_mod_event_block_guidl.htm "Guideline")

Hints

-   At the end of each event block execution, the statement [NEW-LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-line.htm) is executed implicitly.

-   With the exception of AT SELECTION-SCREEN ... and GET ..., event blocks can be specified multiple times in a program. The event block [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapstart-of-selection.htm) can also implicitly exist more than once. When an event occurs, all associated event blocks are executed in the order of their occurrence. Event blocks that are explicitly specified multiple times produce a warning from the extended program check.

Continue
[Program Constructor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_constructor.htm)
[Reporting Events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_processing_blocks.htm)
[Selection Screen Events and List Events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screen_events.htm)