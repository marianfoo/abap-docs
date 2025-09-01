  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML - DOM Representation

DOM representation of XML data.

Source Code

REPORT demo\_ixml\_dom.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`XML-Data\` ).
    DATA(xml) =
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
            gid     TYPE i,
            type    TYPE i,
            prefix  TYPE string,
            name    TYPE string,
            value   TYPE string,
          END OF t\_node.
    DATA node\_tab TYPE STANDARD TABLE OF t\_node.
    DATA(ixml)          = cl\_ixml=>create( ).
    DATA(document)      = ixml->create\_document( ).
    TRY.
        CALL TRANSFORMATION id SOURCE XML xml
                               RESULT XML document.
      CATCH cx\_transformation\_error.
        RETURN.
    ENDTRY.
    DATA(iterator) = document->create\_iterator( ).
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
      DATA(attributes) = node->get\_attributes( ).
      IF attributes IS INITIAL OR attributes->get\_length( ) = 0.
        CONTINUE.
      ENDIF.
      CLEAR attribute\_tab.
      DO.
        DATA(attribute) = attributes->get\_item( sy-index - 1 ).
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
    out->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is transformed to its DOM representation using the [identity transformation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID. An [iterator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_ixml_lib_dom_iterat_read.htm) is used to read all DOM nodes and pass their most important properties to an internal table and then output them. A second iteration reads the attributes of elements, whose internal table is also output.

Hint

The GID is a unique internal indexing of a node.