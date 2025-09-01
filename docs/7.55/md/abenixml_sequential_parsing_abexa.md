---
title: "Source Code"
description: |
  REPORT demo_ixml_parsing_sequential. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-METHODS handle_errors IMPORTING parser TYPE REF TO if_ixml_parser. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. DATA(out)            = cl_demo_output=>new(
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenixml_sequential_parsing_abexa.htm"
abapFile: "abenixml_sequential_parsing_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "abenixml", "sequential", "parsing", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML - Sequential Parsing

Parses simple XML data sequentially.

Source Code

REPORT demo\_ixml\_parsing\_sequential.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS handle\_errors
          IMPORTING parser TYPE REF TO if\_ixml\_parser.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out)            = cl\_demo\_output=>new( ).
    DATA(ixml)           = cl\_ixml=>create( ).
    DATA(stream\_factory) = ixml->create\_stream\_factory( ).
    DATA(istream)        = stream\_factory->create\_istream\_string(
      \`<texts>\`              &&
      \`  <text1>aaa</text1>\` &&
      \`  <text2>bbb</text2>\` &&
      \`</texts>\`  ).
    DATA(document)       = ixml->create\_document( ).
    DATA(parser)         = ixml->create\_parser(
                             stream\_factory = stream\_factory
                             istream        = istream
                             document       = document ).
    parser->set\_event\_subscription(
      events = if\_ixml\_event=>co\_event\_element\_pre +
               if\_ixml\_event=>co\_event\_element\_post ).
    DO.
      DATA(event) = parser->parse\_event( ).
      IF event IS INITIAL.
        EXIT.
      ENDIF.
      DATA(name)  = event->get\_name( ).
      DATA(value) = event->get\_value( ).
      out->write( |{ name } { value }| ).
      DATA(xml\_string) = \`\`.
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
    out->display( ).
  ENDMETHOD.
  METHOD handle\_errors.
    DO parser->num\_errors( ) TIMES.
      DATA(error)  = parser->get\_error( index = sy-index - 1 ).
      DATA(reason) = error->get\_reason( ).
      ...
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is first transformed to an input stream object and this object is then processed in a loop (using a parser object) until the method PARSE\_EVENT returns an initial value. To define the sequences, the events CO\_EVENT\_ELEMENT\_PRE and CO\_EVENT\_ELEMENT\_POST are registered before the loop. These events are raised before and after the parsing of an element. The loop produces the name and value of the current element. The current DOM representation of the XML document is rendered in each loop pass and is also displayed.