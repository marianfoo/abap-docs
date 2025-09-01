---
title: "Syntax"
description: |
  ... hierarchy(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy.htm)  hierarchy_navigator(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_navigators.htm) ... Effect Specifies hierarchy data as a data source data_source(https://
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_data.htm"
abapFile: "abenselect_hierarchy_data.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "internal-table", "abenselect", "hierarchy"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, FROM hierarchy_data, ABENSELECT_HIERARCHY_DATA, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, FROM hierarchy\_data

Syntax

... [hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy.htm)
  *|* [hierarchy\_navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_navigators.htm) ...

Effect

Specifies hierarchy data as a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) in an ABAP SQL [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry"). Possible hierarchy data is:

-   An [SQL hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy.htm)
-   A [hierarchy navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [hierarchy\_navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_navigators.htm) that accesses an SQL hierarchy.

Access to hierarchy data is not supported by all databases.

Hints

-   Hierarchy data sources are handled like any other data source. They can have alias names defined using [AS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) and can be used in join expressions. There are no restrictions on which [queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") they can be used in.
-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports access to hierarchy data. This requires the constant HIERARCHIES of this class to be passed to the method in an internal table.
-   Accessing hierarchy data enforces the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_753.htm).

Example

Access to the [hierarchy navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [HIERARCHY\_SIBLINGS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_navigators.htm) as the data source of a query. The hierarchy navigator uses a CDS hierarchy as a source.

FINAL(id) = 5.
SELECT FROM HIERARCHY\_SIBLINGS(
              SOURCE demo\_cds\_simple\_tree( p\_id = 1 )
              START WHERE id = @id )
       FIELDS id,
              parent\_id,
              hierarchy\_rank,
              hierarchy\_level,
              hierarchy\_tree\_size,
              hierarchy\_sibling\_distance
       INTO TABLE @FINAL(ancestors).

Continue
[SELECT, FROM hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy.htm)
[SELECT, FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_navigators.htm)
![Example](exa.gif "Example") [ABAP SQL - Working with Hierarchies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensheet_abap_sql_hiera_abexa.htm)