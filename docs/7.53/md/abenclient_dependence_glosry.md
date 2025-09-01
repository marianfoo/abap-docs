  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

client dependency

A [database table](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry") or [classic view](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") is client-specific if the first column is a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry"). The system table T000, which contains the [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") [client IDs](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry"), is excluded from this rule. The client dependency of non-abstract [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is declared using the [ABAP annotation](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") @CLientHandling.type in the [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry").