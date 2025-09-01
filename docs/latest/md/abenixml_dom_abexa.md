---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_ixml_dom DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_ixml_dom IMPLEMENTATION. METHOD main. FINAL(o) = out->begin_section( `XML-Da
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenixml_dom_abexa.htm"
abapFile: "abenixml_dom_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abenixml", "dom", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20DOM%20Representation%2C%20ABENIXML_DOM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - DOM Representation

DOM representation of XML data.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_dom DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_dom IMPLEMENTATION.
  METHOD main.
    FINAL(o) = out->begin\_section( \`XML-Data\` ).
    FINAL(xml) =
     \`<?xml version="1.0"?>\` &&
     \`<order number="4711"\` &&
     \` xmlns:demo="http://www.sap.com/abapdemos">\` &&
     \`<!-- Head and body of order -->\` &&
     \` <demo:head>\` &&
     \` <demo:status>confirmed</demo:status>\` &&
     \` <demo:date format="mm-dd-yyyy">07-19-2012</demo:date>\` &&
     \` </demo:head>\` &&
     \` <demo:body>\`  &&
     \` <demo:item units="2" price="17.00">Part No. 0110</demo:item>\` &&
     \` <demo:item units="1" price="10.50">Part No. 1609</demo:item>\` &&
     \` <demo:item units="5" price="12.30">Part No. 1710</demo:item>\` &&
     \` </demo:body>\` &&
     \`</order>\`.
    out->write\_xml( xml ).
    out->next\_section( \`XML-Document in DOM-Format\` ).
    TYPES: BEGIN OF t\_node,
             gid    TYPE i,
             type   TYPE i,
             prefix TYPE string,
             name   TYPE string,
             value  TYPE string,
           END OF t\_node.
    DATA node\_tab TYPE STANDARD TABLE OF t\_node.
    FINAL(ixml)          = cl\_ixml=>create( ).
    FINAL(document)      = ixml->create\_document( ).
    TRY.
        CALL TRANSFORMATION id SOURCE XML xml
                               RESULT XML document.
      CATCH cx\_transformation\_error.
        RETURN.
    ENDTRY.
    FINAL(iterator) = document->create\_iterator( ).
    DO.
      DATA(node) = iterator->get\_next( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      APPEND VALUE #(
        gid     = node->get\_gid( )
        type    = node->get\_type( )
        prefix  = node->get\_namespace\_prefix( )
        name    = node->get\_name( )
        value   = node->get\_value( ) ) TO node\_tab.
    ENDDO.
    out->write\_data( node\_tab ).
    TYPES: BEGIN OF t\_attribute,
             name  TYPE string,
             value TYPE string,
           END OF t\_attribute.
    DATA attribute\_tab TYPE STANDARD TABLE OF t\_attribute.
    iterator->reset( ).
    DO.
      node = iterator->get\_next( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      FINAL(attributes) = node->get\_attributes( ).
      IF attributes IS INITIAL OR attributes->get\_length( ) = 0.
        CONTINUE.
      ENDIF.
      CLEAR attribute\_tab.
      DO.
        FINAL(attribute) = attributes->get\_item( sy-index - 1 ).
        IF attribute IS INITIAL.
          EXIT.
        ENDIF.
        APPEND VALUE #(
          name  = attribute->get\_name( )
          value = attribute->get\_value( ) ) TO attribute\_tab.
      ENDDO.
      out->begin\_section( |Attributes of GID { node->get\_gid( ) }|
        )->write\_data( attribute\_tab
        )->end\_section( ).
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

XML data is transformed to its DOM representation using the [identity transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID. An [iterator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_dom_iterat_read.htm) is used to read all DOM nodes and pass their most important properties to an internal table and then output them. A second iteration reads the attributes of elements, whose internal table is also output.

Hint

The GID is a unique internal indexing of a node.