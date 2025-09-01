---
title: "Basic Approach"
description: |
  As in token-based rendering(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_render_token.htm), the XML writer is created using the factory method CREATE of the required class, for example: DATA(writer) = CAST if_sxml_writer( cl_sxml_string_writer=>create( ...
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_render_oo.htm"
abapFile: "abenabap_sxml_lib_render_oo.htm"
keywords: ["insert", "do", "if", "method", "class", "data", "abenabap", "sxml", "lib", "render"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib.htm) →  [sXML - Rendering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_render.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Object-Oriented%20Rendering%2C%20ABENABAP_SXML_LIB_RENDER_OO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sXML - Object-Oriented Rendering

Just as in [token-based rendering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_render_token.htm), object-oriented rendering creates an XML writer. The nodes are not written, however, using a separate method for each node type, but using a single method, WRITE\_NODE. This method is linked with a node object with the required [node type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_entities.htm) using its input parameters and a corresponding node is appended to the current write position.

-   [Basic Approach](#abenabap-sxml-lib-render-oo-1-------methods-for-object-oriented-rendering---@ITOC@@ABENABAP_SXML_LIB_RENDER_OO_2)

Basic Approach   

As in [token-based rendering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_render_token.htm), the XML writer is created using the factory method CREATE of the required class, for example:

DATA(writer) = CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create( ... ) ).

Before the node object is written, it can be created using one of the dedicated methods of the interface IF\_SXML\_READER, such as NEW\_OPEN\_ELEMENT, NEW\_CLOSE\_ELEMENT, and NEW\_VALUE or it can be taken from another source, such as an object-oriented read, for example:

DATA(open\_element) = writer->new\_open\_element( ... ).
writer->write\_node( open\_element ).
DATA(value) = writer->new\_value( ).
value->set\_value( ... ).
writer->write\_node( value ).
DATA(close\_element) = writer->new\_close\_element( ... ).
writer->write\_node( close\_element ).

The node object of an element opening has methods that can be used to insert XML attributes.

Executable Example

[Object-Oriented Rendering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensxml_oo_rendering_abexa.htm)

Methods for Object-Oriented Rendering   

The following methods of the interface IF\_SXML\_WRITER are designed specifically for object-oriented rendering:

-   NEW\_OPEN\_ELEMENT - Creates a node object for an element opening.
-   NEW\_VALUE - Creates a node object for a character-like value.
-   NEW\_VALUE\_RAW - Creates a node object for byte-like raw data.
-   NEW\_CLOSE\_ELEMENT - Creates a node object for an end of element.
-   WRITE\_NODE - Creates a node in accordance with the passed node object.

The values are written as in [token-based rendering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_render_token.htm).

Hints

-   [Token-based rendering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_render_token.htm) and object-oriented rendering are not strictly separated. The corresponding methods for writing nodes can be called alternately in the same program. This is not recommended, however, for reasons of readability.
-   In object-oriented rendering, node objects can be written directly that were returned by an [object-oriented parser](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_parse_oo.htm) and possibly modified.
-   Object-oriented rendering can demonstrate poorer performance than token-based rendering due to the extra objects that are created.

Executable Examples

-   [Modifying XML Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensxml_reader_writer_abexa.htm)
-   [Transforming JSON Names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_names_to_upper_abexa.htm)