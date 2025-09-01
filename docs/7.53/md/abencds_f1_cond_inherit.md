  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_conditions.htm) → 

ABAP CDS - DEFINE ROLE, inherit\_condition

Syntax

... *{* INHERIT parent\_role FOR GRANT SELECT ON cds\_entity *}*
  *|* *{* INHERITING CONDITIONS FROM cds\_entity
       *\[*REPLACING {PFCG\_FILTER *\[*OBJECT auth\_object*\]*
                                FIELD auth\_field VALUE old WITH new*\[*,
                   PFCG\_FILTER ...*\]*} *\]* *}* ...

Variants:

[1\. ... INHERIT parent\_role FOR GRANT SELECT ON cds\_entity](#!ABAP_VARIANT_1@1@)
[2\. ... INHERITING CONDITIONS FROM cds\_entity *\[*REPLACING ... *\]*](#!ABAP_VARIANT_2@2@)

Effect

Inheritance condition as part of an [access condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_glosry.htm "Glossary Entry"). One variant inherits the access conditions from a different CDS role and one variant inherits the access conditions from a CDS entity.

Notes

-   Multiple inheritance conditions can be specified within a single access condition and these can be combined with [literal conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_literal.htm), [PFCG conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg.htm), and [user conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_user.htm).

-   The inherited access conditions are parenthesized implicitly. It is not necessary to set parentheses explicitly.

-   An inheritance conditions cannot be negated using [NOT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_cond_expr.htm).
    

Variant 1

... INHERIT parent\_role FOR GRANT SELECT ON cds\_entity

Effect

This variant of an inheritance condition applies all access conditions specified after the [access rule](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaccess_rule_glosry.htm "Glossary Entry") FOR GRANT SELECT ON cds\_entity from an existing CDS role parent\_role. If the role parent\_role has multiple access rules for the same CDS entity cds\_entity, they are inherited using conditions joined by a logical "or".

The inherited access conditions inherited from parent\_role must match the current CDS entity. [Full access rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_grant_rule.htm) cannot be inherited.

Notes

-   This variant of inherited access rules is used to apply the access conditions for CDS entities that are used as data sources in the current CDS entity.

-   It is still being established whether the current CDS entity contains the CDS entity cds\_entity as a data source for which the inherited access conditions are defined in the role parent\_role.

-   Any changes to that CDS entity cds\_entity for which the inherited access conditions are defined in the role parent\_role can produce errors in the inheriting roles.

-   Unlike the obsolete [inherited access rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_inherited_rule.htm), the existing role parent\_role can have multiple access rules. The addition FOR GRANT SELECT ON cds\_entity selects the access conditions to inherit.

Example

The following CDS view uses the CDS view DEMO\_CDS\_AUTH\_LIT\_PFCG from the example for [conditional access rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_cond_rule.htm) as the data source:

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

... INHERITING CONDITIONS FROM cds\_entity *\[*REPLACING ... *\]*

Addition:

[... REPLACING {PFCG\_FILTER ...}](#!ABAP_ONE_ADD@1@)

Effect

From a CDS entity cds\_entity, this variant of an inheritance condition inherits the access roles defined for it using CDS roles and inserts them at the location of the inheritance condition. This joins the access rules of multiple CDS using a logical "or". If a CDS defines multiple access rules for cds\_entity, these are also joined using a logical "or" when they are inherited.

The inherited access conditions must match the CDS entity for which the current access rule is defined.

-   If an inherited access condition does not match the current CDS entity, for example because the wrong field or path is specified, all access rules of the parent CDS role are ignored.

-   The access conditions of at least one parent CDS role must match. If it is not possible to inherit from any CDS role, the current CDS role cannot be activated.

If no CDS role is defined for the parent CDS entity cds\_entity, the inheritance conditions is applied like an access condition that is always true.

Notes

-   This variant of inherited access rules is designed to inherit access conditions from other CDS entities regardless of whether a CDS role is already defined for them or not.

-   If this variant of an inheritance condition is the only access condition of an access rule and no CDS role is defined for the CDS entity cds\_entity, it is applied like a [full access rule](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_grant_rule.htm).

-   An annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_view_entity_annotations.htm) in the source code of the parent CDS entity cds\_entity is ignored by INHERITING CONDITIONS. The access rules are passed to the current CDS role even if the value #NOT\_ALLOWED is specified.
    

Addition

... REPLACING {PFCG\_FILTER *\[*OBJECT auth\_object*\]*
                            FIELD auth\_field VALUE 'old' WITH 'new'*\[*,
               PFCG\_FILTER ...*\]*}

Effect

The optional addition REPLACING of INHERITING CONDITIONS can be used to replace the values assigned to the optional authorization fields in inherited [PFCG conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg.htm):

-   Curly brackets { } can enclose a comma-separated list of replacements, each of which is prefixed by PFCG\_FILTER.

-   The optional [authorization object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_object_glosry.htm "Glossary Entry") auth\_object to which the replacement applies can be specified after OBJECT. If no authorization object is specified after OBJECT, the values are replaced for all optional authorization fields auth\_field that are specified in the inherited access condition.

-   FIELD must be followed by the name of the authorization field auth\_field for which the value is replaced, as long as this field is specified as an optional authorization field in the inherited [PFCG condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg.htm).

-   VALUE is followed by the replaced value and WITH is followed by a the new value as a literal in quotation marks.

If multiple replacements are specified, they are made in sequence with later replacements being applied to the results of preceding replacements. If a replacement does not match the inherited access rule (because the authorization object or authorization object specified here does not exist), no replacements are made and a syntax check warning occurs. This does not happen if the inherited access rule is a [full access rule](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_grant_rule.htm).

Notes

-   The replacements are made as literal replacements. No semantic checks take place.

-   To swap values, three replacements must be made. First, the first value is set to a temporary helper value that must be different from the existing values. This helper value must be replaced again after the second value is replaced. The helper value can have no more than 40 characters.

Example

The following CDS view access the database table SCARR directly.

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

This view is assigned the following CDS role, which applies the access rules for the CDS view DEMO\_CDS\_AUTH\_LIT\_PFCG from the example for [conditional access rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_cond_rule.htm), which themselves are defined in the role DEMO\_CDS\_ROLE\_LIT\_PFCG.

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