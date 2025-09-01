  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Sequential%20Parsing%2C%20ABENIXML_SEQUENTIAL_PARSING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Sequential Parsing

Parses simple XML data sequentially.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_parsing\_sqntl DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS handle\_errors
      IMPORTING parser TYPE REF TO if\_ixml\_parser.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_parsing\_sqntl IMPLEMENTATION.
  METHOD main.
    FINAL(ixml)           = cl\_ixml=>create( ).
    FINAL(stream\_factory) = ixml->create\_stream\_factory( ).
    FINAL(istream)        = stream\_factory->create\_istream\_string(
      \`<texts>\`              &&
      \`  <text1>aaa</text1>\` &&
      \`  <text2>bbb</text2>\` &&
      \`</texts>\`  ).
    FINAL(document)       = ixml->create\_document( ).
    FINAL(parser)         = ixml->create\_parser(
                             stream\_factory = stream\_factory
                             istream        = istream
                             document       = document ).
    parser->set\_event\_subscription(
      events = if\_ixml\_event=>co\_event\_element\_pre +
               if\_ixml\_event=>co\_event\_element\_post ).
    DO.
      FINAL(event) = parser->parse\_event( ).
      IF event IS INITIAL.
        EXIT.
      ENDIF.
      FINAL(name)  = event->get\_name( ).
      FINAL(value) = event->get\_value( ).
      out->write( |{ name } { value }| ).
      FINAL(xml\_string) = \`\`.
      ixml->create\_renderer(
        document = document
        ostream  = ixml->create\_stream\_factory(
                      )->create\_ostream\_cstring( string = xml\_string )
         )->render( ).
      out->write\_xml( xml\_string )->line( ).
    ENDDO.
    IF parser->num\_errors( ) > 0.
      handle\_errors( parser ).
      RETURN.
    ENDIF.
  ENDMETHOD.
  METHOD handle\_errors.
    DO parser->num\_errors( ) TIMES.
      FINAL(error)  = parser->get\_error( index = sy-index - 1 ).
      FINAL(reason) = error->get\_reason( ).
      ...
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

XML data is first transformed to an input stream object and this object is then processed in a loop using a parser object until the method PARSE\_EVENT returns an initial value. To define the sequences, the events CO\_EVENT\_ELEMENT\_PRE and CO\_EVENT\_ELEMENT\_POST of the interface are registered before the loop. These events are raised before and after the parsing of an element. The loop produces the name and value of the current element. The current DOM representation of the XML document is rendered in each loop pass and is also displayed.