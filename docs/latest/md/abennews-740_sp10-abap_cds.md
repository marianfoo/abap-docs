  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP10](javascript:call_link\('abennews-740_sp10.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20in%20ABAP%20Release%207.40%2C%20SP10%2C%20ABENNEWS-740_SP10-ABAP_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP CDS in ABAP Release 7.40, SP10

Modification

CDS Access Control

A dedicated [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") was introduced for [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). The new [CDS DCL](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") makes it possible to define [CDS](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") roles. If a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is linked with a CDS role, additional [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") are evaluated by default when the CDS entity is accessed by a query processed by [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") and only that data is read for which the current user has an authorization or that matches a literal condition.

Hint

From ABAP release 7.51, SADL uses ABAP SQL to access CDS entities. From ABAP release 7.50, ABAP SQL evaluates CDS roles implicitly.