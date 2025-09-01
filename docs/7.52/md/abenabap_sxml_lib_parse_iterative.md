  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm) →  [sXML Library - Parse](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_parse.htm) → 

sXML Library, Token-Based Parsing

In token-based parsing, the parser iterates across all nodes (tokens) in the tree structure of the XML data, one after the other. By default, the iterator passes across all subnode branches until the final node. The parser pauses after every iteration step on a node whose properties are available in the attributes of the XML reader. If the parser pauses on the node for an opened element, the list of the XML attributes there can be accessed.

-   [Procedure (Principles)](#@@ITOC@@ABENABAP_SXML_LIB_PARSE_ITERATIVE_1)

-   [Methods and Attributes for Token-Based Parsing](#@@ITOC@@ABENABAP_SXML_LIB_PARSE_ITERATIVE_2)

-   [Methods for token-based parsing](#@@ITOC@@ABENABAP_SXML_LIB_PARSE_ITERATIVE_3)

-   [Attributes for token-based parsing](#@@ITOC@@ABENABAP_SXML_LIB_PARSE_ITERATIVE_4)

Procedure (Principles)

An XML reader is created using the factory method CREATE of the class in question and by passing the source xml to the XML data, for example:

DATA(reader) = cl\_sxml\_string\_reader=>create( xml ).

The static type of the reference variables is then the interface IF\_SXML\_READER and its methods and attributes can be addressed directly.

In the simplest parsing case, the method NEXT\_NODE is applied as many times as it takes to reach the end of the XML:

reader->next\_node( ).

Once the method is called, the attributes of the reader with the required properties of the node can be accessed directly. If the parser pauses on the node of an opened element, the method NEXT\_ATTRIBUTE can be used to iterate across the list of attributes of an XML element:

reader->next\_attribute( ).

After this method, the attributes of the reader object contain the name and the value of the current XML attribute. The end of the data is displayed by the value of the constants IF\_SXML\_NODE=>CO\_NT\_FINAL in the attribute NODE\_TYPE. Any [exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_exceptions.htm) should be caught and handled in a TRY control structure.

Example

The program DEMO\_SXML\_PARSE\_XML executes a simple token-based parsing for any XML data that is entered.

Executable Example

[Token-based parsing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensxml_parsing_abexa.htm)

Methods and Attributes for Token-Based Parsing

Methods for token-based parsing

Alongside the simple iteration across nodes and attributes, the interfaces IF\_SXML\_READER offers several other methods for token-based parsing, summarized as follows:

-   Methods for parsing across nodes

-   NEXT\_NODE - Moves the parser to the next node

-   CURRENT\_NODE - Moves the parser back to the node for the opened element of the current node, if available. This method is ignored by value nodes or closed elements.

-   PUSH\_NODE - Moves the parser back to the node for the opened element of the direct parent node.

-   SKIP\_NODE - Parses all nodes from a node for an opened element to the associated closed element. The parser then pauses on the closed element. If required, the current node and all subnodes are passed to an XML writer. This method is ignored by value nodes or closed elements.

-   Methods for reading the attribute list

-   NEXT\_ATTRIBUTE - Reads the next attribute in the list

-   NEXT\_ATTRIBUTE\_VALUE - Sets the attribute VALUE or VALUE\_RAW of the read explicitly to the value of the current attribute

-   GET\_ATTRIBUTE\_VALUE - Sets the attribute VALUE of the reader to the value of a specific attribute

Notes

-   Token-based parsing is designed mainly for forward interaction through the XML data. Free navigation, as possible in [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) in DOM, is not recommended here. The method PUSH\_BACK makes it possible to move back a step, but does not restore the reader to the state it had when it reached the node using NEXT\_NODE. After a PUSH\_BACK, the parsed node does not always produced the same result as the last time. In particular, subnodes already parsed could be skipped.

-   If an XML element has multiple attributes with the same name, the system uses all of these attributes in the order in which they appear (see example program DEMO\_XML\_ATTRIBUTES).

-   The method CURRENT\_NODE is most useful when reading an attribute list, so jump back to the start.

-   Apart from simply skipping nodes, the method SKIP\_NODE can also be used to check the subtrees or the full tree for errors or to copy trees. In particular, the format of the copied tree or subtree can be transformed into a different format (see the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensxml_format_trafos_abexa.htm)).

Executable Examples

-   [Steps in Token-Based Parsing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensxml_parsing_steps_abexa.htm)

-   [Methods for token-based parsing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensxml_parsing_methods_abexa.htm)

Attributes for token-based parsing

The attributes of the reader with the properties of the current node are:

-   NODE\_TYPE - Node type in accordance with the constants of the interface IF\_SXML\_NODE

-   PREFIX - Namespace prefix

-   NAME - Element name

-   NSURI - Namespace

-   VALUE\_TYPE - Type of the value in accordance with the constants of the interface IF\_SXML\_VALUE:

-   CO\_VT\_TEXT - Text data in the attribute VALUE

-   CO\_VT\_TEXT - Raw data in the attribute VALUE\_RAW

-   VALUE - Character-like value (if text data)

-   VALUE\_RAW - Byte-like value (if raw data)

The value of the constants IF\_SXML\_NODE=>CO\_NT\_FINAL in the attribute NODE\_TYPE indicate that the end of the XML data was reached.

Notes

-   When parsing, the attributes of a reader are only overwritten by non-initial content. If the parser is set to a literal element without a name, for example, the preceding content of the attribute NAME is kept. This applies particularly to the attribute VALUE, which is not initialized if a node does not have a value.

-   The attributes are declared in the interface IF\_SXML\_READER. In a reader class, they can also be addressed using alias names.