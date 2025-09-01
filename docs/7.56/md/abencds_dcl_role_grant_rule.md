  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, access\_rules](javascript:call_link\('abencds_dcl_role_rules.htm'\)) → 

CDS DCL - DEFINE ROLE, grant\_rule

Syntax

GRANT SELECT ON cds\_entity *\[*REDEFINITION*\]*;

Effect

Full access rule in the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). A full access rule GRANT SELECT ON without the addition WHERE provides access to a CDS entity cds\_entity without conditions. If cds\_entity is specified, the same applies as for a [conditional access rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)).

The addition REDEFINITION prevents further REDEFINITION rules from being created for the same CDS entity and letting their activation fail.

Hints

-   For a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), a full access rule has the same effect as when there is no role for the CDS entity or when CDS access control is forbidden for this CDS entity by using the annotation @AccessControl.authorizationCheck:#NOT\_ALLOWED or by using the annotation [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of an ABAP SQL query when the entity is accessed.
-   SAP does not deliver any CDS roles with full access rules. Partners and customers can use full access rules to override roles supplied by SAP.

Example

The following CDS role specifies that all users can access the CDS view DEMO\_CDS\_AUTHORITY\_FULLACCESS without access conditions:

@MappingRole: true
define role demo\_cds\_role\_fullaccess {
  grant select on demo\_cds\_auth\_fullaccess; }