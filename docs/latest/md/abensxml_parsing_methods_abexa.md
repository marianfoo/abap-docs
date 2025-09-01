  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Methods%20for%20Token-Based%20Parsing.%2C%20ABENSXML_PARSING_METHODS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

sXML - Methods for Token-Based Parsing.

This example demonstrates how various methods are used in [token-based parsing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sxml_lib_parse_iterative.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_sxml\_token\_rdr\_mthds DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS get\_node\_type
      IMPORTING node\_type\_int           TYPE if\_sxml\_node=>node\_type
      RETURNING VALUE(node\_type\_string) TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sxml\_token\_rdr\_mthds IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`XML-Data\` ).
    FINAL(xml) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
     \`<?xml version="1.0"?>\` &&
     \`<items>\` &&
     \`<item1 a1="11" b1="12" c1="13">1</item1>\`  &&
     \`<item2 a2="21" b2="22" c2="23">2</item2>\`  &&
     \`<item3 a3="31" b3="32" c3="33"><subItems>\` &&
     \`<subItem1>31</subItem1>\` &&
     \`<subItem2>32</subItem2>\` &&
     \`<subItem3>33</subItem3>\` &&
     \`</subItems></item3>\` &&
     \`<item4 a4="AA==" b4="AQ==" c4="Ag==">4</item4>\` &&
     \`</items>\` ).
    out->write\_xml( xml ).
    "Parsing all nodes
    out->next\_section(
      \`Parsing all Nodes of the XML-Data\` ).
    DATA: BEGIN OF node,
            node\_type TYPE string,
            name      TYPE string,
            value     TYPE string,
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
            name       = reader->name
            value      = reader->value ) TO nodes.
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_open.
            DO.
              reader->next\_attribute( ).
              IF reader->node\_type <> if\_sxml\_node=>co\_nt\_attribute.
                EXIT.
              ENDIF.
              APPEND VALUE #(
                node\_type  = \`attribute\`
                name       = reader->name
                value      = reader->value ) TO nodes.
            ENDDO.
          ENDIF.
        ENDDO.
      CATCH cx\_sxml\_parse\_error INTO DATA(parse\_error).
        out->write\_text( parse\_error->get\_text( ) ).
    ENDTRY.
    out->write\_data( nodes ).
    "Push back node
    out->next\_section( \`Push Back one Node\` ).
    reader = cl\_sxml\_string\_reader=>create( xml ).
    TRY.
        DO.
          reader->next\_node( ).
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_final.
            EXIT.
          ENDIF.
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_value AND
             reader->value = 2.
            reader->push\_back( ).
            DO.
              reader->next\_attribute( ).
              IF reader->node\_type <> if\_sxml\_node=>co\_nt\_attribute.
                EXIT.
              ENDIF.
              out->write(
                       |{ reader->name } { reader->value }| ).
            ENDDO.
            reader->next\_node( ).
          ENDIF.
        ENDDO.
      CATCH cx\_sxml\_parse\_error INTO parse\_error.
        out->write\_text( parse\_error->get\_text( ) ).
    ENDTRY.
    "Handling attributes
    out->next\_section( \`Handling Attributes\` ).
    reader = cl\_sxml\_string\_reader=>create( xml ).
    TRY.
        DO.
          reader->next\_node( ).
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_final.
            EXIT.
          ENDIF.
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_open.
            IF reader->name = 'item2'.
              reader->get\_attribute\_value( 'b2' ).
              out->begin\_section( \`Query one Attribute\`
                )->write( |{ reader->name } { reader->value }|
                )->end\_section( ).
            ENDIF.
            DO.
              reader->next\_attribute( ).
              IF reader->node\_type <> if\_sxml\_node=>co\_nt\_attribute.
                EXIT.
              ENDIF.
              IF reader->value = '33'.
                out->begin\_section( \`Reset Node\` ).
                reader->current\_node( ).
                DO.
                  reader->next\_attribute( ).
                  IF reader->node\_type <> if\_sxml\_node=>co\_nt\_attribute.
                    EXIT.
                  ENDIF.
                  out->write( |{ reader->name } { reader->value }| ).
                ENDDO.
                out->end\_section( ).
                EXIT.
              ENDIF.
              IF reader->name = 'a4'.
                out->begin\_section( \`Reading Raw Values\` ).
              ENDIF.
              TRY.
                  reader->next\_attribute\_value(
                    if\_sxml\_value=>co\_vt\_raw ).
                  out->write( |{ reader->name
                             } { reader->value
                             } { reader->value\_raw }| ).
                CATCH cx\_sxml\_parse\_error INTO parse\_error.
                  CONTINUE.
              ENDTRY.
            ENDDO.
          ENDIF.
        ENDDO.
      CATCH cx\_sxml\_parse\_error INTO parse\_error.
        out->write\_text( parse\_error->get\_text( ) ).
    ENDTRY.
    "Skip node
    out->next\_section( \`Skipping a Node and Getting the Subtree\` ).
    reader = cl\_sxml\_string\_reader=>create( xml ).
    DATA(writer) = CAST if\_sxml\_writer(
      cl\_sxml\_string\_writer=>create(  ) ).
    DATA level TYPE i.
    TRY.
        DO.
          reader->next\_node( ).
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_final.
            EXIT.
          ENDIF.
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_open.
            level += 1.
          ELSEIF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_close.
            level -= 1.
          ENDIF.
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_open AND
             level > 2.
            reader->skip\_node( writer ).
            level -= 1.
          ENDIF.
        ENDDO.
      CATCH cx\_sxml\_parse\_error INTO parse\_error.
        out->write\_text( parse\_error->get\_text( ) ).
    ENDTRY.
    DATA(xml\_sub) =
       CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    out->write\_xml( xml\_sub ).
    "Skip node
    out->next\_section( \`Skipping a Node and Getting the Subelements\` ).
    reader = cl\_sxml\_string\_reader=>create( xml ).
    writer = CAST if\_sxml\_writer(
      cl\_sxml\_string\_writer=>create(  ) ).
    writer->open\_element( name = 'subElements' ).
    CLEAR level.
    TRY.
        DO.
          reader->next\_node( ).
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_final.
            EXIT.
          ENDIF.
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_open.
            level += 1.
          ELSEIF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_close.
            level -= 1.
          ENDIF.
          IF reader->node\_type = if\_sxml\_node=>co\_nt\_element\_open AND
             level > 3.
            reader->skip\_node( writer ).
            level -= 1.
          ENDIF.
        ENDDO.
      CATCH cx\_sxml\_parse\_error INTO parse\_error.
        out->write\_text( parse\_error->get\_text( ) ).
    ENDTRY.
    writer->close\_element( ).
    xml\_sub =
       CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    out->write\_xml( xml\_sub ).
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

Description   

A string of XML data is parsed multiple times:

-   In the first parsing, all data is read as usual in a nested loop using the methods NEXT\_NODE and NEXT\_ATTRIBUTES.
-   In the second parsing, the method PUSH\_BACK is used to reset the parser to the element opening for each value node with a specific value and to read the attributes here.
-   The third parsing demonstrates various ways of reading XML data.
    -   First, a specific attribute is read for an element with a specific name using GET\_ATTRIBUTE\_VALUE.
    -   Then an iteration runs across all attributes of all elements without evaluating the elements until a specific value occurs. If the value occurs, the method CURRENT\_NODE is used to reset the parser to the start of the current attribute list and the list is evaluated.
    -   Finally, the method NEXT\_ATTRIBUTE\_VALUE is used to read the value of each attribute as raw data stored in [Base64](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbase64_glosry.htm "Glossary Entry") format. The data is displayed only if this is successful.
-   In the fourth and fifth parsings, the method SKIP\_NODE demonstrates why the hierarchy level of the current node is saved in the helper variable level.
    -   In the first case, the element opening of subitems is exited using SKIP\_NODE. The entire subtree introduced using subitems is parsed and placed in an XML writer. The results are then displayed.
    -   In the second case, the element openings of all subelements of subitems are exited and these are parsed and their content is placed in an XML writer. These elements are located at the same level, which means the associated element opening and the end of element must be added to the writer explicitly.