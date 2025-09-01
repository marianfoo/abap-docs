---
title: "ABAP SQL - col"
description: |
  Syntax ... data_sourcetabalias~colname  data_sourcetabalias~sql_path(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm)-element ... Variants: 1. ... colname(#!ABAP_VARIANT_1@1@) 2. ... sql_path-element(#!ABAP_VARIANT_2@2@) Addition
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm"
abapFile: "abenopen_sql_columns.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abenopen", "sql", "columns"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Operands sql\_elem](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_operands.htm) → 

ABAP SQL - col

Syntax

... *\[*data\_source*|*tabalias~*\]*colname
  *|* *\[*data\_source*|*tabalias~*\]*[sql\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm)\-element ...

Variants:

[1\. ... colname](#!ABAP_VARIANT_1@1@)
[2\. ... sql\_path-element](#!ABAP_VARIANT_2@2@)

Addition:

[... data\_source*|*tabalias~](#!ABAP_ONE_ADD@1@)

Effect

Specifies a column of a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry") or the target of a [write](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_writing.htm) in an ABAP SQL statement.

Columns can be specified as [elementary SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm) in all operand positions in which [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) are possible. However, they can also occur in specific operand positions in which no SQL expressions are possible.

Variant 1

... colname

Effect

Specifies a column of a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry") or of the target of a [write](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_writing.htm) directly using its name colname (as defined as a component of the associated DDIC structure).

Hint

For a column specification, the actual names of the components must be used for a DDIC database table that contains an [include structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_include_structure.htm), and not the names of any groups defined in the ABAP Dictionary.

Example

Direct column specification carrid, carrname, and url in the clauses of a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement.

SELECT FROM   scarr
       FIELDS carrid, carrname
       WHERE  url = ' '
       INTO   TABLE @DATA(itab).

Variant 2

... sql\_path-element

Effect

Specifies an element of a data source of a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm) or of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm) after a path expression [sql\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm). This can be specified in SELECT statements where path expressions can be used in all places where a column can be specified, unless otherwise indicated.

The element element closes the path expression constructed from [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") or [CTE associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencte_association_glosry.htm "Glossary Entry"), for which the structure component selector \- is used. This element must be an element of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the final association in the path.

Hints

-   [Path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) can be used in the following SELECT statements:

-   Statements that use the [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") to access a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") in which the used associations are exposed for use from outside.

-   Statements in a [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) statement that follow [common table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") that themselves expose associations using the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith_associations.htm).

-   If an element is specified after the path expression, this represents a column specified of the join created implicitly for the path expression. Left outer joins (LEFT OUTER JOIN) are created for path expressions in specified columns.

-   [source~](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) can be used to prefix the path expression with the unit from which its first association is exposed.

-   When a column is specified using a path expression, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.

Example

A [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement accesses the [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") demo\_cds\_assoc\_scarr that exposes a CDS association \_spfli. As its [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry"), this CDS association uses a view that exposes the CDS associations \_sflight and \_sairport. The columns specified in the SELECT statement include any path expressions created by these CDS associations. See also the associated [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expr_in_colspec_abexa.htm).

SELECT carrname,
        \\\_spfli\[ (\*) \]-connid AS connid,
        \\\_spfli\[ (\*) \]\\\_sairport-name AS name
        FROM demo\_cds\_assoc\_scarr
        WHERE carrid = '...' and
              \\\_spfli\[ (\*) \]\\\_sflight\[ (\*) \]-fldate > '20190515'
        INTO TABLE @DATA(itab).

Addition

... data\_source*|*tabalias~

Effect

The [column selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~ can be used to prefix every specified column directly with the name of the associated data source of a query or of the target of a write (as data\_source or as an alias name tabalias).

The data source must be specified in the following cases:

-   If multiple [data sources](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) in an ABAP SQL statement are edited and the column name is not unique.

-   On the right-hand side of the [relational expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm) of SQL conditions [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasql_cond.htm) for statements.

Example

Use of the name scarr of a data source and the alias name connections of a different data source in front of the column selector ~ of specified columns.

SELECT FROM scarr
         INNER JOIN spfli AS connections
           ON scarr~carrid = connections~carrid
       FIELDS scarr~carrname, connections~connid
       WHERE  connections~cityfrom = '...'
       INTO TABLE @DATA(itab).