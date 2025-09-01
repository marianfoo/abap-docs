  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20SQL%20Parameter%20Passing%20sql_para%2C%20ABENABAP_SQL_PARAMETERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

ABAP SQL - SQL Parameter Passing sql\_para

Syntax

... ( pname1 = act1, pname2 = act2, ... ) ...

Effect

Specifies actual parameters act1, act2, ... for input parameters [pname1](javascript:call_link\('abencds_f1_param.htm'\)), [pname2](javascript:call_link\('abencds_f1_param.htm'\)), ... of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in a parenthesized comma-separated list. Parameters can be passed to non-abstract CDS entities in the following positions in ABAP SQL statements:

-   After a CDS entity as the [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").
-   After the CDS associations of a [path expression](javascript:call_link\('abenabap_sql_path.htm'\)) in the [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) and in the [column specifications](javascript:call_link\('abenabap_sql_columns.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").

If a CDS entity has [input parameters](javascript:call_link\('abencds_f1_param.htm'\)) as the data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") or target of a CDS association specified in a [path expression](javascript:call_link\('abenabap_sql_path.htm'\)), a matching actual parameter must be passed to each input parameter as follows:

-   If an input parameter does not have an annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), an explicit actual parameter must be specified.
-   If an input parameter has an annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) with one of the predefined values [#SYSTEM\_...](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), an explicit actual parameter does not need to be specified. If no actual parameter is specified, ABAP SQL passes the nominal value of the system field assigned using the annotation implicitly. Here, only the date and time are taken from the system fields sy-datum and sy-uzeit and the language and user name are taken from secure sources.
-   If an input parameter has an annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) with the predefined value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), an explicit actual parameter must not be specified. Instead, ABAP SQL passes the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") or a client specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) implicitly.

[Literals](javascript:call_link\('abenabap_sql_literals.htm'\)), [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)), or [host expressions](javascript:call_link\('abenabap_sql_host_expressions.htm'\)), can be specified as actual parameters. The name of a host variable must be prefixed with the escape character @. The data type of the parameter must be convertible to the [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in the ABAP Dictionary. The built-in data type is specified by the [typing](javascript:call_link\('abencds_typing.htm'\)) of the parameter. The content of the actual parameter must match the data type of the input parameter in accordance with the rules for a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). Only typed literals are passed directly without conversion.

In the following cases, the parentheses ( ) after the name of a CDS entity can be empty or omitted:

-   The function is a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") without input parameters.
-   The view is a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") with input parameters that are all filled implicitly using the annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)).

Parentheses cannot be specified in CDS views without input parameters or in any dictionary objects.

Hints

-   There are currently no optional input parameters for CDS entities and no real replacement values for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) bypasses this gap for some environment values by providing the caller with the non-optional parameters implicitly.
-   Currently, a [path expression](javascript:call_link\('abenabap_sql_path.htm'\)) in a [column specification](javascript:call_link\('abenabap_sql_columns.htm'\)) in a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") cannot contain any CDS associations for entities with input parameters.
-   When parameters are passed to an entity with parameters, the syntax check is performed in [strict mode from 7.40 SP08](javascript:call_link\('abenabap_sql_strictmode_740_sp08.htm'\)). If a host expression is specified as an actual parameter, the syntax check is performed in [strict mode from ABAP release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)). If a [path expression](javascript:call_link\('abenabap_sql_path.htm'\)) is used at the same time or if a parameter is passed in a path expression, the syntax check is performed in [strict mode from ABAP release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)).

Example

Passing of a time zone to the input parameter tz of the CDS view entity demo\_cds\_assoc\_sairport\_tz.

DATA timezone TYPE s\_tzone VALUE 'UTC+1'.
cl\_demo\_input=>request( CHANGING field = timezone ).
SELECT id
       FROM demo\_cds\_assoc\_sairport\_tz( tz = @timezone )
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Example

A CDS [enumerated constant](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") is specified as a column in the SELECT list, in the WHERE clause, in the ORDER BY clause and passed as actual parameter.

SELECT @demo\_cds\_enum\_weekday-tue AS EnumConstant
       FROM demo\_cds\_enum\_type\_usage\_2(
              p1 = @demo\_cds\_enum\_char-first\_value )
       WHERE friday = @demo\_cds\_enum\_weekday-fri
       ORDER BY @demo\_cds\_enum\_char-initial\_value
       INTO TABLE @FINAL(itab).

Executable Example

[SELECT, CDS View Entity with Input Parameters](javascript:call_link\('abenselect_cds_para_abexa.htm'\))

Continue
![Example](exa.gif "Example") [ABAP SQL, Parameter Passing to a CDS View Entity](javascript:call_link\('abenselect_cds_para_abexa.htm'\))