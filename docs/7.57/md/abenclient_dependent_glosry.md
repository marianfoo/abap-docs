  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: client-dependent, ABENCLIENT_DEPENDENT_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

client-dependent

A [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") or [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") is client-dependent if the first column is a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry"). The system table T000, which contains the [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") [client IDs](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry"), is an exception to this rule.

-   The client dependency of [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") is declared in the [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") by the [ABAP annotation](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") @CLientHandling.type.
-   The client dependency of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is done automatically and implicitly by filtering the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") $session.client and it cannot be changed.

When accessing a client-dependent SQL data source in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), an implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") takes place.