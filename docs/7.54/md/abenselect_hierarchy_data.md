---
title: "Syntax"
description: |
  ... hierarchy(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy.htm)  hierarchy_navigator(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm) ... Effect Specifies hierarchy data as a data source data_source(https://
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_data.htm"
abapFile: "abenselect_hierarchy_data.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "internal-table", "abenselect", "hierarchy"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) → 

SELECT - FROM hierarchy\_data

Syntax

... [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy.htm)
  *|* [hierarchy\_navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm) ...

Effect

Specifies hierarchy data as a data source [data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in a ABAP SQL [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry"). Possible hierarchy data is:

-   A [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy.htm)

-   A [hierarchy navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [hierarchy\_navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm) that accesses a hierarchy.

Access to hierarchy data is not supported by all databases.

Notes

-   Hierarchy data sources are handled like any other data source. They can have alias names defined using [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) and can be used in join expressions. There are no restrictions on which [queries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry") they can be used in.

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports access to hierarchy data. This requires the constant HIERARCHIES of this class to be passed to the method in an internal table.

-   Accessing hierarchy data triggers the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm).

Example

Accesses the [hierarchy navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [HIERARCHY\_SIBLINGS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm) as the data source of a query. The hierarchy navigator uses a CDS hierarchy as a source.

DATA(id) = 5.
SELECT FROM HIERARCHY\_SIBLINGS(
              SOURCE demo\_cds\_simple\_tree( p\_id = 1 )
              START WHERE id = @id )
       FIELDS id,
              parent\_id,
              hierarchy\_rank,
              hierarchy\_level,
              hierarchy\_tree\_size,
              hierarchy\_sibling\_distance
       INTO TABLE @DATA(ancestors).

Continue
[SELECT - FROM hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy.htm)
[SELECT - FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_navigators.htm)