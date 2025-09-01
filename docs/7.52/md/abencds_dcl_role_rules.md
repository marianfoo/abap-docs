  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) → 

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

Access rules that can be specified in curly brackets in the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) to define a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") of the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). Each access rule defines access to a [CSD entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). There are three types of access rule:

-   Conditional access rules [conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)), which control access using [access conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\))

-   Full access rules [grant\_rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)), which grant unrestricted access

-   Inherited access rules [inherited\_rule](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)), which inherit the existing CDS role

Several access rules can be combined in a CDS role, but an inherited access rule [inherited\_rule](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)) can only appear once.

The access conditions defined by the individual access rules are joined with a logical "or". In the same way, the access rules defined by different CDS roles for a CDS entity are joined by a logical "or".

Note

We recommend using only one access rule in a CDS role.

Continue
[ABAP CDS - DEFINE ROLE, conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\))
[ABAP CDS - DEFINE ROLE, grant\_rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\))
[ABAP CDS - DEFINE ROLE, inherited\_rule](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\))