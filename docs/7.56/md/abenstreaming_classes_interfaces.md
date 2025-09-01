---
title: "Classes and Interfaces for Streams"
description: |
  The classes and interfaces of streams are in the package SABP_STREAMS_AND_LOCATORS. Interfaces and classes that have been released for use are exposed in their package interface SABP_STREAMS_AND_LOCATORS. The following figure shows the hierarchy of the most important interfaces and classes for
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_classes_interfaces.htm"
abapFile: "abenstreaming_classes_interfaces.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "internal-table", "abenstreaming", "classes", "interfaces"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Streaming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming.htm) → 

Classes and Interfaces for Streams

The classes and interfaces of streams are in the package SABP\_STREAMS\_AND\_LOCATORS. Interfaces and classes that have been released for use are exposed in their package interface SABP\_STREAMS\_AND\_LOCATORS. The following figure shows the hierarchy of the most important interfaces and classes for streams.

![Figure](bdoc_streaming.gif)

Classes for Data Streams and Filter Streams

The classes for data streams and filter streams are the templates for data stream objects and filter stream objects.

The classes for the data stream category start with "CL\_ABAP\_", followed by

1.  an ID resource for the resource that is used as a [streaming data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_data_source_glosry.htm "Glossary Entry") or a [streaming data sink](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_data_sink_glosry.htm "Glossary Entry"). Currently, data streams are supported for the following resources:
    -   [LOBs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_glosry.htm "Glossary Entry") in database tables; the associated resource ID is " [DB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_streaming.htm)".
    -   [Strings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_glosry.htm "Glossary Entry"); the associated resource ID is "[STRING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_streams.htm)".
    -   [Internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm "Glossary Entry"); the associated resource ID is " [ITAB](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_streams.htm)".
2.  an ID type for the stream type. Here the IDs "C" and "X" are possible for the binary streams or character streams.
3.  an ID direction for the stream direction. Here the IDs "READER" and "WRITER" are possible for reader streams or writer streams.

The classes for the filter stream category start with "CL\_ABAP\_FILTER\_", followed by the IDs type and direction with the same meanings as for data stream classes. Currently, no filter streams are implemented.

Interfaces and Superclasses

All public methods of the data stream and filter stream classes are declared in interfaces which allow general access to the classes.

-   The IF\_ABAP\_direction interface enables general access to all reader and writer streams.
-   The IF\_ABAP\_TYPE\_direction interface enables a type-dependent access to reader and writer streams.
-   The IF\_ABAP\_RESOURCE\_direction interface enables resource-dependent access to reader and writer streams.
-   The IF\_ABAP\_CLOSE\_RESOURCE interface contains the CLOSE method, which is required by all stream kinds in order to close an open resource. This also applies to filter streams, since these are usually connected to data streams and the resource can then only be closed using the filter stream.

Data stream classes inherit CL\_ABAP\_TYPE\_direction from abstract superclasses. In these classes, methods are implemented that are dependent on the stream type and stream direction but independent of the resource.

Important Methods

In the case of data streams, the following methods are implemented as [kernel methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkernel_method_glosry.htm "Glossary Entry") . The actual access to the [streaming data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_data_source_glosry.htm "Glossary Entry") or [streaming data sink](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstreaming_data_sink_glosry.htm "Glossary Entry") is completed by the ABAP runtime framework.

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