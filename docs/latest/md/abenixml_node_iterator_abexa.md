---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_ixml_node_iterator DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. METHODS iterate IMPORTING iterator TYPE REF TO if_ixml_node_iterator. ENDCLASS.  Public class implement
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenixml_node_iterator_abexa.htm"
abapFile: "abenixml_node_iterator_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenixml", "node", "iterator", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Iterator%20for%20Nodes%2C%20ABENIXML_NODE_ITERATOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Iterator for Nodes

Accesses the nodes in DOM using an iterator.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_node\_iterator DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS iterate
      IMPORTING iterator TYPE REF TO if\_ixml\_node\_iterator.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_node\_iterator IMPLEMENTATION.
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

Description   

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, iterators are created for the entire document, the root node, and a subnode of the root node and iterations are performed across its nodes. By selecting the node type, only XML elements are respected in the output.