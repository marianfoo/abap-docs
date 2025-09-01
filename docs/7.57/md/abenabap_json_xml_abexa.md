  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: JSON - Object Components in JSON-XML, ABENABAP_JSON_XML_ABEXA, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

JSON - Object Components in JSON-XML

This example demonstrates the two alternatives for object components in [JSON-XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_xml.htm).

Source Code   

REPORT demo\_json\_xml\_object\_members.
CLASS json\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS json\_demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Render' ).
    "JSON-XML without and with members
    FINAL(json\_xml) =
      \`<object>\` &&
      \`<str name="text">abcd</str>\` &&
      \`<bool name="flag">true</bool>\` &&
      \`<member name="number">\` &&
      \`<num>111</num>\` &&
      \`</member>\` &&
      \`<member name="content">\` &&
      \`<null />\` &&
      \`</member>\` &&
      \`</object>\`.
    out->begin\_section(
        'JSON-XML without and with member elements'
      )->write\_xml( json\_xml ).
    "Render JSON data
    out->next\_section( 'JSON' ).
    FINAL(reader) = cl\_sxml\_string\_reader=>create(
      input = cl\_abap\_conv\_codepage=>create\_out(
                )->convert( json\_xml ) ).
    FINAL(json\_writer) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ) .
    TRY.
        reader->next\_node( ).
        reader->skip\_node( json\_writer ).
      CATCH cx\_sxml\_parse\_error INTO FINAL(error).
        out->write\_text( error->get\_text( ) ).
    ENDTRY.
    FINAL(json) = json\_writer->get\_output( ).
    out->write\_json( json
      )->end\_section(
      )->next\_section( 'Parse' ).
    "Parse JSON data without setting the member option
    out->begin\_section( 'JSON-XML without member elements' ).
    FINAL(reader1) = cl\_sxml\_string\_reader=>create( input = json ).
    FINAL(xml\_writer1) = cl\_sxml\_string\_writer=>create( ).
    TRY.
        reader1->next\_node( ).
        reader1->skip\_node( xml\_writer1 ).
      CATCH cx\_sxml\_parse\_error INTO FINAL(error1).
        out->write\_text( error1->get\_text( ) ).
    ENDTRY.
    out->write\_xml( xml\_writer1->get\_output( ) ).
    "Parse JSON data with setting the member option
    out->next\_section( 'JSON-XML with member elements' ).
    FINAL(reader2) = cl\_sxml\_string\_reader=>create( input = json ).
    reader2->set\_option( if\_sxml\_reader=>co\_opt\_sep\_member ).
    FINAL(xml\_writer2) = cl\_sxml\_string\_writer=>create( ).
    TRY.
        reader2->next\_node( ).
        reader2->skip\_node( xml\_writer2 ).
      CATCH cx\_sxml\_parse\_error INTO FINAL(error2).
        out->write\_text( error2->get\_text( ) ).
    ENDTRY.
    out->write\_xml( xml\_writer2->get\_output( )
      )->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  json\_demo=>main( ).

Description   

The string json\_xml is filled with XML data in valid [JSON-XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_xml_glosry.htm "Glossary Entry") and displayed. The element <object> contains elements that embody JSON object components directly and <member> elements that wrap these components.

A [JSON reader](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_reader_glosry.htm "Glossary Entry") parses the string json\_xml by calling the method SKIP\_NODE in a single action and passes the XML data to a [JSON writer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_writer_glosry.htm "Glossary Entry") created with the type IF\_SXML=>CO\_XT\_JSON. The output of this writer is passed to the string json, which then contains valid JSON data. The writer has implemented both kinds of the object components with the same result.

The string json is parsed with two further XML readers. The first parses with standard setting and the setting applies the option IF\_SXML\_READER=>CO\_OPT\_SEP\_MEMBER. In the JSON-XML result of the first reader, no object component has a <member> element; in the JSON-XML results of the second reader, every object component is represented with a <member> element.