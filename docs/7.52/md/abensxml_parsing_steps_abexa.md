  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm) →  [sXML Library, Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML Library, Steps in Token-Based Parsing

This example demonstrates various steps in [token-based parsing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_parse_iterative.htm).

Source Code

REPORT demo\_sxml\_token\_reader\_steps.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA parser TYPE REF TO if\_sxml\_reader.
    CLASS-DATA: BEGIN OF wa,
                  method     TYPE string,
                  node\_type  TYPE string,
                  name       TYPE string,
                  value      TYPE string,
                END OF wa,
                output LIKE TABLE OF wa.
    CLASS-METHODS parse
      IMPORTING method TYPE string.
    CLASS-METHODS get\_node\_type
      IMPORTING node\_type\_int TYPE if\_sxml\_node=>node\_type
      RETURNING VALUE(node\_type\_string) TYPE string.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`XML-Data\` ).
    DATA(xml) = |<x a="aval" b="bval"><y c="cval">yval</y></x>|.
    out->write\_xml( xml ).
    out->next\_section( \`Parser Methods\` ).
    parser = cl\_sxml\_string\_reader=>create(
               cl\_abap\_codepage=>convert\_to( xml ) ).
    parse( 'NEXT\_NODE' ).
    parse( 'NEXT\_ATTRIBUTE' ).
    parse( 'NEXT\_ATTRIBUTE' ).
    parse( 'CURRENT\_NODE' ).
    parse( 'NEXT\_ATTRIBUTE' ).
    parse( 'NEXT\_NODE' ).
    parse( 'NEXT\_ATTRIBUTE' ).
    parse( 'NEXT\_NODE' ).
    parse( 'PUSH\_BACK' ).
    parse( 'NEXT\_ATTRIBUTE' ).
    parse( 'PUSH\_BACK' ).
    parse( 'SKIP\_NODE' ).
    parse( 'NEXT\_NODE' ).
    out->display( output ).
  ENDMETHOD.
  METHOD parse.
    CALL METHOD parser->(method).
    APPEND VALUE #(
      method     = method
      node\_type  = get\_node\_type( parser->node\_type )
      name       = parser->name
      value      = parser->value ) TO output.
  ENDMETHOD.
  METHOD get\_node\_type.
    CASE node\_type\_int.
      WHEN if\_sxml\_node=>co\_nt\_initial.
        node\_type\_string = \`CO\_NT\_INITIAL\`.
\*      WHEN if\_sxml\_node=>co\_nt\_comment.
\*        node\_type\_string = \`CO\_NT\_COMMENT\`.
      WHEN if\_sxml\_node=>co\_nt\_element\_open.
        node\_type\_string = \`CO\_NT\_ELEMENT\_OPEN\`.
      WHEN if\_sxml\_node=>co\_nt\_element\_close.
        node\_type\_string = \`CO\_NT\_ELEMENT\_CLOSE\`.
      WHEN if\_sxml\_node=>co\_nt\_value.
        node\_type\_string = \`CO\_NT\_VALUE\`.
      WHEN if\_sxml\_node=>co\_nt\_attribute.
        node\_type\_string = \`CO\_NT\_ATTRIBUTE\`.
\*      WHEN if\_sxml\_node=>co\_nt\_pi.
\*        node\_type\_string = \`CO\_NT\_FINAL\`.
      WHEN OTHERS.
        node\_type\_string = \`Error\`.
    ENDCASE.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

Using simple XML data, this example demonstrates how various steps work, alongside NEXT\_NODE and NEXT\_ATTRIBUTE, in [token-based parsing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_parse_iterative.htm) with an XML reader from [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm).

-   The method CURRENT\_NODE moves an iteration across an attribute list back to its start.

-   The method PUSH\_BACK first moves an iteration from a value node to the associated opened element and from there to the opened element of the superelement.

-   The method SKIP\_NODE then parses all subnodes up to the closed element of the XML data.

In this example, the demonstration methods process a known XML data structure. A further [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensxml_parsing_methods_abexa.htm) demonstrates the methods without the entire structure of XML data being known in advance.