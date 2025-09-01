  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Cheat Sheets](javascript:call_link\('abenabap_blurb.htm'\)) →  [Working with Internal Tables](javascript:call_link\('abapsheets_internal_tables.htm'\)) → 

Working with Internal Tables

This example demonstrates all syntactical options for working with internal tables outlined in the ABAP cheat sheet [Internal Tables](javascript:call_link\('abapsheets_internal_tables.htm'\)).

Source Code

REPORT demo\_cs\_itab.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    "Create structured data types.
    TYPES: BEGIN OF struc,
             key\_field TYPE i,
             char1     TYPE c LENGTH 10,
             char2     TYPE c LENGTH 10,
             num1      TYPE i,
             num2      TYPE i,
           END OF struc,
           BEGIN OF struc\_num,
             key\_field TYPE i,
             num1      TYPE i,
             num2      TYPE i,
           END OF struc\_num,
           BEGIN OF nested1,
             key\_field TYPE i,
             char1     TYPE c LENGTH 10,
             tab       TYPE STANDARD TABLE OF struc\_num WITH EMPTY KEY,
           END OF nested1,
           BEGIN OF nested2,
             key\_field TYPE i,
             char2     TYPE c LENGTH 10,
             tab       TYPE STANDARD TABLE OF struc WITH EMPTY KEY,
           END OF nested2,
           BEGIN OF ty\_tab,
             key\_field TYPE i,
             char1     TYPE char10,
             num1      TYPE i,
             numlong   TYPE int8,
           END   OF ty\_tab,
"Declare internal table types.
ty\_numbers TYPE STANDARD TABLE OF i WITH EMPTY KEY,
ty\_itab TYPE STANDARD TABLE OF struc
          WITH NON-UNIQUE KEY key\_field,
tab\_type TYPE TABLE OF struc,
ty\_char2 TYPE STANDARD TABLE OF char10 WITH EMPTY KEY,
ty\_itab\_for TYPE STANDARD TABLE OF ty\_tab WITH EMPTY KEY,
tt1 TYPE STANDARD TABLE OF struc\_num WITH NON-UNIQUE KEY key\_field,
tt2 TYPE TABLE OF demo\_cs\_dbtab2 WITH NON-UNIQUE KEY key\_field,
tt3 TYPE SORTED TABLE OF struc
      WITH UNIQUE KEY primary\_key COMPONENTS key\_field
      WITH NON-UNIQUE SORTED KEY sec\_key COMPONENTS num1,
tt4 TYPE SORTED TABLE OF struc WITH UNIQUE KEY primary\_key ALIAS pkey
      COMPONENTS key\_field char1
      WITH NON-UNIQUE SORTED KEY sec\_key COMPONENTS num1 num2,
tt5 TYPE TABLE OF struc WITH EMPTY KEY,
tt6 TYPE SORTED TABLE OF struc\_num WITH UNIQUE KEY key\_field,
tt7 TYPE STANDARD TABLE OF nested1 WITH EMPTY KEY,
tt8 TYPE STANDARD TABLE OF nested2 WITH EMPTY KEY,
tt9 TYPE SORTED TABLE OF struc WITH NON-UNIQUE KEY key\_field,
tt10 TYPE SORTED TABLE OF struc\_num WITH UNIQUE KEY key\_field.
    CLASS-DATA:
      out          TYPE REF TO if\_demo\_output,
      lv\_struc     TYPE struc,
      "Declare internal tables.
      itab         TYPE ty\_itab,
      itab2        TYPE ty\_itab,
      itab3        TYPE tt1,
      itab4        TYPE tt2,
      itab5        TYPE tt3,
      itab6        TYPE tt4,
      itab7        TYPE tt5,
      itab8        TYPE ty\_itab\_for,
      itab\_num     TYPE tt6,
      itab\_nested1 TYPE tt7,
      itab\_nested2 TYPE tt8,
      itab\_sorted  TYPE tt9,
      extract      TYPE tt10.
    CLASS-METHODS:
      initialize\_dbtabs,
      fill\_dbtabs,
      fill\_itabs,
      fill\_more\_itabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
         \`Demo: Working with Internal Tables\`
      )->line(
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
         cl\_demo\_output\_helper=>get\_info\_html( number = 1 ) ) ).
\*--------------------------------\*
\*---- Create internal tables ----\*
\*--------------------------------\*
"Definition of internal table
"1. Define line type locally
"If the type (e.g. from a structure of table) is globally
"available in the DDIC (e.g. demo\_cs\_struc or demo\_cs\_dbtab),
"a local definition is irrelevant.
TYPES: BEGIN OF ls\_struc,
         key\_field TYPE i,
         char1     TYPE c LENGTH 10,
         char2     TYPE c LENGTH 10,
         num1      TYPE i,
         num2      TYPE i,
       END OF ls\_struc.
"2. Define table type (including the access type and key information)
"Irrelevant if the type is globally available in the DDIC.
TYPES:
"standard table with primary non-unique key
tt\_st TYPE STANDARD TABLE OF ls\_struc WITH NON-UNIQUE KEY key\_field,
"standard table with empty key
tt\_st2 TYPE STANDARD TABLE OF ls\_struc WITH EMPTY KEY,
"standard table with default key (in this case, the key
"is composed of non-numeric data types)
tt\_st3 TYPE STANDARD TABLE OF ls\_struc WITH DEFAULT KEY,
"sorted table with primary non-unique key
tt\_so TYPE SORTED TABLE OF ls\_struc
  WITH NON-UNIQUE KEY key\_field,
"hashed table with primary unique key
tt\_ha TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY key\_field,
"hashed table with primary unique key and explicitly
"defining the implicit primary\_key (Note: it is the same as tt\_ha)
tt\_ha2 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key COMPONENTS key\_field,
"hashed table with unique key composed of the whole table line
tt\_ha3 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key COMPONENTS table\_line,
"hashed table with primary unique key and secondary non-unique
"sorted key
tt\_ha4 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY key\_field
  WITH NON-UNIQUE SORTED KEY skey COMPONENTS char1,
"line type: global structure from DDIC
tt\_st4 TYPE STANDARD TABLE OF demo\_cs\_struc
  WITH NON-UNIQUE KEY key\_field,
"line type: global table from DDIC
tt\_st5 TYPE STANDARD TABLE OF demo\_cs\_dbtab
  WITH NON-UNIQUE KEY key\_field,
"line type: numeric data type
tt\_st6 TYPE STANDARD TABLE OF i WITH EMPTY KEY,
"line type: string data type
tt\_st7 TYPE STANDARD TABLE OF string WITH EMPTY KEY,
"type definition using LIKE based on a data object
"(in this case another internal table)
tt\_like LIKE TABLE OF itab,
"type defining primary key and two secondary keys
tt\_ha\_skey TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key COMPONENTS key\_field char1
  WITH NON-UNIQUE SORTED KEY skey COMPONENTS num1
  WITH NON-UNIQUE SORTED KEY skey2 COMPONENTS num2,
"type defining primary key with an alias and a secondary key
tt\_ha\_skey2 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key ALIAS pkey COMPONENTS key\_field char1
  WITH NON-UNIQUE SORTED KEY skey COMPONENTS num1,
"type defining primary key with an alias and a secondary key
"with an alias
tt\_ha\_skey3 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key ALIAS pkey COMPONENTS key\_field char1
  WITH NON-UNIQUE SORTED KEY skey ALIAS akey COMPONENTS num1.
"3. Create internal tables
"a. from local/global (table) type -> recommended way
DATA: itab\_st\_a1 TYPE tt\_st,
      itab\_st\_a2 TYPE tt\_st2,
      itab\_st\_a3 TYPE tt\_st3,
      "from global DDIC table (access type + key info is taken over).
      itab\_st\_a4 TYPE demo\_cs\_dbtab,
      itab\_ha\_a1 TYPE tt\_ha4.
"b. Alternatives, e. g. using a short form or "saving" the extra
"creation of the type and include the table category and key info
"in the data declaration directly.
DATA: itab\_st\_b1 TYPE STANDARD TABLE OF ls\_struc,
      "Declaration from DDIC table by specifying e. g. a different
      "table category.
      itab\_st\_b3 TYPE SORTED TABLE OF demo\_cs\_dbtab
        WITH NON-UNIQUE KEY key\_field,
      "Declaration from a global DDIC structure.
      itab\_st\_b4 TYPE STANDARD TABLE OF demo\_cs\_struc,
      "Popular short form for declaring standard tables.
      "Same as itab\_st\_b4.
      itab\_st\_b5 TYPE TABLE OF demo\_cs\_struc,
      "Declaration in one go. Same as itab\_ha\_a1.
      itab\_ha\_b1 TYPE HASHED TABLE OF ls\_struc
       WITH UNIQUE KEY key\_field WITH NON-UNIQUE SORTED KEY skey
        COMPONENTS char1.
  out->next\_section( \`Declare internal tables\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
                  source = sy-repid && \`, 101, 215 \` )
    )->line( ).
\*--------------------------\*
\*---- Fill itabs ----------\*
\*--------------------------\*
out->next\_section( \`Fill internal tables\` ).
out->write\_doc( \`1) Add one line from an existing structure using\` &&
\` the VALUE operator.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 2 ) ) ).
    lv\_struc = VALUE #( key\_field = 1 char1 = 'aaa' char2 = 'bbb'
                        num1 = 1 num2 = 2 ).
    itab = VALUE #( ( lv\_struc ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
                  source = sy-repid && \`, 236, 236 \` )
  )->write( itab ).
out->write\_doc( \`2) Add one line by directly adding it using\` &&
\` the VALUE operator.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 3 ) ) ).
    itab = VALUE #( ( key\_field = 3
                      char1     = 'eee'
                      char2     = 'fff'
                      num1      = 4
                      num2      = 5 ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 247, 251 \` )
  )->write( itab ).
out->write\_doc( \`3) Create a new itab inline and add a line \` &&
\`using the VALUE operator and specifiying the line type.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 4 ) ) ).
    DATA(some\_itab) = VALUE ty\_itab( ( key\_field = 3
                                       char1     = 'eee'
                                       char2     = 'fff'
                                       num1      = 4
                                       num2      = 5 ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 262, 266 \` )
  )->write( some\_itab ).
out->write\_doc( \`4) Add several lines and delete existing table\` &&
\` contents using the VALUE operator.\` ).
    itab = VALUE #(
        ( key\_field = 4 char1 = 'ggg' char2 = 'hhh' num1 = 5 num2 = 6 )
        ( key\_field = 5 char1 = 'iii' char2 = 'jjj' num1 = 6 num2 = 7 )
        ( key\_field = 6 char1 = 'kkk' char2 = 'lll' num1 = 7 num2 = 8 )
                  ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 275, 279 \` )
  )->write( itab ).
out->write\_doc( \`5) Add several lines and keep existing table\` &&
\` contents using the VALUE operator and the BASE addition.\` ).
    itab = VALUE #( BASE itab ( key\_field = 7 char1 = 'mmm'
                                char2 = 'nnn' num1 = 8 num2 = 9 )
                              ( key\_field = 8 char1 = 'ooo'
                                char2 = 'ppp' num1 = 9 num2 = 10 ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 288, 291 \` )
  )->write( itab ).
out->write\_doc( \`6) Copy contents from another table that has\` &&
\` the same line type using "=". Existing contents are deleted.\` ).
    "Fill another table to copy data from.
    itab2 = VALUE #( ( key\_field = 9 char1 = 'qqq' char2 = 'rrr'
                       num1 = 10 num2 = 11 )
                     ( key\_field = 10 char1 = 'sss' char2 = 'ttt'
                       num1 = 11 num2 = 12 )
                     ( key\_field = 11 char1 = 'uuu' char2 = 'vvv'
                       num1 = 12 num2 = 13 ) ).
    itab = itab2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 308, 308 \` )
     )->write( itab ).
    CLEAR itab.
out->write\_doc( \`7) Excursion: Copy contents - how was it done\` &&
\` in former times? DO NOT USE! Obsolete syntax.\` ).
    "Obsolete Syntax.
    MOVE itab2 TO itab.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 319, 320 \` )
  )->write( itab ).
out->write\_doc( \`8) Copy contents from another table that has \` &&
\`a different line type and delete existing table contents using the\` &&
\` CORRESPONDING operator.\` ).
    "Fill table that has differet line type.
    itab3 = VALUE #(  ( key\_field = 11 num1 = 12 num2 = 13  )
                      ( key\_field = 12 num1 = 13 num2 = 14  ) ).
    itab = CORRESPONDING #( itab3 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 334, 334 \` )
  )->write( itab ).
    CLEAR itab.
out->write\_doc( \`9) Copy contents from another table that has a \` &&
\`different line type and delete existing table contents using \` &&
\`MOVE-CORRESPONDING ... TO ...\` ).
    MOVE-CORRESPONDING itab3 TO itab.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 346, 346 \` )
  )->write( itab ).
out->write\_doc( \`10) Copy contents from another table that has a\` &&
\` different line type and keep existing table contents using the\` &&
\` CORRESPONDING operator with the BASE addition.\`).
    itab = CORRESPONDING #( BASE ( itab ) itab3 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 356, 356 \` )
     )->write( itab ).
out->write\_doc( \`11) Copy contents from another table that has a\` &&
\` different line type and keep existing table contents using \` &&
\`MOVE-CORRESPONDING ... TO ... KEEPING TARGET LINES.\` ).
    MOVE-CORRESPONDING itab3 TO itab KEEPING TARGET LINES.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
      source = sy-repid && \`, 366, 366 \` )
  )->write( itab ).
out->write\_doc( \`12) Select multiple rows from a database table \` &&
\`into an internal table.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 5 ) ) ).
    fill\_dbtabs( ). "Fill demo db tab to have some data to display.
    SELECT FROM demo\_cs\_dbtab
      FIELDS key\_field, char1, char2, num1, num2
      WHERE num1 > 3
      INTO TABLE @DATA(itab\_select1).
    IF sy-subrc = 0.
    out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 379, 382 \` )
      )->write( itab\_select1 ).
    ELSE.
      out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 379, 382 \` )
        )->write\_doc( \`Failure.\` ).
    ENDIF.
out->write\_doc( \`13) Sequentially add multiple rows from \` &&
\`a database table to an internal table.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 6 ) ) ).
    SELECT FROM demo\_cs\_dbtab
      FIELDS key\_field, char1, char2, num1, num2
      WHERE num1 > 3
      INTO @DATA(struc\_select).
      IF sy-subrc = 0.
        APPEND struc\_select TO itab.
      ENDIF.
    ENDSELECT.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 399, 407 \` )
   )->write( itab ).
out->write\_doc( \`14) Add multiple rows from a database table to an \` &&
\`internal table that has a different line type than the database\` &&
\` table and keep existing table contents.\` ).
    SELECT FROM demo\_cs\_dbtab2
      FIELDS \*
      WHERE num1 > 10
      APPENDING CORRESPONDING FIELDS OF TABLE @itab.
    IF sy-subrc = 0.
    out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 417, 420 \` )
      )->write( itab ).
    ELSE.
    out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 417, 420 \` )
      )->write( \`Failure.\` ).
    ENDIF.
out->write\_doc( \`15) Add multiple rows from a database table to an \` &&
\`internal table that has a different line type than the database\` &&
\` table and delete existing table contents.\` ).
    SELECT FROM demo\_cs\_dbtab2
      FIELDS \*
      WHERE num1 > 10
      INTO CORRESPONDING FIELDS OF TABLE @itab.
    IF sy-subrc = 0.
    out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 436, 439 \` )
      )->write( itab ).
    ELSE.
    out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 436, 439 \` )
      )->write( \`Failure.\` ).
    ENDIF.
out->write\_doc( \`16) Add multiple rows from an internal table to an\` &&
\` internal table.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 7 ) ) ).
    SELECT key\_field, char1, char2, num1, num2
      FROM @itab2 AS itab2\_alias
      INTO TABLE @DATA(itab2\_clone).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 456, 458 \` )
  )->write( itab2\_clone ).
out->write\_doc( \`17) Combine data of multiple tables into an\` &&
\` internal table using an inner join:\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 8 ) ) ).
    "Fill itab to be selected from anew and overwrite existing contents.
    itab =  VALUE #( ( key\_field = 500 char1 = 'uuu' char2 = 'vvv'
                       num1 = 501 num2 = 502 )
                     ( key\_field = 600 char1 = 'www' char2 = 'xxx'
                       num1 = 601 num2 = 602 ) ).
    SELECT itab\_alias1~key\_field, itab\_alias1~char2,
           demo\_cs\_dbtab2~numlong
      FROM @itab AS itab\_alias1
      INNER JOIN demo\_cs\_dbtab2
        ON itab\_alias1~key\_field = demo\_cs\_dbtab2~key\_field
      INTO TABLE @DATA(join\_result).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 475, 479 \` )
  )->write( join\_result ).
out->write\_doc( \`18) Fill internal table \` &&
\`using a subquery (1):\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 9 ) ) ).
    SELECT key\_field, char1, numlong
      FROM demo\_cs\_dbtab2
      WHERE char1 NOT IN ( 'iii', 'mmm', 'ooo', 'ppp' )
      INTO TABLE @DATA(subquery\_result1).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 491, 494 \` )
  )->write( subquery\_result1 ).
out->write\_doc( \`19) Fill internal table \` &&
\`using a subquery (2):\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 10 ) ) ).
    SELECT key\_field, numlong
      FROM demo\_cs\_dbtab2
      WHERE EXISTS
         ( SELECT 'X' FROM @itab AS itab\_alias2
           WHERE key\_field = demo\_cs\_dbtab2~key\_field )
      INTO TABLE @DATA(subquery\_result2).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 505, 510 \` )
  )->write( subquery\_result2 ).
out->write\_doc( \`20) Fill internal table from a table depending \` &&
\`on the existence of data in another internal table using the\` &&
\` addition FOR ALL ENTRIES:\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 11 ) ) ).
    IF ( 0 < lines( itab ) ).
    SELECT key\_field, char1, numlong
      FROM demo\_cs\_dbtab2
      FOR ALL ENTRIES IN @itab
      WHERE key\_field = @itab-key\_field
      INTO TABLE @DATA(select\_result).
    ENDIF.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 522, 528 \` )
  )->write( select\_result ).
out->write\_html( \`<b>Add lines using APPEND</b>\`
  )->write\_doc( \`21) Append structure to internal table.\` ).
    APPEND VALUE #( key\_field = 13 char1 = 'yyy' char2 = 'zzz'
                    num1 = 14 num2 = 15 ) TO itab.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 538, 539 \` )
  )->write( itab ).
out->write\_doc( \`22) Append initial line.\` ).
    APPEND INITIAL LINE TO itab.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 547, 547 \` )
  )->write( itab ).
out->write\_doc( \`23) Append lines of an internal table to\` &&
\` another one.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 12 ) ) ).
    APPEND LINES OF itab2 TO itab.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 558, 558 \` )
  )->write( itab ).
out->write\_doc( \`24) Append lines of an internal table to\` &&
\` another one by specifying the index range.\` ).
    APPEND LINES OF itab2 FROM 2 TO 3 TO itab.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 567, 567 \` )
  )->write( itab ).
out->write\_html( \`<b>Add lines using INSERT</b>\` ).
out->write\_doc( \`25) Insert a structure into\` &&
\` an internal table.\` ).
    INSERT VALUE #( key\_field = 14 char1 = 'aaa' char2 = 'bbb'
                    num1 = 15 num2 = 16 ) INTO TABLE itab2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 578, 579 \` )
  )->write( itab2 ).
out->write\_doc( \`26) Insert initial line into\` &&
\` an internal table.\` ).
    INSERT INITIAL LINE INTO TABLE itab2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 588, 588 \` )
  )->write( itab2 ).
out->write\_doc( \`27) Insert lines of an internal table\` &&
\` into another one.\` ).
    INSERT LINES OF itab2\_clone INTO TABLE itab2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 597, 597 \` )
  )->write( itab2 ).
out->write\_doc( \`28) Insert lines of an internal table\` &&
\` into another one by specifying the index range.\` ).
    INSERT LINES OF itab FROM 2 TO 3 INTO TABLE itab2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 606, 606 \` )
  )->write( itab2 ).
out->write\_doc( \`29) Insert lines of an internal table\` &&
\` into another one at a specific position (and by \` &&
\` specifying the index range, too).\` ).
    INSERT LINES OF itab FROM 1 TO 2 INTO itab2 INDEX 2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 616, 616 \` )
  )->write( itab2 ).
out->write\_html(  \`<b>30) Insert data into internal table using\` &&
\` the COLLECT statement</b>\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 13 ) ) ).
    "Fill itab to have data to work with.
    itab\_num = VALUE #( ( key\_field = 1 num1 = 2 num2 = 3 )
                        ( key\_field = 2 num1 = 4 num2 = 5 )
                        ( key\_field = 3 num1 = 6 num2 = 7 ) ).
    COLLECT VALUE struc\_num( key\_field = 1 num1 = 10 num2 = 10 )
      INTO itab\_num.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 632, 633 \` )
  )->write( itab\_num ).
\*-----------------------------\*
\*---- Read from itabs --------\*
\*-----------------------------\*
out->line(
  )->next\_section( \`Read from internal tables\` ).
    fill\_more\_itabs( ).
out->write\_html( \`<b>Read single line</b>\`
  )->write\_doc( \`31) Read single line by index \` &&
     \`using a table expression.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 14 ) ) ).
    DATA(lv1) = itab5\[ 1 \].
    TRY.
        DATA(lv2) = itab5\[ 999 \].
      CATCH cx\_sy\_itab\_line\_not\_found.
        DATA(lv\_text) = |Line { 999 } does not exist in itab5.|.
    ENDTRY.
    DATA(lv3) = itab5\[ KEY primary\_key INDEX 1 \].
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 653, 661 \` )
  )->write( lv1
  )->write( lv\_text
  )->write( lv3 ).
out->write\_doc( \`32) Read single line by index into\` &&
\` a work area/field symbol using READ TABLE.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 15 ) ) ).
    READ TABLE itab5 INTO DATA(wa2a) INDEX 2.
    READ TABLE itab5 ASSIGNING FIELD-SYMBOL(<fs1>) INDEX 3.
    READ TABLE itab5 INTO DATA(wa2b) INDEX 2 USING KEY primary\_key.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 674, 678 \` )
  )->write( wa2a
  )->write( <fs1>
  )->write( wa2b ).
out->write\_html( \`<b>Read single component of an internal table</b>\`
  )->write\_doc( \`33) Read single component by index using a \` &&
  \`table expression.\` ).
    DATA(lv4) = itab5\[ 6 \]-char2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 690, 690 \` )
  )->write( |The value of the component is "{ lv4 }".| ).
out->write\_doc( \`34) Get single component after reading a line by \` &&
\`index into a work area/field symbol using READ TABLE.\` ).
    READ TABLE itab5 INTO DATA(wa3) INDEX 6.
    DATA(lv5a) = wa3-char2.
    READ TABLE itab5 ASSIGNING FIELD-SYMBOL(<fs\_comp>) INDEX 2.
    DATA(lv5b) = <fs\_comp>-char2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 699, 703 \` )
  )->write( |a) The value of the component is "{ lv5a }".|
  )->write( |b) The value of the component is "{ lv5b }".| ).
out->write\_html( \`<b>Read line using a table key:</b>\`
  )->write\_doc( \`35) Read line using primary key and a table\` &&
\` expression/READ TABLE statement.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 16 ) ) ).
    DATA(lv6a) = itab5\[ KEY primary\_key COMPONENTS key\_field = 4 \].
    DATA(lv6b) = itab5\[ KEY primary\_key key\_field = 4 \].
    READ TABLE itab5 INTO DATA(wa4a) WITH TABLE KEY
        primary\_key COMPONENTS key\_field = 5.
    READ TABLE itab5 INTO DATA(wa4b) WITH TABLE KEY key\_field = 5.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 716, 723 \` )
  )->write( lv6a
  )->write( lv6b
  )->write( wa4a
  )->write( wa4b ).
out->write\_doc( \`36) Read line using primary key alias\` &&
\` using a table expression.\` ).
    DATA(lv7) = itab6\[ KEY pkey COMPONENTS key\_field = 4
                                           char1 = 'ggg' \].
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 735, 736 \` )
  )->write( lv7 ).
out->write\_doc( \`37) Read line using secondary key\` &&
\` and a table expression/READ TABLE statement.\` ).
    DATA(lv8) = itab5\[ KEY sec\_key COMPONENTS num1 = 5 \].
    READ TABLE itab5 INTO DATA(wa5) WITH TABLE KEY sec\_key
           COMPONENTS num1 = 5.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 745, 748 \` )
  )->write( lv8
  )->write( wa5 ).
out->write\_doc( \`38) Read line using free key\` &&
\` and a table expression/READ TABLE statement.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 17 ) ) ).
    DATA(lv9) = itab5\[ char1 = 'aaa' char2 = 'bbb' \].
    READ TABLE itab5 INTO DATA(wa6) WITH KEY char1 = 'aaa'
                                             char2 = 'bbb'.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 760, 764 \` )
  )->write( lv9
  )->write( wa6 ).
out->write\_html( \`<b>Read multiple lines using loops</b>\`
  )->write\_doc( \`39) Read complete table by sequentially \` &&
     \`reading all lines.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 18 ) ) ).
    LOOP AT itab5 ASSIGNING FIELD-SYMBOL(<fs\_all>).
       <fs\_all>-char1 = 'loop1'.
    ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 776, 778 \` )
  )->write( itab5 ).
out->write\_doc( \`40) Read multiple lines by index.\` ).
    LOOP AT itab5 ASSIGNING FIELD-SYMBOL(<fs\_in>) FROM 2 TO 5.
      <fs\_in>-char2 = 'loop2'.
    ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 786, 788 \` )
  )->write( itab5 ).
out->write\_doc( \`41) Read multiple lines by condition.\` ).
    LOOP AT itab5 ASSIGNING FIELD-SYMBOL(<fs\_cond>)
      WHERE char2 <> 'loop2' AND num2 > 4.
        <fs\_cond>-char2 = 'loop3'.
    ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 796, 799 \` )
  )->write( itab5 ).
out->write\_doc( \`42) Read multiple lines by (secondary) key.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 19 ) ) ).
    LOOP AT itab6 ASSIGNING FIELD-SYMBOL(<fs\_key>) USING KEY sec\_key.
      <fs\_key>-char2 = 'loop4'.
      APPEND <fs\_key> TO itab7.
    ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 809, 812 \` )
  )->write( itab7 ).
out->write\_doc( \`43) Read multiple lines with a LOOP\` &&
\` statement using the addition TRANSPORTING NO FIELDS.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 20 ) ) ).
    DATA no\_of\_fields TYPE i VALUE 0.
    LOOP AT itab5 TRANSPORTING NO FIELDS WHERE num1 > 4.
      no\_of\_fields += 1.
    ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 823, 826 \` )
  )->write( |There are { no\_of\_fields } fields in the itab|  &&
     | fulfilling the condition.| ).
out->write\_doc( \`44) Read multiple lines with a LOOP\` &&
\` statement using the additions GROUP BY/GROUP.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 21 ) )
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 840, 847 \` ) ).
    LOOP AT itab8 ASSIGNING FIELD-SYMBOL(<item>)
       GROUP BY <item>-key\_field ASCENDING.
      DATA(sum) = 0.
      LOOP AT GROUP <item> ASSIGNING FIELD-SYMBOL(<member>).
        sum = sum + <member>-num1.
      ENDLOOP.
      out->write( |Group key: { <item>-key\_field } Sum: { sum }| ).
    ENDLOOP.
\*\*------------------------------\*
\*\*---- Sort internal tables ----\*
\*\*------------------------------\*
    "Fill internal tables anew to reduce the number of entries.
    fill\_itabs( ).
out->line(
  )->next\_section( \`Sort internal tables\` ).
out->write\_doc( \`45) Sort in ascending order.\` ).
    SORT itab ASCENDING.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 860, 860 \` )
  )->write( itab ).
out->write\_doc( \`46) Sort in descending order.\` ).
    SORT itab DESCENDING.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 868, 868 \` )
  )->write( itab ).
out->write\_doc( \`47) Sort in ascending order by a component.\` ).
    SORT itab BY num1 ASCENDING.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 876, 876 \` )
  )->write( itab ).
out->write\_doc( \`48) Sort in descending order by a component.\` ).
    SORT itab BY num2 DESCENDING.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 884, 884 \` )
  )->write( itab ).
\*\*--------------------------------\*
\*\*---- Modify internal tables ----\*
\*\*--------------------------------\*
out->line(
  )->next\_section( \`Modify internal tables\`
  )->write\_html( \`<b>Modify internal table entries</b>\`
  )->write\_doc( \`49) Modify a whole line from a work area.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 23 ) ) ).
    MODIFY TABLE itab FROM VALUE #( key\_field = 1 char1 = 'mod1'
                                char2 = 'mod2' num1 = 11 num2 = 111 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 900, 901 \` )
  )->write( itab ).
out->write\_doc( \`50) Modify a whole line from a work area by \` &&
\`specifying an index.\` ).
    MODIFY itab FROM VALUE #( key\_field = 4 char1 = 'mod3'
                 char2 = 'mod4' num1 = 44 num2 = 444 ) INDEX 2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 910, 911 \` )
  )->write( itab ).
out->write\_doc( \`51) Modify particular fields of a line\` &&
\` by specifying the index without overwriting\` &&
\` other fields.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 22 ) ) ).
    MODIFY itab FROM VALUE #( char1 = 'mod5' char2 = 'mod6'
                              num1 = 55 num2 = 555 )
       INDEX 1 TRANSPORTING char1.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 923, 925 \` )
  )->write( itab ).
out->write\_doc( \`52) Modify lines of a table based on a\` &&
\` condition.\` ).
    MODIFY itab FROM VALUE #( char1 = 'mod7' char2 = 'mod8'
                              num1 = 99 num2 = 999 )
               TRANSPORTING num2 char2
               WHERE num2 < 200.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 934, 937 \` )
  )->write( itab ).
out->write\_doc( \`53) Modify line of a table by specifying\` &&
\` a table key.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 24 ) ) ).
   MODIFY TABLE itab6 FROM VALUE #( char2 = 'mod\_sec' num1 = 10
                                    num2 = 20 )
      USING KEY sec\_key TRANSPORTING char2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 948, 950 \` )
  )->write( itab6 ).
out->write\_doc( \`54) Modify a table entry in a specific line \` &&
\`by specifying the index and using a table expression.\` ).
    itab\[ 1 \]-num1 = 99.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 959, 959 \` )
  )->write( itab ).
out->write\_doc( \`55) Modify a table entry using a key expression \` &&
\`(here, a free key) and a table expression.\` ).
    itab\[ char1 = 'mod1' num1 = 11 \]-char2 = \`mod\_key\`.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 968, 968 \` )
  )->write( itab ).
out->write\_doc( \`56) Modify multiple internal table entries \` &&
\`using a loop.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 25 ) ) ).
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs\_loop>).
      <fs\_loop>-char1 = 'changed'.
    ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 979, 981 \` )
  )->write( itab ).
"Note: The sorting is meant as preparation for the following deletions.
     SORT itab2 ASCENDING.
out->write\_html( \`<b>Delete internal table entries</b>\`
  )->write\_doc( \`57) Delete lines by key.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 26 ) ) ).
     DELETE TABLE itab2 WITH TABLE KEY primary\_key
         COMPONENTS key\_field = 13.
     DELETE TABLE itab2 WITH TABLE KEY key\_field = 0.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 995, 998 \` )
  )->write( itab2 ).
out->write\_doc( \`58) Delete line from a work area by \` &&
\`implicitly specifying the key.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 27 ) ) ).
     DELETE TABLE itab2 FROM VALUE #( key\_field = 14 char1 = 'aaa' ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1009, 1009 \` )
  )->write( itab2 ).
out->write\_doc( \`59) Delete lines by index.\` ).
     DELETE itab2 INDEX 2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1017, 1017 \` )
  )->write( itab2 ).
out->write\_doc( \`60) Delete lines by specifying an\` &&
\` index range.\` ).
     DELETE itab2 FROM 7 TO 8.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1026, 1026 \` )
  )->write( itab2 ).
out->write\_doc( \`61) Delete lines by specifying a\` &&
\` condition.\` ).
     DELETE itab2 WHERE num1 > 100.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1035, 1035 \` )
  )->write( itab2 ).
out->write\_doc( \`62) Delete adjacent duplicate lines.\` ).
     DELETE ADJACENT DUPLICATES FROM itab2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1043, 1043 \` )
  )->write( itab2 ).
out->write\_doc( \`63) Delete content of a whole column using a loop.\` ).
     LOOP AT itab2 ASSIGNING FIELD-SYMBOL(<del>).
       CLEAR <del>-char2.
     ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1051, 1053 \` )
  )->write( itab2 ).
out->write\_doc( \`64) Delete all contents of internal table.\` ).
     CLEAR itab2.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1061, 1061 \` )
  )->write( itab2 ).
\*----------------------------------\*
\*---- Internal table functions ----\*
\*----------------------------------\*
out->line(
  )->next\_section( \`Internal table functions\` ).
out->write\_doc( \`65) line\_exists( ): Check if a line exists.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1077, 1082 \` ) ).
    DATA(key) = 2.
    IF line\_exists( itab\[ key\_field = key \] ).
      out->write( |Line { key } exists in internal table.| ).
    ELSE.
      out->write( |Line { key } does not exist in internal table.| ).
    ENDIF.
out->write\_doc( \`66) Excursion: Check if line exists - the old way.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1088, 1093 \` ) ).
    READ TABLE itab WITH KEY key\_field = key TRANSPORTING NO FIELDS.
    IF sy-subrc = 0.
      out->write( |Line { key } exists in internal table.| ).
    ELSE.
      out->write( |Line { key } does not exist in internal table.| ).
    ENDIF.
out->write\_doc( \`67) lines( ): Check how many lines are in the\` &&
\` table.\` ).
    DATA(itab\_lines) = lines( itab ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1098, 1098 \` )
  )->write( |The internal table consists of { itab\_lines } lines.| ).
out->write\_doc( \`68) line\_index( ): Check index of specific line. \` ).
    DATA(idx) = line\_index( itab\[ key\_field = key \] ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1106, 1106 \` )
  )->write( |The index of the line with key = { key } is { idx } | &&
            |in the internal table.| ).
out->write\_doc( \`69) Excursion: Check index of specific line \` &&
\`- the old way.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1118, 1124 \` ) ).
    READ TABLE itab WITH KEY key\_field = key TRANSPORTING NO FIELDS.
    IF sy-subrc = 0.
      out->write( |The index of the line with key = { key } is| &&
      | { sy-tabix } in the internal table.| ).
    ELSE.
      out->write( |The line does not exist in the internal table.| ).
    ENDIF.
\*--------------------------------\*
\*---- Constructor expressions ---\*
\*--------------------------------\*
out->line(
  )->next\_section( \`Excursions with constructor expressions\` ).
out->write\_doc( \`70) VALUE: Add lines of other tables \` &&
\`using the addition LINES OF.\` ).
    itab2 = VALUE #( ( key\_field = 5 char1 = 'hhh'
                       char2 = 'iii' num1 = 6 num2 = 7 )
                     ( LINES OF itab ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1135, 1137 \` )
  )->write( itab2 ).
out->write\_doc( \`71) CORRESPONDING: Copy data from a deep internal \` &&
\`table to another deep internal table deleting existing contents. \`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 28 ) ) ).
    itab\_nested2 = CORRESPONDING #( DEEP itab\_nested1 ).
    "MOVE-CORRESPONDING itab\_nested1 TO itab\_nested2
    "  EXPANDING NESTED TABLES.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1148, 1151 \` )
  )->write( itab\_nested2 ).
out->write\_doc( \`72) CORRESPONDING: Copy data from a deep internal \` &&
\`table to another deep internal table keeping existing contents. \` ).
    itab\_nested2 = CORRESPONDING #( DEEP BASE ( itab\_nested2 )
                                                itab\_nested1 ).
    "MOVE-CORRESPONDING itab\_nested1 TO itab\_nested2
    "                    EXPANDING NESTED TABLES KEEPING TARGET LINES.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1160, 1164 \` )
  )->write( itab\_nested2 ).
  fill\_itabs( ).
out->write\_doc( \`73) COND: Modify table entries in a loop\` &&
\` based on a condition.\` ).
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<cond>).
      <cond>-key\_field = <cond>-key\_field.
      <cond>-char1 = COND #( WHEN <cond>-char1 = 'aaa'
                             THEN 'yyy'
                             ELSE 'abc' ).
      <cond>-char2 = COND #( WHEN <cond>-char2 = 'ddd'
                             THEN 'zzz'
                             ELSE 'def' ).
      <cond>-num1 = COND #( WHEN <cond>-num1 > 30
                            THEN 1
                            ELSE 888 ).
      <cond>-num2 = COND #( WHEN <cond>-num2 > 3
                            THEN 2
                            ELSE 999 ).
    ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1175, 1189 \` )
  )->write( itab ).
out->write\_doc( \`74) SWITCH: Modify table entries in a loop\` &&
\` based on a condition.\` ).
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<switch>).
      <switch>-key\_field = <switch>-key\_field.
      <switch>-char1 = SWITCH #( <switch>-char1 WHEN 'yyy'
                                                THEN 'xxx'
                                                ELSE 'ghi' ).
      <switch>-char2 = SWITCH #( <switch>-char2 WHEN 'def'
                                                THEN 'www'
                                                 ELSE 'jkl' ).
      <switch>-num1 = SWITCH #( <switch>-num1 WHEN 888
                                              THEN 111
                                              ELSE 222 ).
      <switch>-num2 = SWITCH #( <switch>-num2 WHEN 2
                                              THEN 333
                                              ELSE 444 ).
    ENDLOOP.
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1198, 1212 \` )
  )->write( itab ).
out->write\_doc( \`75) FILTER: Filter internal table by condition.\` ).
    "Prepare internal table for the example.
    itab\_sorted = CORRESPONDING #( itab ).
    DATA(filter1) = FILTER #( itab\_sorted WHERE key\_field < 3 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1223, 1223 \` )
  )->write( filter1 ).
out->write\_doc( \`76) FILTER: Filter internal table by condition \` &&
\`with the addition EXCEPT that excludes data according to condition\` ).
    DATA(filter2) = FILTER #( itab\_sorted EXCEPT WHERE key\_field < 3 ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1232, 1232 \` )
  )->write( filter2 ).
out->write\_doc( \`77) FILTER: Filter internal table by \` &&
\`using another filter table.\` ).
   "Fill filter table.
    extract = VALUE #( ( key\_field = 1 ) ( key\_field = 3 ) ).
    DATA(filter3) = FILTER #( itab\_sorted IN extract
                              WHERE key\_field = key\_field ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1242, 1245 \` )
  )->write( filter3 ).
out->line(
  )->next\_section( \`Excursions: Iterations with FOR expressions\` ).
    fill\_itabs( ).
out->write\_doc( \`78) FOR: Get values of one column in \` &&
\`an internal table.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 29 ) ) ).
   DATA(lv\_num\_a) = VALUE ty\_numbers( FOR ls1 IN itab ( ls1-num1 ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1261, 1261 \` )
  )->write( lv\_num\_a ).
out->write\_doc( \`79) FOR: Get values of one column in \` &&
\`an internal table based on conditions.\` ).
   DATA(lv\_num\_b) = VALUE ty\_numbers( FOR ls2 IN itab WHERE (
                                      num1 < 40 ) ( ls2-num1 ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1270, 1271 \` )
  )->write( lv\_num\_b ).
out->write\_doc( \`80) Nested FOR: Loop over 2 tables and get \` &&
\`values based on conditions.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 30 ) ) ).
    DATA(itab\_for\_2tab) =
      VALUE ty\_char2(
        FOR ls3 IN itab2
        FOR ls4  IN itab4 WHERE ( key\_field = ls3-key\_field )
        ( ls4-char1 ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1282, 1286 \` )
  )->write( itab\_for\_2tab ).
out->write\_doc( \`81) Nested FOR: Loop over 3 tables and get \` &&
\`values based on conditions.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 31 ) ) ).
    DATA(itab\_for\_3tab) =
      VALUE ty\_itab\_for(
        FOR ls5  IN itab
        FOR ls6  IN itab\_num WHERE ( key\_field = ls5-key\_field
                                     AND num1 < 10 )
        FOR ls7  IN itab4 WHERE ( key\_field = ls5-key\_field )
        ( key\_field = ls5-key\_field
          char1 = ls5-char1
          num1 = ls6-num1
          numlong = ls7-numlong
           ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1297, 1307 \` )
  )->write( itab\_for\_3tab ).
out->write\_doc( \`82) FOR: Change values from internal \` &&
\`tables sequentially.\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
     cl\_demo\_output\_helper=>get\_info\_html( number = 32 ) ) ).
   DATA(itab\_for\_change) = VALUE ty\_numbers( FOR ls8 IN itab
                                             ( ls8-num2 + 100 ) ).
out->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
     source = sy-repid && \`, 1318, 1319 \` )
  )->write( itab\_for\_change ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
    fill\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_cs\_dbtab.    "#EC CI\_NOWHERE
    DELETE FROM demo\_cs\_dbtab2.   "#EC CI\_NOWHERE
  ENDMETHOD.
  METHOD fill\_dbtabs.
    MODIFY demo\_cs\_dbtab FROM TABLE @( VALUE #(
  ( key\_field = 100 char1 = 'aaa' char2 = 'bbb' num1 = 1 num2 = 2 )
  ( key\_field = 200 char1 = 'ccc' char2 = 'ddd' num1 = 3 num2 = 4 )
  ( key\_field = 300 char1 = 'eee' char2 = 'fff' num1 = 5 num2 = 6 )
  ( key\_field = 400 char1 = 'ggg' char2 = 'hhh' num1 = 7 num2 = 8 )
         ) ).
    MODIFY demo\_cs\_dbtab2 FROM TABLE @( VALUE #(
        ( key\_field = 500 char1 = 'iii'  num1 = 10 numlong = 1000 )
        ( key\_field = 600 char1 = 'kkk'  num1 = 12 numlong = 2000 )
        ( key\_field = 700 char1 = 'mmm'  num1 = 14 numlong = 3000 )
        ( key\_field = 800 char1 = 'ooo'  num1 = 15 numlong = 4000 )
         ) ).
  ENDMETHOD.
  METHOD fill\_itabs.
    itab = VALUE #(
    ( key\_field = 1 char1 = 'aaa' char2 = 'bbb' num1 = 30 num2 = 3 )
    ( key\_field = 2 char1 = 'ccc' char2 = 'ddd' num1 = 20 num2 = 5 )
    ( key\_field = 3 char1 = 'eee' char2 = 'fff' num1 = 40 num2 = 4 ) ).
    itab\_nested1 = VALUE #( ( key\_field = 1 char1 = 'aaa' tab =
        VALUE #( ( key\_field = 1 num1 = 2 num2 = 3 )
                 ( key\_field = 2 num1 = 3 num2 = 4 )
                 ( key\_field = 3 num1 = 4 num2 = 5 ) ) )
                 ( key\_field = 2 char1 = 'bbb'
                   tab = VALUE #( ( key\_field = 4 num1 = 5 num2 = 6 )
                                  ( key\_field = 5 num1 = 6 num2 = 7 )
                                  ( key\_field = 6 num1 = 7 num2 = 8 ) )
                                  ) ).
    itab4 = VALUE #( ( key\_field = 1 char1 = 'xxx'
                       num1 = 100 numlong = 1000 )
                     ( key\_field = 2 char1 = 'yyy'
                       num1 = 200 numlong = 2000 )
                     ( key\_field = 3 char1 = 'zzz'
                       num1 = 300 numlong = 3000 ) ).
  ENDMETHOD.
  METHOD fill\_more\_itabs.
    itab5 = VALUE #(
    ( key\_field = 1 char1 = 'aaa' char2 = 'bbb' num1 = 1 num2 = 2 )
    ( key\_field = 2 char1 = 'ccc' char2 = 'ddd' num1 = 2 num2 = 3 )
    ( key\_field = 3 char1 = 'eee' char2 = 'fff' num1 = 3 num2 = 4 )
    ( key\_field = 4 char1 = 'ggg' char2 = 'hhh' num1 = 4 num2 = 5 )
    ( key\_field = 5 char1 = 'iii' char2 = 'jjj' num1 = 5 num2 = 6 )
    ( key\_field = 6 char1 = 'kkk' char2 = 'lll' num1 = 6 num2 = 7 )
    ( key\_field = 7 char1 = 'mmm' char2 = 'nnn' num1 = 7 num2 = 8 ) ).
    itab6 = VALUE #(
    ( key\_field = 1 char1 = 'aaa' char2 = 'bbb' num1 = 10 num2 = 20 )
    ( key\_field = 2 char1 = 'ccc' char2 = 'ddd' num1 = 5 num2 = 10 )
    ( key\_field = 3 char1 = 'eee' char2 = 'fff' num1 = 15 num2 = 25 )
    ( key\_field = 4 char1 = 'ggg' char2 = 'hhh' num1 = 30 num2 = 40 )
    ( key\_field = 5 char1 = 'iii' char2 = 'jjj' num1 = 1 num2 = 2 )
    ( key\_field = 6 char1 = 'kkk' char2 = 'lll' num1 = 40 num2 = 60 )
    ( key\_field = 7 char1 = 'mmm' char2 = 'nnn' num1 = 2 num2 = 5 ) ).
    itab8 = VALUE #(
    ( key\_field = 1 char1 = 'aaa' num1 = 10 numlong = 100 )
    ( key\_field = 1 char1 = 'ccc' num1 = 20 numlong = 200 )
    ( key\_field = 1 char1 = 'eee' num1 = 30 numlong = 300 )
    ( key\_field = 2 char1 = 'ggg' num1 = 40 numlong = 400 )
    ( key\_field = 2 char1 = 'iii' num1 = 50 numlong = 500 )
    ( key\_field = 3 char1 = 'kkk' num1 = 60 numlong = 600 )
    ( key\_field = 3 char1 = 'mmm' num1 = 70 numlong = 700 ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The output shows the outcome of various ways about how to work with internal tables. Find comments in the output explaining the context and details. Basically, all variants described in the ABAP cheat sheet [Internal Tables](javascript:call_link\('abapsheets_internal_tables.htm'\)) are covered:

-   Creating internal tables
-   Filling internal tables
-   Reading from internal tables
-   Sorting internal tables
-   Modifying internal tables
-   Internal table functions
-   Excursion: Constructor expressions