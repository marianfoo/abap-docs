---
title: "Source Code"
description: |
  CCDEF CLASS serializable DEFINITION. PUBLIC SECTION. ENDCLASS.  Public class definition CLASS cl_demo_asxml_data_object DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_asx
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_data_object_abexa.htm"
abapFile: "abenasxml_data_object_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "types", "abenasxml", "object", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml.htm) →  [asXML - Examples of Mappings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20Anonymous%20Data%20Objects%2C%20ABENASXML_DATA_OBJECT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

asXML - Mapping of Anonymous Data Objects

The example demonstrates the mapping of anonymous data objects.

Source Code   

\* CCDEF
CLASS serializable DEFINITION.
  PUBLIC SECTION.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_asxml\_data\_object DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asxml\_data\_object IMPLEMENTATION.
  METHOD main.
    DATA dref   TYPE REF TO decfloat34.
    DATA xmlstr TYPE xstring.
    CREATE DATA dref.
    dref->\* = '1.23456'.
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML xmlstr.
    out->write\_xml( xmlstr ).
  ENDMETHOD.
ENDCLASS.

Description   

The anonymous data object referenced by dref is mapped to a subelement of the element heap. An XML reference mechanism is used to associate this subelement with the reference variables in the element values. The element name is the XML schema type name precisionDecimal of the built-in ABAP type decfloat34 from the namespace abap="http://www.sap.com/abapxml/types/built-in".