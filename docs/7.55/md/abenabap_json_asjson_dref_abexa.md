---
title: "JSON - asJSON for Anonymous Data Objects"
description: |
  Source Code REPORT demo_asjson_dref. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA dref TYPE REF TO decfloat34. dref = NEW #( '1.23456' ). 'Transformation to JSON DATA(out) = cl_demo_output=>new( )->begin_section( 'asJSON' ). D
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_json_asjson_dref_abexa.htm"
abapFile: "abenabap_json_asjson_dref_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenabap", "json", "asjson", "dref", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_json_abexas.htm) → 

JSON - asJSON for Anonymous Data Objects

Source Code

REPORT demo\_asjson\_dref.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO decfloat34.
    dref = NEW #( '1.23456' ).
    "Transformation to JSON
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'asJSON' ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML writer.
    DATA(json) = writer->get\_output( ).
    out->write\_json( json ).
    "JSON-XML
    out->next\_section( 'asJSON-XML' ).
    DATA(reader) = cl\_sxml\_string\_reader=>create( json ).
    DATA(xml\_writer) = cl\_sxml\_string\_writer=>create( ).
    reader->next\_node( ).
    reader->skip\_node( xml\_writer ).
    DATA(xml) = xml\_writer->get\_output( ).
    out->write\_xml( xml ).
    "asXML
    out->next\_section( 'asXML' ).
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML xml.
    out->write\_xml( xml )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, for which a [JSON writer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_writer_glosry.htm "Glossary Entry") is specified as the XML target, is called to create the [asJSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasjson_glosry.htm "Glossary Entry") representation of a reference variable that points to an anonymous data object.

As a comparison, the [JSON-XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation of the JSON data and the [asXML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the ABAP data is also shown.