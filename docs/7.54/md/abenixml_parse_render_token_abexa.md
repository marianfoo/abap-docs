  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML Library, Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

iXML Library, Token Parsers and Renderers, Iterative

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

Using a [token parser](javascript:call_link\('abenabap_ixml_lib_parse_token.htm'\)), XML is parsed row for row into an internal table of type SIXMLDOM. The nodes for the attributes are removed. The table is passed to a token renderer. The result is the XML data without attributes.

Instead of filtering out the attributes in the ABAP program, the value of if\_ixml\_token\_parser=>co\_tk\_attribute can simply be subtracted from the actual parameter for tk\_mask. This means the parser attributes are not returned.