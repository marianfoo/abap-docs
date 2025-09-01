  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML Library - Render](javascript:call_link\('abenabap_sxml_lib_render.htm'\)) → 

sXML Library - Object-Oriented Rendering

Just as in [token-based rendering](javascript:call_link\('abenabap_sxml_lib_render_token.htm'\)), object-oriented rendering creates an XML writer. The nodes are not written, however, using a separate method for each node type, but using a single method, WRITE\_NODE. This method is associated with a node object with the required [node type](javascript:call_link\('abenabap_sxml_lib_entities.htm'\)) using its input parameters and a corresponding node is appended to the current writing position.

-   [Procedure (Principles)](#@@ITOC@@ABENABAP_SXML_LIB_RENDER_OO_1)

-   [Methods for Object-Oriented Rendering](#@@ITOC@@ABENABAP_SXML_LIB_RENDER_OO_2)

Procedure (Principles)

As in [token-based rendering](javascript:call_link\('abenabap_sxml_lib_render_token.htm'\)), the XML writer is created using the factory method CREATE of the class in question, for example:

DATA(writer) = CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ... ) ).

Before the node object is written, it can be created using one of the dedicated methods of the interface IF\_SXML\_READER, such as NEW\_OPEN\_ELEMENT, NEW\_CLOSE\_ELEMENT, and NEW\_VALUE or it can be taken from another source, such as an object-oriented read, for example:

DATA(open\_element) = writer->new\_open\_element( ... ).
writer->write\_node( open\_element ).
DATA(value) = writer->new\_value( ).
value->set\_value( ... ).
writer->write\_node( value ).
DATA(close\_element) = writer->new\_close\_element( ... ).
writer->write\_node( close\_element ).

The node object of an opened element has methods that can be used to insert XML attributes.

Executable Example

[Object-Oriented Rendering](javascript:call_link\('abensxml_oo_rendering_abexa.htm'\))

Methods for Object-Oriented Rendering

The following methods of the interface IF\_SXML\_WRITER are designed specially for object-oriented rendering:

-   NEW\_OPEN\_ELEMENT - Creates a node object for an opened element.

-   NEW\_VALUE - Creates a node object for a character-like value.

-   NEW\_VALUE\_RAW - Creates a node object for byte-like raw data.

-   NEW\_CLOSE\_ELEMENT - Creates a node object for a closed element.

-   WRITE\_NODE - Creates a node as specified by the passed node object.

The values are written as in [token-based rendering](javascript:call_link\('abenabap_sxml_lib_render_token.htm'\)).

Notes

-   [Token-based rendering](javascript:call_link\('abenabap_sxml_lib_render_token.htm'\)) and object-oriented rendering are not strictly separate from each other. The corresponding methods for writing nodes can be called alternately in the same program. This is not recommended, though, since the program must remain easy to read.

-   In object-oriented rendering, node objects can be written directly that were returned (and possibly modified) by an [object-oriented parser](javascript:call_link\('abenabap_sxml_lib_parse_oo.htm'\)).

-   Object-oriented rendering can demonstrate poorer performance than token-based rendering due to the extra objects that are created.

Executable Examples

-   [Modifying XML Data](javascript:call_link\('abensxml_reader_writer_abexa.htm'\))

-   [Transforming JSON Names](javascript:call_link\('abenabap_json_names_to_upper_abexa.htm'\))