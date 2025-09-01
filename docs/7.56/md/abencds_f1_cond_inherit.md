  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_conditions.htm) → 

CDS DCL - DEFINE ROLE, inherit\_condition

Syntax

... *{* *{* INHERIT parent\_role FOR GRANT SELECT ON cds\_entity *}*
  *|* *{* INHERITING CONDITIONS FROM
       *{* ENTITY cds\_entity *\[*DEFAULT TRUE*|*FALSE*\]* *}*
       *|* SUPER *}* *}*
    *\[* [replacing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_inherit_replacing.htm) *\]* ...

Variants:

[1\. ... INHERIT parent\_role FOR GRANT SELECT ON cds\_entity](#!ABAP_VARIANT_1@1@)
[2\. ... INHERITING CONDITIONS FROM ENTITY cds\_entity ...](#!ABAP_VARIANT_2@2@)
[3\. ... INHERITING CONDITIONS FROM SUPER](#!ABAP_VARIANT_3@3@)

Effect

Inheritance condition as part of an [access condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_glosry.htm "Glossary Entry"). There are three variants:

-   The variant INHERIT FOR GRANT applies the access conditions from a different CDS role.
-   The variant INHERITING CONDITIONS FROM ENTITY applies the access conditions from a CDS entity.
-   The variant INHERITING CONDITIONS FROM SUPER applies the access conditions from roles that are redefined by the current role.

In all variants, the inherited conditions can be altered by [replacing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_inherit_replacing.htm) before they are applied to the CDS entity of the current access control.

Hints

-   Multiple inheritance conditions can be specified within a single access condition and these can be combined with [literal conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_literal.htm), [PFCG conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_pfcg.htm), and [user conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_user.htm).
-   The inherited access conditions are parenthesized implicitly. It is not necessary to set parentheses explicitly.
-   An inheritance condition cannot be negated using [NOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_expr.htm).
-   Full access rules can be inherited and are represented in the resulting conditions as the Boolean predicate TRUE.
-   Using inheritance can cause cycles which result in syntax errors.
-   Both inheritance flavors consider access rules that are declared in the same access role as the inheritance statement. The access rule which contains the inheritance statement is excluded. This feature allows the demonstration of inheritance within a single access control document for test purposes.

Variant 1   

... INHERIT parent\_role FOR GRANT SELECT ON cds\_entity

Effect

This variant of an inheritance condition copies the access rules declared in the CDS role parent\_role for the CDS entity cds\_entity. If the role parent\_role has multiple access rules for the same CDS entity cds\_entity, they are inherited using conditions joined by a logical "or".

The inherited access conditions inherited from parent\_role must match the current CDS entity.

Hints

-   This variant of inherited access rules is used to apply the access conditions for CDS entities that are used as data sources in the current CDS entity.
-   It is still being established whether the current CDS entity contains the CDS entity cds\_entity as a data source for which the inherited access conditions are defined in the role parent\_role.
-   Any changes to that CDS entity cds\_entity for which the inherited access conditions are defined in the role parent\_role can produce errors in the inheriting roles.
-   Unlike the obsolete [inherited access rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_inherited_rule.htm), the existing role parent\_role can have multiple access rules. The addition FOR GRANT SELECT ON cds\_entity selects the access conditions to inherit.

Example

The following CDS view uses the CDS view DEMO\_CDS\_AUTH\_LIT\_PFCG from the example for [conditional access rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_rule.htm) as the data source:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_INH'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_inherited
  as select from
    demo\_cds\_auth\_lit\_pfcg
    {
      key carrid,
          carrname,
          currcode,
          url
    };

The view DEMO\_CDS\_AUTH\_LIT\_PFCG is assigned to the CDS role DEMO\_CDS\_ROLE\_LIT\_PFCG. The access conditions for the CDS entity DEMO\_CDS\_AUTH\_LIT\_PFCG of this role are inherited in the following CDS role and hence pass these conditions to the view DEMO\_CDS\_AUTH\_INHERITED. An additional literal condition allows access to another currency.

@MappingRole: true
define role demo\_cds\_role\_inherited {
  grant select on demo\_cds\_auth\_inherited
    where
      inherit demo\_cds\_role\_lit\_pfcg
        for grant select on demo\_cds\_auth\_lit\_pfcg                
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
    -   If there is no [full access rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_grant_rule.htm) for the entity in this case, the current CDS role cannot be activated.
    -   If there is a [full access rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_grant_rule.htm) for the entity, the CDS role can be activated but a syntax check warning occurs.

Hint

An annotation @AccessControl.authorizationCheck in the source code of the parent CDS entity cds\_entity is ignored by INHERITING CONDITIONS. The access rules are passed to the current CDS role even if the value #NOT\_ALLOWED is specified.

Addition   

... DEFAULT TRUE*|*FALSE

Effect

If the source CDS entity does not have a CDS role, this addition replaces the expression INHERITING CONDITIONS ... with the Boolean predicate [TRUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_conditions.htm) or [FALSE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_conditions.htm).

Hints

-   If specified for the variant INHERITING CONDITIONS, DEFAULT TRUE is designed to inherit access conditions from other CDS entities regardless of whether a CDS role is already defined for them or not.
-   If the variant INHERITING CONDITIONS is the only access condition of an access rule and no CDS role is defined for the CDS entity cds\_entity, the rule is applied like a [full access rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_grant_rule.htm) if DEFAULT TRUE is specified and like a rule that generally blocks access if DEFAULT FALSE is specified.

Variant 3   

... INHERITING CONDITIONS FROM SUPER

Effect

This variant is possible only if the access rule has the addition [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_rule.htm) and only if the inherited CDS entity has access controls.

Instead of this condition, those conditions are used that would have been applied by the access controls disabled by REDEFINITION.

Continue
[CDS DCL - DEFINE ROLE, replacing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_inherit_replacing.htm)
[CDS DCL - DEFINE ROLE, replacement\_step](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_inherit_rpl_step.htm)