  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) → 

ABAP CDS - DEFINE ROLE, access\_rules

Syntax Forms

1\. ... [conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))*|*[grant\_rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\))
     *\[*[conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))*|* [grant\_rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\))*\]*
      ...
2\. ... [inherited\_rule](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\))
     *\[*[conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))*|* [grant\_rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\))*\]*
     *\[*[conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))*|* [grant\_rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\))*\]*
      ...

Effect

Access rules that can be specified in curly brackets in the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) to define a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). Each access rule defines access to a [CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity. There are three types of access rule:

-   Conditional access rules [conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)), which control access using [access conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\))

-   Full access rules [grant\_rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)), which grant unrestricted access

-   Obsolete inherited access rules [inherited\_rule](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)) applied from existing CDS roles; [inheritance conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) should be used instead of inheritance rules.

Multiple access rules can be combined in a single CDS role, but an inherited access rule [inherited\_rule](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)) can only occur once.

The access conditions defined by the individual access rules are joined with a logical "or". In the same way, the access rules defined by different CDS roles for a CDS entity are joined by a logical "or".

Note

It is advisable to use only one access rule in a CDS role.

Continue
[ABAP CDS - DEFINE ROLE, conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))
[ABAP CDS - DEFINE ROLE, grant\_rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\))
[ABAP CDS - DEFINE ROLE, inherited\_rule (obsolete)](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\))