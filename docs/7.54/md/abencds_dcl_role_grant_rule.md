  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_role.htm) →  [ABAP CDS - DEFINE ROLE, access\_rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_rules.htm) → 

ABAP CDS - DEFINE ROLE, grant\_rule

Syntax

GRANT SELECT ON cds\_entity *\[*REDEFINITION*\]*;

Effect

Full access rule in the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A full access rule GRANT SELECT ON without the addition WHERE provides access to a CDS entity cds\_entity without conditions. If cds\_entity is specified, the same applies as for a [conditional access rule](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_rule.htm).

The addition REDEFINITION prevents further REDEFINITION rules from being created for the same CDS entity and making the activation fail.

Notes

-   For a [CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) entity, a full access rule has the same effect as when there is no role for the CDS entity or when CDS access control is forbidden for this CDS entity by using the annotation [@AccessControl.authorizationCheck:#NOT\_ALLOWED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm) or by using the annotation [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) clause of an ABAP SQL query when the entity is accessed.

-   SAP does not as a rule supply any CDS roles with full access rules. Partners and customers can use full access rules to override roles supplied by SAP.

-   The addition REDEFINITION is ignored by the authorization (a full access rule overwrites any [COMBINATION MODE AND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_role_cond_rule.htm) rules too).

Example

The following CDS role dictates that all users can access the CDS view DEMO\_CDS\_AUTH\_FULLACCESS without access conditions:

@MappingRole: true
define role demo\_cds\_role\_fullaccess {
  grant select on demo\_cds\_auth\_fullaccess; }