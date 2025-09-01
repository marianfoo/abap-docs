  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20asJSON%20for%20Elementary%20Object%20Types%2C%20ABENABAP_JSON_ASJSON_ELEM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

JSON - asJSON for Elementary Object Types

This example demonstrates [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_abap_types_elem.htm) for all elementary ABAP types.

Source Code   

\* Public class definition
CLASS cl\_demo\_asjson\_elmntry\_types DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asjson\_elmntry\_types IMPLEMENTATION.
  METHOD main.
    DATA:
      i          TYPE i            VALUE -123,
      int8       TYPE int8         VALUE -123,
      p          TYPE p DECIMALS 2 VALUE \`-1.23\`,
      decfloat16 TYPE decfloat16   VALUE \`123E+1\`,
      decfloat34 TYPE decfloat34   VALUE \`-3.140000E+02\`,
      f          TYPE f            VALUE \`-3.140000E+02\`,
      c          TYPE c LENGTH 3   VALUE \` Hi\`,
      string     TYPE string       VALUE \` Hello \`,
      n          TYPE n LENGTH 6   VALUE \`001234\`,
      x          TYPE x LENGTH 3   VALUE \`ABCDEF\`,
      xstring    TYPE xstring      VALUE \`456789AB\`,
      d          TYPE d            VALUE \`20020204\`,
      t          TYPE t            VALUE \`201501\`,
      utclong    TYPE utclong      VALUE \`2002-02-04T20:15:01,1234567\`.
    "Transformation to JSON
    out->begin\_section( 'asJSON'  ).
    FINAL(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    DATA stab TYPE abap\_trans\_srcbind\_tab.
    stab = VALUE #(
      ( name = 'I'          value = REF #( i ) )
      ( name = 'INT8'       value = REF #( int8 ) )
      ( name = 'P'          value = REF #( p ) )
      ( name = 'DECFLOAT16' value = REF #( decfloat16 ) )
      ( name = 'DECFLOAT34' value = REF #( decfloat34 ) )
      ( name = 'F'          value = REF #( f ) )
      ( name = 'C'          value = REF #( c ) )
      ( name = 'STRING'     value = REF #( string ) )
      ( name = 'N'          value = REF #( n ) )
      ( name = 'X'          value = REF #( x ) )
      ( name = 'XSTRING'    value = REF #( xstring ) )
      ( name = 'D'          value = REF #( d ) )
      ( name = 'T'          value = REF #( t ) )
      ( name = 'UTCLONG'    value = REF #( utclong ) ) ) .
    CALL TRANSFORMATION id SOURCE (stab)
                           RESULT  XML writer.
    FINAL(json) = writer->get\_output( ).
    out->write\_json( json ).
    "JSON-XML
    out->next\_section( 'asJSON-XML' ).
    FINAL(reader) = cl\_sxml\_string\_reader=>create( json ).
    FINAL(xml\_writer) = cl\_sxml\_string\_writer=>create( ).
    reader->next\_node( ).
    reader->skip\_node( xml\_writer ).
    DATA(xml) = xml\_writer->get\_output( ).
    out->write\_xml( xml ).
    "asXML
    out->next\_section( 'asXML' ).
    CALL TRANSFORMATION id SOURCE (stab)
                           RESULT  XML xml.
    out->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

The [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, for which a [JSON writer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_writer_glosry.htm "Glossary Entry") is specified as the XML target, is called to create the [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasjson_glosry.htm "Glossary Entry") representation of all elementary ABAP types.

For comparison, the [JSON-XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation of the JSON data and the [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the ABAP data is also shown.