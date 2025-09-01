---
title: "Call Event Blocks"
description: |
  Event blocks are processing blocks in an ABAP program that are executed when the corresponding event occurs in the ABAP runtime environment(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm 'Glossary Entry'). These types of events can be raised in as prog
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_event_blocks.htm"
abapFile: "abencall_event_blocks.htm"
keywords: ["do", "case", "try", "class", "data", "types", "abencall", "event", "blocks"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_processing_blocks.htm) → 

Call Event Blocks

Event blocks are processing blocks in an ABAP program that are executed when the corresponding event occurs in the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry"). These types of events can be raised in as program-driven events (and the event blocks where they are implemented called) in two cases:

-   Using the statement [SET USER-COMMAND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_user-command.htm) in classic list processing

-   Using the statement [PUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapput.htm) in logical databases

Both statements are effectively obsolete. More information about them can be found in the relevant sections.