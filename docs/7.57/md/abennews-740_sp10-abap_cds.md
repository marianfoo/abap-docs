  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP10](javascript:call_link\('abennews-740_sp10.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS in Release 7.40, SP10, ABENNEWS-740_SP10-ABAP_CDS, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS in Release 7.40, SP10

Modification

CDS Access Control

A dedicated [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") was introduced for [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). The new [CDS DCL](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") makes it possible to define [CDS](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") roles. If a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is linked with a CDS role, additional [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") are evaluated by default when the CDS entity is accessed by a query processed by [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") and only that data is read for which the current user has an authorization or that matches a literal condition.

Hint

From Release 7.51, SADL uses ABAP SQL to access CDS entities. From Release 7.50, ABAP SQL evaluates CDS roles implicitly.