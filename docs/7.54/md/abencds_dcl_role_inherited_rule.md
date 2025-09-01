  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, access\_rules](javascript:call_link\('abencds_dcl_role_rules.htm'\)) → 

ABAP CDS - DEFINE ROLE, inherited\_rule (obsolete)

Obsolete Syntax

GRANT SELECT ON cds\_entity INHERIT parent\_role *\[*AND*|*OR [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\))*\]* ...;

Effect

Obsolete inherited access rule in the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in the [](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry")[CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). An inherited access rule GRANT SELECT ON with the addition INHERIT inherits the access rules of an existing CDS role parent\_role for a CDS entity cds\_entity. If cds\_entity is specified, the same applies as for a [conditional access rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)).

As an option, the inherited access rule can be given dedicated [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) using AND or OR. A CDS role can only contain one inherited access rule, but can contain additional [conditional](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) or [full access rules](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)). The existing CDS role parent\_role can only contain a single access rule for exactly one CDS entity, which itself can be an inherited access rule.

The inherited access conditions inherited from parent\_role must match the CDS entity cds\_entity. [Full access rules](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) cannot be inherited.

Notes

-   Inherited access rules are obsolete. [Inheritance conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) should be used as [access conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) instead.

-   There is currently no check to determine whether the CDS entity cds\_entity contains as a data source the CDS entity for which the role parent\_role is defined.

-   Changes to the CDS entity for which the role parent\_role is defined can lead to errors in the inheriting roles.

Example

This example demonstrates how an obsolete inherited access rules is used. The example for [inheritance conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) how access conditions should be applied instead.

The following CDS view uses the CDS view DEMO\_CDS\_AUTH\_LIT\_PFCG from the example for [conditional access rules](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) as the data source:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_INH\_OBS'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_inh\_obs
  as select from
    demo\_cds\_auth\_lit\_pfcg
    {
      key carrid,
          carrname,
          currcode,
          url
    };

The view DEMO\_CDS\_AUTH\_LIT\_PFCG is assigned to the CDS role DEMO\_CDS\_ROLE\_LIT\_PFCG. This role is inherited in the following CDS role and hence passes its access rules to the view DEMO\_CDS\_AUTH\_INH\_OBS. An additional literal condition allows access to another currency.

@MappingRole: true
define role demo\_cds\_role\_inh\_obs {
  grant select on demo\_cds\_auth\_inh\_obs
               inherit demo\_cds\_role\_lit\_pfcg or currcode = 'USD'; }

The language element INHERIT inherits the access conditions of the existing role and combines them with the additional condition. Expressed explicitly, the resulting access condition looks like this:

... where (carrid) =
       aspect pfcg\_auth (s\_carrid, carrid, actvt='03') and
              currcode = 'EUR' or
              currcode = 'USD' ...