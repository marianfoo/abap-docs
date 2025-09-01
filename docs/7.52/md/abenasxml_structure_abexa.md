---
title: "Source Code"
description: |
  REPORT demo_asxml_structure. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: BEGIN OF struct, num  TYPE i VALUE 20, dat  TYPE d VALUE '20060627', END OF struct, xmlstr TYPE xstring. CALL TRANSFORMATION id SOURCE structure = struct
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_structure_abexa.htm"
abapFile: "abenasxml_structure_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "abenasxml", "structure", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) →  [asXML, Examples of Mappings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_abexas.htm) → 

asXML, Mapping of Structures

The example demonstrates the mapping of structures.

Source Code

REPORT demo\_asxml\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF struct,
            num  TYPE i VALUE 20,
            dat  TYPE d VALUE '20060627',
          END OF struct,
          xmlstr TYPE xstring.
    CALL TRANSFORMATION id
                        SOURCE structure = struct
                        RESULT XML xmlstr.
    cl\_demo\_output=>display\_xml( xmlstr ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The struct structure is displayed as a superordinate XML element for its components.