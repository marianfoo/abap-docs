  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) → 

ABAP and XML

This section explains how [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") data can be created and read in ABAP. The main topics are

-   processing and creating XML data using parsers and renderers created and used using the APIs found in class libraries,

-   the direct transformation of ABAP data to JSON format (known as serialization) and reads of data in JSON format to ABAP data objects (known as deserialization) using transformations located as programs in the repository.

ABAP provides the following technologies for handling [XML](javascript:call_link\('abenxml_oview.htm'\)):

-   [Class libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\))

-   [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\))

Class libraries enable the parsing and rendering of general XML data; transformations, on the other hand, are used mostly to serialize ABAP data to XML and deserialize XML data to ABAP. The technologies are linked in such a way that objects in class libraries can be used as the source and target of transformations.

Notes

-   In this documentation, XML data generally indicates a character string or byte string whose value is in XML format and which can appear in various forms, such as strings or internal tables. The term "XML document" generally indicates the representation of XML data in [DOM](javascript:call_link\('abendom_glosry.htm'\) "Glossary Entry") format.

-   When XML data is saved in strings or internal tables, it is best to use byte strings or byte-like row types and the UTF-8 code page for the representation. [sXML](javascript:call_link\('abenabap_sxml_lib.htm'\)) Library supports byte-like data only. [iXML](javascript:call_link\('abenabap_ixml_lib.htm'\)) Library and the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) support text strings and internal tables with character-like data types too.

-   When saving to formats other than UTF-8, it should be noted that the XML data must be prefixed with a byte order (BOM), in accordance with the XML standard. This applies specifically when saving character-like data in the character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") used by the ABAP programming language. This can render XML data written as character-like data in [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") as non-handleable in non-Unicode systems.

Continue
[XML - Short Overview](javascript:call_link\('abenxml_oview.htm'\))
[Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\))
[Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\))