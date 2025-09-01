  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Streaming](javascript:call_link\('abenstreaming.htm'\)) → 

Classes and Interfaces for Streams

The classes and interfaces of streams are in the package SABP\_STREAMS\_AND\_LOCATORS. Interfaces and classes that have been released for use are exposed in their package interface SABP\_STREAMS\_AND\_LOCATORS. The following figure shows the hierarchy of the most important interfaces and classes for streams.

![Figure](abdoc_streaming.gif)

Classes for Data Streams and Filter Streams

The classes for data streams and filter streams are the templates for data stream objects and filter stream objects.

The classes for the "data stream" category start with "CL\_ABAP\_", followed by

1.  an ID resource, for the resource, which is used as a [data source](javascript:call_link\('abendata_source_glosry.htm'\) "Glossary Entry") or a [data sink](javascript:call_link\('abendata_source_glosry.htm'\) "Glossary Entry"). At the moment, data streams are supported for the following resources:

-   [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") in database tables; the associated resource ID is " [DB](javascript:call_link\('abenopen_sql_streaming.htm'\))".

-   [Strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry"); the associated resource ID is " [STRING](javascript:call_link\('abenstring_streams.htm'\))".

-   [Internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"); the associated resource ID is " [ITAB](javascript:call_link\('abenitab_streams.htm'\))".
    

1.  an ID type for the stream type. Here the IDs "C" and "X" are possible for the binary streams and character streams.
    
2.  an ID direction for the stream direction. Here the IDs "READER" and "WRITER" are possible for reader streams or writer streams.

The classes for the "filter stream" category start with "CL\_ABAP\_FILTER\_", followed by the IDs type and direction with the same meanings as for data stream classes. At present, no filter streams have been implemented.

Interfaces and Superclasses

All public methods of the data stream and filter stream classes are declared in interfaces which allow general access to the classes.

-   The IF\_ABAP\_direction interface enables general access to all reader and writer streams.

-   The IF\_ABAP\_type\_direction interface enables a type-dependent access to reader and writer streams.

-   The IF\_ABAP\_resource\_direction interface enables resource-dependent access to reader and writer streams.

-   The IF\_ABAP\_CLOSE\_RESOURCE interface contains the CLOSE method, which is required by all stream kinds in order to close an open resource. This also applies to filter streams, since these are usually connected to data streams and the resource can then only be closed using the filter stream.

Data stream classes inherit CL\_ABAP\_type\_direction from abstract superclasses. In these, methods are implemented, which are dependent on stream type and stream direction but independent of the resource.

Important Methods

In the case of data streams, the following methods are implemented as [kernel methods](javascript:call_link\('abenkernel_method_glosry.htm'\) "Glossary Entry") . Access to the [data source](javascript:call_link\('abendata_source_glosry.htm'\) "Glossary Entry") or [data sink](javascript:call_link\('abendata_sink_glosry.htm'\) "Glossary Entry") is completed by the ABAP runtime environment.

Methods for Reader Streams

Methods from the interface IF\_ABAP\_READER:

-   DATA\_AVAILABLE returns "X", if there is still data in the reader stream.

-   IS\_X\_READER returns "X", if it is a binary stream.

-   READ returns a string with a predefined number of bytes or characters from the reader stream.

-   SKIP skips a predefined number of bytes or characters from the reader stream.

Methods for Writer Streams

Methods from the interface IF\_ABAP\_WRITER:

-   WRITE writes the content of a specified string to a writer stream.

Methods for Both Stream Categories

Methods from the IF\_ABAP\_CLOSE\_RESOURCE interface:

-   CLOSE closes the stream.

-   IS\_CLOSED returns "X" if the stream is closed.