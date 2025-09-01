  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) →  [SELECT, FROM hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) →  [SELECT, FROM hierarchy\_aggregate\_navigator](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)) →  [SELECT, hierarchy\_ancestors\_aggregate](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Hierarchy%20Navigator%20HIERARCHY_ANCESTORS_AGGREGATE%2C%20ABENHIER_ANCS_AGG_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

SELECT, Hierarchy Navigator HIERARCHY\_ANCESTORS\_AGGREGATE

This example demonstrates the hierarchy navigator HIERARCHY\_ANCESTORS\_AGGREGATE.

Source Code   

\* Public class definition
CLASS cl\_demo\_hrrchy\_ancestors\_agg DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS fill\_table.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_hrrchy\_ancestors\_agg IMPLEMENTATION.
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
           INTO TABLE @FINAL(hierarchy).
    out->write( hierarchy ).
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
           INTO TABLE @FINAL(asql\_hiera\_ancestors\_aggregate).
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
           INTO TABLE @FINAL(cds\_hiera\_ancestors\_aggregate).
    ASSERT
      cds\_hiera\_ancestors\_aggregate = asql\_hiera\_ancestors\_aggregate.
    DELETE FROM demo\_parchld\_agg. "GTT!
    out->write( asql\_hiera\_ancestors\_aggregate ).
  ENDMETHOD.
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

Description   

Calls of the hierarchy navigator [HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\)). If the example is executed with the predefined input values, the result set contains two rows, representing paths from a start node with the ID A to two hierarchy nodes with the IDs F1 and D2. The paths are highlighted as a result of the aggregate function STRING\_AGG.

If the input value for the start node is raised, further start nodes are added by the comparison operator after START WHERE and hence further rows are added to the result set. In this example, the aggregated paths can be taken from the last column, however there is currently no way of interpreting the start node from the hierarchy columns.