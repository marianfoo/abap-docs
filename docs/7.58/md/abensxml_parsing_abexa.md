  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Token-Based%20Parsing%2C%20ABENSXML_PARSING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sXML - Token-Based Parsing

Simple [token-based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_parse_iterative.htm) reading of XML data.

Source Code   

\* Public class definition
CLASS cl\_demo\_sxml\_token\_reader DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS get\_node\_type
      IMPORTING node\_type\_int           TYPE if\_sxml\_node=>node\_type
      RETURNING VALUE(node\_type\_string) TYPE string.
    METHODS get\_value\_type
      IMPORTING value\_type\_int           TYPE if\_sxml\_value=>value\_type
      RETURNING VALUE(value\_type\_string) TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sxml\_token\_reader IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`XML-Data\` ).
    FINAL(xml) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
     \`<?xml version="1.0"?>\` &&
     \`<order number="4711"\` &&
     \` xmlns:demo="http://www.sap.com/abapdemos">\` &&
     \` <!-- Head and body of order -->\` &&
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
    DATA: BEGIN OF node,
            node\_type  TYPE string,
            prefix     TYPE string,
            name       TYPE string,
            nsuri      TYPE string,
            value\_type TYPE string,
            value      TYPE string,
          END OF node,
          nodes LIKE TABLE OF node.
    FINAL(reader) = cl\_sxml\_string\_reader=>create( xml ).
    TRY.
        DO.
          reader->next\_node( ).
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_final.
            EXIT.
          ENDIF.
          APPEND VALUE #(
            node\_type  = get\_node\_type( reader->node\_type )
            prefix     = reader->prefix
            name       = reader->name
            nsuri      = reader->nsuri
            value\_type = get\_value\_type( reader->value\_type )
            value      = reader->value ) TO nodes.
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_open.
            DO.
              reader->next\_attribute( ).
              IF reader->node\_type <> if\_sxml\_node=>co\_nt\_attribute.
                EXIT.
              ENDIF.
              APPEND VALUE #(
                node\_type  = \`attribute\`
                prefix     = reader->prefix
                name       = reader->name
                nsuri      = reader->nsuri
                value      = reader->value ) TO nodes.
            ENDDO.
          ENDIF.
        ENDDO.
      CATCH cx\_sxml\_parse\_error INTO FINAL(parse\_error).
        out->write\_text( parse\_error->get\_text( ) ).
    ENDTRY.
    out->write( nodes ).
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
  METHOD get\_value\_type.
    CASE value\_type\_int.
      WHEN 0.
        value\_type\_string = \`Initial\`.
      WHEN if\_sxml\_value=>co\_vt\_none .
        value\_type\_string = \`CO\_VT\_NONE\`.
      WHEN if\_sxml\_value=>co\_vt\_text.
        value\_type\_string = \`CO\_VT\_TEXT\`.
      WHEN if\_sxml\_value=>co\_vt\_raw.
        value\_type\_string = \`CO\_VT\_RAW\`.
      WHEN if\_sxml\_value=>co\_vt\_any.
        value\_type\_string = \`CO\_VT\_ANY\`.
      WHEN OTHERS.
        value\_type\_string = \`Error\`.
    ENDCASE.
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates how the two methods NEXT\_NODE and NEXT\_ATTRIBUTE of a string reader can be used to read all existing information in XML data in a nested loop. The outer loop iterates across all nodes of the XML data and the inner loop iterates across any existing list of XML attributes of an element. The relevant information is taken from the attributes of the reader, appended to an internal table, and output as a result.

Hint

The class CL\_DEMO\_SXML\_PARSE\_XML implements the token-based parsing shown here for any XML data that can be entered.