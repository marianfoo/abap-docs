  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML - Classes and Interfaces](javascript:call_link\('abenabap_sxml_lib_object_types.htm'\)) →  [sXML - Entities of XML Data](javascript:call_link\('abenabap_sxml_lib_entities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Named%20Entities%2C%20ABENABAP_SXML_LIB_ELEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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