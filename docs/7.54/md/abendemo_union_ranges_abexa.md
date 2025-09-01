  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm) →  [UNION Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunion_abexas.htm) → 

SELECT, Union for Building a Ranges Table

This example demonstrates how a ranges table is built using unions.

Source Code

REPORT demo\_union\_ranges.
CLASS test\_union DEFINITION DEFERRED.
CLASS demo\_union DEFINITION FRIENDS test\_union.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CONSTANTS package TYPE tadir-devclass VALUE 'SABAPDEMOS'.
    TYPES prog\_ranges TYPE RANGE OF trdir-name.
    CLASS-METHODS get\_prog\_ranges
      RETURNING VALUE(prog\_ranges) TYPE prog\_ranges.
ENDCLASS.
CLASS demo\_union IMPLEMENTATION.
  METHOD main.
    DATA(prog\_ranges) = get\_prog\_ranges( ).
    cl\_demo\_output=>write( prog\_ranges ).
    SELECT FROM trdir
           FIELDS name
           WHERE name IN @prog\_ranges
           ORDER BY name
           INTO TABLE @DATA(programs).
    cl\_demo\_output=>display( programs ).
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
START-OF-SELECTION.
  demo\_union=>main( ).
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
           WHERE pgmid    = 'R3TR' AND
                 object   = 'PROG' AND
                 devclass = @demo\_union=>package
           INTO TABLE @buffer.
    prog\_ranges = VALUE #( FOR <fs> IN buffer
                              ( sign = 'I'
                                option = 'EQ'
                                low = <fs>
                                high = ' ' ) ).
    SELECT obj\_name
           FROM tadir
           WHERE pgmid    = 'R3TR' AND
                 object   = 'CLAS' AND
                 devclass = @demo\_union=>package
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
           WHERE pgmid    = 'R3TR' AND
                 object   = 'FUGR' AND
                 devclass = @demo\_union=>package
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
                 devclass = @demo\_union=>package
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
        act                  = prog\_ranges
        exp                  = demo\_union=>get\_prog\_ranges( ) ).
  ENDMETHOD.
ENDCLASS.

Description

The aim of this example is to create a list of all ABAP programs in a package. The names of the ABAP programs are in the database table TRDIR and the assignment of repository objects to a package is specified in the database table TADIR. In the case of function groups and class pools from the table TADIR, the names of the associated master programs and include programs must be found in the table TRDIR. This can be done by evaluating the naming conventions. In the example shown here, a [ranges table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenranges_table_glosry.htm "Glossary Entry") is constructed for use in a WHERE clause. The method get\_prog\_ranges fills the ranges table in a single ABAP SQL statement using UNION statements. The ranges table is filled in full on the database. In one test class, the test method test\_union contains an alternative implementation in which the ranges tables is constructed from the results of four individual SELECT statements in the ABAP program and in which ABAP expressions are used instead of SQL expressions.