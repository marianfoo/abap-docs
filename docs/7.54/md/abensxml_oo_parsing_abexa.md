  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib.htm) →  [sXML Library, Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML Library, Object-Oriented Parsing

Simple [object-oriented](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_parse_oo.htm) reading of XML data.

Source Code

REPORT demo\_sxml\_oo\_reader.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`XML-Data\` ).
    DATA(xml) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
     \`<?xml version="1.0"?>\` &&
     \`<order number="4711"\` &&
     \` xmlns:demo="http://www.sap.com/abapdemos">\` &&
     \` <demo:head>\` &&
     \` <demo:status>confirmed</demo:status>\` &&
     \` <demo:date format="mm-dd-yyyy">07-19-2012</demo:date>\` &&
     \` </demo:head>\` &&
     \` <demo:body>\`  &&
     \` <demo:item units="2" price="17.00">Part No. 0110</demo:item>\` &&
     \` <demo:item units="1" price="10.50">Part No. 1609</demo:item>\` &&
     \` <demo:item units="5" price="12.30">Part No. 1710</demo:item>\` &&
     \` </demo:body>\` &&
     \`</order>\` ).
    out->write\_xml( xml ).
    out->next\_section( \`Parsed Nodes of the XML-Data\` ).
    DATA: BEGIN OF node\_wa,
            node\_type  TYPE string,
            prefix     TYPE string,
            name       TYPE string,
            nsuri      TYPE string,
            value      TYPE string,
            value\_raw  TYPE xstring,
          END OF node\_wa,
          nodes LIKE TABLE OF node\_wa.
    DATA(reader) = cl\_sxml\_string\_reader=>create( xml ).
    TRY.
        DO.
          CLEAR node\_wa.
          DATA(node) = reader->read\_next\_node( ).
          IF node IS INITIAL.
            EXIT.
          ENDIF.
          CASE node->type.
            WHEN if\_sxml\_node=>co\_nt\_element\_open.
              DATA(open\_element) = CAST if\_sxml\_open\_element( node ).
              node\_wa-node\_type = \`open element\`.
              node\_wa-prefix    = open\_element->prefix.
              node\_wa-name      = open\_element->qname-name.
              node\_wa-nsuri     = open\_element->qname-namespace.
              DATA(attributes)  = open\_element->get\_attributes( ).
              APPEND node\_wa TO nodes.
              LOOP AT attributes INTO DATA(attribute).
                node\_wa-node\_type = \`attribute\`.
                node\_wa-prefix    = attribute->prefix.
                node\_wa-name      = attribute->qname-name.
                node\_wa-nsuri     = attribute->qname-namespace.
                IF attribute->value\_type = if\_sxml\_value=>co\_vt\_text.
                  node\_wa-value = attribute->get\_value( ).
                ELSEIF attribute->value\_type =
                                   if\_sxml\_value=>co\_vt\_raw.
                  node\_wa-value\_raw = attribute->get\_value\_raw( ).
                ENDIF.
                APPEND node\_wa TO nodes.
              ENDLOOP.
              CONTINUE.
            WHEN if\_sxml\_node=>co\_nt\_element\_close.
              DATA(close\_element) = CAST if\_sxml\_close\_element( node ).
              node\_wa-node\_type   = \`close element\`.
              node\_wa-prefix      = close\_element->prefix.
              node\_wa-name        = close\_element->qname-name.
              node\_wa-nsuri       = close\_element->qname-namespace.
              APPEND node\_wa TO nodes.
              CONTINUE.
            WHEN if\_sxml\_node=>co\_nt\_value.
              DATA(value\_node) = CAST if\_sxml\_value\_node( node ).
              node\_wa-node\_type   = \`value\`.
              IF value\_node->value\_type = if\_sxml\_value=>co\_vt\_text.
                node\_wa-value = value\_node->get\_value( ).
              ELSEIF value\_node->value\_type = if\_sxml\_value=>co\_vt\_raw.
                node\_wa-value\_raw = value\_node->get\_value\_raw( ).
              ENDIF.
              APPEND node\_wa TO nodes.
              CONTINUE.
            WHEN OTHERS.
              node\_wa-node\_type   = \`Error\`.
              APPEND node\_wa TO nodes.
              EXIT.
          ENDCASE.
        ENDDO.
      CATCH cx\_sxml\_parse\_error INTO DATA(parse\_error).
        out->write\_text( parse\_error->get\_text( ) ).
    ENDTRY.
    out->display( nodes ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

The example has the same basic functions as the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensxml_parsing_abexa.htm) for token-based parsing. Instead of the method NEXT\_NODE, however, the method READ\_NEXT\_NODE is used here and its return value analyzed. Depending on the current node type, a down cast is performed to a suitable interface and attributes and methods are used to read the attributes of the current node.