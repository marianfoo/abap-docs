  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) →  [SELECT - FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_data.htm) →  [SELECT - FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm) →  [SELECT - FROM hierarchy\_aggregate\_navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_agg_navis.htm) →  [SELECT - FROM HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_desc_agg.htm) → 

Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE with WITH

This example demonstrates the hierarchy navigator HIERARCHY\_DESCENDANTS\_AGGREGATE with the addition JOIN and the addition WITH.

Source Code

REPORT demo\_hierarchy\_desc\_with.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS fill\_table.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(level) = 3.
    cl\_demo\_input=>request( CHANGING field = level ).
    fill\_table( ).
    SELECT FROM demo\_cds\_parent\_child( p\_id = 'A' ) AS h
                  RIGHT OUTER JOIN demo\_child\_num AS j
                    ON j~id = h~id
           FIELDS
              COALESCE( CAST( h~id AS CHAR( 4 ) ),
                        'Null' ) AS id,
              COALESCE( CAST( h~parent AS CHAR( 4 ) ),
                        'Null' ) AS parent,
              COALESCE( CAST( hierarchy\_level AS CHAR( 20 ) ),
                        'Null' ) AS hierachy\_level,
              j~num AS num
           INTO TABLE @DATA(joined\_hierarchy).
    cl\_demo\_output=>write( joined\_hierarchy ).
    SELECT FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
                  SOURCE HIERARCHY(
                           SOURCE demo\_cds\_parent\_child\_source
                           CHILD TO PARENT ASSOCIATION \_relat
                           START WHERE id = 'A'
                           SIBLINGS ORDER BY id ) AS h
                  JOIN demo\_child\_num AS j
                    ON j~id = h~id
                  MEASURES MIN( j~num ) AS min,
                           MAX( j~num ) AS max,
                           SUM( j~num ) AS sum,
                           COUNT( j~num ) AS cnt
                  WHERE hierarchy\_level >= @level
              WITH SUBTOTAL
              WITH BALANCE
              WITH NOT MATCHED
              WITH TOTAL ) AS agg
            FIELDS
              COALESCE( CAST( id AS CHAR( 4 ) ),
                        'Null' ) AS id,
              COALESCE( CAST( parent AS CHAR( 4 ) ),
                        'Null' ) AS parent,
              COALESCE( CAST( hierarchy\_level AS CHAR( 20 ) ),
                        'Null' ) AS hierachy\_level,
              COALESCE( CAST( hierarchy\_aggregate\_type AS CHAR( 4 ) ),
                        'Null' ) AS hierarchy\_aggregate\_type,
              min,
              max,
              sum,
              cnt
           INTO TABLE @DATA(asql\_hierarchy\_desc\_aggregate).
    SELECT FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
                  SOURCE demo\_cds\_parent\_child( p\_id = 'A' ) AS h
                  JOIN demo\_child\_num AS j
                    ON j~id = h~id
                  MEASURES MIN( j~num ) AS min,
                           MAX( j~num ) AS max,
                           SUM( j~num ) AS sum,
                           COUNT( j~num ) AS cnt
                  WHERE hierarchy\_level >= @level
              WITH SUBTOTAL
              WITH BALANCE
              WITH NOT MATCHED
              WITH TOTAL ) AS agg
            FIELDS
              COALESCE( CAST( id AS CHAR( 4 ) ),
                        'Null' ) AS id,
              COALESCE( CAST( parent AS CHAR( 4 ) ),
                        'Null' ) AS parent,
              COALESCE( CAST( hierarchy\_level AS CHAR( 20 ) ),
                        'Null' ) AS hierachy\_level,
              COALESCE( CAST( hierarchy\_aggregate\_type AS CHAR( 4 ) ),
                        'Null' ) AS hierarchy\_aggregate\_type,
              min,
              max,
              sum,
              cnt
           INTO TABLE @DATA(cds\_hierarchy\_desc\_aggregate).
    ASSERT
      cds\_hierarchy\_desc\_aggregate = asql\_hierarchy\_desc\_aggregate.
    DELETE FROM demo\_parent\_chld. "GTT!
    DELETE FROM demo\_child\_num.   "GTT!
    cl\_demo\_output=>display( asql\_hierarchy\_desc\_aggregate ).  ENDMETHOD.
  METHOD fill\_table.
    INSERT demo\_parent\_chld FROM TABLE @( VALUE #(
            ( cnt = 1 id = 'A'   parent\_id = ' '  )
            ( cnt = 2 id = 'AA'  parent\_id = 'A'  )
            ( cnt = 3 id = 'AB'  parent\_id = 'A'  )
            ( cnt = 4 id = 'AC'  parent\_id = 'A'  )
            ( cnt = 5 id = 'BA'  parent\_id = 'AB' )
            ( cnt = 6 id = 'BB'  parent\_id = 'AB' )
            ( cnt = 7 id = 'BC'  parent\_id = 'AB' )
            ( cnt = 8 id = 'BD'  parent\_id = 'AB' )
            ) ).
    INSERT demo\_child\_num FROM TABLE @( VALUE #(
            ( id = 'A'  num = 0   )
            ( id = 'AA' num = 10  )
            ( id = 'AB' num = 20  )
            ( id = 'AC' num = 30  )
            ( id = 'BA' num = 100 )
            ( id = 'BB' num = 200 )
            ( id = 'BC' num = 300 )
            ( id = 'BD' num = 400 )
            ( id = 'CA' num = 4000 )
            ( id = 'CB' num = 5000 )
            ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

It demonstrates the way the different WITH additions work in the hierarchy navigator [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_desc_agg.htm). The source is a hierarchy joined to a further data source by the JOIN addition. Before the function is called, the results set of a join is produced containing all rows to which the WITH additions are applied. Depending on the value entered for the host variable level used in the WHERE condition, the additions WITH SUBTOTAL and WITH BALANCE return different results. The results of WITH NOT MATCHED and WITH TOTAL are independent of level.

The function [COALESCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_coalesce.htm) is used here to highlight the null values in the output. If this function is not used, the null values are converted into type-dependent initial values and hence cannot be detected as null values.