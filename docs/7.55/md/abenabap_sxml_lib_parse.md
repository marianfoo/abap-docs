  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib.htm) → 

sXML - Parsing

XML data can be read using sXML Library or simply have its syntax checked by being associated with an XML reader and its methods. A reader like this is "validating", meaning that invalid XML data raises an [exception](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_exceptions.htm). It interprets the XML data as a hierarchical tree-like structure where each token is represented by a node assigned uniquely to a subnode (see [W3C Information Set](http://www.w3.org/TR/xml-infoset/)). An element with a literal value, for example, is interpreted as follows:

|
|--CO\_NT\_ELEMENT\_OPEN
|    |
|    |--CO\_NT\_VALUE
|
|--CO\_NT\_ELEMENT\_CLOSE

The value is a subnode of the node that represents an opened element. The names of the nodes here are the same as the constants of the interface IF\_SXML\_READER that describe the type of a node. The attributes of an element have a special task. They are assigned as a list to the node with the type CO\_NT\_ELEMENT\_OPEN and can be reached using special methods when the parser is paused on the opened element.

The [classes and interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_reader.htm) in sXML Library available for parsing XML data are organized so that there are separate XML reader classes for different requirements. These classes inherit from the abstract superclass CL\_SXML\_READER. The abstract superclass contains implementations of functions required by all readers and implements the interface IF\_SXML\_READER, which contains the components shared by all readers. This interface enables all readers to be accessed in the same way. If special components need to be accessed that are not declared in the interface, a down cast must be used on the class in question.

The specialized reader classes are:

-   CL\_SXML\_STRING\_READER

Readers in this class parse XML data in a byte string.

-   CL\_SXML\_TABLE\_READER

Readers in this class parse XML data in an internal table with a flat byte-like line type.

-   CL\_SXML\_DATASET\_READER

Readers in this class parse XML data in a file on the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance.

-   CL\_SXML\_HTTP\_READER

Readers of this class parse XML data from an HTTP service in [ICF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenicf_glosry.htm "Glossary Entry").

-   CL\_SXML\_XOP\_READER

Readers in this class parse XML data saved in [XOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxop_glosry.htm "Glossary Entry") format.

The XML data pending parsing is passed to the factory method CREATE of each reader. Readers detect the [format](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_formats.htm) and the character format of the data themselves. Except for the XOP reader, readers support all [formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_formats.htm) except XOP. The XOP reader supports the XOP format only. Instructions on standardization and handling empty space can be passed to the factory method if allowed by the format.

The methods of the interface IF\_SXML\_READER enable serial parsing of the passed XML data. There are two basic ways to do this:

-   [Token-based parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_parse_iterative.htm)

-   [Object-based parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_parse_oo.htm)

A reader cannot be used more than once for the same XML data or for other data. The read position of a reader is controlled while parsing using its methods. The actions allowed by a reader are specified by its current read position. For example, a reader located at the end of the parsed XML data can no longer be used as an XML source of the statement CALL TRANSFORMATION. No method exists that can restore the reader to its initial state. A new reader is created instead.

Hints

-   The parser in sXML Library is a more strict validator than the parser in [iXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib.htm). A namespace prefix must be declared in the same element or in a superelement. Preceding declarations in a parallel element are interpreted as errors.

-   An XML reader in sXML Library can be specified as an XML source of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transformation.htm). This enables transformations to be performed for all sources supported by sXML readers in all supported [formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_formats.htm). In particular, this makes it possible for [JSON data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_json.htm) to also be consumed directly by ABAP data objects.

-   The method SKIP\_NODE, which can be used in both token-based and object-oriented parsing, offers various simple ways of checking the validity of a subtree or tree or of copying a tree to a writer (which changes its format).

-   If the content of elements or attributes contain the notations &lt;, &gt;, &amp;, &quot;, or &apos;, they are transformed automatically to the corresponding [characters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxml_oview.htm) when parsed.

Executable Example

[Transformation from XML Reader](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensxml_trafo_from_reader_abexa.htm)

Continue
[sXML - Token-Based Parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_parse_iterative.htm)
[sXML - Object-Oriented Parsing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_parse_oo.htm)