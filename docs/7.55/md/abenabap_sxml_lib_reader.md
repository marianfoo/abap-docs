  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib.htm) →  [sXML - Classes and Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_object_types.htm) →  [sXML - XML Reader and XML Writer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_reader_writer.htm) → 

sXML - XML Reader

The interfaces and classes of sXML library for the [XML reader](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sxml_lib_parse.htm) are:

IF\_SXML   IF\_SXML\_NSURI\_HELPER
  |         |
  |---------|
  |
  |--IF\_SXML\_READER
       |
       |--CL\_SXML\_READER
            |
            |--CL\_SXML\_STRING\_READER
            |
            |--CL\_SXML\_TABLE\_READER
            |
            |--CL\_SXML\_DATASET\_READER
            |
            |--CL\_SXML\_HTTP\_READER
            |
            |--CL\_SXML\_XOP\_READER

The interface IF\_SXML\_READER contains the components that are required for every XML reader. The abstract class CL\_SXML\_READER implements all the general methods of an XML reader. The subclasses of these classes are specializations for different sources of XML data and provide a factory method for creating the associated XML reader.

The higher-level interfaces contain components for XML reader and XML writer:

-   IF\_SXML contains constants for the supported XML format.

-   IF\_SXML\_NSURI\_HELPER contains methods for namespaces.