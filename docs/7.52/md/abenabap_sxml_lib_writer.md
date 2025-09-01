  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm) →  [sXML Library - Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_object_types.htm) →  [six Library - ML-Reader and ML Writer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_reader_writer.htm) → 

sXML Library - XML Writer

The interfaces and classes of sXML library for the[XML writer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_render.htm) are:

IF\_SXML   IF\_SXML\_NSURI\_HELPER
  |         |
  |---------|
  |
  |--IF\_SXML\_WRITER
       |
       |--CL\_SXML\_WRITER
            |
            |-------CL\_SXML\_STRING\_WRITER
            |
            |-------CL\_SXML\_TABLE\_WRITER
            |
            |-------CL\_SXML\_DATASET\_WRITER
            |
            |-------CL\_SXML\_HTTP\_WRITER
            |
            |  IF\_SXML\_XOP
            |    |
            |----|--CL\_SXML\_XOP\_WRITER

The interface IF\_SXML\_WRITER contains the components that are required for every XML writer. The abstract class CL\_SXML\_WRITER implements all the general methods of an XML writer. The subclasses of these classes are specializations for different storage locations of XML data and provide a factory method for generating the associated XML writer.

The higher-level interfaces contain components for XML reader and XML writer:

-   IF\_SXML contains constants for the supported XML format.

-   IF\_SXML\_NSURI\_HELPER contains methods for namespaces.