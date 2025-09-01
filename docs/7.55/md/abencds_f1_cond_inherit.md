  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

CDS DCL - DEFINE ROLE, inherit\_condition

Syntax

... *{* INHERIT parent\_role FOR GRANT SELECT ON cds\_entity *}*
  *|* *{* INHERITING CONDITIONS FROM
       *{* ENTITY cds\_entity *\[*DEFAULT TRUE*|*FALSE*\]* *}* *\[*REPLACING ...*\]*
       *|* SUPER
    *}* ...

Variants:

[1\. ... INHERIT parent\_role FOR GRANT SELECT ON cds\_entity](#!ABAP_VARIANT_1@1@)
[2\. ... INHERITING CONDITIONS FROM ENTITY cds\_entity ...](#!ABAP_VARIANT_2@2@)
[3\. ... INHERITING CONDITIONS FROM SUPER](#!ABAP_VARIANT_3@3@)

Effect

Inheritance condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cds\_cond](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). There are three variants:

-   The variant INHERIT FOR GRANT applies the access conditions from a different CDS role.

-   The variant INHERITING CONDITIONS FROM ENTITY applies the access conditions from a CDS entity.

-   The variant INHERITING CONDITIONS FROM SUPER applies the access conditions from roles that are redefined by the current role.

Hints

-   Multiple inheritance conditions can be specified within a single access condition and these can be combined with [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)), [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), and [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)).

-   The inherited access conditions are parenthesized implicitly. It is not necessary to set parentheses explicitly.

-   An inheritance conditions cannot be negated using [NOT](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)).
    

Variant 1

... INHERIT parent\_role FOR GRANT SELECT ON cds\_entity

Effect

This variant of an inheritance condition copies the access rules declared in the CDS role parent\_role for the CDS cds\_entity. If the role parent\_role has multiple access rules for the same CDS entity cds\_entity, they are inherited using conditions joined by a logical "or".

The inherited access conditions inherited from parent\_role must match the current CDS entity. [Full access rules](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) cannot be inherited.

Hints

-   This variant of inherited access rules is used to apply the access conditions for CDS entities that are used as data sources in the current CDS entity.

-   It is still being established whether the current CDS entity contains the CDS entity cds\_entity as a data source for which the inherited access conditions are defined in the role parent\_role.

-   Any changes to that CDS entity cds\_entity for which the inherited access conditions are defined in the role parent\_role can produce errors in the inheriting roles.

-   Unlike the obsolete [inherited access rules](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)), the existing role parent\_role can have multiple access rules. The addition FOR GRANT SELECT ON cds\_entity selects the access conditions to inherit.

Example

The following CDS view uses the CDS view DEMO\_CDS\_AUTH\_LIT\_PFCG from the example for [conditional access rules](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) as the data source:

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

Additions:

[1\. ... DEFAULT TRUE*|*FALSE](#!ABAP_ADDITION_1@1@)
[2\. ... REPLACING { ... }](#!ABAP_ADDITION_2@2@)

Effect

From a CDS entity cds\_entity, this variant of an inheritance condition inherits the access roles defined for it using CDS roles and inserts them at the location of the inheritance condition. This joins the access rules of multiple CDS roles using the same algorithm which also applies to access to the CDS entity cds\_entity, that is, COMBINATION MODE and REDEFINITION are respected. If the CDS entity does not have any access conditions yet, the addition DEFAULT must be specified. If not, a syntax error occurs.

The inherited access conditions must match the CDS entity for which the current access rule is defined.

-   If an inherited access condition does not match the current CDS entity, for example because the wrong field or path is specified, all access rules of the parent CDS role are ignored.

-   If there is no [full access rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) for the entity in this case, the current CDS role cannot be activated.

-   If there is a [full access rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) for the entity, the CDS role can be activated but a syntax check warning occurs.

Hints

-   Unlike in the previous role-based inheritance, this variant also allows the inheritance of a [full access rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) and replaces the expression INHERITING CONDITIONS ... with the Boolean predicate TRUE.

-   An annotation@AccessControl.authorizationCheck in the source code of the parent CDS entity cds\_entity is ignored by INHERITING CONDITIONS. The access rules are passed to the current CDS role even if the value #NOT\_ALLOWED is specified.
    

Addition 1

... DEFAULT TRUE*|*FALSE

Effect

If the source CDS entity does not have a CDS role, this addition replaces the expression INHERITING CONDITIONS ... with the Boolean predicate [TRUE](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) or [FALSE](javascript:call_link\('abencds_dcl_role_conditions.htm'\)).

Hints

-   If specified for the variant INHERITING CONDITIONS, DEFAULT TRUE is designed to inherit access conditions from other CDS entities regardless of whether a CDS role is already defined for them or not.

-   If the variant INHERITING CONDITIONS is the only access condition of an access rule and no CDS role is defined for the CDS entity cds\_entity, the rule is applied like a [full access rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)) if DEFAULT TRUE is specified and like a rule that generally blocks access if DEFAULT FALSE is specified.
    

Addition 2

... REPLACING {       *\[*ELEMENT source\_field WITH target\_field*\]**\[*, ELEMENT ...*\]*
      *\[*, CONDITIONS ON ANY OF (element1*\[*, element2 ...*\]*)
               WITH (TRUE*|*FALSE*|*VOID)*\]**\[*, CONDITIONS ...*\]*
     *\[*, IF ALL CONDITIONS VOID THEN (TRUE*|*FALSE*|*VOID)*\]*
      *\[*, ROOT WITH path\_expr *\[*INCLUDING PARAMETERS*\]**\]*
      *\[*, PARAMETERS WITH (parameterbindings)*\]*
      *\[*, PFCG\_FILTER *\[*OBJECT auth\_object*\]*
               FIELD auth\_field VALUE old WITH new*\[*, PFCG\_FILTER ...*\]**\]*
    }

Effect

The optional addition REPLACING of INHERITING CONDITIONS can be used to modify the inherited conditions. A comma-separated list of replacements can be specified in the curly brackets { }. At least one replacement must be specified.

-   Any number of ELEMENT operators can be used to transform conditions that use fields of the inherited entity to a different field of the inheriting entity.

-   Any number of CONDITIONS ON ANY OF operators can be used to replace conditions of the inherited roles that reference at least one of the specified elements with one of the special condition types TRUE, FALSE, or VOID. If this operator is used, the inherited roles themselves cannot use inheritance (either using INHERIT or INHERIT CONDITIONS FROM ENTITY*|*SUPER).

-   The addition IF ALL CONDITIONS VOID THEN can be applied only if at least one CONDITIONS ON ANY OF ... WITH VOID exists. It specifies the behavior when all conditions of the inherited roles are mapped to a VOID operator by the replacement operator. This is an error situation that can be produced by changes to the inherited role in an inheriting role and the use of this addition in the inheriting role hence provides protection against future errors.

-   In the inherited conditions, ROOT WITH prefixes all elements that designate the CDS entity cds\_entity with the SQL path expression [path\_expr](javascript:call_link\('abensql_path_expression_glosry.htm'\) "Glossary Entry"). The path expression can have one or more levels and can be specified in the same way as in the CDS entity.

-   The addition INCLUDING PARAMETERS of the statement ROOT WITH can be used to apply parameters filled in the specified replacement path in the inherited conditions too. If the statement ROOT WITH is not used, the same function is provided by the operator PARAMETERS WITH.

-   PFCG\_FILTER is used to replace the values assigned to the optional authorization fields in inherited [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)):

-   The optional [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_object to which the replacement applies can be specified after OBJECT. If no authorization object is specified after OBJECT, the values are replaced for all optional authorization fields auth\_field that are specified in the inherited access condition.

-   FIELD must be followed by the name of the authorization field auth\_field for which the value is replaced, as long as this field is specified as an optional authorization field in the inherited [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)).

-   VALUE is followed by the replaced value and WITH is followed by a the new value as a literal in quotation marks.

If multiple replacements are specified, they are made in sequence with later replacements being applied to the results of preceding replacements. If a replacement does not match the inherited access rule (because the authorization object or authorization object specified here does not exist), no replacements are made and a syntax check warning occurs. This does not happen if the inherited access rule is a [full access rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)).

Hints

-   Notes on ELEMENT

-   The operator ELEMENT is only available for transaction projection view entities.

-   This operator can currently replace only fields and no path expressions.

-   The target field must be specified as an alias of the source field in the transactional view entity.

-   Notes on CONDITIONS ON ANY OF

-   An element of a CONDITIONS ON ANY OF can be an incomplete path expression that does not end with a field. In this case, all fields are affected whose path expression starts with this section. Example: toX includes both toX.A and toX.toY.Z.

-   The statement CONDITIONS ON ANY OF can be used more than once. In this case, the set of elements of the element lists of the different CONDITIONS ON ANY OF operators must be disjoint. All CDS elements in the set of the inherited conditions can be covered by a maximum of one of these operators.

-   Path filters and parameters cannot be specified in the statement CONDITIONS ON ANY OF. Condition elements match irrespective of their actual parameters and filters.

-   The fields and path elements removed by the REPLACING operator must exist in the inheriting CDS entity. This is not, therefore, a suitable way of suppressing nonexistent CDS elements in the future. It is, however, possible to name fields and paths that are not used (or not yet used) in inherited CDS access control. When specified, however, a non-used element produces a syntax warning.

-   Notes on ROOT WITH

-   A path expression prefix makes it possible to protect a CDS entity with the access rules of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of one of its [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

-   Notes on PFCG\_FILTER

-   Specifying nonexistent authorization objects or authorization fields can also produce a syntax error.

-   The values are replaced with literal replacements. A value is checked to verify whether it matches an authorization field of an authorization object but any non-matching objects only produce a warning at most and do not stop the activation from taking place.

-   To swap values, three replacements must be made. First, the first value is set to a temporary helper value that must be different from the existing values. This helper value must be replaced again after the second value is replaced. The helper value can have no more than 40 characters.
    

Variant 3

... INHERITING CONDITIONS FROM SUPER

Effect

This variant is possible only if the access rule has the addition [REDEFINITION](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) and only if the inherited CDS entity has access controls.

Instead of this condition, those conditions are used that would have been applied by the access controls disabled by REDEFINITION.

Example

The following CDS view access the DDIC database table SCARR directly.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_INHTING'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_authority\_inheriting
  as select from
    scarr
    {
      key carrid,
          carrname,
          currcode
    };

This view is assigned the following CDS role, which applies the access rules for the CDS view DEMO\_CDS\_AUTH\_LIT\_PFCG from the example for [conditional access rules](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)), which themselves are defined in the role DEMO\_CDS\_ROLE\_LIT\_PFCG.

@mappingrole: true  
define role demo\_cds\_role\_inheriting {  
  grant  
    select  
      on  
        demo\_cds\_authority\_inheriting  
          where  
           inheriting conditions from entity demo\_cds\_auth\_lit\_pfcg
             replacing { pfcg\_filter object s\_carrid  
                                     field actvt value '03' with '02' }; }

REPLACING is used to replace the value '03' inherited from the role DEMO\_CDS\_ROLE\_LIT\_PFCG for the authorization field ACTVT of the authorization object S\_CARRID with the value '02'. The resulting access rule is:

grant select on demo\_cds\_authority\_inheriting
   where (carrid) =
   aspect pfcg\_auth (s\_carrid, carrid, actvt='02') and
          currcode = 'EUR';

This means that users who have display authorization for the view DEMO\_CDS\_AUTH\_LIT\_PFCG are granted change authorization for the view DEMO\_CDS\_AUTHORITY\_INHERITING (which does not make any sense for a CDS view).