  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, access\_rules](javascript:call_link\('abencds_dcl_role_rules.htm'\)) → 

CDS DCL - DEFINE ROLE, conditional\_rule

Syntax

GRANT SELECT ON cds\_entity
    *\[*COMBINATION MODE OR *|* COMBINATION MODE AND *|* REDEFINITION*\]*
    WHERE [cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\));

Effect

Conditional access rule in the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) of the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). A conditional access rule GRANT SELECT ON with the addition WHERE restricts access to a CDS entity cds\_entity using [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)).

A single CDS entity can be specified in multiple access rules of a CDS role and multiple CDS roles can contain access rules for a single CDS entity.

If a CDS entity is specified in multiple access rules of a CDS role or in multiple CDS roles, the resulting access conditions are joined using the method specified by the addition COMBINATION MODE.

Addition 1

... WHERE

A WHERE clause is used to define an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) for the CDS entity cds\_entity. When a CDS entity is accessed using ABAP SQL, and an access rule is configured for this entity in a role, the access conditions are evaluated implicitly. This means their selection is restricted accordingly and hence any [SELECT](javascript:call_link\('abapselect.htm'\)) reads use a logical "and" to add the access condition to the select condition of the statement passed to the database by the database interface.

Addition 2

... COMBINATION MODE AND*|*OR

The optional addition COMBINATION MODE AND*|*OR can be used to define how the access conditions of multiple access rules for the same CDS entity cds\_entity are combined. This addition can be applied regardless of whether other access rules already exist for the CDS entity.

COMBINATION MODE OR is used to join the access conditions using the logical operator "or". If created, these access rules make the restrictions less strong.

COMBINATION MODE AND combines the current access rule with the logical operator "and" and the other access rules. This means the restrictions are made stronger.

If multiple access rules with the combination methods "AND" (cond\_and\_1, cond\_and\_2, ...), and "OR" (cond\_or\_1, cond\_or\_2, ...) exist, the following expression produces the full condition:

( cond\_or\_1 OR cond\_or\_2 OR ... ) AND cond\_and\_1 AND cond\_and\_2 AND ...

A full access rule overrides the construction above, however, and produces a full access rule as the end result, even if there are rules with the mode COMBINATION MODE AND.

The following applies to the addition COMBINATION MODE OR:

-   The addition COMBINATION MODE OR does not need to be specified explicitly. If there are multiple access rules for a CDS entity, they are joined implicitly using the logical operator "or". For reasons of consistency, however, the addition COMBINATION MODE OR is recommended.

-   Any existing access controls without the explicit addition COMBINATION MODE OR are valid.
    

Addition 3

... REDEFINITION

The optional addition REDEFINITION is used to indicate that the access rule in question is the only existing access rule for the CDS entity and any other access rules are ignored. The addition makes it possible for customers and partners to replace all access rules delivered by SAP for CDS entity with their own access rules without making modifications. The language element INHERITING CONDITIONS FROM SUPER can, however, be used to incorporate conditions delivered by SAP in customer or partner access rules.

The following applies to the addition REDEFINITION:

-   This addition can be used in customer systems only. SAP does not deliver access rules of this type.

-   The addition can also be applied if there are no other access rules for an entity. It ensures that the conditions defined here are not disabled by any later access rules.

-   The addition can be used for a maximum of one access rule for a CDS entity. If used more than once, an activation error or import error occurs.

-   This addition also disables existing full access rules for a CDS entity. SAP does not deliver full access rules, which means that this statement applies only to customer full access rules that are themselves overridden by customer REDEFINITION rules.

Hint

No [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") can be specified for cds\_entity.

Example

The following CDS role DEMO\_CDS\_ROLE\_LIT\_PFCG defines an access condition for the CDS view demo\_cds\_auth\_lit\_pfcg in an access rule. Both a [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) for the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_CARRID and a [literal condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) for the currency field are specified.

@MappingRole: true
define role demo\_cds\_role\_lit\_pfcg {
  grant select on demo\_cds\_auth\_lit\_pfcg
  where (carrid) =
  aspect pfcg\_auth (s\_carrid, carrid, actvt='03') and
         currcode = 'EUR'; }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_LITPFCG'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_lit\_pfcg
  as select from
    scarr
    {
      key carrid,
          carrname,
          currcode,
          url
    };

The program DEMO\_CDS\_AUTH\_LIT\_PFCG uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the view. CDS access control restricts the selections to data for which the current user has authorization according to the classic role maintenance (transaction transaction PFCG) and that meets the literal condition.

Continue
[CDS DCL - DEFINE ROLE, cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\))