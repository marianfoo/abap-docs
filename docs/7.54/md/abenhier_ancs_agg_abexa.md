  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) →  [SELECT - FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_data.htm) →  [SELECT - FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm) →  [SELECT - FROM hierarchy\_aggregate\_navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_agg_navis.htm) →  [SELECT - FROM HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_ancs_agg.htm) → 

Hierarchy Navigator HIERARCHY\_ANCESTORS\_AGGREGATE

This example demonstrates the hierarchy navigator HIERARCHY\_ANCESTORS\_AGGREGATE.

Source Code

REPORT demo\_hierarchy\_ancestors\_agg.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS fill\_table.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(start\_id) = 'A '.
    DATA(end\_id1)  = 'F1'.
    DATA(end\_id2)  = 'D2'.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = start\_id
      )->add\_field( CHANGING field = end\_id1
      )->request(   CHANGING field = end\_id2 ).
    fill\_table( ).
    SELECT \*
           FROM HIERARCHY(
             SOURCE demo\_cds\_parent\_child\_src\_agg
             CHILD TO PARENT ASSOCIATION \_relat
             START WHERE id = 'A'
             SIBLINGS ORDER BY id )
           INTO TABLE @DATA(hierarchy).
    cl\_demo\_output=>write( hierarchy ).
    SELECT FROM HIERARCHY\_ANCESTORS\_AGGREGATE(
                  SOURCE HIERARCHY(
                    SOURCE demo\_cds\_parent\_child\_src\_agg
                    CHILD TO PARENT ASSOCIATION \_relat
                    START WHERE id = 'A'
                    SIBLINGS ORDER BY id )
                  START WHERE id <= @start\_id
                  MEASURES COUNT(\*) AS cnt,
                           MIN( num ) AS min,
                           MAX( num ) AS max,
                           SUM( num ) AS sum,
                           PRODUCT( num ) AS prod,
                           STRING\_AGG( id, '-' ) AS strg\_agg
                  WHERE id = @end\_id1 OR
                        id = @end\_id2 ) AS agg
           FIELDS id,
                  cnt, min, max, sum, prod, strg\_agg
           INTO TABLE @DATA(asql\_hiera\_ancestors\_aggregate).
    SELECT FROM HIERARCHY\_ANCESTORS\_AGGREGATE(
                  SOURCE demo\_cds\_parent\_child\_agg( p\_id = 'A' )
                  START WHERE id <= @start\_id
                  MEASURES COUNT(\*) AS cnt,
                           MIN( num ) AS min,
                           MAX( num ) AS max,
                           SUM( num ) AS sum,
                           PRODUCT( num ) AS prod,
                           STRING\_AGG( id, '-' ) AS strg\_agg
                  WHERE id = @end\_id1 OR
                        id = @end\_id2 ) AS agg
           FIELDS id,
                  cnt, min, max, sum, prod, strg\_agg
           INTO TABLE @DATA(cds\_hiera\_ancestors\_aggregate).
    ASSERT
      cds\_hiera\_ancestors\_aggregate = asql\_hiera\_ancestors\_aggregate.
    DELETE FROM demo\_parchld\_agg. "GTT!
    cl\_demo\_output=>display( asql\_hiera\_ancestors\_aggregate ).  ENDMETHOD.
  METHOD fill\_table.
    INSERT demo\_parchld\_agg FROM TABLE @( VALUE #(
            ( cnt = 1 id = 'A'   parent\_id = ' '  num = 1 )
            ( cnt = 2 id = 'B'   parent\_id = 'A'  num = 2 )
            ( cnt = 3 id = 'C'   parent\_id = 'B'  num = 3 )
            ( cnt = 4 id = 'D1'  parent\_id = 'C'  num = 4 )
            ( cnt = 5 id = 'E1'  parent\_id = 'D1' num = 5 )
            ( cnt = 6 id = 'F1'  parent\_id = 'E1' num = 6 )
            ( cnt = 7 id = 'D2'  parent\_id = 'C'  num = 4 )
            ( cnt = 8 id = 'E2'  parent\_id = 'D2' num = 5 )
            ( cnt = 9 id = 'F2'  parent\_id = 'E2' num = 6 )
            ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Calls of the hierarchy navigator [HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_ancs_agg.htm). If the example is executed with the proposed input values, the results set contains two rows, representing paths from a starting node with the ID A to two hierarchy nodes with the IDs F1 and D2. The paths are highlighted as a result of the aggregate function STRING\_AGG.

If the input value for the starting node is raised, further starting nodes are added by the relational operator after START WHERE and hence further rows are added to the results set. In this example, the aggregated paths can be taken from the last column, however there is currently no way of interpreting the starting node from the hierarchy columns.