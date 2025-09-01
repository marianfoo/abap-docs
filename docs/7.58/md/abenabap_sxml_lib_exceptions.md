  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML - Classes and Interfaces](javascript:call_link\('abenabap_sxml_lib_object_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Exception%20Classes%2C%20ABENABAP_SXML_LIB_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sXML - Exception Classes

The exception classes in the sXML library usually start with the prefix CX\_SXML. The exceptions of category CX\_DYNAMIC\_CHECK are propagated to the caller and must be handled by the user. The subclass CX\_SXML\_INTERNAL\_ERROR of CX\_NO\_CHECK represents internal errors in the library and cannot usually be handled properly in an application program.

CX\_ROOT
  |
  |--CX\_DYNAMIC\_CHECK
  |    |
  |    |--CX\_ABAP\_XML\_NAME\_ERROR
  |    |
  |    |--CX\_SXML\_ERROR
  |         |
  |         |--CX\_SXML\_ILLEGAL\_ARGUMENT\_ERROR
  |         |
  |         |--CX\_SXML\_NAME\_ERROR
  |         |
  |         |--CX\_SXML\_PARSE\_ERROR
  |         |
  |         |--CX\_SXML\_STATE\_ERROR
  |
  |--CX\_NO\_CHECK
       |
       |--CX\_SXML\_INTERNAL\_ERROR