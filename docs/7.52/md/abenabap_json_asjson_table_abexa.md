---
title: "JSON, asJSON for Internal Tables"
description: |
  This example demonstrates asJSON(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_abap_types_table.htm) for internal tables. Source Code REPORT demo_asjson_tables. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD mai
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_asjson_table_abexa.htm"
abapFile: "abenabap_json_asjson_table_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abenabap", "json", "asjson", "table", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json.htm) →  [JSON, Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_abexas.htm) → 

JSON, asJSON for Internal Tables

This example demonstrates [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_abap_types_table.htm) for internal tables.

Source Code

REPORT demo\_asjson\_tables.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF struct,
             day  TYPE string,
             date TYPE d,
           END OF struct.
    DATA itab TYPE STANDARD TABLE OF struct.
    itab = VALUE #( ( day = 'Yesterday' date = sy-datlo - 1 )
                    ( day = 'Today'     date = sy-datlo )
                    ( day = 'Tomorrow'  date = sy-datlo + 1 )
                    ).
    "Transformation to JSON
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'asJSON' ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE itab = itab
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
    CALL TRANSFORMATION id SOURCE itab = itab
                           RESULT XML xml.
    out->write\_xml( xml )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID (for which a [JSON writer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_writer_glosry.htm "Glossary Entry") is specified as the XML target) is called to create and display the [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasjson_glosry.htm "Glossary Entry") format of an internal table.

As a comparison, the [JSON-XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation of the JSON data and the [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the ABAP data is also shown.