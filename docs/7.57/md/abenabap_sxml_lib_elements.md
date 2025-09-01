  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML - Classes and Interfaces](javascript:call_link\('abenabap_sxml_lib_object_types.htm'\)) →  [sXML - Entities of XML Data](javascript:call_link\('abenabap_sxml_lib_entities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sXML - Named Entities, ABENABAP_SXML_LIB_ELEMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

sXML - Named Entities

The classes and interfaces in sXML Library used for object-oriented access to elements and attributes are:

IF\_SXML\_NAMED
  |
  |  IF\_SXML\_NODE
  |    |
  |----|--IF\_SXML\_OPEN\_ELEMENT\---|
  |                              |
  |-------CL\_SXML\_NAMED\----------|
  |                              |
  |                              |-- CL\_SXML\_OPEN\_ELEMENT
  |
  |  IF\_SXML\_VALUE
  |    |
  |----|--IF\_SXML\_ATTRIBUTE\------|
  |                              |
  |-------CL\_SXML\_NAMED\----------|
  |                              |
  |                              |-- CL\_SXML\_ATTRIBUTE
  |
  |  IF\_SXML\_NODE
  |    |
  |----|--IF\_SXML\_CLOSE\_ELEMENT\--|
  |                              |
  |-------CL\_SXML\_NAMED\----------|
                                 |
                                 |-- CL\_SXML\_CLOSE\_ELEMENT