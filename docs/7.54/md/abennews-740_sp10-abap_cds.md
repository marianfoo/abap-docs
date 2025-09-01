  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP10](javascript:call_link\('abennews-740_sp10.htm'\)) → 

ABAP CDS in Release 7.40, SP10

[1\. CDS access control](#!ABAP_MODIFICATION_1@1@)

Modification 1

CDS Access Control

A dedicated [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") was introduced for [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). The new [CDS DCL](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") makes it possible to define [CDS](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") roles. If a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is associated with a CDS role, additional [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") are evaluated by default when the CDS entity is accessed in an [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") query and only that data is read for which the current user has an authorization or that matches a literal condition.

Note

From Release 7.51, SADL uses ABAP SQL to access CDS entities. From Release 7.50, ABAP SQL evaluates CDS roles implicitly.