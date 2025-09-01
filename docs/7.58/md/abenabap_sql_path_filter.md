  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Path Expressions sql\_path](javascript:call_link\('abenabap_sql_path.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Path%20Expressions%2C%20attributes%2C%20ABENABAP_SQL_PATH_FILTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP SQL - Path Expressions, attributes

Syntax

... \[ *\[**\[*cardinality*\]* *\[*INNER*|**{*LEFT*|*RIGHT OUTER*}**\]**\]* *\[**\[*WHERE*\]* [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))*\]* \]
  *|* \[ *\[**\[*INNER*|**{*LEFT*|*RIGHT OUTER*}**\]* *\[*cardinality*\]**\]* *\[**\[*WHERE*\]* [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))*\]* \]...

Additions:

[1\. ... cardinality](#!ABAP_ADDITION_1@1@)
[2\. ... INNER*|**{*LEFT*|*RIGHT OUTER*}*](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*WHERE*\]* sql\_cond](#!ABAP_ADDITION_3@3@)

Effect

Attributes for a section of a path expression can be specified in square brackets for every [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE association](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") [\_assoc](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of the [path expression](javascript:call_link\('abenabap_sql_path.htm'\)) specified in a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) or a [column specification](javascript:call_link\('abenabap_sql_columns.htm'\)). The following can be done using these attributes:

-   The [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") cardinality of the section can be declared.
-   The type of the join expression can be specified.
-   A filter condition sql\_cond can be specified.

Addition 1   

... cardinality

Effect

The [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") cardinality of the current association \_assoc is declared.

The cardinality can either be specified in syntax written in words or in numeric syntax in parentheses. The syntax written in words can specify a [source](javascript:call_link\('abensource_cardinality_glosry.htm'\) "Glossary Entry") and a [target cardinality](javascript:call_link\('abentarget_cardinality_glosry.htm'\) "Glossary Entry"), while the numeric syntax only specifies a target cardinality. The syntax written in words is recommended.

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
    
    If the cardinality is specified as (1), a LEFT OUTER JOIN is defined implicitly using the addition [MANY TO ONE](javascript:call_link\('abapselect_join.htm'\)) on database systems that support this, and the consequences of this should be noted.
    

Specifying the cardinality overwrites the original definition of the cardinality [cardinality](javascript:call_link\('abencds_cardinality_v2.htm'\)) or [TO ONE*|*MANY](javascript:call_link\('abapwith_associations_defining.htm'\)) of the current association with the new cardinality.

-   The cardinality can be specified to prevent syntax warnings or syntax errors in cases where the cardinality of the association does not match the way it is used in a path expression of a SELECT statement or affects the way it is used.

Hint

If the cardinality is specified in a path expression, the syntax check is performed in [strict mode from ABAP release 7.58](javascript:call_link\('abenabap_sql_strictmode_758.htm'\)).

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

This addition defines the [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") into which the current association \_assoc is transformed:

-   INNER specifies an [inner join](javascript:call_link\('abeninner_join_glosry.htm'\) "Glossary Entry").
-   LEFT*|*RIGHT OUTER specifies a [left outer join](javascript:call_link\('abenleft_outer_join_glosry.htm'\) "Glossary Entry") or a [right outer join](javascript:call_link\('abenright_outer_join_glosry.htm'\) "Glossary Entry").

The join type can only be specified together with the cardinality.

If the join type is not specified explicitly, the type depends on the place where the path expression is used:

-   When [columns are specified](javascript:call_link\('abenabap_sql_columns.htm'\)) in SELECT statements, a LEFT OUTER JOIN is used.
-   An INNER JOIN is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)).

Hint

If the type of the join is specified in a path expression, the syntax check is performed in [strict mode from ABAP release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)).

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

Specifies a [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry") [sql\_cond](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)) for the current association \_assoc. The addition WHERE is optional in cases where the filter condition is the only item specified in the square brackets. The addition must be specified if one of the other additions is used first.

When the association is resolved in a join, the filter condition is converted to an extended condition for the join. If no filter condition is specified in the path expression, the default filter condition defined using [WITH DEFAULT FILTER](javascript:call_link\('abencds_association_v2.htm'\)) is used in the case of a CDS association.

Columns specified in the filter condition sql\_cond always refer to the target [target](javascript:call_link\('abencds_association_v2.htm'\)) or [target](javascript:call_link\('abapwith_associations_defining.htm'\)) of the association for which the condition is specified. An explicit name must not and cannot be specified with the [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") ~ in front of a column specification.

Hints

-   The [relational expressions](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)) that can be used in a filter condition are a subset of the [relational expressions for statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)), but also allow [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) as operands on the right side.
-   If a filter condition is specified in a path expression, the syntax check is performed in [strict mode from ABAP release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)).

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