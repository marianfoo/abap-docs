  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML - Examples](javascript:call_link\('abenabap_sxml_lib_abexas.htm'\)) → 

sXML - Token-Based Parsing

Simple [token-based](javascript:call_link\('abenabap_sxml_lib_parse_iterative.htm'\)) reading of XML data.

Source Code

REPORT demo\_sxml\_token\_reader.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS get\_node\_type
      IMPORTING node\_type\_int TYPE if\_sxml\_node=>node\_type
      RETURNING VALUE(node\_type\_string) TYPE string.
    CLASS-METHODS get\_value\_type
      IMPORTING value\_type\_int TYPE if\_sxml\_value=>value\_type
      RETURNING VALUE(value\_type\_string) TYPE string.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`XML-Data\` ).
    DATA(xml) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
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
    DATA(reader) = cl\_sxml\_string\_reader=>create( xml ).
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
      CATCH cx\_sxml\_parse\_error INTO DATA(parse\_error).
        out->write\_text( parse\_error->get\_text( ) ).
    ENDTRY.
    out->display( nodes ).
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
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

This example demonstrates how the two methods NEXT\_NODE and NEXT\_ATTRIBUTE of a string reader can be used to read all existing information in XML data in a nested loop. The outer loop iterates across all nodes of the XML data and the inner loop iterates across any existing list of XML attributes of an element. The relevant information is taken from the attributes of the reader, appended to an internal table, and produced as a result.

Hint

The program DEMO\_SXML\_PARSE\_XML executes the token-based parsing shown here for any XML data that is entered.