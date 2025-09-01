---
title: "CDS DCL - DEFINE ROLE"
description: |
  Syntax @MappingRole: true(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm) @role_annot1(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm) @role_annot2(https://help.sap.com/doc/abapdocu_75
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_role.htm"
abapFile: "abencds_f1_define_role.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "define", "role"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20ABENCDS_F1_DEFINE_ROLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DCL - DEFINE ROLE

Syntax

[@MappingRole: true](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm)
*\[*[@role\_annot1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm)*\]*
*\[*[@role\_annot2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm)*\]*
...
*\[*DEFINE*\]* ROLE role\_name *\[*SWITCHABLE*\]* { [access\_rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_rules.htm) }

Additions:

[1\. ... SWITCHABLE ...](#!ABAP_ADDITION_1@1@)

Effect

Defines a [CDS role](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm "Glossary Entry") called role\_name in the [CDS DCL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A CDS role consists of one or more access rules [access\_rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_rules.htm) specified within the curly brackets. Each access rule defines access to a [CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") entity. A CDS role can contain access rules for different CDS entities. An access rule either defines an [access condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry") for the CDS entity or grants full access. When a CDS entity of this type is accessed using ABAP SQL, an access condition is evaluated as an additional selection condition.

Before the role is defined using DEFINE ROLE, the annotation [@MappingRole](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm) must be specified with the value true. The annotation [@MappingRole](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm) is used to assign the CDS role to every user regardless of the client. Further optional annotations [role\_annot1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm), [role\_annot2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm), ... can also be specified.

Hints

-   Every CDS role defined using DEFINE ROLE is assigned to every user implicitly, which means that the associated access control is applied to every user. User-specific checks are applied using [PFCG conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpfcg_condition_glosry.htm "Glossary Entry") and [user conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_condition_glosry.htm "Glossary Entry").
-   A CDS role can be defined for a CDS entity in every package and in every system and specifies that implicit access control applies.
-   Access control can be disabled for a CDS entity as follows:
    -   Specify the annotation @AccessControl.authorizationCheck with the value #NOT\_ALLOWED in the definition of the entity. In this case, the definition of a role for the CDS entity produces a syntax check warning in the DCL editor.
    -   Use the addition [*\[*WITH*\]* PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) in ABAP SQL when the entity is accessed.
-   Separate [DCL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendcl_source_code_glosry.htm "Glossary Entry") must be created for each CDS role. The DCL source code of a CDS role is edited in a different editor from the [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") (a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") or [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry")) or a [CDS metadata extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The ADT documentation describes how the different types of source code are created.
-   CDS source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

Addition 1   

... SWITCHABLE ...

Effect

With this addition, the content of the role reacts to status changes in the [Switch Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenswitch_framework_glosry.htm "Glossary Entry") with respect to the package of the access control:

-   If the package has no switch assigned or when it has a switch assigned with state On, the role content is generated.
-   If a switch is assigned to the package and that switch has a state other than On, the role is generated with empty content, in particular, all rules in the role are no longer present at runtime.

Hints

-   The keyword SWITCHABLE can be applied to roles even if they are not in a switchable package. The keyword then has no function.
-   Roles without the keyword SWITCHABLE can be in switchable packages. The role then does not react to the switch state and its content is always generated.
-   If a switchable role is not generated due to the current switch state, the syntax check does not detect all errors in the rule content. It is possible to deliver access roles from a system where the role is not generated, causing import errors in a system where the role is generated.
-   In a switchable role, you can use elements of the protected entity itself and of [CDS entity extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_extend_glosry.htm "Glossary Entry") of that entity, as long as they are located in the same package as the access control. The access control syntax checker issues an error message if an access rule violates this constraint.
-   In a non-switchable role, you should only use elements of the protected entity itself and avoid using elements that are in switchable [CDS entity extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_extend_glosry.htm "Glossary Entry"), because importing this role may cause syntax errors in systems where the package of the extension is switched off. The access control syntax checker issues a warning message for this constellation.
-   In switchable roles, the addition [COMBINATION MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_cond_rule.htm) is mandatory, even if the chosen combination mode is [OR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_cond_rule.htm).
-   In switchable roles, the addition [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_cond_rule.htm) is not allowed.
-   In switchable roles, using inheritance statements is not allowed.
-   Switchable roles cannot be the source for role-based inheritance in another access control.
-   Switchable roles can be part of entity-based inheritance in other access controls. The switch state is respected when the inheritance is resolved. This means that, in a system where the role is not generated, it is not part of the access conditions of the inheritance source because the access rule for the entity inside the role does not exist.
-   Switchable roles respect the switchability of packages on a structural level and thus allow the use of elements of switched [CDS entity extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_extend_glosry.htm "Glossary Entry"). In contrast to this, the DCL functions [SWITCH\_RUNTIME\_STATE](abencds_f1_dcl_function.htm#!ABAP_VARIANT_3@3@) and [TOGGLE\_RUNTIME\_STATE](abencds_f1_dcl_function.htm#!ABAP_VARIANT_4@4@) allow querying a switch state as a runtime-only check and are the preferred way to implement switch dependency if this need does not exist.
-   A switchable role for a CDS entity can exist as the only access control for a CDS entity. For a switch state other than On, the entity then behaves as if no access control is defined. In conjunction with the entity annotation @AccessControl.authorizationCheck: #MANDATORY, this can lead to a runtime error when the entity is accessed.

Continue
[CDS DCL - DEFINE ROLE, role\_annot](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_role_annotations.htm)
[CDS DCL - DEFINE ROLE, access\_rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_rules.htm)
[CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_conditions.htm)
[CDS DCL - DEFINE ROLE, access\_control\_context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_access_control_con.htm)