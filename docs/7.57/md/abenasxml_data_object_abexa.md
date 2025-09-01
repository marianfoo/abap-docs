---
title: "Source Code"
description: |
  REPORT demo_asxml_data_object. CLASS serializable DEFINITION. PUBLIC SECTION. ENDCLASS. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA dref   TYPE REF TO decfloat34. DATA xmlstr TYPE xstring. CREATE DATA dref. dref-> = '1.23456'
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_data_object_abexa.htm"
abapFile: "abenasxml_data_object_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "abenasxml", "object", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml.htm) →  [asXML - Examples of Mappings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: asXML - Mapping of Anonymous Data Objects, ABENASXML_DATA_OBJECT_ABEXA, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

asXML - Mapping of Anonymous Data Objects

The example demonstrates the mapping of anonymous data objects.

Source Code   

REPORT demo\_asxml\_data\_object.
CLASS serializable DEFINITION.
  PUBLIC SECTION.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA dref   TYPE REF TO decfloat34.
    DATA xmlstr TYPE xstring.
    CREATE DATA dref.
    dref->\* = '1.23456'.
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML xmlstr.
    cl\_demo\_output=>display\_xml( xmlstr ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The anonymous data object referenced by dref is mapped to a subelement of the element heap. An XML reference mechanism is used to associate this subelement with the reference variables in the element values. The element name is the XML schema type name precisionDecimal of the built-in ABAP type decfloat34 from the namespace abap="http://www.sap.com/abapxml/types/built-in".