  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) → 

ABAP and XML

This section describes how [XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxml_glosry.htm "Glossary Entry") data can be created and read in ABAP. The main topics are

-   processing and creating XML data using parsers and renderers that are created and used using the APIs of class libraries,
-   the direct transformation of ABAP data to XML format (serialization) and reads of data in XML format to ABAP data objects (deserialization) using transformations that exist as programs in the repository.

ABAP provides the following technologies for handling [XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxml_oview.htm):

-   [Class libraries for XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm)
-   [Transformations for XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm)

Class libraries enable the parsing and rendering of general XML data, while transformations are used mostly to serialize ABAP data to XML and deserialize XML data to ABAP. The technologies are linked by the fact that objects of the class libraries can serve as the source and target of transformations.

Hints

-   In this documentation, the term XML data generally indicates a character string or byte string whose value is in XML format and which can occur in various forms, such as strings or internal tables. The term XML document generally indicates the representation of XML data in [DOM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendom_glosry.htm "Glossary Entry") format.
-   When XML data is stored in strings or internal tables, it is best to use byte strings or byte-like line types and the UTF-8 code page for the representation. The [sXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sxml_lib.htm) Library supports byte-like storage only. The [iXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib.htm) Library and the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation.htm) also support text strings and internal tables with character-like data types.
-   When storing in formats other than UTF-8, it should be noted that the XML data must be prefixed with a byte order (BOM), in accordance with the XML standard. This applies specifically to storing character-like data in the character representation [UCS-2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language. This can mean that XML data that was written as character-like data in a Unicode system cannot be handled directly as such in a non-Unicode system.

Continue
[XML - Quick Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxml_oview.htm)
[XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm)
[XML - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm)