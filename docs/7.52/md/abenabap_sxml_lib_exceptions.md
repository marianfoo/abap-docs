  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm) →  [sXML Library - Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_object_types.htm) → 

sXML Library - Exception Classes

The exception classes in the sXML library usually start with the prefix CX\_SXML. The exceptions of category CX\_DYNAMIC\_CHECK are propagated to the caller and must be handled by the user. The subclass CX\_SXML\_INTERNAL\_ERROR of CX\_NO\_CHECK displays internal errors in the library and cannot usually be handled properly in an application program.

CX\_ROOT
  |
  |--CX\_DYNAMIC\_CHECK
  |    |
  |    |--CX\_ABAP\_XML\_NAME\_ERROR
  |    |
  |    |--CX\_SXML\_ERROR
  |         |
  |         |--CX\_SXML\_ILLEGAL\_ARGUMENT\_ERROR
  |         |
  |         |--CX\_SXML\_NAME\_ERROR
  |         |
  |         |--CX\_SXML\_PARSE\_ERROR
  |         |
  |         |--CX\_SXML\_STATE\_ERROR
  |
  |--CX\_NO\_CHECK
       |
       |--CX\_SXML\_INTERNAL\_ERROR