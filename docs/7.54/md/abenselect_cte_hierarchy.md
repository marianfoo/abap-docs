  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) →  [SELECT - FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_data.htm) →  [SELECT - FROM hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy.htm) → 

SELECT - FROM cte\_hierarchy

Syntax

... +cte\_hierarchy

Effect

Specifies a [CTE hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencte_hierarchy_glosry.htm "Glossary Entry") +cte\_hierarchy as a hierarchy [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy.htm) in an ABAP SQL query of a [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement. A CTE hierarchy is a common table expression defined as a hierarchy using the addition [WITH HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_hierarchy.htm).

The rows of the tabular results set of a CTE hierarchy are the [hierarchy nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") of the hierarchy accessed in its subquery, including their [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddddl_hierarchy.htm).

Note

More specifically, a CTE hierarchy can be specified as a source of the [hierarchy navigators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry").

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

See also the example under [WITH - hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_hierarchy.htm).