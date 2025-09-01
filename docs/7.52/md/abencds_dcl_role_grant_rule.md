  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, access\_rules](javascript:call_link\('abencds_dcl_role_rules.htm'\)) → 

ABAP CDS - DEFINE ROLE, grant\_rule

Syntax

GRANT SELECT ON cds\_entity;

Effect

Full control rule in statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) of the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). A full control rule GRANT SELECT ON without the addition WHERE provides access to a CDS entity cds\_entity without conditions. If cds\_entity is specified, the same applies as for a [conditional access rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)).

Notes

-   For a CDS entity, a full control rule has the same effect as when there is no role for the CDS entity or when CDS access control is forbidden for this CDS entity by using the annotation [@AccessControl.authorizationCheck:#NOT\_ALLOWED](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) or by using the annotation [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of an Open SQL query when the entity is accessed.

-   SAP does not as a rule supply any CDS roles with full access rules. Partners and customers can use full access rules to override roles supplied by SAP.

-   The use of a full access rule raises a syntax check rule for the CDS role in question.

Example

The following CDS role dictates that all users can access the CDS view DEMO\_CDS\_AUTH\_FULLACCESS without access conditions:

@MappingRole: true
define role demo\_cds\_role\_fullaccess {
  grant select on demo\_cds\_auth\_fullaccess; }