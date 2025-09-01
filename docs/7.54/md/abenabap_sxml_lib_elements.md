  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML Library - Classes and Interfaces](javascript:call_link\('abenabap_sxml_lib_object_types.htm'\)) →  [sXML Library - Entities of XML Data](javascript:call_link\('abenabap_sxml_lib_entities.htm'\)) → 

sXML Library - Named Components

The classes and interfaces in sXML Library used for object-oriented access to elements and attributes are:

IF\_SXML\_NAMED
  |
  |  IF\_SXML\_NODE
  |    |
  |----|--IF\_SXML\_OPEN\_ELEMENT\---|
  |                              |
  |-------CL\_SXML\_NAMED\----------|
  |                              |
  |                              |-- CL\_SXML\_OPEN\_ELEMENT
  |
  |  IF\_SXML\_VALUE
  |    |
  |----|--IF\_SXML\_ATTRIBUTE\------|
  |                              |
  |-------CL\_SXML\_NAMED\----------|
  |                              |
  |                              |-- CL\_SXML\_ATTRIBUTE
  |
  |  IF\_SXML\_NODE
  |    |
  |----|--IF\_SXML\_CLOSE\_ELEMENT\--|
  |                              |
  |-------CL\_SXML\_NAMED\----------|
                                 |
                                 |-- CL\_SXML\_CLOSE\_ELEMENT