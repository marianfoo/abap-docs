  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) → 

Open SQL - Parameter Passing

Syntax

... ( pname1 = act1, pname2 = act2, ... ) ...

Effect

Specifies actual parameters act1, act2, ... for input parameters [pname1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm), [pname2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm), ... of a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") in a parenthesized comma-separated list. Parameters can be passed to CDS entities at the following positions in Open SQL statements:

-   After a CDS entity as the [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of the [FROM clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry").

-   After the associations of a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) in the [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of the [FROM clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) and in the [specified columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm) of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry").

If a CDS entity has [input parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm) as the data source [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") or [target](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) of an association specified in a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm), a matching actual parameter must be passed to each input parameter as follows:

-   If an input parameter does not have an annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm), an explicit actual parameter must be specified.

-   If an input parameter has an annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) with one of the predefined values [#SYSTEM\_...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm), an explicit actual parameter does not need to be specified. If no actual parameter is specified, Open SQL passes the nominal value of the system field assigned using the annotation implicitly. Here, only the date and time are taken from the system fields sy-datum and sy-uzeit and the language and user name are taken from secure sources.

-   If an input parameter has an annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) with the predefined value [#CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm), an explicit actual parameter must not be specified. Instead, Open SQL passes the ID of the current [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") or a client specified using [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) implicitly.

Literals, [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm), or [host expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_expressions.htm) can be specified as actual parameters. The name of a host variable must be prefixed with the escape character @. The data type of the parameter must be convertible into the [predefined data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) in ABAP Dictionary; the predefined data type is specified by the [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_typing.htm) of the parameter. The content of the actual parameter must match the data type of the input parameter in accordance with the rules for a [lossless assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_assignment_glosry.htm "Glossary Entry").

In the following cases, the parentheses ( ) after the name of a CDS entity can be empty or omitted.

-   The function is a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") without input parameters.

-   The view is a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") with input parameters that are all filled implicitly using the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm).

Parentheses cannot be specified in CDS views without input parameters or in any classic dictionary objects.

Notes

-   There are currently no optional input parameters for CDS entities and no real replacement values for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) bypasses this gap for some environment values by providing the caller with the non-optional parameters implicitly.

-   Currently, a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) in a [specified column](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm) in a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") cannot contain any associations for entities with input parameters.

-   When parameters are passed to a entity with parameters, the syntax check is performed in [strict mode from 7.40 SP08](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm). If a host expression is specified as an actual parameter, the syntax check is performed in [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm). If a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) is also used, or a parameter is passed in a path expression, the syntax check is performed in [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_752.htm).

Example

Passes a time zone to the input parameter tz of the CDS view demo\_cds\_assoc\_sairport\_tz.

DATA timezone TYPE s\_tzone VALUE 'UTC+1'.
cl\_demo\_input=>request( CHANGING field = timezone ).
SELECT id
       FROM demo\_cds\_assoc\_sairport\_tz( tz = @timezone )
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[SELECT, CDS View with Input Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_cds_para_abexa.htm)

Continue
![Example](exa.gif "Example") [Open SQL, parameter passing to CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_cds_para_abexa.htm)