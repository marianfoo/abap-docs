  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm) →  [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm) →  [CALL TRANSFORMATION - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transformation_abexas.htm) → 

XML Sources of Transformations

This example demonstrates the possible XML sources of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm).

Source Code

REPORT demo\_call\_trafo\_xml\_sources.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA xml TYPE xstring.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`XML-Sources for CALL TRANSFORMATION\` ).
    "XML 1.0
    out->begin\_section( \`XML 1.0\` ).
    "XML 1.0 in string
    out->begin\_section( \`XML 1.0 in Text String\` ).
    DATA(xml\_str) = \`<text>Hello XML!</text>\`.
    CALL TRANSFORMATION id SOURCE XML xml\_str
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in text table
    out->next\_section( \`XML 1.0 in Table of Text Fields\` ).
    TYPES c10 TYPE c LENGTH 10.
    DATA xml\_tab TYPE STANDARD TABLE OF c10 WITH DEFAULT KEY.
    xml\_tab =
      VALUE #( LET l1 = strlen( xml\_str ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            xml\_str+j(10)
                          ELSE
                            xml\_str+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML xml\_tab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in xstring
    out->next\_section( \`XML 1.0 in Byte String\` ).
    DATA(xml\_xstr) = cl\_abap\_conv\_codepage=>create\_out(
      )->convert( xml\_str ).
    CALL TRANSFORMATION id SOURCE XML xml\_xstr
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in byte table
    out->next\_section( \`XML 1.0 in Table of Byte Fields\` ).
    TYPES x10 TYPE x LENGTH 10.
    DATA xml\_xtab TYPE STANDARD TABLE OF x10 WITH DEFAULT KEY.
    xml\_xtab =
      VALUE #( LET l1 = xstrlen( xml\_xstr ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            xml\_xstr+j(10)
                          ELSE
                            xml\_xstr+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML xml\_xtab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in iXML input stream
    out->next\_section( \`XML 1.0 from Input Stream\` ).
    DATA(ixml) = cl\_ixml=>create( ).
    DATA(istream) = ixml->create\_stream\_factory(
                      )->create\_istream\_xstring( xml\_xstr ).
    CALL TRANSFORMATION id SOURCE XML istream
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in iXML DOM
    out->next\_section( \`XML 1.0 in DOM\` ).
    DATA(dom) = ixml->create\_document( ).
    DATA(parser) = ixml->create\_parser(
                     document = dom
                     stream\_factory = ixml->create\_stream\_factory( )
                     istream = ixml->create\_stream\_factory(
                        )->create\_istream\_xstring( xml\_xstr ) ).
    parser->parse( ).
    CALL TRANSFORMATION id SOURCE XML dom
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in XML-Reader
    out->next\_section( \`XML 1.0 from XML Reader\` ).
    DATA(xml\_reader) = cl\_sxml\_string\_reader=>create( xml\_xstr ).
    CALL TRANSFORMATION id SOURCE XML xml\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->end\_section( ).
    "Binary XML
    out->next\_section( \`Binary XML\` ).
    xml\_reader = cl\_sxml\_string\_reader=>create(
                   cl\_abap\_conv\_codepage=>create\_out( )->convert(
                     \`<text>Hello binary XML!</text>\` ) ).
    DATA(binary\_xml\_writer) =
      cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_binary ).
    xml\_reader->next\_node( ).
    xml\_reader->skip\_node( binary\_xml\_writer ).
    "Binary XML in xstring
    out->begin\_section( \`Binary XML in Byte String\` ).
    DATA(binary\_xml\_xstr) = binary\_xml\_writer->get\_output( ).
    CALL TRANSFORMATION id SOURCE XML binary\_xml\_xstr
                           RESULT XML xml.
    out->write\_xml( xml ).
    "Binary XML in byte table
    out->next\_section( \`Binary XML in Byte Table\` ).
    DATA binary\_xml\_xtab TYPE STANDARD TABLE OF x10 WITH DEFAULT KEY.
    binary\_xml\_xtab =
      VALUE #( LET l1 = xstrlen( binary\_xml\_xstr ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            binary\_xml\_xstr+j(10)
                          ELSE
                            binary\_xml\_xstr+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML binary\_xml\_xtab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "Binary XML in XML-Reader
    out->next\_section( \`Binary XML from XML Reader\` ).
    DATA(binary\_xml\_reader) = cl\_sxml\_string\_reader=>create(
                                binary\_xml\_xstr ).
    CALL TRANSFORMATION id SOURCE XML binary\_xml\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->end\_section( ).
    "XOP
    out->next\_section( \`XOP\` ).
    xml\_reader = cl\_sxml\_string\_reader=>create(
                   cl\_abap\_conv\_codepage=>create\_out( )->convert(
                     \`<text>Hello XOP!</text>\` ) ).
    DATA(xop\_writer) =
      cl\_sxml\_xop\_writer=>create( ).
    xml\_reader->next\_node( ).
    xml\_reader->skip\_node( xop\_writer ).
    DATA(xop\_package) = xop\_writer->get\_output( ).
    "XOP in XML-Reader
    out->begin\_section( \`XOP from XML Reader\` ).
    DATA(xop\_reader) = cl\_sxml\_xop\_reader=>create( xop\_package ).
    CALL TRANSFORMATION id SOURCE XML xop\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->end\_section( ).
    "JSON
    out->next\_section( \`JSON\` ).
    "JSON in string
    out->begin\_section( \`JSON in Text String\` ).
    DATA(json\_str) = \`{"TEXT":"Hello JSON!"}\`.
    CALL TRANSFORMATION id SOURCE XML json\_str
                           RESULT XML xml.
    out->write\_xml( xml ).
    "JSON in text table
    out->next\_section( \`JSON in Table of Text Fields\` ).
    DATA json\_tab TYPE STANDARD TABLE OF c10 WITH DEFAULT KEY.
    json\_tab =
      VALUE #( LET l1 = strlen( json\_str ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            json\_str+j(10)
                          ELSE
                            json\_str+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML json\_tab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "JSON in xstring
    out->next\_section( \`JSON in Byte String\` ).
    DATA(json\_xstr) = cl\_abap\_conv\_codepage=>create\_out(
                        )->convert( json\_str ).
    CALL TRANSFORMATION id SOURCE XML json\_xstr
                           RESULT XML xml.
    out->write\_xml( xml ).
    "JSON in byte table
    out->next\_section( \`JSON in Table of Byte Fields\` ).
    DATA json\_xtab TYPE STANDARD TABLE OF x10 WITH DEFAULT KEY.
    json\_xtab =
      VALUE #( LET l1 = xstrlen( json\_xstr ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            json\_xstr+j(10)
                          ELSE
                            json\_xstr+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML json\_xtab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "JSON in XML-Reader
    out->next\_section( \`JSON from XML Reader\` ).
    DATA(json\_reader) = cl\_sxml\_string\_reader=>create( json\_xstr ).
    CALL TRANSFORMATION id SOURCE XML json\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID is called with all XML sources for which a format is possible, in the order of the formats. The XML target is always a byte string, which is produced after each successful transformation.