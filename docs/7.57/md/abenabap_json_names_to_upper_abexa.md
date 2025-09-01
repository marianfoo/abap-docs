---
title: "JSON - Transforming Names"
description: |
  Transforms the names of JSON objects to uppercase letters. Source Code REPORT demo_json_names_to_upper. CLASS json_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-METHODS: json_names_to_upper_pr IMPORTING in         TYPE xstring RETURNING VALUE(out) TYPE xstring,
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_names_to_upper_abexa.htm"
abapFile: "abenabap_json_names_to_upper_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "abenabap", "json", "names", "upper", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: JSON - Transforming Names, ABENABAP_JSON_NAMES_TO_UPPER_ABEXA, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

JSON - Transforming Names

Transforms the names of JSON objects to uppercase letters.

Source Code   

REPORT demo\_json\_names\_to\_upper.
CLASS json\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS:
      json\_names\_to\_upper\_pr
        IMPORTING in         TYPE xstring
        RETURNING VALUE(out) TYPE xstring,
      json\_names\_to\_upper\_tr
        IMPORTING in         TYPE xstring
        RETURNING VALUE(out) TYPE xstring.
ENDCLASS.
CLASS json\_demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    DATA: BEGIN OF struc,
            col1 TYPE i,
            col2 TYPE i,
          END OF struc.
    FINAL(json) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
                   \`{"struc":{"col1":1,"col2":2}}\` ).
    out->begin\_section( 'Original JSON'
      )->write\_json( json ).
    CALL TRANSFORMATION id SOURCE XML json RESULT struc = struc.
    out->next\_section( 'Deserialized JSON'
      )->write( struc ).
    FINAL(asjson) = json\_names\_to\_upper\_pr( json ).
    ASSERT asjson = json\_names\_to\_upper\_tr( json ).
    out->begin\_section( 'Modified JSON'
      )->write\_json( asjson ).
    CALL TRANSFORMATION id SOURCE XML asjson RESULT struc = struc.
    out->next\_section( 'Deserialized JSON'
      )->write( struc ).
    out->display( ).
  ENDMETHOD.
  METHOD json\_names\_to\_upper\_pr.
    FINAL(reader) = cl\_sxml\_string\_reader=>create( in ).
    FINAL(writer) = CAST if\_sxml\_writer(
      cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ) ).
    DO.
      FINAL(node) = reader->read\_next\_node( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      IF node->type = if\_sxml\_node=>co\_nt\_element\_open.
        FINAL(attributes)  = CAST if\_sxml\_open\_element(
                                   node )->get\_attributes( ).
        LOOP AT attributes ASSIGNING FIELD-SYMBOL(<attribute>).
          IF <attribute>->qname-name = 'name'.
            <attribute>->set\_value(
              to\_upper( <attribute>->get\_value( ) ) ).
          ENDIF.
        ENDLOOP.
      ENDIF.
      writer->write\_node( node ).
    ENDDO.
    out = CAST cl\_sxml\_string\_writer( writer )->get\_output( ) .
  ENDMETHOD.
  METHOD json\_names\_to\_upper\_tr.
    FINAL(writer) =
      cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION demo\_json\_xml\_to\_upper
                        SOURCE XML in
                        RESULT XML writer.
    out = writer->get\_output( ) .
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  json\_demo=>main( ).

Description   

This example demonstrates how the names of [JSON data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_oview.htm) objects can be transformed to uppercase letters, so that they can be bound to the corresponding ABAP data in deserializations using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_shortref.htm) for example. Two transformation methods are demonstrated:

-   Parsing and rendering in the method json\_names\_to\_upper\_pr
    -   This transforms the JSON data to [JSON-XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_xml_glosry.htm "Glossary Entry").
    -   The result is parsed using an [XML reader](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxml_reader_glosry.htm "Glossary Entry").
    -   The attributes with the name name are transformed to uppercase letters as in the executable example [Modifying XML Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensxml_reader_writer_abexa.htm).
    -   The result is rendered back to JSON using a [JSON writer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_writer_glosry.htm "Glossary Entry").
-   Calling a transformation in the method json\_names\_to\_upper\_tr
    -   The XSL transformation DEMO\_JSON\_XML\_TO\_UPPER, written for this purpose, is used to transform the object names in [JSON-XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_xml_glosry.htm "Glossary Entry") to uppercase letters and places the result in a [JSON writer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_writer_glosry.htm "Glossary Entry").
    -   The modified JSON data is read from the writer.

The statement ASSERT guarantees that the results of both transformations are the same. After the transformation, the data is deserialized successfully to the ABAP structure. The method used in practice depends on performance and the volume of data expected.

The XSL transformation used DEMO\_JSON\_XML\_TO\_UPPER is as follows:

<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
               xmlns:sap="http://www.sap.com/sapxsl" version="1.0">
  <xsl:template match="@\* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@\* | node()"/>
    </xsl:copy>
  </xsl:template>
  <xsl:template match="@\*">
    <xsl:attribute name="name">
      <xsl:value-of select="sap:upper-case(.)"/>
    </xsl:attribute>
  </xsl:template>
</xsl:transform>