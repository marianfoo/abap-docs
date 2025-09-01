# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Streaming

Included pages: 6


### abenstreaming.htm

---
title: "Streaming"
description: |
  Streaming describes how streams(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstream_glosry.htm 'Glossary Entry') are passed. Streams are represented by instances of special classes. The transfer of streams takes place by calling the relevant methods of the object. Properties of S
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming.htm"
abapFile: "abenstreaming.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenstreaming"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) → 

Streaming

Streaming describes how [streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstream_glosry.htm "Glossary Entry") are passed. Streams are represented by instances of special classes. The transfer of streams takes place by calling the relevant methods of the object.

Properties of Streams

Streams are classified by the following properties:

-   Stream kind
    [Data streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_stream_glosry.htm "Glossary Entry") and [filter streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfilter_stream_glosry.htm "Glossary Entry")

-   Stream direction
    [Reader streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreader_stream_glosry.htm "Glossary Entry") and [writer streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwriter_stream_glosry.htm "Glossary Entry")

-   Stream type
    [Binary streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbinary_stream_glosry.htm "Glossary Entry") and [character streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharacter_stream_glosry.htm "Glossary Entry")

More Information

-   [Classes and interfaces for streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_classes_interfaces.htm)

-   [Streaming for Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_streams.htm)

-   [Streaming in ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_streaming.htm)

Continue
[Classes and Interfaces for Streams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_classes_interfaces.htm)
[Streaming for Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_streams.htm)


### abenstreaming_classes_interfaces.htm

---
title: "Classes and Interfaces for Streams"
description: |
  The classes and interfaces of streams are in the package SABP_STREAMS_AND_LOCATORS. Interfaces and classes that have been released for use are exposed in their package interface SABP_STREAMS_AND_LOCATORS. The following figure shows the hierarchy of the most important interfaces and classes for
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_classes_interfaces.htm"
abapFile: "abenstreaming_classes_interfaces.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "internal-table", "abenstreaming", "classes", "interfaces"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming.htm) → 

Classes and Interfaces for Streams

The classes and interfaces of streams are in the package SABP\_STREAMS\_AND\_LOCATORS. Interfaces and classes that have been released for use are exposed in their package interface SABP\_STREAMS\_AND\_LOCATORS. The following figure shows the hierarchy of the most important interfaces and classes for streams.

![Figure](abdoc_streaming.gif)

Classes for Data Streams and Filter Streams

The classes for data streams and filter streams are the templates for data stream objects and filter stream objects.

The classes for the data stream category start with "CL\_ABAP\_", followed by

1.  an ID resource for the resource that is used as a [streaming data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_data_source_glosry.htm "Glossary Entry") or a [streaming data sink](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_data_sink_glosry.htm "Glossary Entry"). Currently, data streams are supported for the following resources:
    

-   [LOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlob_glosry.htm "Glossary Entry") in database tables; the associated resource ID is " [DB](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_streaming.htm)".

-   [Strings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_glosry.htm "Glossary Entry"); the associated resource ID is " [STRING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_streams.htm)".

-   [Internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_table_glosry.htm "Glossary Entry"); the associated resource ID is " [ITAB](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_streams.htm)".

1.  an ID type for the stream type. Here the IDs "C" and "X" are possible for the binary streams or character streams.
    
2.  an ID direction for the stream direction. Here the IDs "READER" and "WRITER" are possible for reader streams or writer streams.
    

The classes for the filter stream category start with "CL\_ABAP\_FILTER\_", followed by the IDs type and direction with the same meanings as for data stream classes. Currently, no filter streams are implemented.

Interfaces and Superclasses

All public methods of the data stream and filter stream classes are declared in interfaces which allow general access to the classes.

-   The IF\_ABAP\_direction interface enables general access to all reader and writer streams.

-   The IF\_ABAP\_TYPE\_direction interface enables a type-dependent access to reader and writer streams.

-   The IF\_ABAP\_RESOURCE\_direction interface enables resource-dependent access to reader and writer streams.

-   The IF\_ABAP\_CLOSE\_RESOURCE interface contains the CLOSE method, which is required by all stream kinds in order to close an open resource. This also applies to filter streams, since these are usually connected to data streams and the resource can then only be closed using the filter stream.

Data stream classes inherit CL\_ABAP\_TYPE\_direction from abstract superclasses. In these classes, methods are implemented that are dependent on the stream type and stream direction but independent of the resource.

Important Methods

In the case of data streams, the following methods are implemented as [kernel methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkernel_method_glosry.htm "Glossary Entry") . The actual access to the [streaming data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_data_source_glosry.htm "Glossary Entry") or [streaming data sink](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_data_sink_glosry.htm "Glossary Entry") is completed by the ABAP runtime environment.

Methods for Reader Streams

Methods from the interface IF\_ABAP\_READER:

-   DATA\_AVAILABLE returns "X" if there is still data in the reader stream.

-   IS\_X\_READER returns "X" if it is a binary stream.

-   READ returns a string with a predefined number of bytes or characters from the reader stream.

-   SKIP skips a predefined number of bytes or characters from the reader stream.

Methods for Writer Streams

Methods from the interface IF\_ABAP\_WRITER:

-   WRITE writes the content of a passed string to a writer stream.

Methods for Both Stream Categories

Methods from the IF\_ABAP\_CLOSE\_RESOURCE interface:

-   CLOSE closes the stream.

-   IS\_CLOSED returns "X" if the stream is closed.


### abendata_objects_streams.htm

---
title: "Streaming for Data Objects"
description: |
  The abstract superclasses for streaming(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_glosry.htm 'Glossary Entry') for data objects are: -   CL_ABAP_MEMORY_C_READER -   CL_ABAP_MEMORY_C_WRITER -   CL_ABAP_MEMORY_X_READER -   CL_ABAP_MEMORY_X_WRITER Stream
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_streams.htm"
abapFile: "abendata_objects_streams.htm"
keywords: ["do", "try", "class", "data", "internal-table", "abendata", "objects", "streams"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming.htm) → 

Streaming for Data Objects

The abstract superclasses for [streaming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_glosry.htm "Glossary Entry") for data objects are:

-   CL\_ABAP\_MEMORY\_C\_READER

-   CL\_ABAP\_MEMORY\_C\_WRITER

-   CL\_ABAP\_MEMORY\_X\_READER

-   CL\_ABAP\_MEMORY\_X\_WRITER

Streaming is possible for strings and internal tables:

-   [Streaming for Strings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_streams.htm)

-   [Streaming for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_streams.htm)

Hint

Another important application for streaming is when using [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_streaming.htm) to access [LOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlob_glosry.htm "Glossary Entry") in database tables.

Continue
[Streaming for Strings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_streams.htm)
[Streaming for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_streams.htm)


### abenstring_streams.htm

---
title: "Streaming for Strings"
description: |
  The specific classes for streaming(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_glosry.htm 'Glossary Entry') for strings are: -   CL_ABAP_STRING_C_READER -   CL_ABAP_STRING_C_WRITER -   CL_ABAP_STRING_X_READER -   CL_ABAP_STRING_X_WRITER These classes ar
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_streams.htm"
abapFile: "abenstring_streams.htm"
keywords: ["do", "while", "if", "try", "class", "data", "abenstring", "streams"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming.htm) →  [Streaming for Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_streams.htm) → 

Streaming for Strings

The specific classes for [streaming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_glosry.htm "Glossary Entry") for strings are:

-   CL\_ABAP\_STRING\_C\_READER

-   CL\_ABAP\_STRING\_C\_WRITER

-   CL\_ABAP\_STRING\_X\_READER

-   CL\_ABAP\_STRING\_X\_WRITER

These classes are subclasses of the abstract superclasses [CL\_ABAP\_MEMORY\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_streams.htm).

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


### abenitab_streams.htm

---
title: "Streaming for Internal Tables"
description: |
  The specific classes for streaming(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_glosry.htm 'Glossary Entry') for internal tables are: -   CL_ABAP_ITAB_C_READER -   CL_ABAP_ITAB_C_WRITER -   CL_ABAP_ITAB_X_READER -   CL_ABAP_ITAB_X_WRITER These classes ar
version: "7.55"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_streams.htm"
abapFile: "abenitab_streams.htm"
keywords: ["do", "while", "if", "try", "class", "data", "internal-table", "abenitab", "streams"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming.htm) →  [Streaming for Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_streams.htm) → 

Streaming for Internal Tables

The specific classes for [streaming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_glosry.htm "Glossary Entry") for internal tables are:

-   CL\_ABAP\_ITAB\_C\_READER

-   CL\_ABAP\_ITAB\_C\_WRITER

-   CL\_ABAP\_ITAB\_X\_READER

-   CL\_ABAP\_ITAB\_X\_WRITER

These classes are subclasses of the abstract superclasses [CL\_ABAP\_MEMORY\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_streams.htm).

Example

Reading of an internal table using a reader stream.

DATA itab TYPE TABLE OF string WITH EMPTY KEY.
itab = VALUE #( ( \`abc\` ) ( \`def\` ) ( \`ghi\` ) ).
DATA(itab\_reader) = NEW cl\_abap\_itab\_c\_reader( itab ).
WHILE itab\_reader->data\_available( ) = 'X'.
  cl\_demo\_output=>write\_text( itab\_reader->read( 3 ) ).
ENDWHILE.
itab\_reader->close( ).
cl\_demo\_output=>display( ).


### abendata_objects_streams.htm

---
title: "Streaming for Data Objects"
description: |
  The abstract superclasses for streaming(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_glosry.htm 'Glossary Entry') for data objects are: -   CL_ABAP_MEMORY_C_READER -   CL_ABAP_MEMORY_C_WRITER -   CL_ABAP_MEMORY_X_READER -   CL_ABAP_MEMORY_X_WRITER Stream
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_streams.htm"
abapFile: "abendata_objects_streams.htm"
keywords: ["do", "try", "class", "data", "internal-table", "abendata", "objects", "streams"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming.htm) → 

Streaming for Data Objects

The abstract superclasses for [streaming](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreaming_glosry.htm "Glossary Entry") for data objects are:

-   CL\_ABAP\_MEMORY\_C\_READER

-   CL\_ABAP\_MEMORY\_C\_WRITER

-   CL\_ABAP\_MEMORY\_X\_READER

-   CL\_ABAP\_MEMORY\_X\_WRITER

Streaming is possible for strings and internal tables:

-   [Streaming for Strings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_streams.htm)

-   [Streaming for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_streams.htm)

Hint

Another important application for streaming is when using [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_streaming.htm) to access [LOBs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlob_glosry.htm "Glossary Entry") in database tables.

Continue
[Streaming for Strings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_streams.htm)
[Streaming for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_streams.htm)
