  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstreams_locators.htm) → 

ABAP SQL - Streaming

ABAP SQL supports [streaming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstreaming_glosry.htm "Glossary Entry") for [LOBs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_glosry.htm "Glossary Entry") in data sources.

-   [System Classes and System Interfaces for Reader and Writer Streams](#@@ITOC@@ABENOPEN_SQL_STREAMING_1)

-   [Important Methods](#@@ITOC@@ABENOPEN_SQL_STREAMING_2)

-   [Data Sources and Data Sinks](#@@ITOC@@ABENOPEN_SQL_STREAMING_3)

-   [Creating Data Streams for LOBs](#@@ITOC@@ABENOPEN_SQL_STREAMING_4)

-   [Reader Streams](#@@ITOC@@ABENOPEN_SQL_STREAMING_5)

-   [Writer Streams](#@@ITOC@@ABENOPEN_SQL_STREAMING_6)

-   [Closing Data Streams for LOBs](#@@ITOC@@ABENOPEN_SQL_STREAMING_7)

-   [Examples](#@@ITOC@@ABENOPEN_SQL_STREAMING_8)

System Classes and System Interfaces for Reader and Writer Streams

The [system classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_class_glosry.htm "Glossary Entry") for the various types of [data streams](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_stream_glosry.htm "Glossary Entry") are:

The special interfaces

are used to access the reader and writer streams independently of the [stream type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstream_type_glosry.htm "Glossary Entry"). For further resource-independent classes and interfaces, as well as for the hierarchy of the object types, see the figure and explanation under [Streaming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstreaming.htm).

Important Methods

The methods for streaming in ABAP SQL are the same as for general [streaming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstreaming.htm).

Data Sources and Data Sinks

Any [LOBs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_glosry.htm "Glossary Entry") declared in database tables can be considered as data sources or data sinks. The instances of the classes above are [data streams](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_stream_glosry.htm "Glossary Entry") joined to LOBs. These are [LOB handles](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_handle_glosry.htm "Glossary Entry") and implement the [corresponding interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_interfaces.htm). Their use in ABAP SQL involves reference variables that point to the relevant LOB handles.

Creating Data Streams for LOBs

Reader Streams

A reader stream that is bound to an LOB (that is, an instance of the class CL\_ABAP\_DB\_C\_READER or CL\_ABAP\_DB\_X\_READER) can only be created if, in the [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) clause of the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm), a LOB from the results set is assigned to a reference variable for a reader stream.

Refer to [SELECT - LOB Handles](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_into_lob_handles.htm).

Writer Streams

A writer stream that is bound to an LOB (that is, an instance of the class CL\_ABAP\_DB\_C\_WRITER or CL\_ABAP\_DB\_X\_WRITER) can only be created if a reference variable for a reader stream is specified as a source in the statements [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate.htm), or [MODIFY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_dbtab.htm). It is not possible to specify more general reference variables.

See [INSERT, UPDATE, MODIFY dbtab - LOB Handles](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninsert_update_modify_lob.htm).

Closing Data Streams for LOBs

Since the number of data streams open at one time is limited to 16, they should be closed as soon as possible using the CLOSE method. Regardless of this, reader streams are closed implicitly at the end of a SELECT loop and at the end of a database LUW. An open writer stream can be closed implicitly only by using a [database rollback](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). [Database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry")s for open writer streams, on the other hand, produce the runtime error COMMIT\_STREAM\_ERROR.

Examples

Executable Examples

-   [Reader Stream, Read Database Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_reader_abexa.htm)

-   [Writer Stream, Fill Database Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendb_writer_abexa.htm)