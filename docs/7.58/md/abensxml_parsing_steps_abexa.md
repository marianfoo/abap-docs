---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_sxml_token_rdr_steps DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. DATA parser TYPE REF TO if_sxml_reader. DATA: BEGIN OF wa, method    TYPE string, node_type TYPE strin
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensxml_parsing_steps_abexa.htm"
abapFile: "abensxml_parsing_steps_abexa.htm"
keywords: ["do", "if", "case", "method", "class", "data", "abensxml", "parsing", "steps", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Steps%20in%20Token-Based%20Parsing%2C%20ABENSXML_PARSING_STEPS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

sXML - Steps in Token-Based Parsing

This example demonstrates various steps in [token-based parsing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_parse_iterative.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_sxml\_token\_rdr\_steps DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA parser TYPE REF TO if\_sxml\_reader.
    DATA: BEGIN OF wa,
            method    TYPE string,
            node\_type TYPE string,
            name      TYPE string,
            value     TYPE string,
          END OF wa,
          output LIKE TABLE OF wa.
    METHODS parse
      IMPORTING method TYPE string.
    METHODS get\_node\_type
      IMPORTING node\_type\_int           TYPE if\_sxml\_node=>node\_type
      RETURNING VALUE(node\_type\_string) TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sxml\_token\_rdr\_steps IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`XML-Data\` ).
    FINAL(xml) = \`<x a="aval" b="bval"><y c="cval">yval</y></x>\`.
    out->write\_xml( xml ).
    out->next\_section( \`Parser Methods\` ).
    parser = cl\_sxml\_string\_reader=>create(
               cl\_abap\_conv\_codepage=>create\_out( )->convert( xml ) ).
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
    out->write( output ).
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
  METHOD parse.
    CALL METHOD parser->(method).
    APPEND VALUE #(
      method     = method
      node\_type  = get\_node\_type( parser->node\_type )
      name       = parser->name
      value      = parser->value ) TO output.
  ENDMETHOD.
ENDCLASS.

Description   

Using simple XML data, this example demonstrates how possible steps work, alongside NEXT\_NODE and NEXT\_ATTRIBUTE, in [token-based parsing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_parse_iterative.htm) with an XML reader from [sXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm).

-   The method CURRENT\_NODE resets an iteration across an attribute list back to its start.
-   The method PUSH\_BACK first branches an iteration from a value node to the associated element opening and from there to the element opening of the superelement.
-   The method SKIP\_NODE then parses all subnodes up to the end of element of the XML data.

In this example, the demonstration methods process a known XML data structure. A further [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensxml_parsing_methods_abexa.htm) demonstrates the methods without the entire structure of XML data being known in advance.