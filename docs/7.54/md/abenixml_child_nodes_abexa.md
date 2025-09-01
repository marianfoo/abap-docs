  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML Library, Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

iXML Library, Access Adjacent Subnodes

Accesses adjacent subnodes of a DOM.

Source Code

REPORT demo\_ixml\_access\_child\_nodes.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(ixml)           = cl\_ixml=>create( ).
    DATA(stream\_factory) = ixml->create\_stream\_factory( ).
    DATA(istream)        = stream\_factory->create\_istream\_string(
      \`<texts>\`                              &&
      \`  <text1 format="bold">aaa</text1>\`   &&
      \`  <text2 format="italic">bbb</text2>\` &&
      \`</texts>\` ).
    DATA(document)       = ixml->create\_document( ).
    DATA(parser)         = ixml->create\_parser(
                             stream\_factory = stream\_factory
                             istream        = istream
                             document       = document ).
    DATA(rc) = parser->parse( ).
    IF rc <> ixml\_mr\_parser\_ok.
      ... "Error handling
      RETURN.
    ENDIF.
    DATA(element) = document->get\_root\_element( ).
    cl\_demo\_output=>write\_text( |{ element->get\_name( ) }| ).
    DATA(child) = element->get\_first\_child( ).
    WHILE child IS NOT INITIAL.
      cl\_demo\_output=>write\_text( |{ child->get\_name( ) } | &&
                                  |{ child->get\_value( ) }| ).
      child = child->get\_next( ).
    ENDWHILE.
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, the root node is read and its first subnode identified. All other subnodes are read starting with this first node.