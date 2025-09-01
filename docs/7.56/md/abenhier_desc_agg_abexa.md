---
title: "Source Code"
description: |
  REPORT demo_hierarchy_descendants_agg. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-METHODS fill_table. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(level) = 2. cl_demo_input=>request( CHANGING field = level ). DATA itab TYPE SORTED TABLE OF demo
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhier_desc_agg_abexa.htm"
abapFile: "abenhier_desc_agg_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "internal-table", "abenhier", "desc", "agg", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_data.htm) →  [SELECT, FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_navigators.htm) →  [SELECT, FROM hierarchy\_aggregate\_navigator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_agg_navis.htm) →  [SELECT, FROM HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_desc_agg.htm) → 

SELECT, Hierarchy Navigator HIERARCHY\_DESCENDANTS\_AGGREGATE

This example demonstrates the hierarchy navigator HIERARCHY\_DESCENDANTS\_AGGREGATE with the addition JOIN.

Source Code

REPORT demo\_hierarchy\_descendants\_agg.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS fill\_table.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(level) = 2.
    cl\_demo\_input=>request( CHANGING field = level ).
    DATA itab TYPE SORTED TABLE OF demo\_child\_num
              WITH NON-UNIQUE KEY client id.
    fill\_table( ).
    SELECT FROM demo\_cds\_parent\_child( p\_id = 'A' )
           FIELDS id,
                  parent,
                  hierARCHY\_level
           INTO TABLE @DATA(hierarchy).
    cl\_demo\_output=>write( hierarchy ).
    cl\_demo\_output=>line( ).
    SELECT FROM demo\_cds\_parent\_child( p\_id = 'A' ) AS h
             LEFT OUTER JOIN demo\_child\_num AS j
               ON j~id = h~id
           FIELDS h~id,
                  h~parent,
                  j~num,
                  h~hierarchy\_level
           INTO TABLE @DATA(hierarchy\_joined).
    cl\_demo\_output=>write( hierarchy\_joined ).
    SELECT agg~\*
           FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
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
                  WHERE hierarchy\_level <= @level ) AS agg
           INTO TABLE @DATA(asql\_hierarchy\_desc\_aggregate).
    cl\_demo\_output=>write( asql\_hierarchy\_desc\_aggregate ).
    SELECT agg~\*
           FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
                  SOURCE demo\_cds\_parent\_child( p\_id = 'A' ) AS h
                  JOIN demo\_child\_num AS j
                    ON j~id = h~id
                  MEASURES MIN( j~num ) AS min,
                           MAX( j~num ) AS max,
                           SUM( j~num ) AS sum,
                           COUNT( j~num ) AS cnt
                  WHERE hierarchy\_level <= @level ) AS agg
           INTO TABLE @DATA(cds\_hierarchy\_desc\_aggregate).
    ASSERT
      cds\_hierarchy\_desc\_aggregate = asql\_hierarchy\_desc\_aggregate.
    cl\_demo\_output=>line( ).
    SELECT \*
           FROM demo\_child\_num
           INTO TABLE @itab. "#EC CI\_NOWHERE
    itab = VALUE #( BASE itab
      ( client = sy-mandt id = 'A ' num = -1     )
      ( client = sy-mandt id = 'BC' num = 10000  )
      ( client = sy-mandt id = 'BD' num = 100000 )
      ( client = sy-mandt id = 'BD' num = 200000 )
      ( client = sy-mandt id = 'BD' num = 300000 ) ).
    SELECT FROM demo\_cds\_parent\_child( p\_id = 'A' ) AS h
             LEFT OUTER JOIN @itab AS j
               ON j~id = h~id
           FIELDS h~id,
                  h~parent,
                  j~num,
                  h~hierarchy\_level
           INTO TABLE @hierarchy\_joined.
    cl\_demo\_output=>write( hierarchy\_joined ).
    SELECT agg~\*
           FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
                  SOURCE HIERARCHY(
                           SOURCE demo\_cds\_parent\_child\_source
                           CHILD TO PARENT ASSOCIATION \_relat
                           START WHERE id = 'A'
                           SIBLINGS ORDER BY id ) AS h
                  JOIN @itab AS j
                    ON j~id = h~id
                  MEASURES MIN( j~num ) AS min,
                           MAX( j~num ) AS max,
                           SUM( j~num ) AS sum,
                           COUNT( j~num ) AS cnt
                  WHERE hierarchy\_level <= @level ) AS agg
           INTO TABLE @asql\_hierarchy\_desc\_aggregate.
    cl\_demo\_output=>write( asql\_hierarchy\_desc\_aggregate ).
    SELECT agg~\*
           FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
                  SOURCE demo\_cds\_parent\_child( p\_id = 'A' ) AS h
                  JOIN @itab AS j
                    ON j~id = h~id
                  MEASURES MIN( j~num ) AS min,
                           MAX( j~num ) AS max,
                           SUM( j~num ) AS sum,
                           COUNT( j~num ) AS cnt
                  WHERE hierarchy\_level <= @level ) AS agg
           INTO TABLE @cds\_hierarchy\_desc\_aggregate.
    ASSERT
      cds\_hierarchy\_desc\_aggregate = asql\_hierarchy\_desc\_aggregate.
    DELETE FROM demo\_parent\_chld. "GTT!
    DELETE FROM demo\_child\_num.   "GTT!
    cl\_demo\_output=>display( ).  ENDMETHOD.
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
            ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Calls of the hierarchy navigator [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_agg_navis.htm) where the [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") DEMO\_CDS\_PARENT\_CHILD specified as a source is joined with a DDIC database table DEMO\_CHILD\_NUM and an internal table [@itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_itab.htm) using the addition JOIN. The aggregate functions evaluate the column NUM of the joined data sources. The results of the join expressions used are also displayed.

-   In the first part, the table DEMO\_CHILD\_NUM is filled to produce a 1:1 relationship between the rows of the hierarchy and its own rows. The result of the hierarchy navigator is the same as in the executable example DEMO\_HIERARCHY\_AGGREGATE, but here the number values are taken from the joined table.
-   In the second part, the internal table @itab contains the rows of the DDIC database table DEMO\_CHILD\_NUM and further rows that also match the criteria for descendant nodes for nodes of the hierarchy. This example shows how these additional rows, produced in the result set of the join, are evaluated in the aggregate functions.

The statement [ASSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassert.htm) shows that the use of the [hierarchy generator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_generator.htm) and a semantically identical [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") as the source of the hierarchy navigator produces the same results.