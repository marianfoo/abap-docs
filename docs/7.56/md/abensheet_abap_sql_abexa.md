---
title: "ABAP SQL - Working with Persisted Data in Database Tables"
description: |
  This example demonstrates the syntactical options for working with persisted data in database tables as outlined in the ABAP cheat sheet ABAP SQL: Working with persisted data in database tables(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql.htm). Source Code REPORT d
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_abap_sql_abexa.htm"
abapFile: "abensheet_abap_sql_abexa.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "while", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abensheet", "abap", "sql", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Cheat Sheets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_blurb.htm) →  [ABAP SQL: Working with persisted data in database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql.htm) → 

ABAP SQL - Working with Persisted Data in Database Tables

This example demonstrates the syntactical options for working with persisted data in database tables as outlined in the ABAP cheat sheet [ABAP SQL: Working with persisted data in database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql.htm).

Source Code

REPORT demo\_cs\_abap\_sql.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out      TYPE REF TO if\_demo\_output,
      "Structure
      lv\_struc TYPE demo\_dbtab\_spfli,
      "Internal table
      itab     TYPE TABLE OF demo\_dbtab\_spfli.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
     \`Demo: ABAP SQL - Working with persisted data in database tables\`
  )->line( ).
\*---------------------------------\*
\*---- Using Select I (Basics) ----\*
\*---------------------------------\*
    out->next\_section( \`Using Select I (Basics)\` ).
    "Read all fields of single row into existing structure
    "Note 1: The structure has the same structure type as
    "the database table.
    "Note 2: In this and the following SELECT statements,
    "a simple WHERE condition is used to limit the number
    "of found results.
    "Note 3: ABAP variables must be escaped using @.
    SELECT SINGLE FROM demo\_dbtab\_spfli                     "#EC WARNOK
      FIELDS \*
      WHERE carrid = 'LH'
      INTO @lv\_struc.
    IF sy-subrc = 0.
      out->write\_doc( \`1) Read all fields of single row into \` &&
      \`existing structure\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 41, 44 \` )
        )->write( lv\_struc ).
    ELSE.
   out->write\_doc( \`1) Read all fields of single row into existing \` &&
          \`structure: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 41, 44 \` ) ).
    ENDIF.
    "Read all fields of multiple rows into existing internal table
    "Note 1: The internal table has the same structure type as
    "the database table.
    "Note 2: The following SELECT statement has the same effect as the
    "one that is commented out further down.
    SELECT FROM demo\_dbtab\_spfli
      FIELDS \*
      WHERE carrid = 'DL'
      INTO TABLE @itab.
    "SELECT \*
    "FROM demo\_dbtab\_spfli
    "WHERE ...
    IF sy-subrc = 0.
      out->write\_doc( \`2) Read all fields of multiple rows into \` &&
      \`existing internal table\`
     )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 64, 67 \` )
        )->write( itab ).
    ELSE.
      out->write\_doc( \`2) Read all fields of multiple rows into\` &&
      \` existing internal table: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 64, 67 \` ) ).
    ENDIF.
    "Read all fields into structure that is declared inline
    "using DATA(...).
    SELECT SINGLE FROM demo\_dbtab\_spfli                     "#EC WARNOK
      FIELDS \*
      WHERE carrid = 'AA'
      INTO @DATA(lv\_struc2).
    IF sy-subrc = 0.
   out->write\_doc( \`3) Read all fields of single row into structure\` &&
            \` declared inline\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 88, 91 \` )
              )->write( lv\_struc2 ).
    ELSE.
  out->write\_doc( \`3) Read all fields of single row into structure \` &&
            \`declared inline: Nothing found!\`
     )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 88, 91 \` ) ).
    ENDIF.
    "Read selected fields of single row into structure declared inline
    "Note: The structure that is declared inline only has the
    "components specified after FIELDS.
    SELECT SINGLE FROM demo\_dbtab\_spfli                     "#EC WARNOK
     FIELDS carrid, connid, cityfrom, cityto
     WHERE carrid = 'AA'
     INTO @DATA(lv\_struc3).
    IF sy-subrc = 0.
      out->write\_doc( \`4) Read selected fields of single row into\` &&
      \`  structure declared inline\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 109, 112 \` )
        )->write( lv\_struc3 ).
    ELSE.
    out->write\_doc( \`4) Read selected fields of single row into\` &&
      \` structure declared inline: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 109, 112 \` )  ).
    ENDIF.
    "Read all fields of multiple rows into itab declared inline
    SELECT FROM demo\_dbtab\_spfli
      FIELDS \*
      WHERE carrid = 'DL'
      INTO TABLE @DATA(itab2).
    IF sy-subrc = 0.
    out->write\_doc( \`5) Read all fields of multiple rows into itab \` &&
            \`declared inline\`
     )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 128, 131 \` )
              )->write( itab2 ).
    ELSE.
    out->write\_doc( \`5) Read all fields of multiple rows into itab\` &&
      \` declared inline: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 128, 131 \` )  ).
    ENDIF.
    "Read selected fields of multiple rows into itab declared inline
    "Note: The table that is declared inline only has the columns
    "specified after FIELDS.
    SELECT FROM demo\_dbtab\_spfli
      FIELDS carrid, connid, cityfrom, cityto
      WHERE carrid = 'DL'
      INTO TABLE @DATA(itab3).
    IF sy-subrc = 0.
    out->write\_doc( \`6) Read selected fields of multiple rows into\` &&
      \` itab declared inline\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 149, 152 \` )
        )->write( itab3 ).
    ELSE.
    out->write\_doc( \`6) Read seleceted fields of multiple rows into\` &&
            \` itab declared inline: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 149, 152 \` ) ).
    ENDIF.
    "SELECT loop: Sequentially read multiple rows into a structure
    "Note: In the example, the individual rows that are read are
    "appended to an internal table.
    SELECT FROM demo\_dbtab\_spfli
     FIELDS \*
     WHERE carrid = 'JL'
     INTO @DATA(lv\_struc4).
      IF sy-subrc = 0.
        "Append structure to itab.
        APPEND lv\_struc4 TO itab2.
      ELSE.
      ENDIF.
    ENDSELECT.
    out->write\_doc( \`7) SELECT loop. Sequentially read multiple rows\` &&
    \` into a structure\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 170, 180 \` )
      )->write( itab2 ).
    CLEAR lv\_struc.
    "Read selected fields of a single row into existing structure
    "that has a different structure type.
    "Note: The addition CORRESPONDING FIELDS OF is needed when using
    "an existing variable to write to, otherwise a type compatibility
    "issue might arise because the SELECT statement fills the variable
    "from left to right beginning with the first component.
    SELECT SINGLE FROM demo\_dbtab\_spfli                     "#EC WARNOK
      FIELDS carrid, connid, cityfrom, cityto
      WHERE carrid = 'AZ'
      INTO CORRESPONDING FIELDS OF @lv\_struc.
    IF sy-subrc = 0.
    out->write\_doc( \`8) Read selected fields of single row into\` &&
      \` structure having a different structure type\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 195, 198 \` )
        )->write( lv\_struc ).
    ELSE.
      out->write\_doc( \`8) Read selected fields of single row into \` &&
      \`structure  having a different structure type: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 195, 198 \` ) ).
    ENDIF.
    "Read selected fields of multiple rows into existing internal table
    "that has a different structure type.
    "Note: The addition CORRESPONDING FIELDS OF is needed when using an
    " existing variable to write to, otherwise a type compatibility
    "issue might arise because the SELECT statement fills the variable
    "from left to right beginning with the first column.
    SELECT FROM demo\_dbtab\_spfli
     FIELDS carrid, connid, cityfrom, cityto
     WHERE carrid = 'DL'
     INTO CORRESPONDING FIELDS OF TABLE @itab.
    IF sy-subrc = 0.
    out->write\_doc( \`9) Read selected fields of multiple rows into\` &&
      \` internal table having a different structure type\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 219, 222 \` )
        )->write( itab ).
    ELSE.
      out->write\_doc( \`9) Read selected fields of multiple rows into\` &&
  \` internal table having a different structure type: Nothing found!\`
  )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 219, 222 \` ) ).
    ENDIF.
\*------------------------------------------------------------\*
\*---- Using Select II (Clause variations and additions) -----\*
\*------------------------------------------------------------\*
    out->line(
)->next\_section( \`Using Select II (Clause variations and additions)\` ).
    "SELECT/FROM clause variants
    out->write\_html( '<b>SELECT/FROM clause variants</b>' ).
    "DISTINCT: Remove rows that occur more than once in a multi-row
    "result set
    "Note: Since there are several entries in the db tab fulfilling
    "the condition in the WHERE clause, omitting DISTINCT in this
    "case would show more entries in the internal table.
    SELECT DISTINCT cityfrom
      FROM demo\_dbtab\_spfli                         "#EC CI\_BYPASS
      WHERE carrid   = 'LH' AND
            cityto = 'NEW YORK'
      INTO TABLE @DATA(destinations).
    IF sy-subrc = 0.
    out->write\_doc( \`10) DISTINCT: Remove rows that occur more than \` &&
            \`once in a multi-row result set\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 252, 256 \` )
              )->write( destinations ).
    ELSE.
   out->write\_doc( \`10) DISTINCT: Remove rows that occur more than \` &&
            \`once in a multi-row result set: Nothing found!\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 252, 256 \` ) ).
    ENDIF.
    "Set new column names
    "Note: Several fields get an alias name in this case.
    SELECT FROM demo\_dbtab\_spfli
      FIELDS carrid AS alias1, connid AS alias2,
             cityfrom AS alias3, cityto
      WHERE carrid = 'JL'
      INTO TABLE @DATA(itab\_alias).
    IF sy-subrc = 0.
      out->write\_doc( \`11) Set new column names\`
     )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 273, 277 \` )
        )->write( itab\_alias ).
    ELSE.
      out->write\_doc( \`11) Set new column names: Nothing found!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 273, 277 \` ) ).
    ENDIF.
    "Get data from db table in other client
    "In this example, the same client as the current one is used to
    "guarantee data in the internal table.
    "A literal with the 3 digit client number can be inserted after
    "USING CLIENT.
    "Other variants exist for client specification, e.g. ALL CLIENTS.
    DATA(clnt) = sy-mandt.
    SELECT \*
      FROM demo\_dbtab\_spfli USING CLIENT @clnt
                           "USING CLIENT '000'
                           "ALL CLIENTS
      WHERE carrid = 'JL'
      INTO TABLE @DATA(itab\_oclient).  "#EC CI\_CLIENT
    IF sy-subrc = 0.
      out->write\_doc( \`12) Get data from db table in other client\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 297, 302 \` )
        )->write( itab\_oclient ).
    ELSE.
      out->write\_doc( \`12) Get data from db table in other client:\` &&
      \` Nothing found!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 297, 302 \` ) ).
    ENDIF.
    "Get aggregate data...
    "... using SQL expression
    "Note: In this case, the sum of all values in the specified column
    "is calculated.
    SELECT SUM( paymentsum )
      FROM demo\_dbt\_sflight
      WHERE carrid = 'LH'
      INTO @DATA(sum).
    IF sy-subrc = 0.
    out->write\_doc( \`13) Get aggregate data using SQL expressions (1)\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 320, 323 \` )
         )->write( sum ).
    ELSE.
out->write\_doc( \`13) Get aggregate data using SQL expressions (1):\` &&
            \` Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 320, 323 \` ) ).
    ENDIF.
    "... using multiple SQL expressions
    "Note: If multiple expressions are included, aliases are needed.
    "In the example, the data type in which the average value is
    "returned is specified explicitly to get a better readable result.
    SELECT SUM( paymentsum ) AS paysum,
           AVG( seatsocc AS DEC( 14,4 ) ) AS occ
      FROM demo\_dbt\_sflight
      WHERE carrid = 'LH'
      INTO @DATA(sql).
    IF sy-subrc = 0.
      out->write\_doc( \`14) Get aggregate data using multiple SQL\` &&
      \` expressions (2)\`
        )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 341, 345 \` )
              )->write( sql ).
    ELSE.
      out->write\_doc( \`14) Get aggregate data using multiple SQL \` &&
      \`expressions (2): Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 341, 345 \` ) ).
    ENDIF.
    "... using CASE expressions
    "Note: In the example, the conditions are specified in a way that
    "each is valid at least once. The column "status" shows the result
    "of the CASE expression.
    DATA(status\_a) = 'A'.
    DATA(status\_b) = 'B'.
    DATA(status\_c) = 'C'.
    SELECT carrid, connid, planetype,
      CASE WHEN seatsmax = 475 THEN @status\_a
           WHEN seatsmax < 300 AND seatsocc > 100 THEN @status\_b
           ELSE @status\_c
      END AS status
      FROM demo\_dbt\_sflight
      WHERE carrid = 'LH'
      INTO TABLE @DATA(itab\_case).
    IF sy-subrc = 0.
      out->write\_doc( \`15) Get aggregate data using \` &&
      \`CASE expressions (3)\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 368, 375 \` )
        )->write( itab\_case ).
    ELSE.
      out->write\_doc( \`15) Get aggregate data using\` &&
      \` CASE expressions (3): Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 368, 375 \` )
      ).
    ENDIF.
    "Check existence of a row in a database table
    "Instead of @abap\_true, you could also use 'X'
    SELECT SINGLE @abap\_true
     FROM demo\_dbtab\_scarr
     WHERE carrid = 'AZ'
     INTO @DATA(lv\_exists).
    IF lv\_exists = abap\_true.
      out->write\_doc( \`15b) Check existence of a row in \` &&
      \`a database table\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 393, 396 \` )
        )->write\_doc( \`A row with "carrid = 'AZ'" was found.\` ).
    ELSE.
      out->write\_doc( \`15b) Check existence of a row in \` &&
     \`a database table\`
     )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 393, 396 \` )
     )->write\_doc( \`A row with "carrid = 'AZ'" was found.\` ).
    ENDIF.
    " FIELD clause
    out->write\_html( '<b>FIELD clause variants</b>' ).
    "FIELD clause: Get aggregate data using SQL expressions (1)
    "In the example, free seats are calculated by subtracting
    "the occupied seats from the overall seats.
    SELECT FROM demo\_dbt\_sflight
      FIELDS carrid, connid, fldate, seatsmax - seatsocc AS seatsfree
      WHERE carrid = 'JL'
      INTO TABLE @DATA(itab\_calc).
    IF sy-subrc = 0.
    out->write\_doc( \`16) FIELD clause: Get aggregate data using SQL\` &&
            \` expressions (1)\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 418, 421 \` )
              )->write( itab\_calc ).
    ELSE.
    out->write\_doc( \`16) FIELD clause: Get aggregate data using SQL\` &&
            \` expressions (1): Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 418, 421 \` ) ).
    ENDIF.
    "FIELD clause: Get aggregate data using SQL expression (2)
    "In the example, the median value of a specified column is
    "calculated considering all db tab entries.
    SELECT FROM demo\_dbt\_sflight                        "#EC CI\_NOWHERE
      FIELDS MEDIAN( seatsocc ) AS median\_value
      INTO @DATA(median\_result).
    IF sy-subrc = 0.
    out->write\_doc( \`17) FIELD clause: Get aggregate data using SQL\` &&
            \` expression (2)\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 439, 441 \` )
              )->write( median\_result ).
    ELSE.
    out->write\_doc( \`17) FIELD clause: Get aggregate data using SQL\` &&
            \` expression (2): Nothing found!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 439, 441 \` ) ).
    ENDIF.
    "WHERE clause
    out->write\_html( '<b>WHERE clause variants</b>' ).
    "Get aggregate data by using expressions.
    "In the example, only those flights should be returned having
    "less than 15 free seats.
    SELECT FROM demo\_dbt\_sflight
      FIELDS carrid, connid, fldate, planetype
      WHERE seatsmax - seatsocc < 15
      INTO TABLE @DATA(itab\_where\_agg).
    IF sy-subrc = 0.
    out->write\_doc( \`18) WHERE clause: Get aggregate data using\` &&
      \` SQL expression\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 462, 465 \` )
        )->write( itab\_where\_agg ).
    ELSE.
    out->write\_doc( \`18) WHERE clause: Get aggregate data using SQL\` &&
            \` expression: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 462, 465 \` )             ).
    ENDIF.
    "Examples for WHERE clause options
    "The example demonstrates a WHERE clause with <>, >, AND
    SELECT \* FROM demo\_dbtab\_spfli
      WHERE cityfrom <> 'FRANKFURT' AND fltime > 800
      INTO TABLE @DATA(where\_tab1).
    IF sy-subrc = 0.
      out->write\_doc( \`19) WHERE clause options (1)\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 482, 484 \` )
        )->write( where\_tab1 ).
    ELSE.
      out->write\_doc( \`19) WHERE clause options (1): Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 482, 484 \` )
      ).
    ENDIF.
    "The example demonstrates a WHERE clause with
    "BETWEEN, NOT BETWEEN, OR
    SELECT \* FROM demo\_dbt\_sflight
      WHERE seatsmax BETWEEN 350 AND 400            "#EC CI\_CMPLX\_WHERE
        OR price NOT BETWEEN 100 AND 1500
      INTO TABLE @DATA(where\_tab2).
    IF sy-subrc = 0.
      out->write\_doc( \`20) WHERE clause options (2)\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 500, 503 \` )
        )->write( where\_tab2 ).
    ELSE.
      out->write\_doc( \`20) WHERE clause options (2): Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 500, 503 \` ) ).
    ENDIF.
    "The example demonstrates a WHERE clause with character literals
    "LIKE '%FRAN%': Condition is true if the column cityfrom contains
    "a string containing the pattern 'FRAN'
    "NOT LIKE '\_X%': Condition is true if the column airpto contains
    "a value whose second character is not 'X'.
    "IN ( ... ): "condition is true if
    "the column cityto contains one of the values specified
    "within the brackets
    "NOT IN ( ... ): condition is true if the column cityto does not
    "contain one of the values specified within the brackts
    SELECT \* FROM demo\_dbtab\_spfli
      WHERE cityfrom LIKE '%FRAN%'
            AND airpto NOT LIKE '\_X%'
            AND cityto IN ( 'BERLIN', 'NEW YORK', 'LONDON' )
            AND cityto NOT IN ( 'SYDNEY' )
      INTO TABLE @DATA(where\_tab3).
    IF sy-subrc = 0.
      out->write\_doc( \`21) WHERE clause options (3)\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 526, 531 \` )
        )->write( where\_tab3 ).
    ELSE.
      out->write\_doc( \`21) WHERE clause options (3): Nothing found!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 526, 531 \` ) ).
    ENDIF.
    "INTO clause
    out->write\_html( '<b>INTO clause variants</b>' ).
    "Restrict absolute number of returned table rows
    "by specifying a number n for the rows to be returned.
    SELECT \*                                            "#EC CI\_NOORDER
      FROM demo\_dbtab\_spfli
      WHERE carrid = 'LH'
      INTO TABLE @DATA(itab\_upto) UP TO 2 ROWS.
    IF sy-subrc = 0.
    out->write\_doc( \`22) INTO: Restrict absolute number of returned\` &&
            \` table rows\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 549, 552 \` )
              )->write( itab\_upto ).
    ELSE.
    out->write\_doc( \`22) INTO: Restrict absolute number of returned\` &&
            \` table rows: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 549, 552 \` ) ).
    ENDIF.
    "Appending the result set to an existing internal table that has
    "the same structure type as the db table.
    "By appending, you avoid the deletion of existing table rows.
    SELECT \*
      FROM demo\_dbtab\_spfli
      WHERE carrid = 'JL'
      APPENDING TABLE @itab\_upto.
    IF sy-subrc = 0.
    out->write\_doc( \`23) INTO: Avoid deleting existing table rows in\` &&
            \` itab by appending the result set\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 570, 573 \` )
              )->write( itab\_upto ).
    ELSE.
    out->write\_doc( \`23) INTO: Avoid deleting existing table rows in\` &&
            \` itab by appending  the result set: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 570, 573 \` ) ).
    ENDIF.
    "Appending the result set to an existing internal table that has
    "a different structure type as the db table.
    "By appending, you avoid the deletion of existing table rows.
    SELECT \*
      FROM demo\_dbtab\_spfli
      WHERE carrid = 'JL'
      APPENDING CORRESPONDING FIELDS OF TABLE @itab\_where\_agg.
    IF sy-subrc = 0.
   out->write\_doc( \`24) INTO: Avoid deleting existing table rows in\` &&
      \` itab by appending the result set and fill corresponding fields\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 591, 594 \` )
              )->write( itab\_where\_agg ).
    ELSE.
      out->write\_doc( \`24) INTO: Avoid deleting existing table row\` &&
      \` in itab by appending the result set and fill corresponding\` &&
      \` fields: Nothing found!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 591, 594 \` )
       ).
    ENDIF.
    "Read single fields into variables
    "Note: The field list and the INTO list must have the
    "same number of elements.
    "In the example, a demo structure and itab are created
    "to include and finally display the individually read fields.
    "Create a structure type for demo purposes.
    TYPES: BEGIN OF struc,
             carrid   TYPE s\_carr\_id,
             connid   TYPE s\_conn\_id,
             cityfrom TYPE s\_from\_cit,
             cityto   TYPE s\_to\_city,
           END OF struc.
    "Create an intenral table for demo purposes.
    DATA struc TYPE struc.
    DATA itab\_single\_fields TYPE TABLE OF struc.
    SELECT FROM demo\_dbtab\_spfli
      FIELDS carrid, connid, cityfrom, cityto
      WHERE carrid = 'JL'
      INTO (@DATA(lv\_carrid),@DATA(lv\_connid),@DATA(lv\_cityfrom),
            @DATA(lv\_cityto)).
      IF sy-subrc = 0.
        "Fill structure components with the individual values
        struc = VALUE #( carrid   = lv\_carrid
                         connid   = lv\_connid
                         cityfrom = lv\_cityfrom
                         cityto   = lv\_cityto ).
        "Append structure to itab.
        APPEND struc TO itab\_single\_fields.
      ELSE.
      ENDIF.
    ENDSELECT.
    out->write\_doc( \`25) INTO: Read into single fields\`
     )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 628, 645 \` )
      )->write( itab\_single\_fields ).
    "Read into packages.
    "Note: You might check this code in the debugger to see
    "in each loop run that only 4 data sets are packed
    "to be processed.
    "The itab that is output shows all entries, i.e. all packages.
    DATA itab\_full TYPE TABLE OF demo\_dbtab\_spfli.
    SELECT FROM demo\_dbtab\_spfli
      FIELDS carrid, connid, cityfrom, cityto
      WHERE carrid <> 'AZ' AND carrid <> 'DL'
      INTO TABLE @DATA(itab\_package)
      PACKAGE SIZE 4.
      IF sy-subrc = 0.
        "Add itab\_package TO itab\_full.
        itab\_full = CORRESPONDING #( BASE ( itab\_full )
                                     itab\_package ).
      ELSE.
      ENDIF.
    ENDSELECT.
    out->write\_doc( \`26) INTO: Read into packages\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 658, 670 \` )
      )->write( itab\_full ).
\*---------------------------------------------\*
\*---- Using Select III (Further clauses) -----\*
\*---------------------------------------------\*
    out->line(
    )->next\_section( \`Using Select III (Further clauses)\` ).
    "GROUP BY: Combining groups of rows of the result set into one row
    "Note: The db table shows multiple entries for the diverse CARRID
    "entries. In this case, only one entry with CARRID is returned
    "while combining values as specified in the SQL expressions.
    SELECT FROM demo\_dbt\_sflight                        "#EC CI\_NOWHERE
      FIELDS carrid, MIN( price ) AS min\_price,
                     MAX( price ) AS max\_price
      GROUP BY carrid
      INTO TABLE @DATA(res\_group\_by).
    IF sy-subrc = 0.
    out->write\_doc( \`27) GROUP BY: Combining groups of rows of the \` &&
            \`result set into one row\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 688, 692 \` )
              )->write( res\_group\_by ).
    ELSE.
    out->write\_doc( \`27) GROUP BY: Combining groups of rows of the \` &&
         \`result set into one row: Nothing found!\`
     )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 688, 692 \` ) ).
    ENDIF.
    "HAVING (1): Combining groups of rows of the result set into one
    "row and setting conditions for aggregated rows
    SELECT FROM demo\_dbtab\_spfli                         "#EC CI\_BYPASS
      FIELDS carrid, connid, cityfrom, cityto
      WHERE carrid = 'LH'
      GROUP BY carrid, connid, cityfrom, cityto
      HAVING SUM( fltime ) > 100
      INTO TABLE @DATA(res\_having).
    IF sy-subrc = 0.
   out->write\_doc( \`28) HAVING (1): Combining groups of rows of the \` &&
    \`result set into one row and setting conditions for aggregated rows\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 709, 714 \` )
              )->write( res\_having ).
    ELSE.
  out->write\_doc( \`28) HAVING (1): Combining groups of rows of the \` &&
   \`result set into one row and setting conditions for aggregated \` &&
          \`rows: Nothing found!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 709, 714 \` ) ).
    ENDIF.
    "HAVING (2)
    "The example shows some more SQL expressions in the clauses.
    SELECT carrid,                                      "#EC CI\_NOWHERE
           MIN( price ) AS minimum,
           MAX( price ) AS maximum,
           AVG( price AS DEC( 14,4 ) ) AS avg
      FROM demo\_dbt\_sflight AS s
      GROUP BY carrid
      HAVING carrid LIKE '%L%'
             AND MIN( s~price ) <> MAX( s~price )
      INTO TABLE @DATA(flight\_tab).
    IF sy-subrc = 0.
  out->write\_doc( \`29) HAVING (2): Combining groups of rows of the \` &&
  \`result set into one row and setting conditions for aggregated rows\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 732, 740 \` )
              )->write( flight\_tab ).
    ELSE.
  out->write\_doc( \`29) HAVING (2): Combining groups of rows of the \` &&
   \`result set into one row and setting conditions for aggregated \` &&
      \`rows: Nothing found!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 732, 740 \` ) ).
    ENDIF.
    "ORDER BY (1): Order result set by primary key
    SELECT \*
      FROM demo\_dbtab\_spfli
      WHERE carrid <> 'UA'
      ORDER BY PRIMARY KEY
      INTO TABLE @DATA(itab\_orderby1) UP TO 4 ROWS.
    IF sy-subrc = 0.
  out->write\_doc( \`30) ORDER BY (1): Ordering result set by primary key\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 757, 761 \` )
              )->write( itab\_orderby1 ).
    ELSE.
  out->write\_doc( \`30) ORDER BY (1): Ordering result set by primary\` &&
            \` key: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 757, 761 \` )
            ).
    ENDIF.
    "ORDER BY (2): Order result set by column + specify sort criterion
    SELECT \*
      FROM demo\_dbtab\_spfli                              "#EC CI\_BYPASS
      WHERE carrid <> 'UA'
      ORDER BY fltime DESCENDING
      INTO TABLE @DATA(itab\_orderby2) UP TO 4 ROWS.
    IF sy-subrc = 0.
  out->write\_doc( \`31) ORDER BY (2): Ordering result set by column \` &&
            \`+ specifying sort criterion\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 777, 781 \` )
              )->write( itab\_orderby2 ).
    ELSE.
   out->write\_doc( \`31) ORDER BY (2): Ordering result set by column\` &&
            \` + specifying sort criterion: Nothing found!\`
     )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 777, 781 \` ) ).
    ENDIF.
\*---------------------------------------------------------------\*
\*---- Using Select IV (Read from multiple database tables) -----\*
\*---------------------------------------------------------------\*
    out->line(
    )->next\_section( \`Using Select IV (Read from multiple\` &&
    \` tables)\` ).
    "FOR ALL ENTRIES: Read data from a table depending on the content
    "of an internal table.
    "In the example, only those entries should be read from the db
    "table if entries exist in the internal table that meet the
    "conditions specified in the WHERE clause.
    "Create and fill internal table to be used in the following
    "statement.
    SELECT \* FROM demo\_dbt\_sflight
      WHERE seatsmax < 300
      INTO TABLE @DATA(cond\_tab).
    IF ( 0 < lines( cond\_tab ) ).
      SELECT carrid, connid, cityfrom, cityto      "#EC CI\_NO\_TRANSFORM
        FROM demo\_dbtab\_spfli
        INTO TABLE @DATA(itab\_forall)
        FOR ALL ENTRIES IN @cond\_tab
        WHERE carrid = @cond\_tab-carrid
        AND connid = @cond\_tab-connid.
    ENDIF.
    out->write\_doc( \`32) FOR ALL ENTRIES: Read data from a table \` &&
    \`depending on the content of an internal table:\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 815, 822 \` )
     )->write( itab\_forall ).
    "Read from a database table depending on data of another
    "database table using a subquery
    SELECT carrid, connid, fldate
      FROM demo\_dbt\_sflight AS sflight
      WHERE EXISTS
      ( SELECT carrid FROM demo\_dbtab\_spfli            "#EC CI\_BUFFSUBQ
          WHERE carrid = sflight~carrid AND connid = sflight~connid
                                        AND cityfrom LIKE '%FRAN%' )
      INTO TABLE @DATA(itab\_subquery).
    IF sy-subrc = 0.
  out->write\_doc( \`33) Read from a database table depending on data\` &&
            \` of another database table using a subquery\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 832, 838 \` )
              )->write( itab\_subquery ).
    ELSE.
  out->write\_doc( \`33) Read from a database table depending on data\` &&
         \` of another database table using a subquery: Nothing found!\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 832, 838 \` ) ).
    ENDIF.
    "Combine data of multiple database tables using an inner join (1)
    "Note: In this kind of joins, only those columns are joined if
    "the ON conditions are met.
    "As an alternative and if you frequently need joined data,
    "create views.
    SELECT p~carrid, p~connid, p~cityto, f~fldate
      FROM demo\_dbtab\_spfli AS p
      INNER JOIN demo\_dbt\_sflight AS f                 "#EC CI\_BUFFJOIN
        ON p~carrid = f~carrid AND p~connid = f~connid
      WHERE p~cityfrom = 'FRANKFURT'
      INTO TABLE @DATA(itab\_join).
    IF sy-subrc = 0.
      out->write\_doc( \`34) INNER JOIN (1): Combine data\`
    )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 858, 863 \` )
        )->write( itab\_join ).
    ELSE.
    out->write\_doc( \`34) INNER JOIN (1): Combine data: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 858, 863 \` ) ).
    ENDIF.
    "Combine data of multiple database tables using a inner joins (2)
    SELECT p~carrid, s~carrname, p~connid, p~cityto, f~fldate
      FROM demo\_dbtab\_spfli AS p
      INNER JOIN demo\_dbt\_sflight AS f
        ON p~carrid = f~carrid AND p~connid = f~connid
      INNER JOIN demo\_dbtab\_scarr AS s                "#EC CI\_BUFFJOIN
        ON p~carrid = s~carrid
      WHERE p~cityfrom = 'FRANKFURT'
      INTO TABLE @DATA(itab\_join2).
    IF sy-subrc = 0.
      out->write\_doc( \`35) INNER JOIN (2): Combine data\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 877, 884 \` )
        )->write( itab\_join2 ).
    ELSE.
    out->write\_doc( \`35) INNER JOIN (2): Combine data: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 877, 884 \` ) ).
    ENDIF.
    "Combine data of multiple database tables using a left outer join.
    "Note: The columns of each row on the right-hand side that does not
    "meet the ON condition is filled with initial values and linked
    "with the columns of the left-hand side. If the conditions of the
    "WHERE clause have been met, each row on the left-hand side of the
    "left outer join produces at least one row in the selection,
    "irrespective of the ON condition.
    "Example: All rows from the left-hand side (demo\_dbtab\_scarr)
    "are returned as well as the matching rows from the right-hand side
    "(demo\_dbtab\_spfli). However, the ON condition
    ""p~cityfrom = 'FRANKFURT'" is not met for several entries in
    "demo\_dbtab\_spfli and a CONNID does
    "not exist. Hence, initial values are returned for connid.
    SELECT s~carrid, s~carrname, p~connid
      FROM demo\_dbtab\_scarr AS s
      LEFT OUTER JOIN demo\_dbtab\_spfli AS p            "#EC CI\_BUFFJOIN
        ON s~carrid = p~carrid AND p~cityfrom = 'FRANKFURT'
      WHERE s~carrid <> 'UA'
      INTO TABLE @DATA(itab\_lo\_join).
    IF sy-subrc = 0.
      out->write\_doc( \`36) LEFT OUTER JOIN: Combine data\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 910, 915 \` )
        )->write( itab\_lo\_join ).
    ELSE.
    out->write\_doc( \`36) LEFT OUTER JOIN: Combine data: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 910, 915 \` ) ).
    ENDIF.
    "Combine data of multiple database tables using a union.
    "The addition UNION creates the union of the results sets"
    "of two SELECT statements.
    "The columns of the result set keep the names defined in the"
    "SELECT statement on the left of UNION.
    "The result set of rows of the SELECT statement on the right of
    "UNION are inserted into the results set of the SELECT statement
    "on the left of UNION.
    "The example demonstrates the union of two tables and
    "visualizes those columns that do
    "not exist in the other table by setting the value "-".
    "In below example, a CAST is required for the column CONNID.
    SELECT FROM demo\_dbtab\_scarr
           FIELDS carrname,
                  CAST( '-' AS CHAR( 4 ) ) AS connid,
                  '-' AS cityfrom,
                  '-' AS cityto
           WHERE carrid = 'LH'
      UNION
        SELECT FROM demo\_dbtab\_spfli                   "#EC CI\_BUFFSUBQ
               FIELDS '-' AS carrname,
                      CAST( connid AS CHAR( 4 ) ) AS connid,
                      cityfrom,
                      cityto
               WHERE carrid = 'LH'
       ORDER BY carrname DESCENDING, connid, cityfrom, cityto
       INTO TABLE @DATA(itab\_union).
    IF sy-subrc = 0.
      out->write\_doc( \`37) UNION: Combine data\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 940, 955 \` )
        )->write( itab\_union ).
    ELSE.
      out->write\_doc( \`37) UNION: Combine data: Nothing found!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 940, 955 \` ) ).
    ENDIF.
\*--------------------------------------\*
\*---- Using Select V (Excursions) -----\*
\*--------------------------------------\*
    out->line(
    )->next\_section( \`Using Select V (Excursions)\` ).
    "Read from DDIC view
    SELECT \* FROM demo\_flight\_view                      "#EC CI\_NOWHERE
      INTO TABLE @DATA(itab\_db\_view)
      UP TO 3 ROWS.                                     "#EC CI\_NOORDER
    IF sy-subrc = 0.
      out->write\_doc( \`38) Reading from DDIC view\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 976, 978 \` )
        )->write( itab\_db\_view ).
    ELSE.
      out->write\_doc( \`38) Reading from DDIC view: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 976, 978 \` ) ).
    ENDIF.
    "Read from CDS view
    SELECT \* FROM demo\_cds\_flights                      "#EC CI\_NOWHERE
      INTO TABLE @DATA(itab\_cds\_view)
      UP TO 3 ROWS.                                     "#EC CI\_NOORDER
    IF sy-subrc = 0.
      out->write\_doc( \`39) Reading from CDS view\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 992, 994 \` )
        )->write( itab\_cds\_view ).
    ELSE.
      out->write\_doc( \`39) Reading from CDS view: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 992, 994 \` ) ).
    ENDIF.
    "Read from internal tables as data source for select statements.
    SELECT FROM @itab\_cds\_view AS itab
      FIELDS id, carrier, flight, flight\_date, free\_seats
      INTO TABLE @DATA(itab\_select).
    IF sy-subrc = 0.
      out->write\_doc( \`40) Reading from internal table\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1008, 1010 \` )
        )->write( itab\_cds\_view ).
    ELSE.
      out->write\_doc( \`40) Reading from internal table: Nothing found!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1008, 1010 \` ) ).
    ENDIF.
\*-------------------------------------------\*
\*---- Changing data in database tables -----\*
\*-------------------------------------------\*
    out->line(
    )->next\_section( \`Changing data in database tables\` ).
    "Delete db table to work with it.
    DELETE FROM demo\_dbtab\_scarr.                       "#EC CI\_NOWHERE
    "INSERT
    "Insert individual rows into dbtab
    "Create table rows to be inserted in db tab
    DATA(row1) = VALUE demo\_dbtab\_scarr(
                        carrid = 'AF'
                        carrname = 'Air France'
                        currcode = 'EUR'
                        url =  'http://www.airfrance.fr' ).
    DATA(row2) = VALUE demo\_dbtab\_scarr(
                        carrid = 'UA'
                        carrname = 'United Airlines'
                        currcode = 'USD'
                        url =  'http://www.ual.com' ).
    "The following two INSERT statements have the same effect.
    INSERT INTO demo\_dbtab\_scarr VALUES @row1.
    INSERT demo\_dbtab\_scarr FROM @row2.
    IF sy-subrc = 0.
      SELECT \*                                          "#EC CI\_NOWHERE
      FROM demo\_dbtab\_scarr
      INTO TABLE @DATA(res\_insert).
      out->write\_doc( \`41) INSERT: Insert individual row to db table\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1049, 1050 \` )
        )->write( res\_insert ).
    ELSE.
    out->write\_doc( \`41) INSERT: Insert individual row to db table:\` &&
            \` Failure!\`
        )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1049, 1050 \` )  ).
    ENDIF.
    "Insert multiple rows (from a table) at once
    "Create table to be inserted in db tab
    DATA itab\_insert TYPE TABLE OF demo\_dbtab\_scarr.
    itab\_insert = VALUE #(
                   ( carrid = 'BA'
                     carrname = 'British Airways'
                     currcode = 'GBP'
                     url =  'http://www.british-airways.com' )
                   ( carrid = 'FJ'
                     carrname = 'Air Pacific'
                     currcode = 'USD'
                     url =  'http://www.airpacific.com' )
                   ).
    INSERT demo\_dbtab\_scarr FROM TABLE @itab\_insert.
    IF sy-subrc = 0.
      SELECT \*                                          "#EC CI\_NOWHERE
      FROM demo\_dbtab\_scarr
      INTO TABLE @DATA(res\_insert2).
out->write\_doc( \`42) INSERT: Insert multiple rows into db table at\` &&
      \`once\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1082, 1082 \` )
              )->write( res\_insert2 ).
    ELSE.
    out->write\_doc( \`42) INSERT: Insert multiple rows into db table\` &&
           \` at once: Failure!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1082, 1082 \` ) ).
    ENDIF.
    "Insert multiple rows (from a table) at once
    "accepting duplicate keys.
    "Create table to be inserted in db tab.
    DATA itab\_insert\_dupl TYPE TABLE OF demo\_dbtab\_scarr.
    itab\_insert\_dupl = VALUE #(
                        ( carrid = 'SQ'
                          carrname = 'Singapore Airlines'
                          currcode = 'SGD'
                          url =  'http://www.singaporeair.com' )
                        ( carrid = 'SQ'
                          carrname = 'Singapore Airlines'
                          currcode = 'SGD'
                          url =  'http://www.singaporeair.com' )
                        ).
    INSERT demo\_dbtab\_scarr FROM TABLE @itab\_insert\_dupl
      ACCEPTING DUPLICATE KEYS.
    SELECT \*                                            "#EC CI\_NOWHERE
     FROM demo\_dbtab\_scarr
     INTO TABLE @DATA(res\_insert\_dupl).
out->write\_doc( \`43) INSERT: Insert multiple rows into db table\` &&
        \` at once accepting duplicate keys\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1116, 1117 \` )
            )->write( res\_insert\_dupl ).
    "UPDATE
    "Change contents by overwriting entire rows...
    "...from work area.
    DATA(row3) = VALUE demo\_dbtab\_scarr(
                        carrid = 'AF'
                        carrname = 'Air France'
                        currcode = 'EUR'
                        url =  'http://www.airfrance.com' ).
    UPDATE demo\_dbtab\_scarr FROM @row3.
    "... from internal table.
    "first row: URL, second row: carrname + URL changed
    DATA itab\_insert2 LIKE itab\_insert.
    itab\_insert2 = VALUE #(  ( carrid = 'BA'
                               carrname = 'British Airways'
                               currcode = 'GBP'
                              url =  'http://www.britishairways.com' )
                             ( carrid = 'FJ'
                               carrname = 'Fiji Airways'
                               currcode = 'USD'
                               url =  'http://www.fijiairways.com' )
                            ).
    UPDATE demo\_dbtab\_scarr FROM TABLE @itab\_insert2.
    IF sy-subrc = 0.
      SELECT \*                                          "#EC CI\_NOWHERE
      FROM demo\_dbtab\_scarr
      INTO TABLE @DATA(res\_update).
      out->write\_doc( \`44) UPDATE: Change content of existing rows\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1138, 1138 \` )
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1153, 1153 \` )
        )->write( res\_update ).
    ELSE.
      out->write\_doc( \`44) UPDATE: Change content of existing rows:\` &&
      \` Failure!\`
        )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1138, 1138 \` )
        )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1153, 1153 \` )
       ).
    ENDIF.
    "Change contents of specific columns without overwriting existing,
    " other contents of rows using SET indicators.
    UPDATE demo\_dbtab\_scarr
      SET currcode = 'EUR'
      WHERE carrid <> 'UA'.
    IF sy-subrc = 0.
      SELECT \*                                          "#EC CI\_NOWHERE
      FROM demo\_dbtab\_scarr
      INTO TABLE @DATA(res\_update2).
out->write\_doc( \`45) UPDATE: Change contents of specific columns \` &&
            \`without overwriting existing, other contents of rows\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1178, 1180 \` )
              )->write( res\_update2 ).
    ELSE.
   out->write\_doc( \`45) UPDATE: Change contents of specific columns \` &&
        \`without overwriting existing, other contents of rows: Failure!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1178, 1180 \` ) ).
    ENDIF.
    "MODIFY
    "Insert/change rows using MODIFY
    "Note: The example uses an internal table created
    "with the value operator.
    "It is also possible to use work areas.
    "In below example, the first data set changes url and, currcode.
    "With the second data, a new data set is created.
    MODIFY demo\_dbtab\_scarr
      FROM TABLE
     @( VALUE #( ( carrid = 'BA'
                   carrname = 'British Airways'
                   currcode = 'GBP'
                   url =  'http://www.britishairways.co.uk' )
                 ( carrid = 'QF'
                   carrname = 'Qantas Airways'
                   currcode = 'AUD'
                   url =  'http://www.qantas.com.au' ) ) ).
    IF sy-subrc = 0.
      SELECT \*                                          "#EC CI\_NOWHERE
      FROM demo\_dbtab\_scarr
      INTO TABLE @DATA(res\_modify).
      out->write\_doc( \`46) MODIFY: Inserting/changing rows\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1206, 1215 \` )
        )->write( res\_modify ).
    ELSE.
      out->write\_doc( \`46) MODIFY: Inserting/changing rows: Failure!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1206, 1215 \` ) ).
    ENDIF .
    "DELETE
    "Delete table row from work area.
    "Note 1: You specify the key fields only.
    "Note 2: It is also possible to delete from internal tables:
    "DELETE dbtab FROM TABLE ...
    DELETE demo\_dbtab\_scarr
      FROM @( VALUE #(  carrid = 'QF' ) ).
    IF sy-subrc = 0.
      SELECT \*                                          "#EC CI\_NOWHERE
      FROM demo\_dbtab\_scarr
      INTO TABLE @DATA(res\_delete).
      out->write\_doc( \`47) DELETE: Delete table row from work area\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1238, 1239 \` )
        )->write( res\_delete ).
    ELSE.
    out->write\_doc( \`47) DELETE: Delete table row from work area: \` &&
      \`Failure!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1238, 1239 \` ) ).
    ENDIF.
    "Delete table rows with condition.
    DELETE FROM demo\_dbtab\_scarr
     WHERE currcode = 'EUR'.
    IF sy-subrc = 0.
      SELECT \*                                          "#EC CI\_NOWHERE
      FROM demo\_dbtab\_scarr
      INTO TABLE @DATA(res\_delete2).
      out->write\_doc( \`48) DELETE: Delete table rows with condition\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1258, 1259 \` )
        )->write( res\_delete2 ).
    ELSE.
    out->write\_doc( \`48) DELETE: Delete table rows with condition: \` &&
      \`Failure!\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1258, 1259 \` ) ).
    ENDIF.
    "Delete complete table.
    DELETE FROM demo\_dbtab\_scarr.                       "#EC CI\_NOWHERE
    IF sy-subrc = 0.
      SELECT \*                                          "#EC CI\_NOWHERE
      FROM demo\_dbtab\_scarr
      INTO TABLE @DATA(res\_delete3).
      out->write\_doc( \`49) DELETE: Delete complete table\`
       )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1278, 1278 \` )
        )->write( res\_delete3 ).
    ELSE.
      out->write\_doc( \`49) DELETE: Delete complete table: Failure!\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_abap\_source\_code\_html(
         source = sy-repid && \`, 1278, 1278 \` ) ).
    ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    "Initialize demo database tables.
    cl\_demo\_flight\_tables=>clear\_dbtabs( ).
    "Fill demo database tables.
    cl\_demo\_flight\_tables=>fill\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The output shows the outcome of various ways about how to work with persisted data in database tables using ABAP SQL. Find comments in the program explaining the context and details. Basically, all variants described in the ABAP cheat sheet [ABAP SQL: Working with persisted data in database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql.htm) are covered:

-   Reading from database tables using SELECT
-   Changing data in database tables using INSERT, UPDATE, MODIFY and DELETE