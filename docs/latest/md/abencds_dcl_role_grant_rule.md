  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, access\_rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20grant_rule%2C%20ABENCDS_DCL_ROLE_GRANT_RULE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

CDS DCL - DEFINE ROLE, grant\_rule

Syntax

GRANT SELECT ON cds\_entity *\[*REDEFINITION*\]*;

Effect

Full access rule in the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A full access rule GRANT SELECT ON without the addition WHERE provides access to a CDS entity cds\_entity without conditions. If cds\_entity is specified, the same applies as for a [conditional access rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm).

The addition REDEFINITION prevents further REDEFINITION rules from being created for the same CDS entity and letting their activation fail.

Hints

-   For a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"), a full access rule has the same effect as when there is no role for the CDS entity or when CDS access control is forbidden for this CDS entity by using the annotation @AccessControl.authorizationCheck:#NOT\_ALLOWED or by using [*\[*WITH*\]* PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) in ABAP SQL when the entity is accessed.
-   SAP does not deliver any CDS roles with full access rules. Partners and customers can use full access rules to override roles supplied by SAP.

Example

The following CDS role specifies that all users can access the CDS view entity DEMO\_CDS\_AUTH\_FULLACCESS without access conditions:

@MappingRole: true
define role demo\_cds\_role\_fullaccess {
  grant select on demo\_cds\_auth\_fullaccess; }