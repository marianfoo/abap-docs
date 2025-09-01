  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) → 

iXML Library - Streams and Documents

-   [Input Streams and Output Streams](#abenabap-ixml-lib-input-output-1--------xml-documents---@ITOC@@ABENABAP_IXML_LIB_INPUT_OUTPUT_2)

Input Streams and Output Streams

Input streams are used for the input of XML data into the [parser](javascript:call_link\('abenabap_ixml_lib_parse.htm'\)) and output streams are used to pass XML data from the [renderer](javascript:call_link\('abenabap_ixml_lib_render.htm'\)). A factory is needed to create a stream, which can be created using the iXML factory as follows:

DATA(ixml) = cl\_ixml=>create( ).
...
DATA(stream\_factory) = ixml->create\_stream\_factory( ).

The static type of the reference variable stream\_factory is then the interface IF\_IXML\_STREAM\_FACTORY, which contains factory methods CREATE\_ISTREAM\_... for input streams and CREATE\_OSTREAM\_... for output streams.

Different streams can be created for different data sources and data sinks, such as strings, internal tables, or files specified by URI.

Notes

-   iXML input streams can be specified as an XML source and iXML output streams can be used as an XML target for XSL transformations called using [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

-   If output streams are bound to internal tables with byte-like row type, the last row is not usually filled completely with content from the stream. The length of the actual data in the row can be determined using the return value of the method GET\_NUM\_WRITTEN\_RAW of the output stream modulo the number of table rows.

Example

The XML result of a transformation of an ABAP data object to the [asXML](javascript:call_link\('abenabap_xslt_asxml.htm'\)) format is used to create an iXML input stream. This stream is then transformed back again.

CALL TRANSFORMATION id SOURCE text = \`Hello XML!\`
                       RESULT XML DATA(xml\_string).
DATA(ixml) = cl\_ixml=>create( ).
DATA(stream\_factory) = ixml->create\_stream\_factory( ).
DATA(istream)        = stream\_factory->create\_istream\_xstring( xml\_string ).
DATA  result TYPE string.
CALL TRANSFORMATION id SOURCE XML istream
                       RESULT text = result.

XML documents

Each XML saved in DOM format in the memory is managed using a separate object. An object of this type can be created as follows:

DATA(ixml) = cl\_ixml=>create( ).
...
DATA(document)       = ixml->create\_document( ).

The static type of the reference variable stream\_factory is also IF\_IXML\_DOCUMENT. A document created in this way

-   is used to address an XML document saved as [DOM](javascript:call_link\('abenabap_ixml_lib_dom_access.htm'\)),

-   can be bound to the [parser](javascript:call_link\('abenabap_ixml_lib_parse.htm'\)) to fill it,

-   can be used to construct new XML data or modify existing data,

-   can be passed to the [renderer](javascript:call_link\('abenabap_ixml_lib_render.htm'\)) to produce the output of the renderer.

Note

iXML documents can be defined as an XML target, iXML documents and their nodes can be specified as an XML source for XSL transformations called using [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Example

Creates a document and uses it as the XML target of an XSL transformation. The filled document is then passed to a renderer (to which an output stream for a character string is bound simultaneously) and rendered. The character string then contains the character-like representation of the XML data.

DATA(ixml)  = cl\_ixml=>create( ).
DATA(document)       = ixml->create\_document( ).
CALL TRANSFORMATION id SOURCE text = \`Hello XML!\`
                       RESULT XML document.
DATA xml\_string TYPE string.
ixml->create\_renderer( document = document
                       ostream  = ixml->create\_stream\_factory(
                                    )->create\_ostream\_cstring(
                                         string = xml\_string )
                                           )->render( ).