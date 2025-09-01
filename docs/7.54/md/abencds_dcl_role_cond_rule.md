---
title: "Syntax"
description: |
  GRANT SELECT ON cds_entity COMBINATION MODE OR  COMBINATION MODE AND  REDEFINITION WHERE cond_expr(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_expr.htm); Effect Conditional access rule in the statement DEFINE ROLE(https://help.sap.com/doc/abap
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_rule.htm"
abapFile: "abencds_dcl_role_cond_rule.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abencds", "dcl", "role", "cond", "rule"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, access\_rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_rules.htm) → 

ABAP CDS - DEFINE ROLE, conditional\_rule

Syntax

GRANT SELECT ON cds\_entity
    *\[*COMBINATION MODE OR *|* COMBINATION MODE AND *|* REDEFINITION*\]*
    WHERE [cond\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_expr.htm);

Effect

Conditional access rule in the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_role.htm) of the [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A conditional access rule GRANT SELECT ON with the addition WHERE restricts access to a CDS entity cds\_entity using [access conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_expr.htm).

A single CDS entity can be specified in multiple access rules of a CDS role and multiple CDS roles can contain access rules for a single CDS entity.

If a CDS entity is specified in multiple access rules of a CDS role or in multiple CDS roles, the resulting access conditions are joined using the method specified by the addition COMBINATION MODE.

Addition 1

... WHERE

A WHERE clause is used to define an [access condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_expr.htm) for the CDS entity cds\_entity. When a CDS entity is accessed using ABAP SQL, and an access rule is configured for this entity in a role, the access conditions are evaluated implicitly. This means their selection is restricted accordingly and hence any [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) reads use a logical "and" to add the access condition to the select condition of the statement passed to the database by the database interface.

Addition 2

... COMBINATION MODE AND*|*OR

The optional addition COMBINATION MODE AND*|*OR can be used to define how the access conditions of multiple access rules for the same CDS entity cds\_entity are combined. This addition can be applied regardless of whether other access rules already exist for the CDS entity.

COMBINATION MODE OR is used to join the access conditions using the logical operator "or". If created, these access rules make the restrictions less strong.

COMBINATION MODE AND combines the current access rule with the logical operator "and” and the other access rules. This means the restrictions are made stronger.

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

Note

No [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry") can be specified for cds\_entity.

Example

The following CDS role defines an access condition for the CDS view demo\_cds\_auth\_lit\_pfcg in an access rule. Both a [PFCG condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_pfcg.htm) for the [authorization object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_CARRID and a [literal condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_cond_literal.htm) for the currency field are specified.

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

The program DEMO\_CDS\_AUTH\_LIT\_PFCG uses [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) to access the view. CDS access control limits selections to that data for which the current user has an authorization (in the classic role editor in transaction PFCG) and that meets the literal condition.

Continue
[ABAP CDS - DEFINE ROLE, cond\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_expr.htm)