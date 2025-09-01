  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [Open SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) → 

Strict Mode in Release 7.52

-   [Conditions for the Strict Mode](#abenopensql-strict-mode-752-1--------rules-for-the-strict-mode---@ITOC@@ABENOPENSQL_STRICT_MODE_752_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.52 applies to all Open SQL statements that use one of the following attributes introduced in [Release 7.52](javascript:call_link\('abennews-752-open_sql.htm'\)):

-   Use of ONE TO MANY in [LEFT OUTER JOIN](javascript:call_link\('abapselect_join.htm'\))

-   Use of the type conversion functions [BINTOHEX](javascript:call_link\('abensql_type_conv_func.htm'\)) and [HEXTOBIN](javascript:call_link\('abensql_type_conv_func.htm'\))

-   Use of the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)) of statement [SELECT](javascript:call_link\('abapselect.htm'\)) together with columns of the types STRING and RAWSTRING and also LCHR and LRAW in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) in a strict mode.

-   [Internal table](javascript:call_link\('abapselect_itab.htm'\)) as the data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) of a query

-   The following occurs in [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)):

-   Associations are used whose target data sources are [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   [Parameters](javascript:call_link\('abenopen_sql_parameters.htm'\)) are passed.

-   The cardinality or the kind of the join expression are specified as [attributes](javascript:call_link\('abenopen_sql_path_filter.htm'\)).

-   [Filter conditions](javascript:call_link\('abenopen_sql_path_filter.htm'\)) are specified.

-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is switched off by the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)).

Rules for the Strict Mode

The strict mode in Release 7.52 covers all rules of the [strict mode in Release 7.51](javascript:call_link\('abenopensql_strict_mode_751.htm'\)), plus the following rules:

-   A [path expression](javascript:call_link\('abenopen_sql_path.htm'\)) as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause must have an alternative table name defined with [AS](javascript:call_link\('abapfrom_clause.htm'\)).

-   The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified for a [data source](javascript:call_link\('abapselect_data_source.htm'\)) specified using a [path expression](javascript:call_link\('abenopen_sql_path.htm'\)).

-   When the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) is used in a query that accesses a CDS entity, this access is known statically, and [sCDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") applies, a syntax error occurs.