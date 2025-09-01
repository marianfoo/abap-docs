  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) →  [CALL TRANSFORMATION - Examples](javascript:call_link\('abencall_transformation_abexas.htm'\)) → 

Deserializing Empty Elements

This example demonstrates the deserialization of empty elements.

Source Code

REPORT demo\_asxml\_asjson\_empty\_vals.
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
    REPLACE \`<ELEM>111</ELEM>\` IN xml WITH \`<ELEM />\`.
    REPLACE \`<STRUC><COL>111</COL></STRUC>\` IN xml WITH \`<STRUC />\`.
    REPLACE \`<ITAB><item>111</item></ITAB>\` IN xml WITH \`<ITAB />\`.
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
    DATA(json) = cl\_abap\_codepage=>convert\_from(
                   writer->get\_output( ) ).
    out->write\_json( json ).
    out->next\_section( \`Modified asJSON\` ).
    REPLACE \`"ELEM":111\` IN json WITH \`"ELEM":0\`.
    REPLACE \`"COL":111\` IN json WITH \`\`.
    REPLACE \`111\` IN json WITH \`\`.
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

An elementary data object, a structure and an internal table are transformed using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID into [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") display formats. With asXML display format, the values of all elements are removed. With asJSON display format, only the components from objects and arrays can be removed.

After deserialization into the original ABAP data objects, the elementary data object and the internal table are initial. However, the empty element in the structure is interpreted as a missing component and the structure component retains its previous value. If the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) is used with the value "all", all ABAP data objects are initialized.

Note

The modification of XML and JSON data using string processing is only shown here to make the example clearer. In production programs, the APIs of [class libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) should be used.