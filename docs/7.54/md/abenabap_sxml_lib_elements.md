---
title: "abap_sxml_lib_elements"
description: |
  abap_sxml_lib_elements - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_elements.htm"
abapFile: "abenabap_sxml_lib_elements.htm"
keywords: ["do", "if", "class", "data", "types", "abenabap", "sxml", "lib", "elements"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib.htm) →  [sXML Library - Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_object_types.htm) →  [sXML Library - Entities of XML Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_entities.htm) → 

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