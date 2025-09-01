  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) → 

CDS DCL - DEFINE ROLE

Syntax

[@MappingRole: true](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))
*\[*[@role\_annot1](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))*\]*
*\[*[@role\_annot2](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))*\]*
...
*\[*DEFINE*\]* ROLE role\_name { [access\_rules](javascript:call_link\('abencds_dcl_role_rules.htm'\)) }

Effect

Defines a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") called role\_name in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). A CDS role consists of one or more access rules [access\_rules](javascript:call_link\('abencds_dcl_role_rules.htm'\)) specified within the curly brackets. Each access rule defines access to a [CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity. A CDS role can contain access rules for different CDS entities. An access rule either defines an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") for the CDS entity or grants full access. When a CDS entity of this type is accessed using ABAP SQL, an access condition is evaluated as an additional selection condition.

Before the role is defined using DEFINE ROLE, the annotation [@MappingRole](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)) must be specified with the value true. The annotation [@MappingRole](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)) is used to assign the CDS role to every user regardless of the client. Further optional annotations [role\_annot1](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)), [role\_annot2](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)), ... can also be specified.

Hints

-   Every CDS role defined using DEFINE ROLE is assigned to every user implicitly, which means that the associated access control is applied to every user. User-specific checks are applied using [PFCG conditions](javascript:call_link\('abenpfcg_condition_glosry.htm'\) "Glossary Entry") and [user conditions](javascript:call_link\('abenuser_condition_glosry.htm'\) "Glossary Entry").

-   By default, when ABAP SQL is used for reads for a non-abstract CDS entity, access control is applied if a CDS role exists for the entity. The associated annotation @AccessControl.authorizationCheck has the default value #CHECK. In this case, CDS entities without assigned roles produce a syntax check warning in the DDL editor. This can be disabled using the [annotation value](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") #NOT\_REQUIRED. The value #NOT\_REQUIRED does not, however, disable implicit access control.

-   A CDS role can be defined for a CDS entity in every package and in every system and specifies that implicit access control applies.

-   Access control can be disabled for a CDS entity as follows:

-   Specify the annotation @AccessControl.authorizationCheck with the value #NOT\_ALLOWED in the definition of the entity. In this case, the definition of a role for the CDS entity produces a syntax check warning in the DCL editor.

-   Use the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of an ABAP SQL query when the entity is accessed.

-   Separate [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") must be created for each CDS role. The DCL source code of a CDS role is edited in a different editor from the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") (a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")) or a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The ADT documentation describes how the different types of source code are created. CDS source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Continue
[CDS DCL - DEFINE ROLE, role\_annot](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\))
[CDS DCL - DEFINE ROLE, access\_rules](javascript:call_link\('abencds_dcl_role_rules.htm'\))
[CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\))