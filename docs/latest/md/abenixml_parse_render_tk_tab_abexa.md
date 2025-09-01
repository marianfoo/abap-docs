  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Token%20Parsers%20and%20Renderers%2C%20Table%2C%20ABENIXML_PARSE_RENDER_TK_TAB_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

iXML - Token Parsers and Renderers, Table

Parses XML data to an internal table and renders this table.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_parse\_rndr\_tk\_tbl DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_parse\_rndr\_tk\_tbl IMPLEMENTATION.
  METHOD main.
    out->begin\_section( 'XML-Data' ).
    DATA(xml) =
      \`<texts>\`                            &&
      \`<!-- texts -->\`                     &&
      \`<text1 format="bold">aaa</text1>\`   &&
      \`<text2 format="italic">bbb</text2>\` &&
      \`</texts>\`.
    out->write\_xml( xml ).
    out->next\_section( 'Node Table' ).
    FINAL(ixml)   = cl\_ixml=>create( ).
    FINAL(token\_parser) = ixml->create\_token\_parser(
      stream\_factory = ixml->create\_stream\_factory( )
      istream        = ixml->create\_stream\_factory(
        )->create\_istream\_string( xml )
      document       = ixml->create\_document( ) ).
    FINAL(tk\_mask) =
      if\_ixml\_token\_parser=>co\_tk\_any\_token.
    FINAL(in\_mask) =
      if\_ixml\_token\_parser=>co\_ni\_all\_info.
    DATA node\_info TYPE sixmlnode.
    FINAL(rc) = token\_parser->parse\_tokens( token\_mask = tk\_mask
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
    FINAL(token\_renderer) = ixml->create\_token\_renderer(
      ostream = ixml->create\_stream\_factory(
        )->create\_ostream\_cstring( xml ) ).
    token\_renderer->render( node\_infos ).
    out->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

Using a [token parser](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_parse_token.htm), XML is parsed directly to the attribute TOKENS with the type SIXMLDOM. The nodes for the attributes are then removed. The modified table is passed to a token renderer. The result is the XML data without attributes.

Instead of removing the attributes in the ABAP class, the value of if\_ixml\_token\_parser=>co\_tk\_attribute can simply be subtracted from the actual parameter for tk\_mask. The parser then does not place the attributes in the internal table.