  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm) →  [sXML Library - Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_object_types.htm) →  [sXML Library - Entities of XML Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_entities.htm) → 

sXML Library - Named Entities

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