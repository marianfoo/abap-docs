---
title: "Syntax"
description: |
  GRANT SELECT ON cds_entity WITH OPTIONAL ELEMENTS ( element1 DEFAULT   TRUE  FALSE , ...  )  COMBINATION MODE OR  COMBINATION MODE AND  REDEFINITION WHERE cds_cond(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_expr.htm); Addition
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm"
abapFile: "abencds_dcl_role_cond_rule.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abencds", "dcl", "role", "cond", "rule"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, access\_rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20conditional_rule%2C%20ABENCDS_DCL_ROLE_COND_RULE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

CDS DCL - DEFINE ROLE, conditional\_rule

Syntax

GRANT SELECT ON cds\_entity
     *\[*WITH OPTIONAL ELEMENTS ( element1 DEFAULT  { TRUE *|* FALSE }, ...  ) *\]*
     *\[*COMBINATION MODE OR *|* COMBINATION MODE AND *|* REDEFINITION*\]*
      WHERE [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_expr.htm);

Additions:

[1\. ... WITH OPTIONAL ELEMENTS](#!ABAP_ADDITION_1@1@)
[2\. ... COMBINATION MODE AND*|*OR](#!ABAP_ADDITION_2@2@)
[3\. ... REDEFINITION](#!ABAP_ADDITION_3@3@)
[4\. ....WHERE](#!ABAP_ADDITION_4@4@)

Effect

Conditional access rule in the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) of the [CDS DCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A conditional access rule GRANT SELECT ON with the addition WHERE restricts access to a CDS entity cds\_entity using [access conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_expr.htm).

A single CDS entity can be specified in multiple access rules of a CDS role and multiple CDS roles can contain access rules for a single CDS entity.

If a CDS entity is specified in multiple access rules of a CDS role or in multiple CDS roles, the resulting access conditions are combined using the method specified by the addition COMBINATION MODE.

Hint

No [CDS abstract entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") or [CDS custom entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") can be specified for cds\_entity.

Addition 1   

... WITH OPTIONAL ELEMENTS ...

Effect

When you use condition inheritance to apply the access conditions of a CDS entity to another CDS entity, subsequent changes to the inheritance source conditions may invalidate the inheritance target because newly introduced elements are not present.

By declaring elements of an access control as optional you specify that these elements may be missing in inheritance targets of the access conditions using those elements.

The syntax check of the inheriting access controls will then report a warning instead of an error and at runtime, conditions using those elements are processed according to the declared default value (specific details are provided in the documentation of the respective conditions).

Hints

-   Optionality can only be declared for a directly specified field or the first association of a path expression. In the latter case, all path expressions starting with this association are considered optional and are handled with the default value when this association does not exist at runtime. However, when the association exists but any of the following path components is missing, this is considered an error and results in a syntax error of the inheriting access control and potential runtime error at entity access.
-   In the access control where the optionality is declared, the element must exist. It is not possible to create access controls for non-existing elements.
-   Optionality can get lost in condition inheritance by application of certain replacement steps. This is documented in the respective steps.
-   Optionality is only applied to left side CDS elements which are written in the current access control. It does not apply to left side CDS elements which are inherited from other access controls.
-   Optionality shall bridge a short time-gap between the modification of access conditions acting as inheritance source and the necessary adoptions of CDS entities protected by inheriting access controls. It is not recommended that it used as a permanent constituent of an access control design.
-   The default value must be chosen carefully. Secure by default implies using DEFAULT FALSE, by using DEFAULT TRUE you declare that it is temporarily acceptable that access control may ignore this element. This situation may be on hand when an established authorization concept is refined by additional fields.
-   Optional elements cannot be used inside of NOT conditions, to avoid that a secure DEFAULT FALSE is accidentally flipped to the Boolean predicate TRUE.

Addition 2   

... COMBINATION MODE AND*|*OR

Effect

The optional addition COMBINATION MODE AND*|*OR can be used to define how the access conditions of multiple access rules for the same CDS entity cds\_entity are combined. This addition can be applied regardless of whether other access rules already exist for the CDS entity.

COMBINATION MODE OR is used to combine the access conditions using the logical operator or. If created, these access rules make the restrictions less strong.

COMBINATION MODE AND combines the current access rule with the logical operator and and the other access rules. This means the restrictions are made stronger.

If multiple access rules with the combination methods AND (cond\_and\_1, cond\_and\_2, ...), and OR (cond\_or\_1, cond\_or\_2, ...) exist, the following expression produces the full condition:

( cond\_or\_1 OR cond\_or\_2 OR ... ) AND cond\_and\_1 AND cond\_and\_2 AND ...

A full access rule overrides the construction above, however, and produces a full access rule as the end result, even if there are rules with the mode COMBINATION MODE AND.

The following applies to the addition COMBINATION MODE OR:

-   The addition COMBINATION MODE OR does not need to be specified explicitly. If there are multiple access rules for a CDS entity, they are combined implicitly using the logical operator or. For reasons of consistency, however, the addition COMBINATION MODE OR is recommended.
-   Any existing access controls without the explicit addition COMBINATION MODE OR are valid.
-   In roles with the [SWITCHABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) addition, the COMBINATION MODE addition is mandatory, including for the mode OR.

Addition 3   

... REDEFINITION

Effect

The optional addition REDEFINITION is used to indicate that the access rule in question is the only existing access rule for the CDS entity and any other access rules are ignored. The addition makes it possible for customers and partners to replace all access rules delivered by SAP for CDS entity with their own access rules without making modifications. The language element INHERITING CONDITIONS FROM SUPER can, however, be used to incorporate conditions delivered by SAP in customer or partner access rules.

The following applies to the addition REDEFINITION:

-   This addition can be used in customer systems only. SAP does not deliver access rules of this type.
-   The addition can also be applied if there are no other access rules for an entity. It ensures that the conditions defined here are not disabled by any later access rules.
-   The addition can be used for a maximum of one access rule for a CDS entity. If used more than once, an activation error or import error occurs.
-   This addition also disables existing full access rules for a CDS entity. SAP does not deliver full access rules, which means that this statement applies only to customer full access rules that are themselves overridden by customer REDEFINITION rules.
-   In roles with the [SWITCHABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) addition, REDEFINITION is not allowed.

Addition 4   

... WHERE

Effect

A WHERE clause is used to define an [access condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_expr.htm) for the CDS entity cds\_entity. When a CDS entity is accessed using ABAP SQL, and an access rule is configured for this entity in a role, the access conditions are evaluated implicitly. This means their selection is restricted accordingly and hence any [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) reads use a logical and to add the access condition to the select condition of the statement passed to the database by the database interface.

Example

The following CDS role DEMO\_CDS\_ROLE\_LIT\_PFCG\_VE defines an access condition for the CDS view entity demo\_cds\_authority\_lit\_pfcg\_ve in an access rule. Both a [PFCG condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_pfcg.htm) for the [authorization object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_CARRID and a [literal condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_literal.htm) for the currency field are specified.

@MappingRole: true
define role demo\_cds\_role\_lit\_pfcg\_ve {
  grant select on demo\_cds\_authority\_lit\_pfcg\_ve
  where (carrid) =
  aspect pfcg\_auth (s\_carrid, carrid, actvt='03') and
         currcode = 'EUR'; }

The CDS view entity is as follows:

@AccessControl.authorizationCheck: #CHECK
define view entity DEMO\_CDS\_AUTHORITY\_LIT\_PFCG\_VE
  as select from
    scarr
    {
      key carrid,
          carrname,
          currcode,
          url
    }

The class CL\_DEMO\_CDS\_AUTH\_LIT\_PFCG\_VE uses [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) to access the view entity. CDS access control restricts the selections to data for which the current user has authorization according to classic role maintenance (transaction PFCG) and that meets the literal condition.

Continue
[CDS DCL - DEFINE ROLE, cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_expr.htm)