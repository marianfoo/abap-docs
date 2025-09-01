  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Operands sql\_elem](javascript:call_link\('abensql_operands.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20%40dobj%2C%20ABENABAP_SQL_HOST_VARIABLES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - @dobj

Syntax

... @dobj ...

Effect

Specifying a [host variable](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") in an ABAP SQL statement. Host variables are global or local data objects dobj declared in the ABAP program that are used in operand positions of ABAP SQL statements. Instead of the data object itself, a field symbol to which the data object is assigned can also be specified. Dereferenced data reference variables can also be specified. Depending on the operand position, the data objects can be [variables](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") or [constants](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry"). Constant host variables are [host constants](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry").

To identify a host variable, the names of [named](javascript:call_link\('abennamed_data_object_glosry.htm'\) "Glossary Entry") data objects or field symbols should always be directly prefixed by the escape character @. The escape character can only be used in programs, in which the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated. When the escape character is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

The content of host variables in read positions is passed to the database system together with the SQL statement before it is executed. The content of host variables in write positions is taken from the database system after the SQL statement is ended.

-   Read positions in which host variables are handled as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) are subject to the corresponding rules and any mappings are made to a dictionary type. The content is evaluated on the database in accordance with this type.
-   In operand positions in which host variables are not handled as SQL expressions, a [type conversion](javascript:call_link\('abenconversion_rules.htm'\)) into the appropriate data type takes place if required. In read positions, it must be possible to convert the content of a host variable to the data type required in the operand position in a [lossless](javascript:call_link\('abapmove_exact.htm'\)) manner. Any unsuitable [host constants](javascript:call_link\('abenhost_constant_glosry.htm'\) "Glossary Entry") produce syntax warnings or syntax errors, depending on the [syntax check mode](javascript:call_link\('abenabap_sql_strict_modes.htm'\)). Host variables that cannot be converted in a lossless manner produce a catchable exception of class CX\_SY\_OPEN\_SQL\_DATA\_ERROR.

Restriction

Host variables can have a [CDS enumerated type](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") but not an [ABAP enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry").

Hints

-   In some operand positions in which host variables are allowed and [host expressions](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) are prohibited, a host variable can nevertheless be specified with the syntax @( dobj ) and is handled as a host variable and not as an expression.
-   ABAP data objects that are specified as enclosed dynamic tokens do not belong to the host variables and cannot be prefixed by the escape character @.
-   The escape character for host variables is independent of the general escape character for names [!](javascript:call_link\('abennames_escaping.htm'\)). The escape character ! can also be written in front of host variables that are already prefixed by the escape character @. However, this is not recommended.
-   In addition to host variables, [literals](javascript:call_link\('abenabap_sql_literals.htm'\)) can also be specified at the respective read positions in ABAP SQL statements. A literal, however, cannot and does not need to be prefixed by the escape character @. While [untyped literals](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)) are usually handled as host variables, [typed literals](javascript:call_link\('abenabap_sql_typed_literals.htm'\)) are always handled as elementary SQL expressions.
-   If host variables are used as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)), in particular as operands of other SQL expressions, they are mapped to a fixed dictionary type and the corresponding rules apply. This is different from their use in other operand positions, for which conversions to different dictionary types are generally possible.
-   A CDS [enumerated constant](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") is specified as usual by using the name of the CDS enumerated type, followed by a [component selector](javascript:call_link\('abencomponent_selector_glosry.htm'\) "Glossary Entry") and the name of a CDS enumerated constant @enumtype-enumconstant.
-   Specifying host variables without the escape character @ is [obsolete](javascript:call_link\('abenabap_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from ABAP release 7.40, SP05.
-   When host variables with an escape character @ are specified, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp08.htm'\)), which handles the statement more strictly than the regular syntax check.

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
       WHERE carrid = @carrid
       INTO CORRESPONDING FIELDS OF @result.
ENDSELECT.
FIELD-SYMBOLS <result> LIKE result.
SELECT carrid, connid
       FROM sflight
       WHERE carrid = @carrid
       INTO CORRESPONDING FIELDS OF @<result>.
ENDSELECT.
DATA dref LIKE REF TO result.
SELECT carrid, connid
       FROM sflight
       WHERE carrid = @carrid
       INTO CORRESPONDING FIELDS OF @dref->\*.
ENDSELECT.

Example

Use of a host variable prefix with the type c and a host variable name of the type string. The host variable name is used on the right-hand side of the WHERE condition. A string is possible, and since the introduction of ABAP SQL expressions on the right side of a condition, also an SQL expression.

DATA:
  prefix TYPE c LENGTH 5,
  name   TYPE string.
SELECT FROM scarr
       FIELDS @prefix && carrid AS carrid,
              carrname
       WHERE carrname = @name
       INTO TABLE @FINAL(result).

Example

The following SELECT statement raises an exception because the content of the host variable carrid cannot be assigned in a lossless manner. If carrid were a constant, there would be an additional syntax warning.

FINAL(carrid) = \`LH          \`.
TRY.
    SELECT \*
           FROM scarr
           WHERE carrid = @carrid
           INTO TABLE @FINAL(itab).
  CATCH cx\_sy\_open\_sql\_data\_error INTO FINAL(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Effect

Specifies a host variable typed with a CDS enumerated type in an ABAP SQL statement. Host variables typed with a CDS enumerated type can be specified in all operand positions that are documented in the table above.

Example

The [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") fri is specified as host variable in different operand positions.

DATA fri TYPE demo\_cds\_enum\_weekday.
SELECT char1 && '\_' && char2 AS group,
    num1,
    @fri AS EnumField
    FROM demo\_expressions
    WHERE @fri = @demo\_cds\_enum\_weekday-fri
    ORDER BY @fri
    INTO TABLE @FINAL(itab).