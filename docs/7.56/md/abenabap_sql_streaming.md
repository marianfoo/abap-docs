  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreams_locators.htm) → 

ABAP SQL - Streaming

ABAP SQL supports [streaming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_glosry.htm "Glossary Entry") for [LOBs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_glosry.htm "Glossary Entry") in data sources.

-   [System Classes and System Interfaces for Reader and Writer Streams](#@@ITOC@@ABENABAP_SQL_STREAMING_1)
-   [Important Methods](#@@ITOC@@ABENABAP_SQL_STREAMING_2)
-   [Data Sources and Data Sinks](#@@ITOC@@ABENABAP_SQL_STREAMING_3)
-   [Creating Data Streams for LOBs](#@@ITOC@@ABENABAP_SQL_STREAMING_4)
    -   [Reader Streams](#@@ITOC@@ABENABAP_SQL_STREAMING_5)
    -   [Writer Streams](#@@ITOC@@ABENABAP_SQL_STREAMING_6)
-   [Closing Data Streams for LOBs](#@@ITOC@@ABENABAP_SQL_STREAMING_7)
-   [Examples](#@@ITOC@@ABENABAP_SQL_STREAMING_8)

System Classes and System Interfaces for Reader and Writer Streams

The [system classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_class_glosry.htm "Glossary Entry") for the various types of [data streams](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_stream_glosry.htm "Glossary Entry") are:

-   CL\_ABAP\_DB\_C\_READER for character-like reader streams. The [streaming data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_data_source_glosry.htm "Glossary Entry") is a [CLOB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclob_glosry.htm "Glossary Entry").
-   CL\_ABAP\_DB\_X\_READER for binary reader streams. The [streaming data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_data_source_glosry.htm "Glossary Entry") a [BLOB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenblob_glosry.htm "Glossary Entry").
-   CL\_ABAP\_DB\_C\_WRITER for character-like writer streams. The [streaming data sink](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_data_sink_glosry.htm "Glossary Entry") is a [CLOB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclob_glosry.htm "Glossary Entry").
-   CL\_ABAP\_DB\_X\_WRITER for binary writer streams. The [streaming data sink](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_data_sink_glosry.htm "Glossary Entry") a [BLOB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenblob_glosry.htm "Glossary Entry").

The special interfaces

-   IF\_ABAP\_DB\_READER
-   IF\_ABAP\_DB\_WRITER

are used to access the reader and writer streams independently of the [stream type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstream_type_glosry.htm "Glossary Entry"). For further resource-independent classes and interfaces, as well as for the hierarchy of the object types, see the figure and explanation under [Streaming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming.htm).

Important Methods

The methods for streaming in ABAP SQL are the same as for general [streaming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming.htm).

Data Sources and Data Sinks

Any [LOBs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_glosry.htm "Glossary Entry") declared in DDIC database tables can be considered as data sources or data sinks. The instances of the classes above are [data streams](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_stream_glosry.htm "Glossary Entry") bound to LOBs. These are [LOB handles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_handle_glosry.htm "Glossary Entry") and implement the [corresponding interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_interfaces.htm). Their use in ABAP SQL involves reference variables that point to the relevant LOB handles.

Creating Data Streams for LOBs

Reader Streams

A reader stream that is bound to an LOB, that is, an instance of the class CL\_ABAP\_DB\_C\_READER or CL\_ABAP\_DB\_X\_READER, can only be created by assigning a LOB from the result set to a reference variable for a reader stream in the [INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) clause of the statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm).

See [SELECT - LOB Handles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_into_lob_handles.htm).

Writer Streams

A writer stream that is bound to an LOB, that is, an instance of the class CL\_ABAP\_DB\_C\_WRITER or CL\_ABAP\_DB\_X\_WRITER, can only be created by specifying a reference variable for a reader stream as a source in the statements [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate.htm), or [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_dbtab.htm). It is not possible to specify more general reference variables.

See [INSERT, UPDATE, MODIFY dbtab - LOB Handles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenium_lob.htm).

Closing Data Streams for LOBs

Since the number of simultaneously opened data streams is limited to 16, they should be closed as soon as possible using the CLOSE method. Regardless of this, reader streams are closed implicitly at the end of a SELECT loop and at the end of a database LUW. An open writer stream is closed implicitly only by using a [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). In [database commits](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry"), on the other hand, an open writer stream produces the runtime error COMMIT\_STREAM\_ERROR.

Examples

Executable Examples

-   [Reader Stream, Read Database Table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_reader_abexa.htm)
-   [Writer Stream, Fill Database Table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_writer_abexa.htm)