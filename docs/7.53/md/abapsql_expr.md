  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) → 

ABAP SQL - SQL Expressions sql\_exp

Syntax

... [sql\_elem](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_elem.htm)
  *|* [sql\_func](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_builtin_func.htm)
  *|* [sql\_arith](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith.htm)
  *|* [sql\_cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cast.htm)
  *|* [sql\_string](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string.htm)
  *|* [sql\_case](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_case.htm) ...

Effect

SQL expressions are expressions that can be specified in the following positions of ABAP SQL statements:

-   As [columns specified](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause_col_spec.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm)
    
-   As an argument of [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) and in the [HAVING clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm)
    
-   On the left side of an [SQL condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm)
    
-   As a grouping criterion after [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm)
    

SQL expressions are passed to the database system, executed there, and the result is passed to the AS ABAP if requested. The possible operands are:

-   Suitable columns [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) of [data sources](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm). The valid data types are specified in the expressions themselves.
    
-   Literals, [host variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm), or [host expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_expressions.htm), which cannot have the type string or xstring.
    

-   Host variables must be prefixed with the escape character @.

-   Literals are handled strictly according to type. This means that string literals are not allowed and only text field literals of the type c can be used as character literals. Empty [text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry") cannot be specified. The value of a numeric literal must be in the value range of type i, which means it always has type i.

-   SQL expressions whose results can be used in accordance with their data type. SQL expressions cannot be specified in all operand positions.
    

The SQL expressions can be used for the following:

-   [assignments of columns, literals, host variables, or host expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_elem.htm)
    
-   [calls of built-in functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_functions.htm)
    
-   [arithmetic calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith.htm)
    
-   [type modifications](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cast.htm)
    
-   [chainings of character strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string.htm)
    
-   [case distinctions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_case.htm)
    

Every expression can be enclosed in [parentheses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_parentheses.htm). The result of an expression is used in the ABAP SQL statement in accordance with the operand position, with the data type in nested expressions being specified by the outermost expression.

Notes

-   Host variables and host expressions as operands of expressions are evaluated before the ABAP SQL statement is sent to the database system. Specifying a host variable from a SELECT list after INTO in a SELECT loop does not mean that a different value is used in each loop pass.
    
-   No [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm) as operands of SQL expressions can currently be specified. SQL expressions can, however, be arguments of [aggregate functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm).
    
-   No alternative column names defined using [AS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) can be used as operands of SQL expressions. This also means that none of the expressions used in a SELECT list can be specified as operands using their alternative column names.
    
-   When SQL expressions are used, the syntax check is performed in a [strict mode from Release 7.40, SP05](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.
    
-   If a host expression occurs in an SQL expression, the syntax check is performed in a [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.
    
-   If required, a column can be specified in an SQL expression using a [path expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) for associations of a CDS view.
    
-   SQL expressions cannot currently be used together with the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm).
    
-   If SQL expressions are specified together with [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm) or with the addition [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm), the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.
    
-   SQL expressions are not possible if the program attribute [fixed point arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is [switched off](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_fixed_point_obsolete.htm).
    
-   [Certain SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuffer_expressions.htm) can be calculated in the [table buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm "Glossary Entry"). If any other SQL expressions are used, [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") is bypassed.
    

Example

Syntax example for specifying SQL expressions in different operand positions in a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement

SELECT FROM sflight
       FIELDS CONCAT( carrid, connid ) AS key,
              MAX( seatsmax - seatsocc ) AS max\_free,
              MIN( seatsmax - seatsocc ) AS min\_free
        GROUP BY carrid, connid
        HAVING SUM( seatsmax - seatsocc ) > 100
        ORDER BY key
        INTO TABLE @DATA(itab).

Continue
[sql\_exp - sql\_elem](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_elem.htm)
[sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_builtin_func.htm)
[sql\_exp - sql\_arith](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith.htm)
[sql\_exp - sql\_cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cast.htm)
[sql\_exp - sql\_string](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string.htm)
[sql\_exp - sql\_case](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_case.htm)
[sql\_exp - ( )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_parentheses.htm)
[Examples of SQL Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_abexas.htm)