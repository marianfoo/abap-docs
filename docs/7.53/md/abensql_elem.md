  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) → 

sql\_exp - sql\_elem

Syntax

... col *|* literal *|* @dobj *|* @( expr )  ...

Effect

Elementary expression in ABAP SQL. An elementary expression is either a column [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) of a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) or a literal literal, a [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) dobj, or a [host expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_expressions.htm) @( expr ).

-   The column [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) can have any elementary data type from ABAP Dictionary.

-   The ABAP objects literal, @dobj, and @( expr ) can have any non-generic elementary ABAP data type except string and xstring and the name of a host variable must be tagged with the escape character @. Empty [text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry") cannot be specified.

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

[Text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry") are handled as fields with the type [CHAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and the appropriate length. Any closing blanks are respected. Like any number literal of an ABAP program, [number literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuntyped_number_literals.htm) are handled either as a field with the type [INT4](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) or the type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), depending on the value in question. [Text string literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_string_literal_glosry.htm "Glossary Entry") are not allowed.

Notes

-   A column specified as an elementary expression can be flagged using [parentheses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_exp_parentheses.htm). In this case, the statement can only have lists separated by commas and host variables must be indicated by the escape character @.

-   It can be a good idea to specify a literal, a host variable, or a host expression as an elementary expression of a SELECT list whenever a defined value is assigned to a column of a results set that is not read from the database.

-   Specifying a constant or a literal as the only element of a SINGLE list is one way of defining whether data in a selection exists without having to transport data from the database.

-   If required, columns can be specified as col using a [path expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) for associations of a CDS view.

-   An elementary expression can always be evaluated in the [table buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm "Glossary Entry"). If an elementary expression is specified, [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") is not bypassed.

Example

The [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) of the second [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement contains all possible elementary SQL expressions.

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

[Constant in the SELECT List](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_literal_abexa.htm)