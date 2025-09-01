  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Cheat Sheets](javascript:call_link\('abenabap_blurb.htm'\)) →  [Structures in a Nutshell](javascript:call_link\('abapsheets_structures.htm'\)) → 

Working with Structures

This example demonstrates the syntactical options for working with structures outlined in the ABAP cheat sheet [Structures in a nutshell](javascript:call_link\('abapsheets_structures.htm'\)).

Source Code

REPORT demo\_cs\_structures.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    "Create structured data types.
    TYPES: "Flat structure
      BEGIN OF gty\_struc,
        num1  TYPE i,
        num2  TYPE i,
        char1 TYPE c LENGTH 10,
        char2 TYPE c LENGTH 5,
        pnum  TYPE p LENGTH 8 DECIMALS 2,
      END OF gty\_struc,
      "Structures within deep structure
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE i,
      END OF line1,
      BEGIN OF line2,
        col2 TYPE i,
        col3 TYPE i,
        col4 TYPE i,
      END OF line2.
    CLASS-DATA:
      out TYPE REF TO if\_demo\_output,
      "Flat structure
      gs\_struc TYPE gty\_struc,
      "Deep structure 1
      BEGIN OF gs\_deep1,
        comp1 TYPE c LENGTH 1 VALUE 'W',
        BEGIN OF substruc,
          comp1 TYPE c LENGTH 1 VALUE 'X',
          BEGIN OF comp2,
            col1 TYPE c LENGTH 1 VALUE 'Y',
            col2 TYPE c LENGTH 1 VALUE 'Z',
          END OF comp2,
        END OF substruc,
        itab  TYPE TABLE OF line1 WITH EMPTY KEY,
      END OF gs\_deep1,
      "Deep structure 2
      BEGIN OF gs\_deep2,
        BEGIN OF substruc,
          comp1 TYPE string,
          comp2 TYPE string,
          comp3 TYPE string,
        END OF substruc,
        itab  TYPE TABLE OF line2 WITH EMPTY KEY,
        comp4 TYPE i,
      END OF gs\_deep2,
      "Create itab for display purposes.
      gt\_tab TYPE STANDARD TABLE OF demo\_cs\_dbtab
          WITH NON-UNIQUE KEY key\_field.
    CLASS-METHODS:
      initialize\_dbtabs,
      fill\_deep\_structures,
      select\_from\_dbtab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
out->begin\_section( \`Demo: Structures in a nutshell\`
  )->line( ).
    "Declare structured type locally (flat structure)
    TYPES: BEGIN OF lty\_struc,
             num1  TYPE i,
             num2  TYPE i,
             char1 TYPE c LENGTH 10,
             char2 TYPE c LENGTH 5,
             pnum  TYPE p LENGTH 8 DECIMALS 2,
           END OF lty\_struc.
    "Alternatively, you could also go with below syntax. For better
    "readability, use a chained statement with the colon as above.
    TYPES BEGIN OF gs\_struc\_alt.
    TYPES num1    TYPE i.
    TYPES num2    TYPE i.
    TYPES char1   TYPE c LENGTH 10.
    TYPES char2   TYPE c LENGTH 5.
    TYPES pnum    TYPE p LENGTH 8 DECIMALS 2.
    TYPES END OF gs\_struc\_alt.
    "Create local structure ...
    "a. ... based on a local structured type.
    DATA ls\_struc TYPE lty\_struc.
    "b. Based on global types in the DDIC
    DATA: ls\_glo\_struc TYPE demo\_cs\_struc, "global structure
          ls\_glo\_tab   TYPE spfli, "database table
          ls\_ddic\_view TYPE demo\_flight\_view, "DDIC view
          ls\_cds\_view  TYPE demo\_cds\_flights. "CDS view
    "c. Directly declare data object plus defining the components
    DATA: BEGIN OF ls\_direct\_decl,
            num1  TYPE i,
            num2  TYPE i,
            char1 TYPE c LENGTH 10,
            char2 TYPE c LENGTH 5,
            pnum  TYPE p LENGTH 8 DECIMALS 2,
          END OF ls\_direct\_decl.
    "Alternatively, you could also go with below syntax. For better
    "readability, use a chained statement with the colon as above.
    DATA BEGIN OF ls\_direct\_decl\_alt.
    DATA num1    TYPE i.
    DATA num2    TYPE i.
    DATA char1   TYPE c LENGTH 10.
    DATA char2   TYPE c LENGTH 5.
    DATA pnum    TYPE p LENGTH 8 DECIMALS 2.
    DATA END OF ls\_direct\_decl\_alt.
    "d. Based on another local structured data object
    DATA: ls\_like\_dobj LIKE ls\_struc.
out->next\_section( \`Create structures and structured types\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 1 ) )
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
                source = sy-repid && \`, 74, 123 \` )
  )->line( ).
out->next\_section( \`Variants of structures\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 2 ) ) ).
out->write\_doc( \`1) Flat structure with default values\` ).
    "Flat structure with default values
    DATA: BEGIN OF ls\_flat,
            num1  TYPE i VALUE 1,
            num2  TYPE i VALUE 2,
            char1 TYPE c LENGTH 10 VALUE 'abcdefghij',
            char2 TYPE c LENGTH 5 VALUE 'klmno',
            pnum  TYPE p LENGTH 8 DECIMALS 2 VALUE '123.45',
          END OF ls\_flat.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
                source = sy-repid && \`, 139, 145 \` )
  )->write( ls\_flat ).
out->write\_doc( \`2) Nested structure\` ).
    "Nested structure with default values
    DATA: BEGIN OF ls\_nested\_address,
            BEGIN OF name,
              title      TYPE string VALUE \`Mr.\`,
              first\_name TYPE string VALUE \`Duncan\`,
              surname    TYPE string VALUE \`Pea\`,
            END OF name,
            BEGIN OF street,
              name   TYPE string VALUE \`Vegetable Lane\`,
              number TYPE string VALUE \`11\`,
            END OF street,
            BEGIN OF city,
              zipcode TYPE string VALUE \`349875\`,
              name    TYPE string VALUE \`Botanica\`,
            END OF city,
          END OF ls\_nested\_address.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
                source = sy-repid && \`, 154, 168 \` )
  )->write( ls\_nested\_address ).
out->write\_doc( \`3) Simple deep structure with strings\` ).
    "Simple deep structure with strings and with default values.
    DATA: BEGIN OF ls\_flat\_address,
            name   TYPE string VALUE \`Mr. Duncan Pea\`,
            street TYPE string VALUE \`Vegetable Lane 11\`,
            city   TYPE string VALUE \`349875 Botanica\`,
          END OF ls\_flat\_address.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
                source = sy-repid && \`, 178, 182 \` )
  )->write( ls\_flat\_address ).
out->write\_doc( \`4) Deep structure with internal table as component\` ).
    "Structured type for nested internal table.
    TYPES: BEGIN OF lty\_flights,
             connid    TYPE s\_conn\_id,
             countryfr TYPE land1,
             cityfrom  TYPE s\_from\_cit,
             airpfrom  TYPE s\_fromairp,
             countryto TYPE land1,
             cityto    TYPE s\_to\_city,
             airpto    TYPE s\_toairp,
           END OF lty\_flights.
    "Create deep structure.
    DATA: BEGIN OF ls\_flights,
            carrier      TYPE s\_carr\_id VALUE 'LH',
            carrier\_name TYPE s\_carrname VALUE 'Lufthansa',
            lt\_flights   TYPE TABLE OF lty\_flights WITH EMPTY KEY,
          END OF ls\_flights.
    "Fill nested internal table for the output.
    SELECT \*
      FROM spfli
      WHERE carrid = 'LH'
      INTO CORRESPONDING FIELDS OF TABLE @ls\_flights-lt\_flights
      UP TO 4 ROWS. "#EC CI\_NOORDER
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
                source = sy-repid && \`, 190, 206 \` )
  )->write( ls\_flights
  )->line( ).
out->next\_section( \`Working with structures\`
  )->write\_doc( \`<b>Accessing/Filling structures</b>\`
  )->write\_doc( \`5) Filling structure components\` &&
     \` using the component selector.\` ).
    gs\_struc-num1  = 1.
    gs\_struc-num2  = 2.
    gs\_struc-char1 = 'aaa'.
    gs\_struc-char2 = 'bbb'.
    gs\_struc-pnum  = '333.33'.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 225, 229 \` )
     )->write( gs\_struc ).
out->write\_doc( \`6) Filling structure components \` &&
\`using the VALUE operator.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 3 ) ) ).
    gs\_struc = VALUE #( num1  = 3
                        num2  = 4
                        char1 = 'ccc'
                        char2 = 'ddd'
                        pnum  = '555.55' ).
    ls\_nested\_address = VALUE #(
      name   = VALUE #( title = \`Mrs.\`
                        first\_name = \`Jane\`
                        surname = \`Doe\` )
      street = VALUE #( name  = \`Main Street\`
                        number = 1 )
      city   = VALUE #( zipcode = 12345
                        name = \`London\` ) ).
    ls\_flights = VALUE #(
        carrier      = 'AA'
        carrier\_name = 'American Airlines'
        lt\_flights   = VALUE #( ( connid    = 17 countryfr = 'US'
                                  cityfrom  = 'New York'
                                  airpfrom  = 'JFK'
                                  countryto = 'US'
                                  cityto    = 'San Francisco'
                                  airpto    = 'SFO' )
                                ( connid    = 64
                                  countryfr = 'US'
                                  cityfrom  = 'San Francisco'
                                  airpfrom  = 'SFO'
                                  countryto = 'US'
                                  cityto    = 'New York'
                                  airpto    = 'JFK' ) ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 240, 270 \` )
     )->write( gs\_struc
     )->write( ls\_nested\_address
     )->write( ls\_flights ).
out->write\_doc( \`7) Creating and filling a new structure \` &&
\`using the VALUE operator.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 4 ) ) ).
    DATA(ls\_copy) = VALUE gty\_struc( num1  = 5
                                     num2  = 6
                                     char1 = 'ggg'
                                     char2 = 'hhh'
                                     pnum  = '555.55' ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 283, 287 \` )
     )->write( ls\_copy ).
out->write\_doc( \`8) Accessing individual components.\` ).
    "Assign value of individual component to a variable (flat structure)
    DATA(lv\_copy) = gs\_struc-num1.
    "Assign a value to a component in a nested structure.
    ls\_nested\_address-name-first\_name = 'Emma'.
    "Assign a value to a component in a deep structure.
    ls\_flights-lt\_flights\[ 1 \]-cityto = 'San Fran'.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 295, 302 \` )
  )->write( |lv\_copy: | &&
            |{ lv\_copy }|
  )->write( |ls\_nested\_address-name-first\_name: | &&
            |{ ls\_nested\_address-name-first\_name }|
  )->write( |ls\_flights-lt\_flights\[ 1 \]-cityto: | &&
            |{ ls\_flights-lt\_flights\[ 1 \]-cityto }| ).
out->write\_doc( \`9) Referring to structure components when \` &&
\`creating new data types and data objects.\` ).
    TYPES: lty\_1 TYPE gty\_struc-num1,
           lty\_2 LIKE gs\_struc-num2.
    DATA: lv\_num1 TYPE gty\_struc-num1 VALUE 123,
          lv\_num2 LIKE gs\_struc-num2 VALUE 456.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 316, 320 \` )
  )->write( lv\_num1
  )->write( lv\_num2 ).
out->write\_doc( \`10) Copy contents of a structure to another \` &&
\`one that has the same type.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 5 ) ) ).
    DATA gs\_struc\_2 TYPE gty\_struc.
    gs\_struc\_2 = gs\_struc.
    "Alternative having the same effect but obsolete syntax!
    "MOVE gs\_struc TO gs\_struc\_2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 332, 337 \` )
     )->write( gs\_struc\_2 ).
out->write\_doc( \`11) Copy contents of a structure to another \` &&
\` one that has a different type ...\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 6 ) ) ).
    "Create flat structure with different type and assign
    "default values.
    DATA: BEGIN OF gs\_struc\_diff,
            num1  TYPE i VALUE 111,
            num2  TYPE i VALUE 222,
            char1 TYPE c LENGTH 10 VALUE 'AAA',
            c1    TYPE c LENGTH 1 VALUE 'A',
          END OF gs\_struc\_diff.
    "Copy structure to have the same values for another syntax variant.
    DATA(gs\_struc\_diff2) = gs\_struc\_diff.
    DATA(gs\_struc\_diff3) = gs\_struc\_diff.
out->write\_doc( \`11a) ... using MOVE-CORREPONDING. \`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 7 ) ) ).
    MOVE-CORRESPONDING gs\_struc TO gs\_struc\_diff.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 365, 365 \` )
     )->write( gs\_struc\_diff ).
out->write\_doc( \`11b) ... using the CORREPONDING operator. \`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 8 ) ) ).
    gs\_struc\_diff2   = CORRESPONDING #( gs\_struc ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 375, 375 \` )
     )->write( gs\_struc\_diff2 ).
out->write\_doc( \`11c) ... using the CORREPONDING operator without \` &&
\`initializing the target structure.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 9 ) ) ).
  gs\_struc\_diff3 = CORRESPONDING #( BASE ( gs\_struc\_diff3 ) gs\_struc ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 386, 386 \` )
     )->write( gs\_struc\_diff3 ).
out->write\_doc( \`12) Copy contents of a deep structure to another one.\`
   )->write\_doc( 'Content of deep structures:'
   )->write( gs\_deep1
   )->write( gs\_deep2 ).
out->write\_doc( \`12a) MOVE-CORRESPONDING without additions.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 10 ) ) ).
    MOVE-CORRESPONDING gs\_deep1 TO gs\_deep2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
                source = sy-repid && \`, 401, 401 \` )
   )->write( gs\_deep2 ).
    fill\_deep\_structures( ).
out->write\_doc( \`12b) MOVE-CORRESPONDING with addition \` &&
\`EXPANDING NESTED TABLES.\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 11 ) ) ).
    MOVE-CORRESPONDING gs\_deep1 TO gs\_deep2 EXPANDING NESTED TABLES.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
                source = sy-repid && \`, 414, 414 \` )
)->write( gs\_deep2 ).
    fill\_deep\_structures( ).
out->write\_doc( \`12c) MOVE-CORRESPONDING with addition\` &&
\` KEEPING TARGET LINES.\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 12 ) ) ).
    MOVE-CORRESPONDING gs\_deep1 TO gs\_deep2 KEEPING TARGET LINES.
    out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 427, 427 \` )
    )->write( gs\_deep2 ).
    fill\_deep\_structures( ).
out->write\_doc( \`12d) MOVE-CORRESPONDING with addition \` &&
\`EXPANDING NESTED TABLES KEEPING TARGET LINES.\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 13 ) ) ).
    MOVE-CORRESPONDING gs\_deep1 TO gs\_deep2
      EXPANDING NESTED TABLES KEEPING TARGET LINES.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 440, 441 \` )
  )->write( gs\_deep2 ).
    fill\_deep\_structures( ).
out->write\_doc( \`12e) CORRESPONDING operator without addition.\` &&
\`\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 14 ) ) ).
    gs\_deep2 = CORRESPONDING #( gs\_deep1 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 454, 454 \` )
  )->write( gs\_deep2 ).
    fill\_deep\_structures( ).
out->write\_doc( \`12f) CORRESPONDING operator with the addition\` &&
\` DEEP.\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 15 ) ) ).
    gs\_deep2 = CORRESPONDING #( DEEP gs\_deep1 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 467, 467 \` )
  )->write( gs\_deep2 ).
    fill\_deep\_structures( ).
out->write\_doc( \`12g) CORRESPONDING operator with the addition\` &&
\` BASE.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 16 ) ) ).
    gs\_deep2 = CORRESPONDING #( BASE ( gs\_deep2 ) gs\_deep1 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 480, 480 \` )
  )->write( gs\_deep2 ).
    fill\_deep\_structures( ).
out->write\_doc( \`12h) CORRESPONDING operator with the additions \` &&
\`DEEP BASE.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 17 ) ) ).
    gs\_deep2 = CORRESPONDING #( DEEP BASE ( gs\_deep2 ) gs\_deep1 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
      source = sy-repid && \`, 493, 493 \` )
  )->write( gs\_deep2 ).
    fill\_deep\_structures( ).
out->write\_doc( \`12i) CORRESPONDING operator with the additions \` &&
\`APPENDING BASE.\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 18 ) ) ).
    gs\_deep2 = CORRESPONDING #( APPENDING BASE ( gs\_deep2 ) gs\_deep1 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 506, 506 \` )
  )->write( gs\_deep2 ).
    fill\_deep\_structures( ).
out->write\_doc( \`12j) CORRESPONDING operator with the additions \` &&
\`DEEP APPENDING BASE.\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 19 ) ) ).
    gs\_deep2 = CORRESPONDING #( DEEP APPENDING BASE ( gs\_deep2 )
                                gs\_deep1 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 519, 520 \` )
  )->write( gs\_deep2 ).
out->write\_doc( \`13) Clearing individual components of structures \` &&
\`and the complete structure.\` ).
    "Clear individual component
    CLEAR gs\_struc-char1.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 529, 530 \` )
    )->write( gs\_struc ).
    "Clear the whole structure
    CLEAR gs\_struc.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 536, 537 \` )
    )->write( gs\_struc ).
out->line(
)->next\_section( \`Structures in use in the context of tables\`
)->write\_doc( \`14) Read line from a database table into a structure...\`
)->write\_doc( \`14a) ... that has a matching type.\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
              cl\_demo\_output\_helper=>get\_info\_html( 20 ) ) ).
    SELECT SINGLE FROM spfli
      FIELDS \*
      WHERE carrid = 'LH'
      INTO @DATA(ls\_spfli).  "#EC WARNOK
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 550, 553 \` )
  )->write( ls\_spfli ).
out->write\_doc( \`14b) ... that has a different type.\` ).
    "Create structure having a different type.
    DATA: BEGIN OF ls\_spfli\_diff,
            carrid    TYPE  s\_carr\_id,
            connid    TYPE s\_conn\_id,
            countryfr TYPE  land1,
            cityfrom  TYPE s\_from\_cit,
            countryto TYPE  land1,
            cityto    TYPE s\_to\_city,
            fldate    TYPE s\_date,
          END OF ls\_spfli\_diff.
    SELECT SINGLE FROM spfli
      FIELDS \*
      WHERE carrid = 'UA'
      INTO CORRESPONDING FIELDS OF @ls\_spfli\_diff.  "#EC WARNOK
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 572, 575 \` )
  )->write( ls\_spfli\_diff ).
out->write\_doc( \`15) Reading a line from an internal table into a \` &&
\`structure ...\`
  )->write\_doc( \`15a) ... using a SELECT statement.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                cl\_demo\_output\_helper=>get\_info\_html( 21 ) ) ).
    "Create and fill internal table to be read from.
    DATA itab TYPE TABLE OF spfli WITH EMPTY KEY.
    SELECT FROM spfli
      FIELDS \*
      WHERE carrid = 'LH' ORDER BY PRIMARY KEY
      INTO TABLE @itab
      UP TO 4 ROWS.
    SELECT SINGLE FROM @itab AS itab
      FIELDS \*
      WHERE carrid = 'LH'
      INTO @DATA(ls\_select\_itab).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 595, 598 \` )
    )->write( ls\_select\_itab ).
out->write\_doc( \`15b) ... using a READ TABLE statement.\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 22 ) ) ).
  READ TABLE itab INTO DATA(ls\_read\_table) INDEX 2.
  READ TABLE itab ASSIGNING FIELD-SYMBOL(<fs1>) INDEX 3.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 609, 611 \` )
  )->write( ls\_read\_table
  )->write( <fs1> ).
out->write\_doc( \`15c) ... using a table expression.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 23 ) ) ).
    DATA(ls\_table\_exp) = itab\[ 3 \].
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 622, 622 \` )
    )->write( ls\_table\_exp ).
out->write\_doc( \`16) Sequentially reading a line from ...\`
  )->write\_doc( \`16a) ... a database table into a structure.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                cl\_demo\_output\_helper=>get\_info\_html( 24 ) ) ).
    SELECT FROM spfli
      FIELDS \*
      WHERE carrid = 'AZ'
      INTO @DATA(ls\_sel\_loop).
        IF sy-subrc = 0.
          APPEND  ls\_sel\_loop TO itab.
        ENDIF.
    ENDSELECT.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 633, 640 \` )
  )->write( itab ).
out->write\_doc( \`16b) ... an internal table into a structure.\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 25 ) ) ).
   LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs\_loop>) WHERE carrid <> 'LH'.
      <fs\_loop>-carrid = 'XY'.
    ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 650, 652 \` )
  )->write( itab ).
out->write\_doc( \`17) Inserting an individual row from a structure\` &&
\` into a database table\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 26 ) )
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 674, 674 \` )
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 684, 690 \` ) ).
    DATA ls\_struc\_db TYPE demo\_cs\_dbtab.
    ls\_struc\_db = VALUE #( key\_field = 1
                           char1     = 'aaa'
                           char2     = 'bbb'
                           num1      = 2
                           num2      = 3 ).
    INSERT INTO demo\_cs\_dbtab VALUES @ls\_struc\_db.
    "Structure filled anew with new primary key to
    "avoid duplicate key error.
    ls\_struc\_db = VALUE #( key\_field = 2
                           char1     = 'ccc'
                           char2     = 'ddd'
                           num1      = 4
                           num2      = 5 ).
    INSERT demo\_cs\_dbtab FROM @ls\_struc\_db.
    INSERT demo\_cs\_dbtab FROM @( VALUE #( key\_field = 3
                                          char1     = 'eee'
                                          char2     = 'fff'
                                          num1      = 6
                                          num2      = 7 ) ).
    select\_from\_dbtab( ).
out->write\_doc( \`18) Updating an individual row from a structure\` &&
\` in a database table.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 27 ) )
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 707, 713 \` ) ).
    ls\_struc\_db = VALUE #( key\_field = 2
                           char1     = 'ggg'
                           char2     = 'hhh'
                           num1      = 8
                           num2      = 9 ).
    UPDATE demo\_cs\_dbtab FROM @ls\_struc\_db.
    UPDATE demo\_cs\_dbtab FROM @( VALUE #( key\_field = 3
                                          char1     = 'iii'
                                          char2     = 'jjj'
                                          num1      = 10
                                          num2      = 11 ) ).
    select\_from\_dbtab( ).
out->write\_doc( \`20) Excursion: Updating an individual row from a \` &&
\`structure in a database table without overwriting specific components\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 28 ) )
)->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 725, 730 \` ) ).
    SELECT SINGLE \*
      FROM demo\_cs\_dbtab
      WHERE key\_field = 2
      INTO @DATA(wa).
    UPDATE demo\_cs\_dbtab FROM @( VALUE #( BASE wa char2 = 'zzz' ) ).
   select\_from\_dbtab( ).
out->write\_doc( \`21) Updating or creating an individual\` &&
\` row in a database table from a structure using MODIFY.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 29 ) )
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 749, 749 \` )
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 757, 763 \` ) ).
    ls\_struc\_db = VALUE #( key\_field = 1
                           char1     = 'kkk'
                           char2     = 'lll'
                           num1      = 12
                           num2      = 13 ).
    MODIFY demo\_cs\_dbtab FROM @ls\_struc\_db.
    ls\_struc\_db = VALUE #( key\_field = 4
                           char1     = 'mmm'
                           char2     = 'nnn'
                           num1      = 14
                           num2      = 15 ).
    MODIFY demo\_cs\_dbtab FROM @ls\_struc\_db.
    MODIFY demo\_cs\_dbtab FROM @( VALUE #( key\_field = 5
                                          char1     = 'ooo'
                                          char2     = 'ppp'
                                          num1      = 16
                                          num2      = 17 ) ).
select\_from\_dbtab( ).
out->write\_doc( \`22) Adding rows to and updating individual rows\` &&
\` in an internal table from a structure \`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 30 ) ) ).
    ls\_struc\_db = VALUE #( key\_field = 6
                           char1     = 'zzz'
                           char2     = 'yyy'
                           num1      = 18
                           num2      = 19 ).
    INSERT ls\_struc\_db INTO TABLE gt\_tab.
    INSERT VALUE #( key\_field = 7
                    char1     = 'xxx'
                    char2     = 'www'
                    num1      = 20
                    num2      = 21 ) INTO TABLE gt\_tab.
    ls\_struc\_db = VALUE #( key\_field = 8
                           char1     = 'vvv'
                           char2     = 'uuu'
                           num1      = 22
                           num2      = 23 ).
    APPEND ls\_struc\_db TO gt\_tab.
    APPEND VALUE #( key\_field = 9
                    char1     = 'ttt'
                    char2     = 'sss'
                    num1      = 24
                    num2      = 25 ) TO gt\_tab.
    ls\_struc\_db = VALUE #( key\_field = 1
                           char1     = 'rrr'
                           char2     = 'qqq'
                           num1      = 26
                           num2      = 27 ).
    MODIFY TABLE gt\_tab FROM ls\_struc\_db.
    MODIFY TABLE gt\_tab FROM VALUE #( key\_field = 2
                                      char1     = 'ppp'
                                      char2     = 'ooo'
                                      num1      = 28
                                      num2      = 29 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 778, 784 \` )
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 793, 799 \` )
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 807, 813 \` )
    )->write( gt\_tab ).
out->write\_doc( \`23) Excursion: Including structures\`
)->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
                    cl\_demo\_output\_helper=>get\_info\_html( 31 ) ) ).
    TYPES: BEGIN OF name\_type,
              title   TYPE string,
              prename TYPE string,
              surname TYPE string,
           END OF name\_type,
           BEGIN OF street\_type,
              name   TYPE string,
              number TYPE string,
           END OF street\_type,
           BEGIN OF city\_type,
              zipcode TYPE string,
              name    TYPE string,
           END OF city\_type.
      DATA: city\_struc TYPE city\_type.
    TYPES BEGIN OF address\_type.
      INCLUDE TYPE name\_type AS name.
      INCLUDE TYPE street\_type AS street RENAMING WITH SUFFIX \_street.
      INCLUDE STRUCTURE city\_struc AS city RENAMING WITH SUFFIX \_city.
    TYPES END OF address\_type.
    DATA: name    TYPE name\_type,
          address TYPE address\_type.
    name-title = \`Mr.\`.
    name-prename = \`Duncan\`.
    name-surname = \`Pea\`.
    address-name = name.
    address-street-name = \`Vegetable Lane\`.
    address-street-number = \`11\`.
    address-zipcode\_city = \`349875\`.
    address-name\_city = \`Botanica\`.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
       source = sy-repid && \`, 827, 859 \` )
  )->write( address ).
    out->display( ).
  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
    fill\_deep\_structures( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_cs\_dbtab.    "#EC CI\_NOWHERE
  ENDMETHOD.
  METHOD fill\_deep\_structures.
    "Clear all contents of gs\_deep2.
    CLEAR gs\_deep2.
    "Fill nested tables in deep structures.
    gs\_deep2-substruc = VALUE #( comp1 = \`aaa\`
                                 comp2 = \`bbb\`
                                 comp3 = \`ccc\`).
    gs\_deep1-itab = VALUE #(
      ( col1 = 111 col2 = 222 )
      ( col1 = 333 col2 = 444
      ) ).
    gs\_deep2-itab = VALUE #(
      ( col2 = 1 col3 = 2 col4 = 3 )
      ( col2 = 4 col3 = 5 col4 = 6 )
      ( col2 = 7 col3 = 8 col4 = 9 )
      ).
    "Fill individual component that is not shared by both structures.
    gs\_deep2-comp4 = 999.
  ENDMETHOD.
  METHOD select\_from\_dbtab.
    SELECT FROM demo\_cs\_dbtab
      FIELDS \*
      WHERE key\_field <> 0
      ORDER BY key\_field
      INTO TABLE @gt\_tab.
    out->write( gt\_tab ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The output shows the outcome of various ways about how to work with structures. Find comments in the output explaining the context and details. Basically, all variants described in the ABAP cheat sheet [Structures in a nutshell](javascript:call_link\('abapsheets_structures.htm'\)) are covered and more:

-   Creating structures and structured types
-   Variants of structures
-   Accessing components of structures
-   Filling structures
-   Clearing structures
-   Structures in use in the context of tables
-   Excursion: Including structures