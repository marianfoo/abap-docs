---
title: "SELECT, Internal Table as a Data Source of the Hierarchy Generator"
description: |
  This example demonstrates how an internal table is accessed in a common table expression with self association and how the table is used as a data source of the hierarchy generator. Source Code REPORT demo_select_from_itab_hiera. CLASS demo DEFINITION. PUBLIC SECTION. TYPES: BEGIN OF parent_chi
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_from_itab_hiera_abexa.htm"
abapFile: "abenselect_from_itab_hiera_abexa.htm"
keywords: ["select", "do", "try", "method", "class", "data", "types", "internal-table", "abenselect", "from", "itab", "hiera", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) →  [SELECT, FROM @itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_itab.htm) → 

SELECT, Internal Table as a Data Source of the Hierarchy Generator

This example demonstrates how an internal table is accessed in a common table expression with self association and how the table is used as a data source of the hierarchy generator.

Source Code

REPORT demo\_select\_from\_itab\_hiera.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF parent\_child,
        cnt       TYPE i,
        id        TYPE c LENGTH 2,
        parent\_id TYPE c LENGTH 2,
      END OF parent\_child.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(start\_id) = CONV  demo\_parent\_chld-id( 'A' ).
    cl\_demo\_input=>request( CHANGING field = start\_id ).
    DATA parent\_child\_tab TYPE HASHED TABLE OF parent\_child
                          WITH UNIQUE KEY cnt.
    parent\_child\_tab = VALUE #(
            ( cnt = 1 id = 'A'  parent\_id = ' ' )
            ( cnt = 2 id = 'B'  parent\_id = 'A' )
            ( cnt = 3 id = 'C'  parent\_id = 'A' )
            ( cnt = 4 id = 'D'  parent\_id = 'C' )
            ( cnt = 5 id = 'D'  parent\_id = 'B' )
            ( cnt = 6 id = 'D'  parent\_id = 'A' ) ).
    WITH
      +parent\_child\_source AS
         ( SELECT FROM @parent\_child\_tab AS parent\_child\_tab
                  FIELDS id,
                         parent\_id AS parent )
            WITH ASSOCIATIONS (
              JOIN TO MANY +parent\_child\_source AS \_relat
                ON +parent\_child\_source~parent = \_relat~id )
      SELECT FROM HIERARCHY( SOURCE +parent\_child\_source
                             CHILD TO PARENT ASSOCIATION \_relat
                             START WHERE id = @start\_id
                             SIBLINGS ORDER BY id
                             MULTIPLE PARENTS ALLOWED )
             FIELDS id,
                    parent,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table parent\_child\_tab is used as a data source of the common table expression +parent\_child\_source in a [WITH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwith.htm) statement. A [CTE association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencte_association_glosry.htm "Glossary Entry") \_relat is [defined and exposed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwith_associations_defining.htm) for the common table expression. The CTE association is a [self-association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenself_association_glosry.htm "Glossary Entry"). The common table expression can be used as a data source and the CTE association can be used as a [hierarchy association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") of the [hierarchy generator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_generator.htm) used in the main query of the WITH statement.