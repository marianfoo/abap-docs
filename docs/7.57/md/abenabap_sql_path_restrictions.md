  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Path Expressions sql\_path](javascript:call_link\('abenabap_sql_path.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Restrictions for Path Expressions, ABENABAP_SQL_PATH_RESTRICTIONS, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - Restrictions for Path Expressions

In principle, the same restrictions apply to path expressions in ABAP SQL and the [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE expressions](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") used there as to using a corresponding [join expression](javascript:call_link\('abapselect_join.htm'\)). For example, a path expression cannot be used together with the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)). These restrictions are documented in the corresponding clauses. The following restrictions currently apply:

-   Requirements for the CDS entities or common table expressions
    -   The [association targets](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the associations of a path expression cannot be DDIC database tables or DDIC database views with [replacement objects](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry").
    -   No [literals](javascript:call_link\('abencds_literal_v1.htm'\)) with prefixed #domain or :domain can be used in the CDS associations of the path expression to check the fixed value in the value range of a domain.
    -   Due to [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)), no associations can be used whose ON condition accesses the client columns of their [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") or [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry"). This cannot be bypassed using the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) either.
-   Requirements for ABAP SQL
    -   If a value greater than to 1 is defined for the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of an association of a path expression in the FROM clause for max, the identical path expression must also be specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).
    -   If the addition CORRESPONDING or an inline declaration [@DATA*|*@FINAL(...)](javascript:call_link\('abapselect_into_target.htm'\)) is used in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause of a SELECT statement, columns of the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) specified using a path expression must have an alias name alias defined using [AS](javascript:call_link\('abapselect_list.htm'\)).
    -   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) specified as a path expression in the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) can be used in the SELECT statement only by using an alias name tabalias defined using AS in front of the column selector ~.
    -   The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be used together with path expressions that contain [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), if the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is client-dependent. In path expressions in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, the [association sources](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") of the associations cannot be client-dependent either.
    -   The addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) and the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be combined with path expressions that contain [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry"), if they are [exposed](javascript:call_link\('abapwith_associations_defining.htm'\)) by common table expressions.
    -   If the alias name tabalias is specified statically using AS while the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) source\_syntax is specified dynamically, no path expressions can be used here.
    -   Path expressions cannot be used in the ON condition of a [join expression](javascript:call_link\('abapselect_join.htm'\)).
    -   In SELECT statements, path expressions cannot be used together with the additions [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) or [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)).

Hint

Fewer restrictions apply to the path expressions [path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)) in the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") CDS DDL. If CDS association reads are required that are possible in ABAP CDS but not in ABAP SQL, they can be moved to a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").