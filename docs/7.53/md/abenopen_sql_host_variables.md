---
title: "ABAP SQL - Host Variables"
description: |
  Syntax ... @dobj ... Effect Host variables(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_variable_glosry.htm 'Glossary Entry') are global or local data objects (usually variables) dobj declared in the ABAP program that are used in operand positions of ABAP SQL statements. Ins
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm"
abapFile: "abenopen_sql_host_variables.htm"
keywords: ["select", "do", "if", "try", "data", "field-symbol", "abenopen", "sql", "host", "variables"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) → 

ABAP SQL - Host Variables

Syntax

... @dobj ...

Effect

[Host variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_variable_glosry.htm "Glossary Entry") are global or local data objects (usually variables) dobj declared in the ABAP program that are used in operand positions of ABAP SQL statements. Instead of the data object itself, a field symbol to which the data object is assigned can be specified. Dereferenced data reference variables can also be specified.

To identify a host variable, the names of [named](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennamed_data_object_glosry.htm "Glossary Entry") data objects or field symbols should always be directly prefixed by the escape character @. The escape character can only be used in programs, in which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated. When the escape character is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

The content of host variables in reading positions is passed to the database system together with the SQL statement before it is executed. The content of host variables in writing positions is taken from the database system after the SQL statement is ended.

Notes

-   ABAP data objects that are specified as enclosed dynamic tokens do not belong to the host variables and cannot be prefixed by the escape character @.

-   The escape character for host variables is independent of the general escape character for names [!](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennames_escaping.htm). The escape character ! can also be written in front of host variables that are already prefixed by the escape character @. However, this is not recommended.

-   Specifying host variables without the escape character @ is [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.

-   In addition to host variables, suitable ABAP literals can be specified at the relevant reading positions in ABAP SQL statements. Literals are usually handled like host variables. A literal, however, cannot be prefixed (and does not need to be prefixed) by the escape character @.

-   As a part of SQL expressions, host variables can be specified wherever these expressions are possible.

-   Host variables cannot be [enumerated objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

-   When host variables with an escape character @ are specified, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

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