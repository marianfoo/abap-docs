  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, access\_rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) → 

ABAP CDS - DEFINE ROLE, conditional\_rule

Syntax

GRANT SELECT ON cds\_entity WHERE [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm).

Effect

Conditional access rule in statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) of the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A conditional access rule GRANT SELECT ON with the addition WHERE restricts access to a CDS entity cds\_entity using [access conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm).

[CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") defined using [DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) and [CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") defined using [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_table_function.htm) can be specified for cds\_entity. A CDS entity can appear in multiple access rules of a CDS role and there can be multiple CDS roles that contain access rules for a CDS entity.

A WHERE clause is used to define an [access condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm) for the CDS entity cds\_entity. When a CDS entity is accessed using Open SQL, and an access rule is configured for this entity in a role, the access conditions are evaluated implicitly. This means their selection is restricted accordingly and hence any [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) reads use a logical “and” to add the access condition to the select condition of the statement passed to the database by the database interface.

If a CDS entity is specified in several access rules of a CDS role or in multiple CDS roles, the resulting access conditions are joined using a logical "or".

Example

The following CDS role defines an access condition in an access rule for the CDS view demo\_cds\_auth\_lit\_pfcg. Both a [PFCG condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_pfcg.htm) for the [authorization object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_CARRID and a [literal condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cond_literal.htm) for the currency field are specified.

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

The program DEMO\_CDS\_AUTH\_LIT\_PFCG uses [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) to access the view. CDS access control limits selections to that data for which the current user has an authorization (in the classic role editor in transaction PFCG) and that meets the literal condition.

Continue
[ABAP CDS - DEFINE ROLE, cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_expr.htm)