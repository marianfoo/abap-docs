  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) →  [UNION, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunion_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Union%20for%20Building%20a%20Ranges%20Table%2C%20ABENDEMO_UNION_RANGES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

SELECT, Union for Building a Ranges Table

This example demonstrates how a ranges table is built using unions.

Source Code   

\* Public class definition
CLASS cl\_demo\_union\_ranges DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    CONSTANTS package TYPE tadir-devclass VALUE 'SABAPDEMOS'.
    TYPES prog\_ranges TYPE RANGE OF trdir-name.
    METHODS get\_prog\_ranges
      RETURNING VALUE(prog\_ranges) TYPE prog\_ranges.
ENDCLASS.
\* CCAU
CLASS test\_union DEFINITION DEFERRED.
CLASS cl\_demo\_union\_ranges DEFINITION LOCAL FRIENDS test\_union.
CLASS test\_union DEFINITION FOR TESTING RISK LEVEL
HARMLESS DURATION SHORT.
  PRIVATE SECTION.
    METHODS check\_ranges FOR TESTING.
ENDCLASS.
CLASS test\_union IMPLEMENTATION.
  METHOD check\_ranges.
    DATA prog\_ranges TYPE RANGE OF trdir-name.
    DATA buffer TYPE TABLE OF tadir-obj\_name WITH EMPTY KEY.
    SELECT obj\_name
    FROM tadir
    WHERE pgmid = 'R3TR' AND
    object = 'PROG' AND
    devclass = @cl\_demo\_union\_ranges=>package
    INTO TABLE @buffer.
    prog\_ranges = VALUE #( FOR <fs> IN buffer
    ( sign = 'I'
    option = 'EQ'
    low = <fs>
    high = ' ' ) ).
    SELECT obj\_name
    FROM tadir
    WHERE pgmid = 'R3TR' AND
    object = 'CLAS' AND
    devclass = @cl\_demo\_union\_ranges=>package
    INTO TABLE @buffer.
    prog\_ranges = VALUE #( BASE prog\_ranges
    FOR <fs> IN buffer
    ( sign = 'I'
    option = 'CP'
    low = |{ <fs> WIDTH = 30 PAD = '=' }|
    && '\*'
    high = ' ' ) ).
    SELECT obj\_name
    FROM tadir
    WHERE pgmid = 'R3TR' AND
    object = 'FUGR' AND
    devclass = @cl\_demo\_union\_ranges=>package
    INTO TABLE @buffer.
    prog\_ranges = VALUE #( BASE prog\_ranges
    FOR <fs> IN buffer
    ( sign = 'I'
    option = 'EQ'
    low = 'SAPL' && <fs>
    high = ' ' ) ).
    SELECT obj\_name
    FROM tadir
    WHERE pgmid = 'R3TR' AND
    object = 'FUGR' AND
    devclass = @cl\_demo\_union\_ranges=>package
    INTO TABLE @buffer.
    prog\_ranges = VALUE #( BASE prog\_ranges
    FOR <fs> IN buffer
    ( sign = 'I'
    option = 'CP'
    low = 'L' && <fs> && '+++'
    high = ' ' ) ).
    SORT prog\_ranges BY low.
    cl\_abap\_unit\_assert=>assert\_equals(
    EXPORTING
    act = prog\_ranges
    exp = NEW cl\_demo\_union\_ranges( )->get\_prog\_ranges( ) ).
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_union\_ranges IMPLEMENTATION.
  METHOD main.
    FINAL(prog\_ranges) = get\_prog\_ranges( ).
    out->write( prog\_ranges ).
    SELECT FROM trdir
           FIELDS name
           WHERE name IN @prog\_ranges
           ORDER BY name
           INTO TABLE @FINAL(programs).
    out->write( programs ).
  ENDMETHOD.
  METHOD get\_prog\_ranges.
    SELECT FROM tadir
           FIELDS 'I' AS sign,
                  'EQ' AS option,
                   obj\_name AS low,
                   ' ' AS high
           WHERE pgmid    = 'R3TR' AND
                 object   = 'PROG' AND
                 devclass = @package
    UNION
    SELECT FROM tadir
           FIELDS 'I' AS sign,
                  'CP' AS option,
                  concat( rpad( obj\_name, 30, '=' ) , '\*' ) AS low,
                  ' ' AS high
           WHERE pgmid    = 'R3TR' AND
                 object   = 'CLAS' AND
                 devclass = @package
    UNION
    SELECT FROM tadir
           FIELDS 'I' AS sign,
                  'EQ' AS option,
                  'SAPL' && obj\_name AS low,
                  ' ' AS high
           WHERE pgmid    = 'R3TR' AND
                 object   = 'FUGR' AND
                 devclass = @package
    UNION
    SELECT FROM tadir
           FIELDS 'I' AS sign,
                  'CP' AS option,
                  'L' && obj\_name && '+++' AS low,
                  ' ' AS high
           WHERE pgmid    = 'R3TR' AND
                 object   = 'FUGR' AND
                 devclass = @package
           ORDER BY low
           INTO TABLE @prog\_ranges.
  ENDMETHOD.
ENDCLASS.

Description   

The aim of this example is to create a list of all ABAP programs in a package. The names of the ABAP programs are in the DDIC database table TRDIR and the assignment of repository objects to a package is specified in the DDIC database table TADIR. In the case of function pools and class pools from the table TADIR, the names of the associated master programs and include programs must be found in the table TRDIR. This can be done by evaluating the naming conventions. In the example shown here, a [ranges table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_table_glosry.htm "Glossary Entry") is constructed for use in a WHERE clause. The method get\_prog\_ranges fills the ranges table in a single ABAP SQL statement using UNION statements. The entire ranges table is filled on the database. In a test class, the test method test\_union contains an alternative implementation in which the ranges tables is constructed from the results of four individual SELECT statements in the ABAP program and in which ABAP expressions are used instead of SQL expressions.