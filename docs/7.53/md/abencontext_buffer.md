  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Contexts (Obsolete)](javascript:call_link\('abencontext.htm'\)) → 

Contexts - Buffering Concept

A context buffer is managed by the context program CONTEXT\_X\_... of a [context](javascript:call_link\('abencontext_glosry.htm'\) "Glossary Entry"). From a technical point of view, it is a [cross-transaction application buffer](javascript:call_link\('abencrosstrans_app_buffer_glosry.htm'\) "Glossary Entry") of structure CONTEXTB and of ID IB in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"), which is edited in the context program with statements [EXPORT TO SHARED BUFFER](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) and [IMPORT FROM SHARED BUFFER](javascript:call_link\('abapimport_medium.htm'\)). The context program renews the context buffer at specific times, but does not try to synchronously or nearly synchronously track current changes.

-   [Buffering Types](#@@ITOC@@ABENCONTEXT_BUFFER_1)

-   [Buffer Size](#@@ITOC@@ABENCONTEXT_BUFFER_2)

-   [Buffering Types](#@@ITOC@@ABENCONTEXT_BUFFER_3)

-   [Performance](#@@ITOC@@ABENCONTEXT_BUFFER_4)

Buffering Types

-   Permanent (P): This is the default setting. In this case, the data is obtained using the transaction context. The buffer is reset every hour on the hour (8:00, 9:00...). Entries not found are not buffered. The buffer for each context can be deleted manually using [Context Builder](javascript:call_link\('abencontext_builder_glosry.htm'\) "Glossary Entry"). The reset affects all AS Instances.

-   Temporary (T): Data is only buffered for the duration of the current [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry").

-   No buffering (N)

Buffer Size

The maximum number of entries to be buffered can also be defined. The default value is 128. This number relates to the permanent buffer per module. Within a transaction, all of the data, which is written to the context, is stored in the buffer unless buffering is switched off for this module. We recommend keeping a default value of 128. This is intended to prevent a module from occupying the entire buffer. Different combinations should no longer occur within an hour in a single AS Instance. The system resets the buffer after one hour.

Buffering Types

-   An I buffer is a table that assigns derived values to the input fields of the module. It

-   only contains one entry with key values.

-   An E buffer is a table that assigns the derived values of the module to the key fields of the context. It:

-   contains more than one entry with key values.

-   can be a join of all I buffers for the modules buffered

Performance

The E buffer gives the fastest access, since it can find the values requested in the DEMAND statement in a single step. Under certain circumstances, it can return a smaller number of hits than the I buffer.