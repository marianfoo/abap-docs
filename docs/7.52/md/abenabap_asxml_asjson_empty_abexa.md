  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) →  [asXML, Examples of Mappings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_abexas.htm) → 

asXML, Deserialization of Structure Components

This example demonstrates the deserialization of empty and missing structure components.

Source Code

REPORT demo\_asxml\_asjson\_strct\_comps.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`ABAP Structure\` ).
    CONSTANTS:
      BEGIN OF struct,
        text0 TYPE string VALUE \`\`,
        text1 TYPE string VALUE \`Text1\`,
        text2 TYPE string VALUE \`Text2\`,
        text3 TYPE string VALUE \`Text3\`,
        number0 TYPE i VALUE 0,
        number1 TYPE i VALUE 111,
        number2 TYPE i VALUE 222,
        number3 TYPE i VALUE 333,
     END OF struct.
    DATA(examples) = struct.
    out->write\_data( examples ).
    out->next\_section( \`Structure serialized to asXML\` ).
    DATA xml TYPE string.
    CALL TRANSFORMATION id SOURCE examples = examples
                           RESULT XML xml.
    out->write\_xml( xml ).
    out->next\_section( \`Structure serialized to asJSON\` ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
                     type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE examples = examples
                           RESULT XML writer.
    DATA(json) = cl\_abap\_codepage=>convert\_from(
                   writer->get\_output( ) ).
    out->write\_json( json ).
    out->next\_section( \`Modified asXML\` ).
    REPLACE \`<TEXT2>Text2</TEXT2>\` IN xml WITH \`<TEXT2 />\`.
    REPLACE \`<TEXT3>Text3</TEXT3>\` IN xml WITH \`\`.
    REPLACE \`<NUMBER2>222</NUMBER2>\` IN xml WITH \`<NUMBER2 />\`.
    REPLACE \`<NUMBER3>333</NUMBER3>\` IN xml WITH \`\`.
    out->write\_xml( xml ).
    out->next\_section(
      \`ABAP Structure after Deserialization of asXML\` ).
    examples = struct.
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT examples = examples.
    out->write\_data( examples ).
    out->next\_section( \`Modified asJSON\` ).
    REPLACE \`"TEXT2":"Text2",\` IN json WITH \`"TEXT2":""\`.
    REPLACE \`"TEXT3":"Text3"\` IN json WITH \`\`.
    REPLACE \`"NUMBER2":222,\` IN json WITH \`"NUMBER2":0\`.
    REPLACE \`"NUMBER3":333\` IN json WITH \`\`.
    out->write\_json( json ).
    out->next\_section(
      \`ABAP Structure after Deserialization of asJSON\` ).
    examples = struct.
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT examples = examples.
    out->write\_data( examples
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A structure is transformed using the [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID into [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasjson_glosry.htm "Glossary Entry") display formats. With asXML display format, the values of two elements and two complete elements are removed. With JSON, values cannot be removed. With asJSON display format, the values of two object components and two object components are removed.

After deserialization into the original ABAP structure, the components with empty XML elements assigned to them are initial. Components, for which no XML elements or no JSON object components exist, retain their previous value.