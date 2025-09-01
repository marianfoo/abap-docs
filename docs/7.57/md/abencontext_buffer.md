---
title: "Contexts - Buffering Concept"
description: |
  A context buffer is managed by the context program CONTEXT_X_... of a context(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontext_glosry.htm 'Glossary Entry'). From a technical point of view, it is a cross-transaction application buffer(https://help.sap.com/doc/abapdocu_757_
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontext_buffer.htm"
abapFile: "abencontext_buffer.htm"
keywords: ["delete", "do", "if", "case", "try", "data", "types", "abencontext", "buffer"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Contexts (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontext.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Contexts - Buffering Concept, ABENCONTEXT_BUFFER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

Contexts - Buffering Concept

A context buffer is managed by the context program CONTEXT\_X\_... of a [context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontext_glosry.htm "Glossary Entry"). From a technical point of view, it is a [cross-transaction application buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") of the structure CONTEXTB and the ID IB in the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry"), which is processed in the context program with the statements [EXPORT TO SHARED BUFFER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm) and [IMPORT FROM SHARED BUFFER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_medium.htm). The context program renews the context buffer at specific times but does not try to synchronously or nearly synchronously track current changes.

-   [Buffering Types](#abencontext-buffer-1-------buffer-size---@ITOC@@ABENCONTEXT_BUFFER_2)
-   [Buffering Types](#abencontext-buffer-3-------performance---@ITOC@@ABENCONTEXT_BUFFER_4)

Buffering Types   

-   Permanent (P): This is the default setting. In this case, the data is preserved across the transaction context. However, they are always reset to the full hour (8:00, 9:00...). Entries that are not found are not buffered. The buffer for each context can be deleted manually using the [Context Builder](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontext_builder_glosry.htm "Glossary Entry"). and affects all AS instances.
-   Temporary (T): Data is only buffered for the duration of the current [transaction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_glosry.htm "Glossary Entry").
-   No buffering (N)

Buffer Size   

The maximum number of entries to be buffered can also be defined. The default value is 128. This number refers to the permanent buffer per module. Within a transaction, everything that is written to the context is stored in the buffer unless buffering is switched off for this module. We recommend keeping a default value of 128. This is intended to prevent a module from occupying the entire buffer. Different combinations should no longer occur within an hour in a single AS instance. The system resets the buffer after one hour.

Buffering Types   

-   An I buffer is a table that assigns derived values to the input fields of the module. It
    -   only contains one entry with key values.
-   An E buffer is a table that assigns the derived values of the module to the key fields of the context. It:
    -   also contains multiple entries with the key values.
    -   can be a join of all I buffers for the upstream modules

Performance   

The E buffer provides the fastest access, since it can find the values requested in the DEMAND statement in a single step. However, it may return a smaller number of hits than the I buffer.