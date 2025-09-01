  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Operands sql\_elem](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_operands.htm) → 

ABAP SQL - @dobj

Syntax

... @dobj ...

Effect

Specifying a [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_variable_glosry.htm "Glossary Entry") in a ABAP SQL statement. Host variables are global or local data objects dobj declared in the ABAP program that are used in operand positions of ABAP SQL statements. Instead of the data object itself, a field symbol to which the data object is assigned can also be specified. Dereferenced data reference variables can also be specified. Depending on the operand position, the data objects can be [variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvariable_glosry.htm "Glossary Entry") or [constants](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvariable_glosry.htm "Glossary Entry"). Constant host variables are [host constants](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_variable_glosry.htm "Glossary Entry").

To identify a host variable, the names of [named](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennamed_data_object_glosry.htm "Glossary Entry") data objects or field symbols should always be directly prefixed by the escape character @. The escape character can only be used in programs, in which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated. When the escape character is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

The content of host variables in read positions is passed to the database system together with the SQL statement before it is executed. The content of host variables in write positions is taken from the database system after the SQL statement is ended.

-   Read positions in which host variables are handled as [elementary SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm) are subject to the corresponding rules and any mappings are made to a dictionary type. The content is evaluated on the database in accordance with this type.

-   In operand positions in which host variables are not handled as SQL expressions, any [conversions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm) are made to the appropriate data type. In read positions, it must be possible to convert the content of a host variable to the data type required in the operand position [lossless](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_exact.htm). Any unsuitable [host constants](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_variable_glosry.htm "Glossary Entry") produce, depending on the [syntax check mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_modes.htm), syntax warnings or syntax errors.

Hints

-   In some operand positions in which host variables are allowed and [host expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_expressions.htm) are prohibited, a host variable can still be specified with the syntax @( dobj ) and is handled as a host variable and not as an expression.

-   ABAP data objects that are specified as enclosed dynamic tokens do not belong to the host variables and cannot be prefixed by the escape character @.

-   The escape character for host variables is independent of the general escape character for names [!](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennames_escaping.htm). The escape character ! can also be written in front of host variables that are already prefixed by the escape character @. However, this is not recommended.

-   Specifying host variables without the escape character @ is [obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.

-   In addition to host variables, [literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm) can also be specified at the respective read positions in ABAP SQL statements. A literal, however, cannot and does not need to be prefixed by the escape character @. While [untyped literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_untyped_literals.htm) usually handled like host variables, [typed literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_typed_literals.htm) are always handled as elementary SQL expressions.

-   If host variables are used as [elementary SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm), in particular as operands of other SQL expressions, they are mapped to a fixed dictionary type and the corresponding rules apply. This is different from their use in other operand positions, for which conversions to different dictionary types are generally possible.

-   Host variables cannot be [enumerated objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry").

-   When host variables with an escape character @ are specified, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Example

Specification of different host variables, whereby the escape character @ is always used.

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

Use of a host variable prefix with the type c and a host variable name of the type string. The host variable name is used on the right-hand side of the WHERE condition. A string is possible, but not an SQL expression.

DATA:
  prefix TYPE c LENGTH 5,
  name   TYPE string.
SELECT FROM scarr
       FIELDS @prefix && carrid AS carrid,
              carrname
       WHERE carrname = @name
       INTO TABLE @DATA(result).