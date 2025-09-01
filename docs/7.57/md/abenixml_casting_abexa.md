---
title: "Source Code"
description: |
  REPORT demo_ixml_casting. CLASS ixml_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS ixml_demo IMPLEMENTATION. METHOD main. FINAL(ixml)           = cl_ixml=>create( ). FINAL(stream_factory) = ixml->create_stream_factory( ). FINAL(istream)        = stream_factory->create
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenixml_casting_abexa.htm"
abapFile: "abenixml_casting_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenixml", "casting", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Downcasts, ABENIXML_CASTING_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

iXML - Downcasts

Downcast options for the interfaces in iXML Library.

Source Code   

REPORT demo\_ixml\_casting.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
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
      IF node is not INSTANCE OF if\_ixml\_element.
          cl\_demo\_output=>write\_text(
            |{ node->get\_name( ) } is not an element| ).
      ENDIF.
      "Special down cast
      element ?=  node->query\_interface( ixml\_iid\_element ).
      IF element IS INITIAL.
        cl\_demo\_output=>write\_text(
          |{ node->get\_name( ) } is not an element| ).
      ENDIF.
    ENDDO.
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description   

An iterator is created for all nodes of a parsed XML document and these are used to iterate. To identify nodes that are not elements, downcasts are performed from IF\_IXML\_NODE to IF\_IXML\_ELEMENT. Both checks on regular downcasts using the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_instance_of.htm) and downcasts using the method QUERY\_INTERFACE of the interface IF\_IXML\_UNKNOWN are demonstrated.