  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Parsing%2C%20ABENABAP_SXML_LIB_PARSE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sXML - Parsing

XML data can be read using sXML Library or its syntax checked by being linked with an XML reader and using its methods. A reader like this is validating, meaning that invalid XML data raises an [exception](javascript:call_link\('abenabap_sxml_lib_exceptions.htm'\)). It interprets the XML data as a hierarchical tree-like structure where each token is represented by a node assigned uniquely to a subnode (see [W3C Information Set](http://www.w3.org/TR/xml-infoset/)). An element with a literal value, for example, is interpreted as follows:

|
|--CO\_NT\_ELEMENT\_OPEN
|    |
|    |--CO\_NT\_VALUE
|
|--CO\_NT\_ELEMENT\_CLOSE

The value is a subnode of the node that represents the opening of an element. The names of the nodes here are the same as the constants of the interface IF\_SXML\_READER that describe the type of a node. The attributes of an element have a special task. They are assigned as a list to the node with the type CO\_NT\_ELEMENT\_OPEN and can be accessed using special methods when the parser is on the opening of the element.

The [classes and interfaces](javascript:call_link\('abenabap_sxml_lib_reader.htm'\)) in sXML Library available for parsing XML data are organized so that there are separate XML reader classes for different requirements. These classes inherit from the abstract superclass CL\_SXML\_READER. The abstract superclass contains implementations of functions required by all readers and includes the interface IF\_SXML\_READER, which contains the components shared by all readers. This interface enables all readers to be accessed in the same way. If special components need to be accessed that are not declared in the interface, a downcast must be used on the corresponding class.

The specialized reader classes are:

-   CL\_SXML\_STRING\_READER
    
    Readers in this class parse XML data in a byte string.
    
-   CL\_SXML\_TABLE\_READER
    
    Readers in this class parse XML data in an internal table with a flat byte-like line type.
    
-   CL\_SXML\_DATASET\_READER
    
    Readers in this class parse XML data in a file on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance.
    
-   CL\_SXML\_HTTP\_READER
    
    Readers of this class parse XML data of an HTTP service in [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry").
    
-   CL\_SXML\_XOP\_READER
    
    Readers in this class parse XML data stored in [XOP](javascript:call_link\('abenxop_glosry.htm'\) "Glossary Entry") format.
    

The XML data to be parsed is passed to the factory method CREATE of each reader. Readers detect the [format](javascript:call_link\('abenabap_sxml_lib_formats.htm'\)) and the character format of the data themselves. Except for the XOP reader, readers support all [formats](javascript:call_link\('abenabap_sxml_lib_formats.htm'\)) except XOP. The XOP reader supports the XOP format only. Instructions on standardization and handling empty space can be passed to the factory method if the format is suitable.

The methods of the interface IF\_SXML\_READER enable serial parsing of the passed XML data. There are two basic ways to do this:

-   [Token-based parsing](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\))
-   [Object-based parsing](javascript:call_link\('abenabap_sxml_lib_parse_oo.htm'\))

A reader cannot be used more than once for the same XML data or for other XML data. The read position of a reader is controlled during parsing using its methods. The actions allowed by a reader depend on its current read position. For example, a reader located at the end of the parsed XML data can no longer be used as an XML source of the statement CALL TRANSFORMATION. No method exists that can restore the reader to its initial state. A new reader can be created instead.

Hints

-   An XML reader in sXML Library can be specified as an XML source of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)). This enables transformations to be performed for all sources supported by sXML readers in all supported [formats](javascript:call_link\('abenabap_sxml_lib_formats.htm'\)). In particular, this makes it possible for [JSON data](javascript:call_link\('abenabap_json.htm'\)) to also be consumed directly in ABAP data objects.
-   The method SKIP\_NODE, which can be used in both token-based and object-oriented parsing, offers various simple ways of checking the validity of a subtree or the entire tree or of copying a tree to a writer, whereby the format can be changed.
-   If the content of elements or attributes contain the notations &lt;, &gt;, &amp;, &quot;, or &apos;, they are transformed automatically to the corresponding [characters](javascript:call_link\('abenxml_oview.htm'\)) when parsed.
-   The parser of the sXML Library is a more strict validator than the parser of the [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)). A namespace prefix must be declared in the same element or in a superelement. Preceding declarations in a parallel element are interpreted as errors.

Executable Example

[Deserialization with XML Reader](javascript:call_link\('abensxml_trafo_from_reader_abexa.htm'\))

Continue
[sXML - Token-Based Parsing](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\))
[sXML - Object-Oriented Parsing](javascript:call_link\('abenabap_sxml_lib_parse_oo.htm'\))