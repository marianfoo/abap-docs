  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) →  [SELECT, FROM hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) → 

SELECT, FROM cte\_hierarchy

Syntax

... +cte\_hierarchy

Effect

Specifies a [CTE hierarchy](javascript:call_link\('abencte_hierarchy_glosry.htm'\) "Glossary Entry") +cte\_hierarchy as a an SQL hierarchy [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) in an ABAP SQL query of a [WITH](javascript:call_link\('abapwith.htm'\)) statement. A CTE hierarchy is a common table expression defined as an SQL hierarchy using the addition [WITH HIERARCHY](javascript:call_link\('abapwith_hierarchy.htm'\)).

The rows of the tabular result set of a CTE hierarchy are the [hierarchy nodes](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry") of the SQL hierarchy accessed in its subquery, including their [hierarchy columns](javascript:call_link\('abenddddl_hierarchy.htm'\)).

Hint

More specifically, a CTE hierarchy can be specified as a source of the [hierarchy navigators](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry").

Example

Specifies a CTE hierarchy as a data source of a SELECT statement in the program DEMO\_HIERARCHY\_TREE with explicit access to the hierarchy columns. The data source of the subquery of the CTE hierarchy is a CDS hierarchy.

DATA(start\_id) = 1.
WITH +tree AS (
        SELECT FROM demo\_cds\_simple\_tree( p\_id = @start\_id )
               FIELDS \* )
      WITH HIERARCHY demo\_cds\_simple\_tree
  SELECT FROM  +tree
         FIELDS id,
                parent,
                name,
                hierarchy\_rank,
                hierarchy\_tree\_size,
                hierarchy\_parent\_rank,
                hierarchy\_level,
                hierarchy\_is\_cycle,
                hierarchy\_is\_orphan,
                node\_id,
                parent\_id
         INTO TABLE @DATA(cte\_result).

Example

See also the example under [WITH - hierarchy](javascript:call_link\('abapwith_hierarchy.htm'\)).