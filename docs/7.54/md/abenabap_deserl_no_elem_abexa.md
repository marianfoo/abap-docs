---
title: "Deserializing Missing Elements"
description: |
  This example demonstrates the deserialization of empty elements. Source Code REPORT demo_asxml_asjson_no_vals. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(out) = cl_demo_output=>new( )->begin_section( `asXML` ). DATA elem
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_deserl_no_elem_abexa.htm"
abapFile: "abenabap_deserl_no_elem_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "internal-table", "abenabap", "deserl", "elem", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm) →  [CALL TRANSFORMATION - Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_transformation_abexas.htm) → 

Deserializing Missing Elements

This example demonstrates the deserialization of empty elements.

Source Code

REPORT demo\_asxml\_asjson\_no\_vals.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`asXML\` ).
    DATA elem TYPE i VALUE 111.
    DATA: BEGIN OF struc,
           col TYPE i VALUE 111,
          END OF struc.
    DATA itab TYPE TABLE OF i.
    itab = VALUE #( ( 111 ) ).
    out->begin\_section( \`ABAP Data Objects\`
      )->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab ).
    out->next\_section(
      \`ABAP Data Objects serialized to asXML\` ).
    DATA xml TYPE string.
    CALL TRANSFORMATION id SOURCE elem = elem
                                  struc = struc
                                  itab = itab
                           RESULT XML xml.
    out->write\_xml( xml ).
    out->next\_section( \`Modified asXML\` ).
    REPLACE \`<ELEM>111</ELEM>\` IN xml WITH \`\`.
    REPLACE \`<STRUC><COL>111</COL></STRUC>\` IN xml WITH \`\`.
    REPLACE \`<ITAB><item>111</item></ITAB>\` IN xml WITH \`\`.
    out->write\_xml( xml ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization of asXML\` ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab
      )->end\_section( ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization with Clearing\` ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab
                          OPTIONS clear = 'all'.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab
      )->end\_section( ).
    out->next\_section( \`asJSON\` ).
    elem = 111.
    struc-col = 111.
    itab = VALUE #( ( 111 ) ).
    out->begin\_section( \`ABAP Data Objects\`
       )->write\_data( elem
       )->write\_data( struc
       )->write\_data( itab ).
    out->next\_section(
      \`ABAP Data Objects serialized to asJSON\` ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
                     type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE elem = elem
                                  struc = struc
                                  itab = itab
                           RESULT XML writer.
    DATA(json) = cl\_abap\_conv\_codepage=>create\_in( )->convert(
                   writer->get\_output( ) ).
    out->write\_json( json ).
    out->next\_section( \`Modified asJSON\` ).
    json = \`{ }\`.
    out->write\_json( json ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization of asJSON\` ).
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization with Clearing\` ).
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab
                          OPTIONS clear = 'all'.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An elementary data object, a structure and an internal table are transformed using the [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID into [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasjson_glosry.htm "Glossary Entry") display formats. With the asXML and asJSON display formats, all elements or object components are removed.

When a standard deserialization into the original ABAP data objects is performed, the objects retain their original values. If the transformation option [clear](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation_options.htm) is used with the value "all", all ABAP data objects are initialized.

Note

The modification of XML and JSON data using string processing is only shown here to make the example clearer. In production programs, the APIs of [class libraries for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_libs.htm) should be used.