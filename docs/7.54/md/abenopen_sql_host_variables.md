  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Operands sql\_elem](javascript:call_link\('abensql_operands.htm'\)) → 

ABAP SQL - @dobj

Syntax

... @dobj ...

Effect

Specifying a [host variable](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") in a ABAP SQL statement. Host variables are global or local data objects dobj declared in the ABAP program that are used in operand positions of ABAP SQL statements. Instead of the data object itself, a field symbol to which the data object is assigned can be specified. Dereferenced data reference variables can also be specified. Depending on the operand position, the data objects can be [variables](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") or [constants](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry"). Constant host variables are [host constants](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry").

To identify a host variable, the names of [named](javascript:call_link\('abennamed_data_object_glosry.htm'\) "Glossary Entry") data objects or field symbols should always be directly prefixed by the escape character @. The escape character can only be used in programs, in which the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated. When the escape character is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

The content of host variables in reading positions is passed to the database system together with the SQL statement before it is executed. The content of host variables in writing positions is taken from the database system after the SQL statement is ended.

-   Read positions in which host variables are handled as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) are subject to the appropriate rules and any mappings are made to a dictionary type. The content is evaluated on the database in accordance with this type.

-   In operand positions in which host variables are not handled as SQL expressions, any [conversions](javascript:call_link\('abenconversion_rules.htm'\)) are made to the appropriate data type. In read positions, it must be possible to convert the content of a host variable to the data type required in the operand position and this conversion must be [lossless](javascript:call_link\('abapmove_exact.htm'\)). Any unsuitable [host constants](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") produce, depending on the [syntax check mode](javascript:call_link\('abenopensql_strict_modes.htm'\)), syntax warnings or syntax errors.

Notes

-   [Strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") are possible only in operand positions in which host variables cannot be handled as elementary SQL expressions.

-   In some operand positions in which host variables are allowed and [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) are prohibited, a host variable can still be specified with the syntax @( dobj ) and is handled as a host variable and not as an expression.

-   ABAP data objects that are specified as enclosed dynamic tokens do not belong to the host variables and cannot be prefixed by the escape character @.

-   The escape character for host variables is independent of the general escape character for names [!](javascript:call_link\('abennames_escaping.htm'\)). The escape character ! can also be written in front of host variables that are already prefixed by the escape character @. However, this is not recommended.

-   Specifying host variables without the escape character @ is [obsolete](javascript:call_link\('abenopen_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

-   In addition to host variables, suitable ABAP literals can be specified at the relevant reading positions in ABAP SQL statements. Literals are usually handled like host variables. A literal, however, cannot be prefixed (and does not need to be prefixed) by the escape character @.

-   If host variables are used as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)), in particular as operands of other SQL expressions, they are mapped to a fixed dictionary type and the corresponding rules apply. The situation is different if they are used in other operand positions, for which conversion to different dictionary types is generally possible.

-   Host variables cannot be [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry").

-   When host variables with an escape character @ are specified, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

Specifies various host variables; the escape character @ is always used.

DATA carrid TYPE spfli-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
DATA: BEGIN OF result,
         carrid TYPE sflight-carrid,
         connid TYPE sflight-connid,
       END OF result.
SELECT carrid, connid
       FROM sflight
       INTO CORRESPONDING FIELDS OF @result
       WHERE carrid = @carrid.
  ...
ENDSELECT.
FIELD-SYMBOLS <result> LIKE result.
SELECT carrid, connid
       FROM sflight
       INTO CORRESPONDING FIELDS OF @<result>
       WHERE carrid = @carrid.
  ...
ENDSELECT.
DATA dref LIKE REF TO result.
SELECT carrid, connid
       FROM sflight
       INTO CORRESPONDING FIELDS OF @dref->\*
       WHERE carrid = @carrid.
  ...
ENDSELECT.

Example

Usage of a host variable prefix with the type c and a host variable name of the type string.

-   The host variable prefix is used as an elementary SQL expression in the SELECT list. No string is possible here.

-   The host variable name is used on the right-hand side of the WHERE condition. Here, a string but not an SQL expression is possible.

DATA:
  prefix TYPE c LENGTH 5,
  name   TYPE string.
SELECT FROM scarr
       FIELDS @prefix && carrid AS carrid,
              carrname
       WHERE carrname = @name
       INTO TABLE @DATA(result).