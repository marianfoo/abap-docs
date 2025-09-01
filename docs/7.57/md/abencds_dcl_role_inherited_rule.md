  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, access\_rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_rules.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DCL - DEFINE ROLE, inherited_rule \(Obsolete\), ABENCDS_DCL_ROLE_INHERITED_RULE, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DCL - DEFINE ROLE, inherited\_rule (Obsolete)

Obsolete Syntax

GRANT SELECT ON cds\_entity INHERIT parent\_role *\[*AND*|*OR [cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_expr.htm)*\]* ...;

Effect

Obsolete inherited access rule in the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_role.htm) in the [CDS DCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_glosry.htm "Glossary Entry"). An inherited access rule GRANT SELECT ON with the addition INHERIT inherits the access rules of an existing CDS role parent\_role for a CDS entity cds\_entity. The same applies to cds\_entity as to a [conditional access rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm).

As an option, [access conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_expr.htm) can be added to the inherited access rule using AND or OR. A CDS role can only contain one inherited access rule, but can contain additional [conditional](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm) or [full access rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm). The existing CDS role parent\_role can only contain a single access rule for exactly one CDS entity, which itself can be an inherited access rule.

The inherited access conditions inherited from parent\_role must match the CDS entity cds\_entity. [Full access rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm) cannot be inherited.

Hints

-   Inherited access rules are obsolete. [Inheritance conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_inherit.htm) should be used as [access conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_conditions.htm) instead.
-   There is currently no check to determine whether the CDS entity cds\_entity contains as a data source the CDS entity for which the role parent\_role is defined.
-   Changes to the CDS entity for which the role parent\_role is defined can lead to errors in the inheriting roles.

Example

This example demonstrates how an obsolete inherited access rules is used. The example for [inheritance conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_inherit.htm) shows how access conditions should be applied instead.

The following CDS view entity uses the CDS view entity DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE from the example for [conditional access rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm) as the data source:

@AccessControl.authorizationCheck: #CHECK
define view entity demo\_cds\_auth\_inh\_obs\_ve  
as select from DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE  
{
  key carrid,
  carrname,
  currcode,
  url
}

The view entity DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE is assigned to the CDS role DEMO\_CDS\_ROLE\_LIT\_PFCG\_VE. This role is inherited in the following CDS role and hence passes its access rules to the view DEMO\_CDS\_AUTH\_INH\_OBS\_VE. An additional literal condition allows access to another currency.

@MappingRole: true
define role demo\_cds\_role\_inh\_obs\_ve {
  grant select on demo\_cds\_auth\_inh\_obs\_ve
               inherit demo\_cds\_role\_lit\_pfcg\_ve or currcode = 'USD'; }

The language element INHERIT inherits the access conditions of the existing role and combines them with the additional condition. Expressed explicitly, the resulting access condition looks like this:

... where (carrid) =
       aspect pfcg\_auth (s\_carrid, carrid, actvt='03') and
              currcode = 'EUR' or
              currcode = 'USD' ...