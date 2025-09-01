---
title: "Basic Approach"
description: |
  An XML reader is created using the factory method CREATE of the required class, as in token-based parsing(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_iterative.htm), and the source xml of the XML data is passed, for example: DATA(reader) = cl_sxml_string_r
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_oo.htm"
abapFile: "abenabap_sxml_lib_parse_oo.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "internal-table", "abenabap", "sxml", "lib", "parse"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib.htm) →  [sXML - Parsing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sXML - Object-Oriented Parsing, ABENABAP_SXML_LIB_PARSE_OO, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sXML - Object-Oriented Parsing

Just as in [token-based parsing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_iterative.htm), object-oriented parsing creates an XML reader and uses its methods to iterate across the XML data. Sometimes, however, other methods are used. The methods used for object-oriented parsing wrap methods for token-based parsing and provide object-oriented access to the current node. Instead of having to read the attributes of the reader directly after a parser step, the methods used for object-oriented parsing return references to objects that represent the current node. The methods and attributes of the [classes and interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_entities.htm) of these objects can be used to access the properties of the node. Unlike in token-based parsing, only the relevant values are available.

-   [Basic Approach](#abenabap-sxml-lib-parse-oo-1-------methods-for-object-oriented-parsing---@ITOC@@ABENABAP_SXML_LIB_PARSE_OO_2)

Basic Approach   

An XML reader is created using the factory method CREATE of the required class, as in [token-based parsing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_iterative.htm), and the source xml of the XML data is passed, for example:

DATA(reader) = cl\_sxml\_string\_reader=>create( xml ).

In the simplest parsing case, the method READ\_NEXT\_NODE is applied as many times as it takes to reach the end of the XML data:

DATA(node) = reader->read\_next\_node( ).

The static type of the reference variable node is then IF\_SXML\_NODE, which points to a node object. The return value is initial at the end of the XML data. The attribute TYPE of the node object represents the type of the node in accordance with the constants CO\_NT\_... of the interface IF\_SXML\_NODE. This means that a downcast can be performed to a more specific reference variable for node, which makes it possible to access the properties of the current node. If the parser is located on the node of an element opening, the node object has the class CL\_SXML\_OPEN\_ELEMENT with the interface IF\_SXML\_OPEN\_ELEMENT. The methods of this interface enable access to the XML attributes of the element. For example, GET\_ATTRIBUTES can be used to place references to attribute objects for all attributes in an internal table.

Any [exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_exceptions.htm) should be caught and handled in a TRY control structure.

Executable Example

[Object-Oriented Parsing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensxml_oo_parsing_abexa.htm)

Methods for Object-Oriented Parsing   

The following methods of the interface IF\_SXML\_READER are designed especially for object-oriented parsing. They return a reference with the static type IF\_SXML\_NODE, which points to a node object and can be cast to its more concrete object type.

-   READ\_NEXT\_NODE - Like [NEXT\_NODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_iterative.htm) but with the return value NODE.
-   READ\_CURRENT\_NODE - Like [CURRENT\_NODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_iterative.htm) but with the return value NODE.

If the current node is to be accessed after PUSH\_BACK, the node object can be obtained using READ\_CURRENT\_NODE.

These methods are sufficient for all simple parsing tasks. For accessing XML attributes, a node object of an element opening contains the appropriate methods. To reset the parser to a preceding node or to parse the current node with its subnodes, the methods [PUSH\_BACK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_iterative.htm) and [SKIP\_NODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_iterative.htm) can also be used here. Further token-based parsing methods should not usually be used at the same time.

Hints

-   [Token-based parsing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_iterative.htm) and object-oriented parsing are not strictly separated. Methods such as NEXT\_NODE and READ\_NEXT\_NODE can be called alternately in the same program. The attributes of the reader can always be used to access the properties of a node in object-oriented parsing too. This is not recommended, however, for reasons of readability.
-   If an XML element has multiple identically named attributes, only one of these attributes is used in object-oriented parsing (unlike in [token-based parsing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_parse_iterative.htm)). This attribute has the value of the last identically named attribute (see example program DEMO\_XML\_ATTRIBUTES).
-   A node object returned in object-oriented parsing can be passed directly to an [object-oriented XML writer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sxml_lib_render_oo.htm).
-   Object-oriented parsing is more convenient than token-based parsing, but the many extra objects that are created can affect performance negatively.