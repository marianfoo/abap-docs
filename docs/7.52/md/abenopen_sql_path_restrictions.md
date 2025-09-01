  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Path Expressions](javascript:call_link\('abenopen_sql_path.htm'\)) → 

Open SQL - Restrictions for Path Expressions

In principle, the same restrictions apply to path expressions in Open SQL and the associations used there as when using a corresponding [join expression](javascript:call_link\('abapselect_join.htm'\)). For example, a path expression cannot be used together with the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)). These restrictions are documented in the clauses in question. The following restrictions currently also apply:

-   Requirements for the CDS views:

-   The target data sources of the associations of a path expression cannot be database tables or database views with [replacement objects](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry").

-   No [literals](javascript:call_link\('abencds_f1_literal.htm'\)) with prefixed #domain or :domain can be used in the associations of the path expression to check the fixed value in the value range of a domain.

-   Due to automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"), no associations can be used whose ON condition accesses the client columns of their source data source or target data source. This can not be bypassed using the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) either.

-   Requirements for Open SQL:

-   If a value greater than 1 is defined for the cardinality of an [association](javascript:call_link\('abencds_f1_association.htm'\)) of a path expression in the FROM clause for max, an identical path expression must also be specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

-   If the addition CORRESPONDING or an inline declaration @DATA(...) is used in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause of a SELECT statement, any columns of the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) specified using a path expression must have an alternative column name alias defined using [AS](javascript:call_link\('abapselect_list.htm'\)).

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) specified as a path expression in the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) can be used in the SELECT statement only by using an alternative table name tabalias defined using AS in front of the column selector ~.

-   The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be used together with path expressions containing [associations](javascript:call_link\('abencds_f1_association.htm'\)) whose target data source is client-specific. In path expressions in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, the source data sources of the associations cannot be client-specific either.

-   If the alternative table name is specified statically using AS when the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) source\_syntax is specified dynamically, no path expressions can be used here.

-   Path expressions cannot be used in the ON condition of a [join expression](javascript:call_link\('abapselect_join.htm'\)).

-   In SELECT statements, path expressions cannot currently be used together with the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)).

Note

Fewer restrictions apply to the path expressions [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") CDS DDL. If association reads are required that are possible in ABAP CDS but not in Open SQL, they can be moved to a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").