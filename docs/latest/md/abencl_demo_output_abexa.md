  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Example Output with CL\_DEMO\_OUTPUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_demo_output.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Usage%20of%20CL_DEMO_OUTPUT%2C%20ABENCL_DEMO_OUTPUT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Usage of CL\_DEMO\_OUTPUT

Source Code   

\* Public class definition
CLASS cl\_demo\_output\_usage DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
        REDEFINITION .
ENDCLASS.
\* CCIMP
CLASS demo\_class DEFINITION.
  PUBLIC SECTION.
    TYPES:
    BEGIN OF spfli\_line,
    carrid TYPE spfli-carrid,
    connid TYPE spfli-connid,
    cityfrom TYPE spfli-cityfrom,
    cityto TYPE spfli-cityto,
    END OF spfli\_line,
    spfli\_tab TYPE HASHED TABLE OF spfli\_line
    WITH UNIQUE KEY carrid connid,
    BEGIN OF struct,
    carrname TYPE scarr-carrname,
    spfli TYPE REF TO spfli\_tab,
    END OF struct.
    DATA result TYPE SORTED TABLE OF struct WITH UNIQUE KEY carrname.
    METHODS constructor.
ENDCLASS.
CLASS demo\_class IMPLEMENTATION.
  METHOD constructor.
    SELECT s~carrname, p~carrid, p~connid, p~cityfrom, p~cityto
    FROM scarr AS s
    INNER JOIN spfli AS p
    ON s~carrid = p~carrid
    ORDER BY s~carrname
    INTO TABLE @DATA(itab).
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>) GROUP BY <fs>-carrname.
      INSERT VALUE #( carrname = <fs>-carrname ) INTO TABLE result
      ASSIGNING FIELD-SYMBOL(<line>).
      <line>-spfli = NEW #(
      FOR <wa> IN GROUP <fs> ( CORRESPONDING #( <wa> ) ) ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_output\_usage IMPLEMENTATION.
  METHOD main.
    TRY.
        DATA mode TYPE string VALUE 'HTML'.
        cl\_demo\_input=>new(
         )->add\_text( 'HTML, TEXT, JSON, XML'
         )->add\_field( CHANGING field = mode
         )->request( ).
        mode = to\_upper( mode ).
        out->set\_mode( mode ).
        out->line(
         )->write( 'Example output produced by CL\_DEMO\_OUTPUT'
         )->line( ).
        DATA(number) = 111.
        out->next\_section( 'Elementary Field'
        )->write( number ).
        SELECT SINGLE \*
               FROM scarr
               WHERE carrid = 'UA'
               INTO @FINAL(scarr\_wa).
        out->next\_section( 'Structure with Elementary Components'
        )->write( scarr\_wa ).
        SELECT \*
               FROM scarr
               ORDER BY carrid
               INTO TABLE @FINAL(scarr\_tab).
        out->next\_section( 'Table with Elementary Columns'
        )->write( scarr\_tab ).
        DATA:
          BEGIN OF complex\_structure,
            col1 LIKE number,
            col2 LIKE scarr\_wa,
            col3 LIKE scarr\_tab,
          END OF complex\_structure.
        complex\_structure = VALUE #( col1 = number
                                     col2 = scarr\_wa
                                     col3 = scarr\_tab ).
        out->next\_section( 'Structure with Complex Components'
        )->write( complex\_structure ).
        DATA complex\_tab LIKE STANDARD TABLE OF complex\_structure.
        complex\_tab = VALUE #(
          ( col1 = 1
            col2 = scarr\_tab\[ 1 \]
            col3 = VALUE #( ( LINES OF scarr\_tab FROM 1 TO 3 ) ) )
          ( col1 = 2
            col2 = scarr\_tab\[ 4 \]
            col3 = VALUE #( ( LINES OF scarr\_tab FROM 4 TO 6 ) ) ) ).
        out->next\_section( 'Table with Complex Columns'
        )->write( complex\_tab ).
        DATA tab\_in\_tab LIKE TABLE OF scarr\_tab.
        tab\_in\_tab = VALUE #(
          ( VALUE #( ( LINES OF scarr\_tab FROM 1 TO 3 ) ) )
          ( VALUE #( ( LINES OF scarr\_tab FROM 4 TO 6 ) ) ) ).
        out->next\_section( 'Table in Table'
        )->write( tab\_in\_tab ).
        DATA(oref) = NEW demo\_class( ).
        out->next\_section( 'Referenced Object and Data Object'
        )->write( oref ).
      CATCH cx\_root INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The class shows the output produced by [CL\_DEMO\_OUTPUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_demo_output.htm) for some ABAP data types. The output mode can be entered. More usage of CL\_DEMO\_OUTPUT can be found in many examples of the ABAP Keyword Documentation.