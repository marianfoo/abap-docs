  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json.htm) →  [JSON, Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_abexas.htm) → 

JSON, asJSON for Additional XML Schema Data Types

This example demonstrates [asJSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_table.htm) for additional [XML Schema Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_schema.htm).

Source Code

REPORT demo\_asjson\_other\_xsd\_types.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF examples,
        BEGIN OF boolean,
          ab\_true   TYPE abap\_bool
                    VALUE abap\_true,
          ab\_false  TYPE abap\_bool
                    VALUE abap\_false,
          xsd\_true  TYPE xsdboolean
                    VALUE abap\_true,
          xsd\_false TYPE xsdboolean
                    VALUE abap\_false,
        END OF boolean,
        BEGIN OF date,
          ab\_date  TYPE d
                   VALUE \`20121001\`,
          xsd\_date TYPE xsddate\_d
                   VALUE \`20121001\`,
        END OF date,
        BEGIN OF datetime,
          ab\_timestamp          TYPE timestamp
                                VALUE \`20120727170334\`,
          ab\_timestampl         TYPE timestampl
                                VALUE \`20120727170334.1234\`,
          xsd\_datetime\_z        TYPE xsddatetime\_z
                                VALUE \`20120727170334\`,
          xsd\_datetime\_long\_z   TYPE xsddatetime\_long\_z
                                VALUE \`20120727170334.1234\`,
          xsd\_datetime\_offset   TYPE xsddatetime\_offset
                                VALUE \`20120727170334+140\`,
          xsd\_datetime\_local    TYPE xsddatetime\_local
                                VALUE \`20120727170334\`,
          xsd\_datetime\_local\_dt TYPE xsddatetime\_local\_dt
                                VALUE \`20120727170334\`,
        END OF datetime,
        BEGIN OF language,
          ab\_language  TYPE sy-langu
                       VALUE \`D\`,
          xsd\_language TYPE xsdlanguage
                       VALUE \`D\`,
        END OF language,
        BEGIN OF uuid,
          ab\_uuid\_raw  TYPE x LENGTH 16
                       VALUE \`005056A207C81ED1BFC6B69E72F50550\`,
          ab\_uuid\_char  TYPE c LENGTH 32
                       VALUE \`005056A207C81ED1BFC6B69E72F50550\`,
          xsd\_uuid\_raw  TYPE xsduuid\_raw
                       VALUE \`005056A207C81ED1BFC6B69E72F50550\`,
          xsd\_uuid\_char TYPE xsduuid\_char
                       VALUE \`005056A207C81ED1BFC6B69E72F50550\`,
        END OF uuid,
      END OF examples.
    "Transformation to JSON
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'asJSON'  ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE examples = examples
                           RESULT  XML writer.
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
    CALL TRANSFORMATION id SOURCE examples = examples
                           RESULT  XML xml.
    out->write\_xml( xml )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A call of the [identity transformation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID (in which a [JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_writer_glosry.htm "Glossary Entry") writer is specified as an XML target) creates and displays the [asJSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasjson_glosry.htm "Glossary Entry") format of a structure. The structure components are typed with normal ABAP types and also typed with special [domains](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml_schema.htm) for XML schema data types.

As a comparison, the [JSON-XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation of the JSON data and the [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the ABAP data is also shown.