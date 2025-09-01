---
title: "ABAP SQL - Path Expressions, attributes"
description: |
  Syntax ...  cardinality INNERLEFTRIGHT OUTER WHERE sql_cond(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm)    INNERLEFTRIGHT OUTER cardinality WHERE
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path_filter.htm"
abapFile: "abenabap_sql_path_filter.htm"
keywords: ["select", "do", "while", "if", "case", "try", "data", "abenabap", "sql", "path", "filter"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Path Expressions sql\_path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Path%20Expressions%2C%20attributes%2C%20ABENABAP_SQL_PATH_FILTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP SQL - Path Expressions, attributes

Syntax

... \[ *\[**\[*cardinality*\]* *\[*INNER*|**{*LEFT*|*RIGHT OUTER*}**\]**\]* *\[**\[*WHERE*\]* [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm)*\]* \]
  *|* \[ *\[**\[*INNER*|**{*LEFT*|*RIGHT OUTER*}**\]* *\[*cardinality*\]**\]* *\[**\[*WHERE*\]* [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm)*\]* \]...

Additions:

[1\. ... cardinality](#!ABAP_ADDITION_1@1@)
[2\. ... INNER*|**{*LEFT*|*RIGHT OUTER*}*](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*WHERE*\]* sql\_cond](#!ABAP_ADDITION_3@3@)

Effect

Attributes for a section of a path expression can be specified in square brackets for every [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") or [CTE association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_association_glosry.htm "Glossary Entry") [\_assoc](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") of the [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) specified in a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) of a [FROM clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) or a [column specification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm). The following can be done using these attributes:

-   The [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") cardinality of the section can be declared.
-   The type of the join expression can be specified.
-   A filter condition sql\_cond can be specified.

Addition 1   

... cardinality

Effect

The [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") cardinality of the current association \_assoc is declared.

The cardinality can either be specified in syntax written in words or in numeric syntax in parentheses. The syntax written in words can specify a [source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_cardinality_glosry.htm "Glossary Entry") and a [target cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentarget_cardinality_glosry.htm "Glossary Entry"), while the numeric syntax only specifies a target cardinality. The syntax written in words is recommended.

-   Cardinality syntax written in words:
    
    -   ONE TO ONE
    -   ONE TO MANY
    -   ONE TO EXACT ONE
    -   EXACT ONE TO ONE
    -   EXACT ONE TO MANY
    -   EXACT ONE TO EXACT ONE
    -   MANY TO ONE
    -   MANY TO MANY
    -   MANY TO EXACT ONE
    
    If specified, the join type must precede the cardinality specification. For example: \\\_assoc\[ INNER MANY TO ONE \]-field AS alias.
    
-   Numeric cardinality syntax:
    
    -   The target cardinality can be specified by the numbers 1 or 2 or by specifying the character \* in parentheses ( ).
    
    If specified, the join type must be placed after the cardinality specification. For example: \\\_assoc\[ (1) INNER \]-field AS alias.
    
    If the cardinality is specified as (1), a LEFT OUTER JOIN is defined implicitly using the addition [MANY TO ONE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_join.htm) on database systems that support this, and the consequences of this should be noted.
    

Specifying the cardinality overwrites the original definition of the cardinality [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cardinality_v2.htm) or [TO ONE*|*MANY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations_defining.htm) of the current association with the new cardinality.

-   The cardinality can be specified to prevent syntax warnings or syntax errors in cases where the cardinality of the association does not match the way it is used in a path expression of a SELECT statement or affects the way it is used.

Hint

If the cardinality is specified in a path expression, the syntax check is performed in [strict mode from ABAP release 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_758.htm).

Example

Paths specified with an explicitly specified cardinality of CDS associations in the SELECT list. If supported by the database, only the left outer join between the DDIC database tables SPFLI and SAIRPORT is defined using the addition MANY TO ONE.

SELECT scarr~carrname,
       \\\_spfli\[ MANY TO MANY \]-connid       AS connid,
       \\\_spfli\[ MANY TO MANY \]\\\_sflight\[ MANY TO MANY \]-fldate
                                            AS fldate,
       \\\_spfli\[ MANY TO MANY \]\\\_sairport\[
                MANY TO ONE \]-name          AS name
       FROM demo\_cds\_assoc\_scarr            AS scarr
       WHERE scarr~carrid = '...'
       ORDER BY carrname, connid, fldate
       INTO TABLE @FINAL(result).

Addition 2   

... INNER*|**{*LEFT*|*RIGHT OUTER*}*

Effect

This addition defines the [join type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_type_glosry.htm "Glossary Entry") into which the current association \_assoc is transformed:

-   INNER specifies an [inner join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninner_join_glosry.htm "Glossary Entry").
-   LEFT*|*RIGHT OUTER specifies a [left outer join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleft_outer_join_glosry.htm "Glossary Entry") or a [right outer join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenright_outer_join_glosry.htm "Glossary Entry").

The join type can only be specified together with the cardinality.

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

-   When [columns are specified](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) in SELECT statements, a LEFT OUTER JOIN is used.
-   An INNER JOIN is used as a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) of the [FROM clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm).

Hint

If the type of the join is specified in a path expression, the syntax check is performed in [strict mode from ABAP release 7.52](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_752.htm).

Example

Path specifications with an explicitly specified cardinality and a switch of the left outer joins to inner joins in the columns specified in the SELECT list.

SELECT scarr~carrname,
       \\\_spfli\[ INNER MANY TO ONE \]-connid AS connid,
       \\\_spfli\[ INNER MANY TO ONE \]\\\_sflight\[ INNER MANY TO ONE
         \]-fldate
                                           AS fldate,
       \\\_spfli\[ INNER MANY TO ONE \]\\\_sairport\[ INNER MANY TO ONE
         \]-name
                                           AS name
       FROM demo\_cds\_assoc\_scarr           AS scarr
       WHERE scarr~carrid = 'LH'
       ORDER BY carrname, connid, fldate
       INTO TABLE @FINAL(result).

Addition 3   

...  *\[*WHERE*\]* sql\_cond

Effect

Specifies a [filter condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfilter_condition_glosry.htm "Glossary Entry") [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm) for the current association \_assoc. The addition WHERE is optional in cases where the filter condition is the only item specified in the square brackets. The addition must be specified if one of the other additions is used first.

When the association is resolved in a join, the filter condition is converted to an extended condition for the join. If no filter condition is specified in the path expression, the default filter condition defined using [WITH DEFAULT FILTER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v2.htm) is used in the case of a CDS association.

Columns specified in the filter condition sql\_cond always refer to the target [target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_v2.htm) or [target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations_defining.htm) of the association for which the condition is specified. An explicit name must not and cannot be specified with the [column selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~ in front of a column specification.

Hints

-   The [relational expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm) that can be used in a filter condition are a subset of the [relational expressions for statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm), but also allow [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) as operands on the right side.
-   If a filter condition is specified in a path expression, the syntax check is performed in [strict mode from ABAP release 7.52](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_752.htm).

Example

Specification of filter conditions in a path expression.

SELECT carrid, connid, fldate, price
       FROM demo\_cds\_assoc\_scarr
            \\\_spfli\[   airpfrom = 'FRA' \]
            \\\_sflight\[ currency  = 'EUR' AND
                       price  BETWEEN 500 AND 1500 \]
            AS flights
       ORDER BY carrid, connid, fldate, price
       INTO TABLE @FINAL(result).