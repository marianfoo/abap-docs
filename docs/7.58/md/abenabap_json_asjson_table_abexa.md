  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20asJSON%20for%20Internal%20Tables%2C%20ABENABAP_JSON_ASJSON_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

JSON - asJSON for Internal Tables

This example demonstrates [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_abap_types_table.htm) for internal tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_asjson\_tables DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asjson\_tables IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF struct,
             day  TYPE string,
             date TYPE d,
           END OF struct.
    DATA itab TYPE STANDARD TABLE OF struct.
    itab = VALUE #(
     ( day = 'Yesterday'
         date = cl\_demo\_date\_time=>get\_user\_date( ) - 1 )
     ( day = 'Today'
         date = cl\_demo\_date\_time=>get\_user\_date( ) )
     ( day = 'Tomorrow'
         date = cl\_demo\_date\_time=>get\_user\_date( ) + 1 ) ).
    "Transformation to JSON
    out->begin\_section( 'asJSON' ).
    FINAL(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE itab = itab
                           RESULT XML writer.
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
    CALL TRANSFORMATION id SOURCE itab = itab
                           RESULT XML xml.
    out->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

The [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, for which a [JSON writer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_writer_glosry.htm "Glossary Entry") is specified as the XML target, is called to create the [asJSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasjson_glosry.htm "Glossary Entry") representation of an internal table.

For comparison, the [JSON-XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation of the JSON data and the [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the ABAP data is also shown.