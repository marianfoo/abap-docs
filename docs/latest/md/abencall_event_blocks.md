---
title: "Call Event Blocks"
description: |
  Event blocks are processing blocks in an ABAP program that are executed when the associated event occurs in the ABAP runtime framework(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_frmwk_glosry.htm 'Glossary Entry'). In two cases, such events can be raised progra
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_blocks.htm"
abapFile: "abencall_event_blocks.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abencall", "event", "blocks"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Call%20Event%20Blocks%2C%20ABENCALL_EVENT_BLOCKS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Call Event Blocks

Event blocks are processing blocks in an ABAP program that are executed when the associated event occurs in the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry"). In two cases, such events can be raised programmatically and the event blocks, if implemented, can be called:

-   Using the statement [SET USER-COMMAND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_user-command.htm) in classic list processing
-   Using the statement [PUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapput.htm) in logical databases

Both statements are effectively obsolete. For more information, see the relevant sections.