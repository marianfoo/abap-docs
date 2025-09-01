  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\)) → 

ABAP SQL - Streaming

ABAP SQL supports [streaming](javascript:call_link\('abenstreaming_glosry.htm'\) "Glossary Entry") for [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") in data sources.

-   [System Classes and System Interfaces for Reader and Writer Streams](#@@ITOC@@ABENABAP_SQL_STREAMING_1)
-   [Important Methods](#@@ITOC@@ABENABAP_SQL_STREAMING_2)
-   [Data Sources and Data Sinks](#@@ITOC@@ABENABAP_SQL_STREAMING_3)
-   [Creating Data Streams for LOBs](#@@ITOC@@ABENABAP_SQL_STREAMING_4)
    -   [Reader Streams](#@@ITOC@@ABENABAP_SQL_STREAMING_5)
    -   [Writer Streams](#@@ITOC@@ABENABAP_SQL_STREAMING_6)
-   [Closing Data Streams for LOBs](#@@ITOC@@ABENABAP_SQL_STREAMING_7)
-   [Examples](#@@ITOC@@ABENABAP_SQL_STREAMING_8)

System Classes and System Interfaces for Reader and Writer Streams

The [system classes](javascript:call_link\('abensystem_class_glosry.htm'\) "Glossary Entry") for the various types of [data streams](javascript:call_link\('abendata_stream_glosry.htm'\) "Glossary Entry") are:

-   CL\_ABAP\_DB\_C\_READER for character-like reader streams. The [streaming data source](javascript:call_link\('abenstreaming_data_source_glosry.htm'\) "Glossary Entry") is a [CLOB](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry").
-   CL\_ABAP\_DB\_X\_READER for binary reader streams. The [streaming data source](javascript:call_link\('abenstreaming_data_source_glosry.htm'\) "Glossary Entry") a [BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry").
-   CL\_ABAP\_DB\_C\_WRITER for character-like writer streams. The [streaming data sink](javascript:call_link\('abenstreaming_data_sink_glosry.htm'\) "Glossary Entry") is a [CLOB](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry").
-   CL\_ABAP\_DB\_X\_WRITER for binary writer streams. The [streaming data sink](javascript:call_link\('abenstreaming_data_sink_glosry.htm'\) "Glossary Entry") a [BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry").

The special interfaces

-   IF\_ABAP\_DB\_READER
-   IF\_ABAP\_DB\_WRITER

are used to access the reader and writer streams independently of the [stream type](javascript:call_link\('abenstream_type_glosry.htm'\) "Glossary Entry"). For further resource-independent classes and interfaces, as well as for the hierarchy of the object types, see the figure and explanation under [Streaming](javascript:call_link\('abenstreaming.htm'\)).

Important Methods

The methods for streaming in ABAP SQL are the same as for general [streaming](javascript:call_link\('abenstreaming.htm'\)).

Data Sources and Data Sinks

Any [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") declared in DDIC database tables can be considered as data sources or data sinks. The instances of the classes above are [data streams](javascript:call_link\('abendata_stream_glosry.htm'\) "Glossary Entry") bound to LOBs. These are [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry") and implement the [corresponding interfaces](javascript:call_link\('abenlob_interfaces.htm'\)). Their use in ABAP SQL involves reference variables that point to the relevant LOB handles.

Creating Data Streams for LOBs

Reader Streams

A reader stream that is bound to an LOB, that is, an instance of the class CL\_ABAP\_DB\_C\_READER or CL\_ABAP\_DB\_X\_READER, can only be created by assigning a LOB from the result set to a reference variable for a reader stream in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause of the statement [SELECT](javascript:call_link\('abapinto_clause.htm'\)).

See [SELECT - LOB Handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)).

Writer Streams

A writer stream that is bound to an LOB, that is, an instance of the class CL\_ABAP\_DB\_C\_WRITER or CL\_ABAP\_DB\_X\_WRITER, can only be created by specifying a reference variable for a reader stream as a source in the statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), or [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)). It is not possible to specify more general reference variables.

See [INSERT, UPDATE, MODIFY dbtab - LOB Handles](javascript:call_link\('abenium_lob.htm'\)).

Closing Data Streams for LOBs

Since the number of simultaneously opened data streams is limited to 16, they should be closed as soon as possible using the CLOSE method. Regardless of this, reader streams are closed implicitly at the end of a SELECT loop and at the end of a database LUW. An open writer stream is closed implicitly only by using a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). In [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"), on the other hand, an open writer stream produces the runtime error COMMIT\_STREAM\_ERROR.

Examples

Executable Examples

-   [Reader Stream, Read Database Table](javascript:call_link\('abendb_reader_abexa.htm'\))
-   [Writer Stream, Fill Database Table](javascript:call_link\('abendb_writer_abexa.htm'\))