---
title: "Syntax"
description: |
  ... +cte_hierarchy Effect Specifies a CTE hierarchy(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_hierarchy_glosry.htm 'Glossary Entry') +cte_hierarchy as a an SQL hierarchy hierarchy(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy.htm) in a
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_cte_hierarchy.htm"
abapFile: "abenselect_cte_hierarchy.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abenselect", "cte", "hierarchy"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_data.htm) →  [SELECT, FROM hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20FROM%20cte_hierarchy%2C%20ABENSELECT_CTE_HIERARCHY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, FROM cte\_hierarchy

Syntax

... +cte\_hierarchy

Effect

Specifies a [CTE hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_hierarchy_glosry.htm "Glossary Entry") +cte\_hierarchy as a an SQL hierarchy [hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy.htm) in an ABAP SQL query of a [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) statement. A CTE hierarchy is a common table expression defined as an SQL hierarchy using the addition [WITH HIERARCHY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_hierarchy.htm).

The rows of the tabular result set of a CTE hierarchy are the [hierarchy nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") of the SQL hierarchy accessed in its subquery, including their [hierarchy columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddddl_hierarchy.htm).

Hint

More specifically, a CTE hierarchy can be specified as a source of the [hierarchy navigators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry").

Example

Specification of a CTE hierarchy as a data source of a SELECT statement in the class CL\_DEMO\_HIERARCHY\_TREE with explicit access to the hierarchy columns. The data source of the subquery of the CTE hierarchy is a CDS hierarchy.

FINAL(start\_id) = 1.
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
         INTO TABLE @FINAL(cte\_result).

Example

See also the example under [WITH - hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_hierarchy.htm).