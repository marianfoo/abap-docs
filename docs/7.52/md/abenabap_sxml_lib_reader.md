  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML Library - Classes and Interfaces](javascript:call_link\('abenabap_sxml_lib_object_types.htm'\)) →  [six Library - ML-Reader and ML Writer](javascript:call_link\('abenabap_sxml_lib_reader_writer.htm'\)) → 

sXML Library - XML Reader

The interfaces and classes of sXML library for the[XML reader](javascript:call_link\('abenabap_sxml_lib_parse.htm'\)) are:

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

The interface IF\_SXML\_READER contains the components that are required for every XML reader. The abstract class CL\_SXML\_READER implements all the general methods of an XML reader. The subclasses of these classes are specializations for different sources of XML data and provide a factory method for generating the associated XML reader.

The higher-level interfaces contain components for XML reader and XML writer:

-   IF\_SXML contains constants for the supported XML format.

-   IF\_SXML\_NSURI\_HELPER contains methods for namespaces.