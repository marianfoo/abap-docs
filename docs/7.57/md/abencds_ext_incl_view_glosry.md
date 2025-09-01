  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: extension include view, ABENCDS_EXT_INCL_VIEW_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

extension include view

Expression used in the context of [C0 developer extensibility](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry"). [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") that has exactly one [data source](javascript:call_link\('abendata_source_glosry.htm'\) "Glossary Entry") defined after FROM, which is a [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry"). An extension include view does not define any [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

In a typical C0 developer extension scenario, not each single CDS entity is defined as [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry"), only a few dedicated extension points. An extension include view represents a typical extension point that includes additional fields from a database table in the data model via an extension.

[More about CDS entity extensions](javascript:call_link\('abencds_view_extension.htm'\))