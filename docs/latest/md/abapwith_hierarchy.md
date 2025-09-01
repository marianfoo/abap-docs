---
title: "WITH, HIERARCHY"
description: |
  Syntax ... WITH HIERARCHY hierarchy  (hierarchy_syntax) Effect The addition WITH HIERARCHY exposes a common table expression as a CTE hierarchy(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencte_hierarchy_glosry.htm 'Glossary Entry'). Under its name, a common table express
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith_hierarchy.htm"
abapFile: "abapwith_hierarchy.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "class", "data", "abapwith", "hierarchy"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20HIERARCHY%2C%20ABAPWITH_HIERARCHY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, HIERARCHY

Syntax

... WITH HIERARCHY hierarchy
                 *|* (hierarchy\_syntax)

Effect

The addition WITH HIERARCHY exposes a common table expression as a [CTE hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencte_hierarchy_glosry.htm "Glossary Entry"). Under its name, a common table expression like this can be used in the subsequent queries of the current [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) statement as an [SQL hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy.htm).

Only a single data source can be accessed in the subquery of the common table expression and this data source must be an [SQL hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy.htm). The SQL hierarchy used as the data source of the subquery can be specified either statically or dynamically after HIERARCHY.

-   hierarchy is used to specify either the name of the SQL hierarchy or its alias name defined using [AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm). When the [hierarchy generator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_generator.htm) is used, it must have an alias name and this name must be specified.
-   A parenthesized data object hierarchy\_syntax can be specified. When the statement is executed, this data object must either contain the static syntax specifying the SQL hierarchy or be initial. In this case, the common table expression can be used only in other dynamic tokens of the WITH statement. The data object hierarchy\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type. The syntax in hierarchy\_syntax, as in the static syntax, is not case-sensitive. Invalid syntax raises a catchable exception of the class CX\_SY\_DYNAMIC\_OSQL\_ERROR. If hierarchy\_syntax is initial, the common table expression is not exposed as an SQL hierarchy.

The result set of a common table expression exposed as a CTE hierarchy includes the [hierarchy columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddddl_hierarchy.htm) of the SQL hierarchy specified in the subquery. The [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm) list of the subquery must not contain any columns with the same name or alias name as a hierarchy column.

Hint

If hierarchy\_syntax is specified dynamically, it is possible to decide at runtime whether a common table expression is exposed as a CTE hierarchy.

Example

This excerpt from the class CL\_DEMO\_HIERARCHY\_CTE accesses CTE hierarchies in two hierarchy navigators [HIERARCHY\_DESCENDANTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") joined in the main query of a [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) statement using a left outer join. The first CTE hierarchy represents the [CDS hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") DEMO\_CDS\_PARENT\_CHILD, which is accessed in its subquery. The second CTE hierarchy represents the result set of the [hierarchy generator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_hierarchy_generator.htm), which is used in its subquery. The ON condition of the join compares two [hierarchy columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") of the CTE hierarchies. Executing CL\_DEMO\_HIERARCHY\_CTE shows the result.

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
         INTO TABLE @FINAL(result).