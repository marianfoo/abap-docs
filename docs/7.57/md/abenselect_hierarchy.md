  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_data.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, FROM hierarchy, ABENSELECT_HIERARCHY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

SELECT, FROM hierarchy

Syntax

... [cds\_hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_cds_hierarchy.htm)
  *|* [HIERARCHY( ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_generator.htm)
  *|* [cte\_hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_cte_hierarchy.htm)

Effect

Specifies an [SQL hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") as a data source in an ABAP SQL query.

-   The following can be maintained:
    -   A [CDS hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") [cds\_hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_cds_hierarchy.htm)
    -   The [hierarchy generator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_generator.htm)
    -   A [CTE hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencte_hierarchy_glosry.htm "Glossary Entry") [cte\_hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_cte_hierarchy.htm)
-   An SQL hierarchy can be specified in the following places:
    -   As a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) in an ABAP SQL [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry").
    -   As the source of a [hierarchy navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_navigators.htm)
    -   As the source of the hierarchy generator [HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_generator.htm)

An SQL hierarchy is a tabular set of rows that represent the [hierarchy nodes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_node_glosry.htm "Glossary Entry").

-   A CDS hierarchy and the hierarchy generator HIERARCHY create their result set from the data source defined for them based on a [parent-child relationship](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcr_glosry.htm "Glossary Entry") itself defined in a [hierarchy association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_association_glosry.htm "Glossary Entry").
-   A [CTE hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencte_hierarchy_glosry.htm "Glossary Entry") represents the hierarchy that is specified as the only data source in the subquery of the CTE under the name of the CTE in the subsequent queries of the current [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) statement.

The columns of an SQL hierarchy are composed as follows:

-   Components of the data source used when the hierarchy is created by a CDS hierarchy or created by the hierarchy generator.
    -   In the case of CDS hierarchies and CTE hierarchies, these are exactly the components listed here.
    -   In the case of the hierarchy generator HIERARCHY, these are all components of the source of the SQL hierarchy.
-   Additional [hierarchy columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddddl_hierarchy.htm). For each hierarchy node, the hierarchy columns contain its [hierarchy attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_attribute_glosry.htm "Glossary Entry"), which describe certain hierarchy-specific properties.

When an SQL hierarchy is used as a data source in an ABAP SQL query, the additional hierarchy columns can be accessed as follows:

-   In the [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) list
    -   Hierarchy columns can be specified as regular columns using [colname](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm) and then become part of the result set of the query.
    -   If \* or ...~\* is specified, hierarchy columns are not part of the result set of the query. Only the components of the source of the SQL hierarchy are respected. In this case, the hierarchy columns are also ignored by any structure or internal table created in the [INTO clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) by an inline declaration @DATA*|*@FINAL(...).
-   In other clauses, hierarchy columns can be specified regardless of the SELECT list and are evaluated accordingly.

Hints

-   It is possible to evaluate the [hierarchy columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddddl_hierarchy.htm) in a query, but this is not mandatory. In most cases, only the data content of an SQL hierarchy is of interest and not the technical properties of the hierarchy nodes.
-   On [SAP HANA databases](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry"), the result sets of CDS hierarchies and the hierarchy generator HIERARCHY are created using the SAP HANA hierarchy generator function HIERARCHY and similar. For more information, see SAP HANA documentation.

Examples

The following programs demonstrate the three ways of specifying SQL hierarchies as the data source of a SELECT statement while reading all possible [hierarchy columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddddl_hierarchy.htm).

-   DEMO\_HIERARCHY\_TREE
-   DEMO\_HIERARCHY\_PARENT\_CHILD

Continue
[SELECT, FROM cds\_hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_cds_hierarchy.htm)
[SELECT, FROM HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_generator.htm)
[SELECT, FROM cte\_hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_cte_hierarchy.htm)
[Hierarchy Columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddddl_hierarchy.htm)