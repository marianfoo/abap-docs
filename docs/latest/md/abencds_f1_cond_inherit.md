  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20inherit_condition%2C%20ABENCDS_F1_COND_INHERIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

CDS DCL - DEFINE ROLE, inherit\_condition

Syntax

... *{* *{* INHERIT parent\_role FOR GRANT SELECT ON cds\_entity *}*
  *|* *{* INHERITING CONDITIONS FROM
       *{* ENTITY cds\_entity *\[*DEFAULT TRUE*|*FALSE*\]* *}*
       *|* SUPER *}* *}*
    *\[* [replacing](javascript:call_link\('abencds_f1_cond_inherit_replacing.htm'\)) *\]* ...

Variants:

[1\. ... INHERIT parent\_role FOR GRANT SELECT ON cds\_entity](#!ABAP_VARIANT_1@1@)
[2\. ... INHERITING CONDITIONS FROM ENTITY cds\_entity ...](#!ABAP_VARIANT_2@2@)
[3\. ... INHERITING CONDITIONS FROM SUPER](#!ABAP_VARIANT_3@3@)

Effect

Inheritance condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). There are three variants:

-   The variant INHERIT FOR GRANT applies the access conditions from a different CDS role.
-   The variant INHERITING CONDITIONS FROM ENTITY applies the access conditions from a CDS entity.
-   The variant INHERITING CONDITIONS FROM SUPER applies the access conditions from roles that are redefined by the current role.

In all variants, the inherited conditions can be altered by [replacing](javascript:call_link\('abencds_f1_cond_inherit_replacing.htm'\)) before they are applied to the CDS entity of the current access control.

Hints

-   Multiple inheritance conditions can be specified within a single access condition and these can be combined with [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)), [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), and [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)).
-   The inherited access conditions are parenthesized implicitly. It is not necessary to set parentheses explicitly.
-   An inheritance condition cannot be negated using [NOT](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)).
-   Full access rules can be inherited and are represented in the resulting conditions as the Boolean predicate TRUE.
-   Using inheritance can cause cycles which result in syntax errors.
-   Both inheritance flavors respect access rules that are declared in the same access role as the inheritance statement. The access rule which contains the inheritance statement is excluded. This feature allows the demonstration of inheritance within a single access control document for test purposes.

Variant 1   

... INHERIT parent\_role FOR GRANT SELECT ON cds\_entity

Effect

This variant of an inheritance condition copies the access rules declared in the CDS role parent\_role for the CDS entity cds\_entity. If the role parent\_role has multiple access rules for the same CDS entity cds\_entity, they are inherited using conditions joined by a logical or.

The inherited access conditions inherited from parent\_role must match the current CDS entity.

Hints

-   This variant of inherited access rules is used to apply the access conditions for CDS entities that are used as data sources in the current CDS entity.
-   It is still being established whether the current CDS entity contains the CDS entity cds\_entity as a data source for which the inherited access conditions are defined in the role parent\_role.
-   Any changes to that CDS entity cds\_entity for which the inherited access conditions are defined in the role parent\_role can produce errors in the inheriting roles.
-   Unlike the obsolete [inherited access rules](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)), the existing role parent\_role can have multiple access rules. The addition FOR GRANT SELECT ON cds\_entity selects the access conditions to inherit.

Example

The following CDS view entity uses the CDS view entity DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE from the example for [conditional access rules](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) as the data source:

@AccessControl.authorizationCheck: #CHECK
define view entity DEMO\_CDS\_AUTH\_INHERITED\_VE
  as select from
    DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE
    {
      key carrid,
          carrname,
          currcode,
          url
    }

The view DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE is assigned to the CDS role DEMO\_CDS\_ROLE\_LIT\_PFCG\_VE. The access conditions for the CDS entity DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE of this role are inherited in the following CDS role and hence pass these conditions to the view DEMO\_CDS\_AUTH\_INHERITED\_VE. An additional literal condition allows access to another currency.

@MappingRole: true
define role DEMO\_CDS\_ROLE\_INHERITED\_VE {
  grant select on DEMO\_CDS\_AUTH\_INHERITED\_VE
          where
            inherit demo\_cds\_role\_lit\_pfcg\_ve
        for grant select on demo\_cds\_authority\_lit\_pfcg\_ve                
      or currcode = 'USD'; }

The language element INHERIT FOR GRANT SELECT ON inherits the access conditions of the existing role for the specified view and joins them with the additional condition. Expressed explicitly, the resulting access condition looks like this:

... where (carrid) =
       aspect pfcg\_auth (s\_carrid, carrid, actvt='03') and
              currcode = 'EUR' or
              currcode = 'USD' ...

Variant 2   

... INHERITING CONDITIONS FROM ENTITY cds\_entity *\[*DEFAULT TRUE*|*FALSE*\]* *\[*REPLACING ...*\]*

Addition:

[... DEFAULT TRUE*|*FALSE](#!ABAP_ONE_ADD@1@)

Effect

From a CDS entity cds\_entity, this variant of an inheritance condition inherits the access roles defined for it using CDS roles and inserts them at the location of the inheritance condition. This joins the access rules of multiple CDS roles using the same algorithm which also applies to access to the CDS entity cds\_entity, that is, COMBINATION MODE and REDEFINITION are respected.

If the CDS entity does not have any access conditions yet, a syntax warning occurs and the expression is replaced with the Boolean predicate TRUE. You can avoid this warning by the DEFAULT addition.

The inherited access conditions must match the CDS entity for which the current access rule is defined.

-   If an inherited access condition does not match the current CDS entity, for example because the wrong field or path is specified, all access rules of the parent CDS role are ignored.
    -   If there is no [full access rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) for the entity in this case, the current CDS role cannot be activated.
    -   If there is a [full access rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) for the entity, the CDS role can be activated but a syntax check warning occurs.

Hint

An annotation @AccessControl.authorizationCheck in the source code of the parent CDS entity cds\_entity is ignored by INHERITING CONDITIONS. The access rules are passed to the current CDS role even if the value #NOT\_ALLOWED is specified.

Addition   

... DEFAULT TRUE*|*FALSE

Effect

If the source CDS entity does not have a CDS role, this addition replaces the expression INHERITING CONDITIONS ... with the Boolean predicate [TRUE](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) or [FALSE](javascript:call_link\('abencds_dcl_role_conditions.htm'\)).

Hints

-   If specified for the variant INHERITING CONDITIONS, DEFAULT TRUE is designed to inherit access conditions from other CDS entities regardless of whether a CDS role is already defined for them or not.
-   If the variant INHERITING CONDITIONS is the only access condition of an access rule and no CDS role is defined for the CDS entity cds\_entity, the rule is applied like a [full access rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) if DEFAULT TRUE is specified and like a rule that generally blocks access if DEFAULT FALSE is specified.

Variant 3   

... INHERITING CONDITIONS FROM SUPER

Effect

This variant is possible only if the access rule has the addition [REDEFINITION](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) and only if the inherited CDS entity has access controls.

Instead of this condition, those conditions are used that would have been applied by the access controls disabled by REDEFINITION.

Continue
[CDS DCL - DEFINE ROLE, replacing](javascript:call_link\('abencds_f1_cond_inherit_replacing.htm'\))