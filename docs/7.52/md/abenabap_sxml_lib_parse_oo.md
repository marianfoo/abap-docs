  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML Library - Parse](javascript:call_link\('abenabap_sxml_lib_parse.htm'\)) → 

sXML Library - Object-Oriented Parsing

Just as in [token-based parsing](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\)), object-oriented parsing creates an XML reader and uses its methods to iterate across the XML data. Some of the methods are different, however. The methods used for object-oriented parsing wrap methods for token-based parsing and provide object-oriented access to the current node. Instead of read the attributes of the reader directly after a parser step, the methods used for object-oriented parsing return references to objects that represent the current node. The methods and attributes of the [classes and interfaces](javascript:call_link\('abenabap_sxml_lib_entities.htm'\)) of these objects can be used to access the properties of the node. Unlike in token-based parsing, only the relevant values are available.

-   [Procedure (Principles)](#abenabap-sxml-lib-parse-oo-1--------methods-for-object-oriented-parsing---@ITOC@@ABENABAP_SXML_LIB_PARSE_OO_2)

Procedure (Principles)

An XML reader is created using the factory method CREATE of the class in question (as in [token-based parsing](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\))) and by passing the source xml to the XML data, for example:

DATA(reader) = cl\_sxml\_string\_reader=>create( xml ).

In the simplest parsing case, the method READ\_NEXT\_NODE is applied as many times as it takes to reach the end of the XML:

DATA(node) = reader->read\_next\_node( ).

The static type of the reference variable node is then IF\_SXML\_NODE, which points to a node object. The return value is initial at the end of the XML data. The attribute TYPE of the node object displays the type of the node in accordance with the constants CO\_NT\_... of the interface IF\_SXML\_NODE. This means that a down cast can be performed to a more specific reference variable for node, which makes it possible to access the properties of the current node. If the parser is located on the node of an opened element, the node object has the class CL\_SXML\_OPEN\_ELEMENT with the interface IF\_SXML\_OPEN\_ELEMENT. The methods of this interface enables access to the XML attributes of the element. For example, GET\_ATTRIBUTES can be used to pass references to attribute objects for all attributes to an internal table.

Any [exceptions](javascript:call_link\('abenabap_sxml_lib_exceptions.htm'\)) should be caught and handled in a TRY control structure.

Executable Example

[Object-Oriented Parsing](javascript:call_link\('abensxml_oo_parsing_abexa.htm'\))

Methods for Object-Oriented Parsing

The following methods of the interface IF\_SXML\_READER are designed especially for object-oriented parsing. They return a reference with the static type IF\_SXML\_NODE, which points to a node object and can be cast to its more concrete object type.

-   READ\_NEXT\_NODE - Like [NEXT\_NODE](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\)) but with the return value NODE.

-   READ\_CURRENT\_NODE - Like [CURRENT\_NODE](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\)) but with the return value NODE.

If access to the current node is required after PUSH\_BACK, the node object can be fetched using READ\_CURRENT\_NODE.

These methods are all that is needed for all simple parsing tasks. For accessing XML attributes, a node object of an opened element contains the appropriate methods. To move the parser back to a preceding node or to parse the current node with its subnodes, the methods [PUSH\_BACK](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\)) and [SKIP\_NODE](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\)) can also be used here. Further token-based parsing methods should not usually be used at the same time.

Notes

-   [Token-based parsing](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\)) and object-oriented parsing are not strictly separate from each other. Methods such as NEXT\_NODE and READ\_NEXT\_NODE can be used alternately in the same program. The attributes of the reader can be used to access the properties of a node in object-oriented parsing too. This is not recommended, though, since the program must remain easy to read.

-   If an XML element has multiple attributes with the same name, only one of these attributes is used in object-oriented parsing (unlike in [token-based parsing](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\))). This attribute has the value of the last attribute with the same name (see example program DEMO\_XML\_ATTRIBUTES).

-   A node object returned in object-oriented parsing can be passed directly to an [object-oriented XML writer](javascript:call_link\('abenabap_sxml_lib_render_oo.htm'\)).

-   Object-oriented parsing is more user-friendly than token-based parsing, but the many extra objects that are created can affect performance.