  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) → 

Open SQL - Host Variables

Syntax

... @dobj ...

Effect

[Host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") are global or local variables (usually variables) dobj declared in the ABAP program that are used in operand positions of Open SQL statements. Instead of the data object itself, a field symbol to which the data object is assigned can be specified. Dereferenced data reference variables can also be specified.

To identify a host variable, the names of [named](javascript:call_link\('abennamed_data_object_glosry.htm'\) "Glossary Entry") data objects or field symbols should always be directly prefixed by the escape character @. The escape character can only be used in programs, in which the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated. When the escape character is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

The content of host variables in reading positions is passed to the database system together with the SQL statement before it is executed. The content of host variables in writing positions is taken from the database system after the SQL statement is ended.

Notes

-   ABAP data objects that are specified as enclosed dynamic tokens do not belong to the host variables and cannot be prefixed by the escape character @.

-   The escape character for host variables is independent of the general escape character for names [!](javascript:call_link\('abennames_escaping.htm'\)). The escape character ! can also be written in front of host variables that are already prefixed by the escape character @. However, this is not recommended.

-   Specifying host variables without the escape character @ is [obsolete](javascript:call_link\('abenopen_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

-   In addition to host variables, suitable ABAP literals can be specified at the relevant reading positions in Open SQL statements. Literals are usually handled like host variables. A literal, however, cannot be prefixed (and does not need to be prefixed) by the escape character @.

-   As a part of SQL expressions, host variables can be specified wherever these expressions are possible.

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