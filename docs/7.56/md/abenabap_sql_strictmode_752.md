  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) → 

ABAP SQL - Strict Mode in Release 7.52

-   [Conditions for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_752_1)
-   [Rules for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_752_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.52 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.52](javascript:call_link\('abennews-752-abap_sql.htm'\)):

-   Use of ONE TO MANY in [LEFT OUTER JOIN](javascript:call_link\('abapselect_join.htm'\))
-   [Parameter passing](javascript:call_link\('abenabap_sql_parameters.htm'\)) when using [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)) in a [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause.
-   [Filter conditions](javascript:call_link\('abenabap_sql_path_filter.htm'\)) in [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)) in a [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause.
-   Use of the type conversion functions [BINTOHEX](javascript:call_link\('abensql_type_conv_func.htm'\)) and [HEXTOBIN](javascript:call_link\('abensql_type_conv_func.htm'\))
-   Use of the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) of statement [SELECT](javascript:call_link\('abapselect.htm'\)) together with columns of the types STRING, RAWSTRING, and GEOM\_EWKB plus LCHR and LRAW in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) in a strict mode.
-   [Internal table](javascript:call_link\('abapselect_itab.htm'\)) as the data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) of a query
-   In [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)):
    -   CDS associations are used whose [association targets](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") are [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").
    -   [Parameters](javascript:call_link\('abenabap_sql_parameters.htm'\)) are passed when used to [specify columns](javascript:call_link\('abenabap_sql_columns.htm'\))
    -   The [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") or the kind of the join expression are specified as [attributes](javascript:call_link\('abenabap_sql_path_filter.htm'\)).
    -   [Filter conditions](javascript:call_link\('abenabap_sql_path_filter.htm'\)) are specified when used to [specify columns](javascript:call_link\('abenabap_sql_columns.htm'\)).
-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is switched off by the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)).

Rules for the Strict Mode

The strict mode in Release 7.52 covers all rules of the [strict mode in Release 7.51](javascript:call_link\('abenabap_sql_strictmode_751.htm'\)), plus the following rules:

-   A [path expression](javascript:call_link\('abenabap_sql_path.htm'\)) as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause must have an alias name defined with [AS](javascript:call_link\('abapfrom_clause.htm'\)).
-   The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified for a [data source](javascript:call_link\('abapselect_data_source.htm'\)) specified using a [path expression](javascript:call_link\('abenabap_sql_path.htm'\)).
-   When the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) is used in a query that accesses a CDS entity, this access is known statically, and [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") applies, a syntax error occurs.
-   Any character literals or constants used on the right side of [LIKE](javascript:call_link\('abenwhere_logexp_like.htm'\)) that are more than twice as long as the left side produce a syntax error.