---
title: "Syntax"
description: |
  ... col(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm)  literal(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_literals.htm)  @dobj(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm)
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_elem.htm"
abapFile: "abensql_elem.htm"
keywords: ["select", "loop", "do", "if", "try", "data", "types", "field-symbol", "abensql", "elem"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_exp - sql_elem, ABENSQL_ELEM, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

sql\_exp - sql\_elem

Syntax

... [col](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm)
  *|* [literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_literals.htm) *|* [@dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) *|* [@( expr )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_expressions.htm) ...

Effect

Elementary expression in ABAP SQL. An elementary SQL expression represents one of the following values:

-   Value from the database
    
    -   Column [col](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm) of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm)
    
    The column [col](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm) can be of any elementary data type from the ABAP Dictionary, unless otherwise documented for an operand position.
    
-   Values of the ABAP program passed to the database system
    
    -   [Literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_literals.htm) literal
    -   [Host variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) @dobj
    -   [Host expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_expressions.htm) @( expr )
    
    The ABAP objects can have any non-generic elementary ABAP data type and the name of a host variable must be tagged with the escape character @. [Typed literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_typed_literals.htm) are handled strictly according to their type. [Untyped literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_untyped_literals.htm) are restricted to the types c and i. Untyped [text field literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_field_literal_glosry.htm "Glossary Entry") are allowed. String literals are not allowed, neither typed nor untyped. Furthermore, no empty text field literal can be specified. An empty typed literal of type CHAR can be specified.
    

The result of an elementary SQL expression is the value of the specified object or the result of the specified expression. If a value from the database is specified, the data type is its dictionary type. When an ABAP object is specified, the ABAP type is mapped to a dictionary type as follows:

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

string

STRING with appropriate length

Byte-Like ABAP Type

Dictionary Type

x

RAW with appropriate length

xstring

RAWSTRING with appropriate length

ABAP Type for Date, Time, and Time Stamp

Dictionary Type

d

DATS

t

TIMS

utclong

UTCLONG

Untyped [text field literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_field_literal_glosry.htm "Glossary Entry") are handled as fields with the type [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) of the corresponding length where trailing blanks are respected. Like the [untyped numeric literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuntyped_number_literals.htm) of a general ABAP, untyped numeric literals are handled either as a field with the type [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) or the type [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), depending on their value.

On the database, the value of an ABAP object as an elementary expression is handled according to the rules of the database in accordance with the mapped type. This is different from other operand positions of ABAP objects in ABAP SQL, where they are not handled as elementary expressions. In these operand positions, the content is converted to the target type in accordance with the [rules for lossless assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_exact.htm).

Hints

-   Columns, literals, host variables, and host expressions can also occur as elementary [SQL operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_operands.htm) in operand positions in which no general SQL expressions are possible. Columns, literals, hosts variables, and host expressions can only be handled as SQL expressions in positions where SQL expressions are possible. Only there can they be specified inside [parentheses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_exp_parentheses.htm). Then, the statement can only have lists separated by commas and host variables must be indicated by the escape character @.
-   If an elementary SQL expression consists of a host variable in the form of a field symbol or formal parameter, this expression must be completely typed.
-   Untyped literals, host variables, and host expressions as operands of other SQL expressions are evaluated before the ABAP SQL statement is sent to the database system. Specifying a host variable from a SELECT list after INTO in a SELECT loop does not mean that a different value is used in each loop pass.
-   The fact that literals, host variables, and host expressions are mapped to specific dictionary types as operands of SQL expressions, whereas other operand positions allow conversions to different target types, is particularly significant for [relational expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm) in which the [comparability](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_compare_types.htm) of dictionary types is important.
-   The column specification col can contain a [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm) for [CDS associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") or [CTE associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencte_association_glosry.htm "Glossary Entry").
-   An elementary expression can always be evaluated in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry"). If an elementary expression is specified, [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is not bypassed.
-   If a host expression is used as an argument of another SQL expression, the syntax check is performed in a [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check.

Example

The [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) of the second [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statement contains all possible elementary SQL expressions.

DATA carrid TYPE scarr-carrid VALUE 'LH'.
cl\_demo\_input=>request( CHANGING field = carrid ).
SELECT FROM   scarr
       FIELDS carrid, carrname
       INTO TABLE @FINAL(carriers).
SELECT SINGLE
       FROM   spfli
       FIELDS '\*' AS mark,
              @carrid AS id,
              @( carriers\[ carrid = carrid \]-carrname ) AS carrier,
              connid
       WHERE carrid = @carrid
       INTO @FINAL(result).
cl\_demo\_output=>display( result ).

Executable Example

[Constant in the SELECT List](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_literal_abexa.htm)

Continue
![Example](exa.gif "Example") [sql\_exp - Constant in SELECT List](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_literal_abexa.htm)