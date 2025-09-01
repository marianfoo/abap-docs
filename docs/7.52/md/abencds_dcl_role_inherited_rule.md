  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, access\_rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) → 

ABAP CDS - DEFINE ROLE, inherited\_rule

Syntax

GRANT SELECT ON cds\_entity INHERIT parent\_role *\[*AND*|*OR [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm)*\]* ...;

Effect

Inherited access rule in statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) of the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). An inherited access rule GRANT SELECT ON with the addition INHERIT inherits the access rules of an existing CDS role parent\_role for a CDS entity cds\_entity. If cds\_entity is specified, the same applies as for a [conditional access rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm).

As an option, rule-specific [access conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) can be added to the inherited access rule using AND or OR. A CDS role can only contain one inherited access rule, but can contain additional [conditional](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm) or [full access rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm). The existing CDS role parent\_role can only contain a single access rule for exactly one CDS entity, which itself can be an inherited access rule.

The inherited access conditions inherited from parent\_role must match the CDS entity cds\_entity.

Notes

-   Inherited access rules are used to inherit the access conditions of CDS entities that are used as data sources in the CDS entity cds\_entity.

-   There is currently no check to determine whether the CDS entity cds\_entity contains as a data source the CDS entity for which the role parent\_role is defined.

-   Changes to the CDS entity for which the role parent\_role is defined can lead to errors in the inheriting roles.

Example

The following CDS view uses the CDS view DEMO\_CDS\_AUTH\_LIT\_PFCG from the example for [conditional access rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm) as the data source:

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

The view DEMO\_CDS\_AUTH\_LIT\_PFCG is assigned to the CDS role DEMO\_CDS\_ROLE\_LIT\_PFCG. This role is inherited in the following CDS role and thus transfers its access rules to the DEMO\_CDS\_AUTH\_INHERITED view. An additional literal condition allows access to another currency.

@MappingRole: true
define role demo\_cds\_role\_inherited {
  grant select on demo\_cds\_auth\_inherited
               inherit demo\_cds\_role\_lit\_pfcg or currcode = 'USD'; }

The language element INHERIT inherits the access conditions of the existing role and combines them with the additional condition. Expressed explicitly, the resulting access condition looks like this:

... where (carrid) =
       aspect pfcg\_auth (s\_carrid, carrid, actvt='03') and
              currcode = 'EUR' or
              currcode = 'USD' ...