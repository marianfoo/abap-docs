  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) →  [CALL TRANSFORMATION, Examples](javascript:call_link\('abencall_transformation_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: XML Sources of Transformations, ABENCALL_TRAFO_SOURCES_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

XML Sources of Transformations

This example demonstrates the possible XML sources of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Source Code   

REPORT demo\_call\_trafo\_xml\_sources.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA xml TYPE xstring.
    FINAL(out) = cl\_demo\_output=>new(
      )->begin\_section( \`XML-Sources for CALL TRANSFORMATION\` ).
    "XML 1.0
    out->begin\_section( \`XML 1.0\` ).
    "XML 1.0 in string
    out->begin\_section( \`XML 1.0 in Text String\` ).
    FINAL(xml\_str) = \`<text>Hello XML!</text>\`.
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
    FINAL(xml\_xstr) = cl\_abap\_conv\_codepage=>create\_out(
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
    FINAL(ixml) = cl\_ixml=>create( ).
    FINAL(istream) = ixml->create\_stream\_factory(
                      )->create\_istream\_xstring( xml\_xstr ).
    CALL TRANSFORMATION id SOURCE XML istream
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in iXML DOM
    out->next\_section( \`XML 1.0 in DOM\` ).
    FINAL(dom) = ixml->create\_document( ).
    FINAL(parser) = ixml->create\_parser(
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
    FINAL(binary\_xml\_writer) =
      cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_binary ).
    xml\_reader->next\_node( ).
    xml\_reader->skip\_node( binary\_xml\_writer ).
    "Binary XML in xstring
    out->begin\_section( \`Binary XML in Byte String\` ).
    FINAL(binary\_xml\_xstr) = binary\_xml\_writer->get\_output( ).
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
    FINAL(binary\_xml\_reader) = cl\_sxml\_string\_reader=>create(
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
    FINAL(xop\_writer) =
      cl\_sxml\_xop\_writer=>create( ).
    xml\_reader->next\_node( ).
    xml\_reader->skip\_node( xop\_writer ).
    FINAL(xop\_package) = xop\_writer->get\_output( ).
    "XOP in XML-Reader
    out->begin\_section( \`XOP from XML Reader\` ).
    FINAL(xop\_reader) = cl\_sxml\_xop\_reader=>create( xop\_package ).
    CALL TRANSFORMATION id SOURCE XML xop\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->end\_section( ).
    "JSON
    out->next\_section( \`JSON\` ).
    "JSON in string
    out->begin\_section( \`JSON in Text String\` ).
    FINAL(json\_str) = \`{"TEXT":"Hello JSON!"}\`.
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
    FINAL(json\_xstr) = cl\_abap\_conv\_codepage=>create\_out(
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
    FINAL(json\_reader) = cl\_sxml\_string\_reader=>create( json\_xstr ).
    CALL TRANSFORMATION id SOURCE XML json\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID is called in the order of the possible formats with all XML sources that are possible for a format. The XML target is always a byte string, which is output after each successful transformation.