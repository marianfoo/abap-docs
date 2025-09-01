  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Downcasts%2C%20ABENIXML_CASTING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Downcasts

Downcast options for the interfaces in iXML Library.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_casting DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_casting IMPLEMENTATION.
  METHOD main.
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
    FINAL(iterator) = document->create\_iterator( ).
    DO.
      FINAL(node) = iterator->get\_next( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      DATA element TYPE REF TO if\_ixml\_element.
      "Normal down cast
      IF node IS NOT INSTANCE OF if\_ixml\_element.
        out->write\_text(
          |{ node->get\_name( ) } is not an element| ).
      ENDIF.
      "Special down cast
      element ?=  node->query\_interface( ixml\_iid\_element ).
      IF element IS INITIAL.
        out->write\_text(
          |{ node->get\_name( ) } is not an element| ).
      ENDIF.
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

An iterator is created for all nodes of a parsed XML document and these are used to iterate. To identify nodes that are not elements, downcasts are performed from IF\_IXML\_NODE to IF\_IXML\_ELEMENT. Both checks on regular downcasts using the predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) and downcasts using the method QUERY\_INTERFACE of the interface IF\_IXML\_UNKNOWN are demonstrated.