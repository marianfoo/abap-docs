---
title: "Source Code"
description: |
  REPORT demo_ixml_parse_render_tk_iter. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. DATA(out) = cl_demo_output=>new( )->begin_section( 'XML-Data' ). DATA(xml) = `<texts>`                            && `<!-- texts
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenixml_parse_render_token_abexa.htm"
abapFile: "abenixml_parse_render_token_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "abenixml", "parse", "render", "token", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) →  [iXML Library, Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML Library, Token Parsers and Renders, Iterative

Parses XML data to an internal table (iterative parsing) and renders this table.

Source Code

REPORT demo\_ixml\_parse\_render\_tk\_iter.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'XML-Data' ).
    DATA(xml) =
      \`<texts>\`                            &&
      \`<!-- texts -->\`                     &&
      \`<text1 format="bold">aaa</text1>\`   &&
      \`<text2 format="italic">bbb</text2>\` &&
      \`</texts>\`.
    out->write\_xml( xml ).
    out->next\_section( 'Node Table' ).
    DATA(ixml)   = cl\_ixml=>create( ).
    DATA(token\_parser) = ixml->create\_token\_parser(
      stream\_factory = ixml->create\_stream\_factory( )
      istream        = ixml->create\_stream\_factory(
        )->create\_istream\_string( xml )
      document       = ixml->create\_document( ) ).
    DATA(tk\_mask) =
      if\_ixml\_token\_parser=>co\_tk\_any\_token.
    DATA(in\_mask) =
      if\_ixml\_token\_parser=>co\_ni\_all\_info.
    DATA token TYPE i.
    DATA node\_info TYPE sixmlnode.
    DATA node\_infos TYPE sixmldom.
    DO.
      token = token\_parser->get\_next\_token( tk\_mask ).
      IF token IS INITIAL.
        EXIT.
      ENDIF.
      token\_parser->get\_node\_info( info\_mask = in\_mask
                                   node\_info = node\_info ).
      IF node\_info-type <> if\_ixml\_token\_parser=>co\_tk\_attribute.
        APPEND node\_info TO node\_infos.
      ENDIF.
    ENDDO.
    out->write\_data( node\_infos ).
    out->next\_section( 'New XML-Data' ).
    CLEAR xml.
    DATA(token\_renderer) = ixml->create\_token\_renderer(
      ostream = ixml->create\_stream\_factory(
        )->create\_ostream\_cstring( xml ) ).
    token\_renderer->render( node\_infos ).
    out->write\_xml( xml ).
    out->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

Using a [token parser](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_parse_token.htm), XML is parsed row for row into an internal table of typeSIXMLDOM. The nodes for the attributes are removed. The table is passed to a token renderer. The result is the XML data without attributes.

Instead of filtering out the attributes in the ABAP program, the value of if\_ixml\_token\_parser=>co\_tk\_attribute can simply be subtracted from the actual parameter for tk\_mask. This means the parser attributes are not returned.