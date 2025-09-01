  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

sql\_exp - sql\_elem

Syntax

... col *|* literal *|* @dobj *|* @( expr )  ...

Effect

Elementary expression in Open SQL. An elementary expression is either a column [col](javascript:call_link\('abenopen_sql_columns.htm'\)) of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) or a literal literal, a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) dobj, or a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) @( expr ).

-   The column [col](javascript:call_link\('abenopen_sql_columns.htm'\)) can have any elementary data type from ABAP Dictionary.

-   The ABAP objects literal, @dobj, and @( expr ) can have any non-generic elementary ABAP data type except string and xstring and the name of a host variable must be tagged with the escape character @. Empty [text field literals](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") cannot be specified.

The result is the value of the column, the value of the literal, the value of the host variable, or the result of the expression. When a column is specified, the result has the data type of the column. When an ABAP object is specified, the ABAP type is mapped to a dictionary type as follows:

Numeric ABAP Type

Dictionary Type

b, s, i, int8

INT1, INT2, INT4, INT8

p

DEC with appropriate length and decimal places

decfloat16, decfloat34

DF16\_RAW, DF34\_RAW

f

FLTP

Character-Like ABAP Type

Dictionary Type

c

CHAR with appropriate length

n

NUMC with appropriate length

d

DATS

t

TIMS

Byte-Like ABAP Type

Dictionary Type

x

RAW with appropriate length

Note

-   A column specified as an elementary expression can be flagged using [parentheses](javascript:call_link\('abensql_exp_parentheses.htm'\)). In this case, the statement can only have lists separated by commas and host variables must be indicated by the escape character @.

-   It can be a good idea to specify a literal, a host variable, or a host expression as an elementary expression of a SELECT list whenever a defined value is assigned to a column of a results set that is not read from the database.

-   Specifying a constant or a literal as the only element of a SINGLE list is one way of defining whether data in a selection exists without having to transport data from the database.

-   If required, columns can be specified as col using a [path expression](javascript:call_link\('abenopen_sql_path.htm'\)) for associations of a CDS view.

Example

The [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the second [SELECT](javascript:call_link\('abapselect.htm'\)) statement contains all possible elementary SQL expressions.

DATA carrid TYPE scarr-carrid VALUE 'LH'.
cl\_demo\_input=>request( CHANGING field = carrid ).
SELECT FROM scarr
       FIELDS carrid, carrname
       INTO TABLE @DATA(carriers).
SELECT SINGLE
       FROM spfli
       FIELDS '\*' AS mark,
              @carrid AS id,
              @( carriers\[ carrid = carrid \]-carrname ) AS carrier,
              connid
       WHERE carrid = @carrid
       INTO @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[Constant in the SELECT List](javascript:call_link\('abensql_expr_literal_abexa.htm'\))