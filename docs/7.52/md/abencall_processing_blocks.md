---
title: "Calling Processing Blocks"
description: |
  In every processing block(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm 'Glossary Entry') of an ABAP program, processing blocks of the same program can be called (using internal calls) or processing blocks of other ABAP programs can be called (using ext
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm"
abapFile: "abencall_processing_blocks.htm"
keywords: ["do", "try", "method", "class", "abencall", "processing", "blocks"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) → 

Calling Processing Blocks

In every [processing block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm "Glossary Entry") of an ABAP program, processing blocks of the same program can be called (using internal calls) or processing blocks of other ABAP programs can be called (using external calls) .

-   [Procedures can be called](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) directly.

-   [Event handlers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_event_handler.htm) can be called indirectly by raising events from the same class in methods. This provides the interface of the event handler. A prerequisite for the execution of an event handler is its [registration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_handler.htm).

-   Event blocks can be called indirectly by raising events in the runtime environment explicitly.

The statement [MODULE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodule.htm) calls dialog modules in the processing blocks of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") and not in the processing blocks of an ABAP program.

Continue
[Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm)
[Call Event Handler](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_event_handler.htm)
[Call Event Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_event_blocks.htm)