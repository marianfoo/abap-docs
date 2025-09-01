---
title: "SELECT - FROM hierarchy"
description: |
  Syntax ... cds_hierarchy(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_cds_hierarchy.htm)  HIERARCHY( ... )(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm)  cte_hierarchy(https://help.sap.com/doc/abapdocu_754_index_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy.htm"
abapFile: "abenselect_hierarchy.htm"
keywords: ["select", "do", "while", "if", "case", "try", "data", "internal-table", "abenselect", "hierarchy"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) →  [SELECT - FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_data.htm) → 

SELECT - FROM hierarchy

Syntax

... [cds\_hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_cds_hierarchy.htm)
  *|* [HIERARCHY( ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm)
  *|* [cte\_hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_cte_hierarchy.htm)

Effect

Specifies a [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_glosry.htm "Glossary Entry") as a data source in a ABAP SQL query.

-   The following can be specified:

-   A [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") [cds\_hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_cds_hierarchy.htm)

-   The [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm)

-   A [CTE hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencte_hierarchy_glosry.htm "Glossary Entry") [cte\_hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_cte_hierarchy.htm)

-   A hierarchy can be specified in the following places:

-   As a data source [data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in a ABAP SQL [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry").

-   As the source of a [hierarchy navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm)

-   As the source of the hierarchy generator [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm)

A hierarchy is a tabular set of rows that represent the [hierarchy nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_node_glosry.htm "Glossary Entry").

-   A CDS hierarchy and the hierarchy generator HIERARCHY create their results set from the data source defined for them on the basis of a [parent-child relationship](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcr_glosry.htm "Glossary Entry") itself defined in a [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry").

-   A [CTE hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencte_hierarchy_glosry.htm "Glossary Entry") represents the hierarchy (itself specified as the only data source in the subquery of the CTE) under the name of the CTE in the subsequent queries of the current [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement.

The columns of a hierarchy comprise the following:

-   Components of the data source used when the hierarchy is created by a CDS hierarchy or created by the hierarchy generator.

-   In the case of CDS hierarchies and CTE hierarchies these are precisely the components listed here.

-   In the case of the hierarchy generator HIERARCHY, these are all components of the source of the hierarchy.

-   Additional [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddddl_hierarchy.htm). For each hierarchy node, the hierarchy columns contain its [hierarchy attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_attribute_glosry.htm "Glossary Entry"), which describe certain hierarchy-specific properties.

When a hierarchy is used as a data source in a ABAP SQL query, the additional hierarchy columns can be accessed as follows:

-   In the [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) list

-   Hierarchy columns can be specified as regular columns using [colname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) and then become part of the results set of the query.

-   If \* or ...~\* is specified, hierarchy columns are not part of the results set of the query. Only the components of the source of the hierarchy are respected. In this case, the hierarchy columns are also ignored by any structure or internal table created in the [INTO clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) by an inline declaration @DATA(...).

-   In other clauses, hierarchy columns can be specified regardless of the SELECT list and are evaluated accordingly.

Notes

-   It is possible to evaluate the [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddddl_hierarchy.htm) in a query, but this is not mandatory. In most cases, only the data content of a hierarchy is of interest and not the technical properties of the hierarchy nodes.

-   On [SAP HANA databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry"), the results sets of CDS hierarchies plus the hierarchy generator HIERARCHY are created by using the SAP HANA hierarchy generator function HIERARCHY and similar. More information can be found in the [documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.03/en-US).

Examples

The following programs demonstrate the three ways of specifying hierarchies as the data source of a SELECT statement while reading all possible [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddddl_hierarchy.htm).

-   DEMO\_HIERARCHY\_TREE

-   DEMO\_HIERARCHY\_PARENT\_CHILD

Continue
[SELECT - FROM cds\_hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_cds_hierarchy.htm)
[SELECT - FROM HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm)
[SELECT - FROM cte\_hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_cte_hierarchy.htm)
[Hierarchy Columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddddl_hierarchy.htm)