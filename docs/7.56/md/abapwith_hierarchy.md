  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) → 

WITH, HIERARCHY

Syntax

... WITH HIERARCHY hierarchy
                 *|* (hierarchy\_syntax)

Effect

The addition WITH HIERARCHY exposes a common table expression as a [CTE hierarchy](javascript:call_link\('abencte_hierarchy_glosry.htm'\) "Glossary Entry"). Under its name, a common table expression like this can be used in the subsequent queries of the current [WITH](javascript:call_link\('abapwith.htm'\)) statement as an [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)).

Only a single data source can be accessed in the subquery of the common table expression and this data source must be an [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)). The SQL hierarchy used as the data source of the subquery can be specified either statically or dynamically after HIERARCHY.

-   hierarchy is used to specify either the name of the SQL hierarchy or its alias name defined using [AS](javascript:call_link\('abapfrom_clause.htm'\)). When the [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry") [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) is used, it must have an alias name and this name must be specified.
-   A parenthesized data object hierarchy\_syntax can be specified. When the statement is executed, this data object must either contain the static syntax specifying the SQL hierarchy or be initial. In this case, the common table expression can be used only in other dynamic tokens of the WITH statement. The data object hierarchy\_syntax can be a character-like data object or a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a character-like row type. The syntax in hierarchy\_syntax, as in the static syntax, is not case-sensitive. Invalid syntax raises a catchable exception of the class CX\_SY\_DYNAMIC\_OSQL\_ERROR. If hierarchy\_syntax is initial, the common table expression is not exposed as an SQL hierarchy.

The result set of a common table expression exposed as a CTE hierarchy includes the [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)) of the SQL hierarchy specified in the subquery. The [SELECT](javascript:call_link\('abapselect_list.htm'\)) list of the subquery must not contain any columns with the same name or alias name as a hierarchy column.

Hint

If hierarchy\_syntax is specified dynamically, it is possible to decide at runtime whether a common table expression is exposed as a CTE hierarchy.

Example

This excerpt from the program DEMO\_HIERARCHY\_CTE accesses CTE hierarchies in two hierarchy navigators [HIERARCHY\_DESCENDANTS](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") joined in the main query of a [WITH](javascript:call_link\('abapwith.htm'\)) statement using a left outer join. The first CTE hierarchy represents the [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_PARENT\_CHILD, which is accessed in its subquery. The second CTE hierarchy represents the result set of the [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry") [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)), which is used in its subquery. The ON condition of the join compares two [hierarchy columns](javascript:call_link\('abenhierarchy_column_glosry.htm'\) "Glossary Entry") of the CTE hierarchies. When executed, this program demonstrates the result.

WITH +hierarchy1 AS (
        SELECT FROM demo\_cds\_parent\_child( p\_id = 'A' )
               FIELDS id AS id1,
                      parent AS parent1 )
        WITH HIERARCHY demo\_cds\_parent\_child,
     +hierarchy2 AS (
        SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                               CHILD TO PARENT ASSOCIATION \_relat
                               START WHERE id = 'U' ) AS hierarchy
               FIELDS id AS id2,
                      parent AS parent2 )
        WITH HIERARCHY hierarchy
  SELECT FROM HIERARCHY\_DESCENDANTS(
                SOURCE +hierarchy1
                START WHERE hierarchy\_parent\_rank = 0
                DISTANCE FROM 1 ) AS h1
           LEFT OUTER JOIN
             HIERARCHY\_DESCENDANTS(
               SOURCE +hierarchy2
               START WHERE hierarchy\_parent\_rank = 0
               DISTANCE FROM 1 ) AS h2
                 ON h1~hierarchy\_rank = h2~hierarchy\_rank
         FIELDS h1~id1,
                h2~id2,
                h1~parent1,
                h2~parent2
         INTO TABLE @DATA(result).