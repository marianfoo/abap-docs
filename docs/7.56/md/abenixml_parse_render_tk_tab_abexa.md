---
title: "Source Code"
description: |
  REPORT demo_ixml_parse_render_tk_tabl. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. DATA(out) = cl_demo_output=>new( )->begin_section( 'XML-Data' ). DATA(xml) = `<texts>`                            && `<!-- texts
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenixml_parse_render_tk_tab_abexa.htm"
abapFile: "abenixml_parse_render_tk_tab_abexa.htm"
keywords: ["select", "delete", "do", "if", "method", "class", "data", "internal-table", "abenixml", "parse", "render", "tab", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML - Token Parsers and Renderers, Table

Parses XML data to an internal table and renders this table.

Source Code

REPORT demo\_ixml\_parse\_render\_tk\_tabl.
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
    DATA node\_info TYPE sixmlnode.
    DATA(rc) = token\_parser->parse\_tokens( token\_mask = tk\_mask
                                           info\_mask  = in\_mask ).
    IF rc <> 0.
      "Error handling ...
    ENDIF.
    DATA(node\_infos) = token\_parser->tokens.
    out->write\_data( node\_infos ).
    out->next\_section( 'Modified Node Table' ).
    DELETE node\_infos WHERE type =
      if\_ixml\_token\_parser=>co\_tk\_attribute.
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

Using a [token parser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_parse_token.htm), XML is parsed directly to the attribute TOKENS with the type SIXMLDOM. The nodes for the attributes are then removed. The modified table is passed to a token renderer. The result is the XML data without attributes.

Instead of removing the attributes in the ABAP program, the value of if\_ixml\_token\_parser=>co\_tk\_attribute can simply be subtracted from the actual parameter for tk\_mask. The parser then does not place the attributes in the internal table.