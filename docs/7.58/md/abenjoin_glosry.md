  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20join%2C%20ABENJOIN_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

join

A combination of two [SQL data sources](javascript:call_link\('abensql_data_source_glosry.htm'\) "Glossary Entry") into one result set, consisting of columns of both data sources. The rows of the result set are determined by the [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") and by [join conditions](javascript:call_link\('abenjoin_condition_glosry.htm'\) "Glossary Entry") between columns of the data sources. The relation between the rows of the data sources can be expressed by a [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry"). Joins can be implemented in ABAP as follows:

-   [DDIC views](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry")
-   [Join expressions](javascript:call_link\('abenjoin_expression_glosry.htm'\) "Glossary Entry") in [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") of [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry")
-   [Join expressions](javascript:call_link\('abenjoin_expression_glosry.htm'\) "Glossary Entry") in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry")

Furthermore, [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") and [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") define join relationships that are instantiated when the associations are used in [SQL path expressions](javascript:call_link\('abensql_path_expression_glosry.htm'\) "Glossary Entry").