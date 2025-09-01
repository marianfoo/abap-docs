  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML Library - Classes and Interfaces](javascript:call_link\('abenabap_sxml_lib_object_types.htm'\)) →  [sXML Library - XML Reader and XML Writer](javascript:call_link\('abenabap_sxml_lib_reader_writer.htm'\)) → 

sXML Library - XML Writer

The interfaces and classes of sXML library for the [XML reader](javascript:call_link\('abenabap_sxml_lib_render.htm'\)) are:

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

The interface IF\_SXML\_WRITER contains the components that are required for every XML writer. The abstract class CL\_SXML\_WRITER implements all the general methods of an XML writer. The subclasses of these classes are specializations for different storage locations of XML data and provide a factory method for creating the associated XML writer.

The higher-level interfaces contain components for XML reader and XML writer:

-   IF\_SXML contains constants for the supported XML format.

-   IF\_SXML\_NSURI\_HELPER contains methods for namespaces.