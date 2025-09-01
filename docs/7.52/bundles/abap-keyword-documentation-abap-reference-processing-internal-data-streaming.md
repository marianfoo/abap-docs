# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Streaming

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenstreaming.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming.htm)
- [abenstreaming_classes_interfaces.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming_classes_interfaces.htm)
- [abendata_objects_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_streams.htm)
- [abenstring_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_streams.htm)
- [abenitab_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_streams.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.499Z

---

### abenstreaming.htm

> **📖 Official SAP Documentation**: [abenstreaming.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) → 

Streaming

Streaming describes how [streams](javascript:call_link\('abenstream_glosry.htm'\) "Glossary Entry") are passed. Streams are represented by instances of special classes. Streams are passed by calling the relevant methods of the object.

Properties of Streams

Streams are classified by the following properties:

-   Stream category
    [Data streams](javascript:call_link\('abendata_stream_glosry.htm'\) "Glossary Entry") and [filter streams](javascript:call_link\('abenfilter_stream_glosry.htm'\) "Glossary Entry")

-   Stream direction
    [Reader streams](javascript:call_link\('abenreader_stream_glosry.htm'\) "Glossary Entry") and [writer streams](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry")

-   Stream type
    [Binary streams](javascript:call_link\('abenbinary_stream_glosry.htm'\) "Glossary Entry") and [character streams](javascript:call_link\('abencharacter_stream_glosry.htm'\) "Glossary Entry")

More Information

-   [Classes and Interfaces for Streams](javascript:call_link\('abenstreaming_classes_interfaces.htm'\))

-   [Streaming for Data Objects](javascript:call_link\('abendata_objects_streams.htm'\))

-   [Streaming in Open SQL](javascript:call_link\('abenopen_sql_streaming.htm'\))

Continue
[Classes and Interfaces for Streams](javascript:call_link\('abenstreaming_classes_interfaces.htm'\))
[Streaming for Data Objects](javascript:call_link\('abendata_objects_streams.htm'\))



**📖 Source**: [abenstreaming.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming.htm)

### abenstreaming_classes_interfaces.htm

> **📖 Official SAP Documentation**: [abenstreaming_classes_interfaces.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming_classes_interfaces.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Streaming](javascript:call_link\('abenstreaming.htm'\)) → 

Classes and Interfaces for Streams

The classes and interfaces of streams are in the SABP\_STREAMS\_AND\_LOCATORS package. Interfaces and classes that have been released for use are exposed in their package interface SABP\_STREAMS\_AND\_LOCATORS. The following figure shows the hierarchy of the most important interfaces and classes for streams.

![Figure](abdoc_streaming.gif)

Classes for Data Streams and Filter Streams

The classes for data streams and filter streams are the templates for data stream objects and filter stream objects.

The classes for the "data stream" stream kind start with "CL\_ABAP\_", followed by

1.  an identification resource, for the resource, which is used as a [data source](javascript:call_link\('abendata_source_glosry.htm'\) "Glossary Entry") or a [data drain](javascript:call_link\('abendata_source_glosry.htm'\) "Glossary Entry"). At the moment, data streams are supported for the following resources:

-   [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") in database tables; the associated resource ID is " [DB](javascript:call_link\('abenopen_sql_streaming.htm'\))".

-   [Strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry"); the associated resource ID is " [STRING](javascript:call_link\('abenstring_streams.htm'\))".

-   [Internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"); the associated resource ID is " [ITAB](javascript:call_link\('abenitab_streams.htm'\))".
    

1.  an identification type for the stream type. Here the identifications "C" and "X" are possible for the binary streams and character streams.
    
2.  an identification direction for the stream direction. Here the identifications "READER" and "WRITER" are possible for reader streams or writer streams.

The classes for the "filter stream" stream kind start with "CL\_ABAP\_FILTER\_", followed by the identifications type and direction with the same meanings as for data stream classes. At present, no filter streams have been implemented.

Interfaces and Superclasses

All public methods of the data stream and filter stream classes are declared in interfaces which allow general access to the classes.

-   The IF\_ABAP\_direction interface enables general access to all reader and writer streams.

-   The IF\_ABAP\_type\_direction interface enables a type-dependent access to reader and writer streams.

-   The IF\_ABAP\_resource\_direction interface enables resource-dependent access to reader and writer streams.

-   The IF\_ABAP\_CLOSE\_RESOURCE interface contains the CLOSE method, which is required by all stream kinds in order to close an open resource. This also applies for filter streams, since these are usually connected to data streams and the resource can then only be closed using the filter stream.

Data stream classes inherit CL\_ABAP\_type\_direction from abstract superclasses. In these, methods are implemented, which are dependent on stream type and stream direction but independent of the resource.

Important Methods

In the case of data streams, the following methods are implemented as [kernel methods](javascript:call_link\('abenkernel_method_glosry.htm'\) "Glossary Entry"). This means that access to the [data source](javascript:call_link\('abendata_source_glosry.htm'\) "Glossary Entry") or [data drain](javascript:call_link\('abendata_sink_glosry.htm'\) "Glossary Entry") is completed by the ABAP runtime environment.

Methods for Reader Streams

Methods from the IF\_ABAP\_READER interface:

-   DATA\_AVAILABLE returns "X", if there is still data in the reader stream.

-   IS\_X\_READER returns "X", if it is a binary stream.

-   READ returns a string with a predefined number of bytes or characters from the reader stream.

-   SKIP skips a predefined number of bytes or characters from the reader stream.

Methods for Writer Streams

Methods from the IF\_ABAP\_WRITER interface:

-   WRITE writes the content of a specified string to a writer stream.

Methods for Both Stream Kinds

Methods from the IF\_ABAP\_CLOSE\_RESOURCE interface:

-   CLOSE closes the stream.

-   IS\_CLOSED returns "X" if the stream is closed.



**📖 Source**: [abenstreaming_classes_interfaces.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming_classes_interfaces.htm)

### abendata_objects_streams.htm

> **📖 Official SAP Documentation**: [abendata_objects_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_streams.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Streaming](javascript:call_link\('abenstreaming.htm'\)) → 

Streaming for Data Objects

The abstract superclasses for [streaming](javascript:call_link\('abenstreaming_glosry.htm'\) "Glossary Entry") for data objects are:

-   CL\_ABAP\_MEMORY\_C\_READER

-   CL\_ABAP\_MEMORY\_C\_WRITER

-   CL\_ABAP\_MEMORY\_X\_READER

-   CL\_ABAP\_MEMORY\_X\_WRITER

Streaming is possible for strings and internal tables:

-   [Streaming for strings](javascript:call_link\('abenstring_streams.htm'\))

-   [Streaming for internal tables](javascript:call_link\('abenitab_streams.htm'\))

Note

Another important application for streaming is when using [Open SQL](javascript:call_link\('abenopen_sql_streaming.htm'\)) to access [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") in database tables.

Continue
[Streaming for Strings](javascript:call_link\('abenstring_streams.htm'\))
[Streaming for internal tables](javascript:call_link\('abenitab_streams.htm'\))



**📖 Source**: [abendata_objects_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_streams.htm)

### abenstring_streams.htm

> **📖 Official SAP Documentation**: [abenstring_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_streams.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Streaming](javascript:call_link\('abenstreaming.htm'\)) →  [Streaming for Data Objects](javascript:call_link\('abendata_objects_streams.htm'\)) → 

Streaming for Strings

The specific classes for [streaming](javascript:call_link\('abenstreaming_glosry.htm'\) "Glossary Entry") for strings are:

-   CL\_ABAP\_STRING\_C\_READER

-   CL\_ABAP\_STRING\_C\_WRITER

-   CL\_ABAP\_STRING\_X\_READER

-   CL\_ABAP\_STRING\_X\_WRITER

These classes are subclasses of the abstract superclasses [CL\_ABAP\_MEMORY\_...](javascript:call_link\('abendata_objects_streams.htm'\)).

Example

A writer stream is used to fill a string and then pass it to a reader stream. The reader stream skips three characters and then reads the remaining characters.

DATA(string\_writer) = NEW cl\_abap\_string\_c\_writer( ).
DO 10 TIMES.
  string\_writer->write( |{ sy-index - 1 }| ).
ENDDO.
string\_writer->close( ).
DATA(string\_reader) =
  NEW cl\_abap\_string\_c\_reader( string\_writer->get\_result\_string( ) ).
string\_reader->skip( 3 ).
WHILE string\_reader->data\_available( ) = 'X'.
  cl\_demo\_output=>write( string\_reader->read( 1 ) ).
ENDWHILE.
string\_reader->close( ).
cl\_demo\_output=>display( ).



**📖 Source**: [abenstring_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_streams.htm)

### abenitab_streams.htm

> **📖 Official SAP Documentation**: [abenitab_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_streams.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Streaming](javascript:call_link\('abenstreaming.htm'\)) →  [Streaming for Data Objects](javascript:call_link\('abendata_objects_streams.htm'\)) → 

Streaming for internal tables

The specific classes for [streaming](javascript:call_link\('abenstreaming_glosry.htm'\) "Glossary Entry") for internal tables are: CL\_ABAP\_ITAB\_C\_READER

-   CL\_ABAP\_ITAB\_C\_READER

-   CL\_ABAP\_ITAB\_C\_WRITER

-   CL\_ABAP\_ITAB\_X\_READER

-   CL\_ABAP\_ITAB\_X\_WRITER

These classes are subclasses of the abstract superclasses [CL\_ABAP\_MEMORY\_...](javascript:call_link\('abendata_objects_streams.htm'\)).

Example

Uses a reader stream to read an internal table.

DATA itab TYPE TABLE OF string WITH EMPTY KEY.
itab = VALUE #( ( \`abc\` ) ( \`def\` ) ( \`ghi\` ) ).
DATA(itab\_reader) = NEW cl\_abap\_itab\_c\_reader( itab ).
WHILE itab\_reader->data\_available( ) = 'X'.
  cl\_demo\_output=>write\_text( itab\_reader->read( 3 ) ).
ENDWHILE.
itab\_reader->close( ).
cl\_demo\_output=>display( ).



**📖 Source**: [abenitab_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_streams.htm)

### abendata_objects_streams.htm

> **📖 Official SAP Documentation**: [abendata_objects_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_streams.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abendata_objects_streams.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_streams.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Streaming](javascript:call_link\('abenstreaming.htm'\)) → 

Streaming for Data Objects

The abstract superclasses for [streaming](javascript:call_link\('abenstreaming_glosry.htm'\) "Glossary Entry") for data objects are:

-   CL\_ABAP\_MEMORY\_C\_READER

-   CL\_ABAP\_MEMORY\_C\_WRITER

-   CL\_ABAP\_MEMORY\_X\_READER

-   CL\_ABAP\_MEMORY\_X\_WRITER

Streaming is possible for strings and internal tables:

-   [Streaming for strings](javascript:call_link\('abenstring_streams.htm'\))

-   [Streaming for internal tables](javascript:call_link\('abenitab_streams.htm'\))

Note

Another important application for streaming is when using [Open SQL](javascript:call_link\('abenopen_sql_streaming.htm'\)) to access [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") in database tables.

Continue
[Streaming for Strings](javascript:call_link\('abenstring_streams.htm'\))
[Streaming for internal tables](javascript:call_link\('abenitab_streams.htm'\))
