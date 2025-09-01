  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) → 

ABAP and XML

This section explains how [XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxml_glosry.htm "Glossary Entry") data can be created and read in ABAP. The main topics are

-   processing and creating XML data using parsers and renderers created and used using the APIs found in class libraries,

-   the direct transformation of ABAP data to JSON format (known as serialization) and reads of data in JSON format to ABAP data objects (known as deserialization) using transformations located as programs in the repository.

ABAP provides the following technologies for handling [XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxml_oview.htm):

-   [Class libraries for XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm)

-   [Transformations for XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm)

Class libraries enable the parsing and rendering of general XML data; transformations, on the other hand, are used mostly to serialize ABAP data to XML and deserialize XML data to ABAP. The technologies are linked in such a way that objects in class libraries can be used as the source and target of transformations.

Hints

-   In this documentation, XML data generally indicates a character string or byte string whose value is in XML format and which can appear in various forms, such as strings or internal tables. The term "XML document" generally indicates the representation of XML data in [DOM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendom_glosry.htm "Glossary Entry") format.

-   When XML data is saved in strings or internal tables, it is best to use byte strings or byte-like line types and the UTF-8 code page for the representation. [sXML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib.htm) Library supports byte-like data only. [iXML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib.htm) Library and the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transformation.htm) support text strings and internal tables with character-like data types too.

-   When saving to formats other than UTF-8, it should be noted that the XML data must be prefixed with a byte order (BOM), in accordance with the XML standard. This applies specifically when saving character-like data in the character representation [UCS-2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language. As a result it might happen, that XML data that was written as character-like data in a Unicode system cannot be handled directly as such in a non-Unicode system.

Continue
[XML - Quick Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxml_oview.htm)
[XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm)
[XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm)