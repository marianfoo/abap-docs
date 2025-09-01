  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Iterator for Nodes, ABENIXML_NODE_ITERATOR_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

iXML - Iterator for Nodes

Accesses the nodes in DOM using an iterator.

Source Code   

REPORT demo\_ixml\_node\_iterator.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS iterate
      IMPORTING iterator TYPE REF TO if\_ixml\_node\_iterator.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    FINAL(ixml)           = cl\_ixml=>create( ).
    FINAL(stream\_factory) = ixml->create\_stream\_factory( ).
    FINAL(istream)        = stream\_factory->create\_istream\_string(
      \`<texts>\`                              &&
      \`  <text1 format="bold">aaa</text1>\`   &&
      \`  <text2 format="italic">bbb</text2>\` &&
      \`</texts>\` ).
    FINAL(document)       = ixml->create\_document( ).
    FINAL(parser)         = ixml->create\_parser(
                             stream\_factory = stream\_factory
                             istream        = istream
                             document       = document ).
    FINAL(rc) = parser->parse( ).
    IF rc <> ixml\_mr\_parser\_ok.
      ... "Error handling
      RETURN.
    ENDIF.
    DATA(iterator) = document->create\_iterator( ).
    iterate( iterator ).
    out->line( ).
    FINAL(element) = document->get\_root\_element( ).
    iterator = element->create\_iterator( ).
    iterate( iterator ).
    out->line( ).
    FINAL(child) = element->get\_first\_child( ).
    iterator = child->create\_iterator( ).
    iterate( iterator ).
    out->display( ).
  ENDMETHOD.
  METHOD iterate.
    DO.
      FINAL(node) = iterator->get\_next( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      IF node->get\_type( ) <> if\_ixml\_node=>co\_node\_element.
        CONTINUE.
      ENDIF.
      out->write( |{ node->get\_name( ) } | &&
                  |{ node->get\_value( ) }| ).
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description   

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, iterators are created for the entire document, the root node, and a subnode of the root node and iterations are performed across its nodes. By selecting the node type, only XML elements are respected in the output.