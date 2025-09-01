---
title: "ABAP CDS - Access Control"
description: |
  ABAP CDS enables access control based on a data control language (CDS DCL)(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_dcl_syntax.htm). Access control in ABAP CDS further restricts the data returned from a CDS entity(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control.htm"
abapFile: "abencds_access_control.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abencds", "access", "control"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) → 

ABAP CDS - Access Control

ABAP CDS enables access control based on a [data control language (CDS DCL)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_dcl_syntax.htm). Access control in ABAP CDS further restricts the data returned from a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") in ABAP CDS. CDS access control is based on the following aspects:

-   [CDS roles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry") defined using the CDS DCL statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_role.htm). A CDS role is not assigned to individual users and is evaluated for every user instead.
-   [Access rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaccess_rule_glosry.htm "Glossary Entry") defined for [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") in a CDS role. [Access rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_rules.htm) can define conditions, but also provide full access. In a CDS role, access rules can be inherited from another CDS entity or rule.
-   [Access conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaccess_condition_glosry.htm "Glossary Entry") defined in an access rule for the elements of [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"). Access conditions are based primarily on literal values, on classic [authorizations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current users, or on data from other CDS entities defined by a selection with the current user ([self-defined aspects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_generic_aspect.htm)).

If a CDS role with access rules is defined for a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry"), the access conditions are evaluated implicitly in each [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") read, unless access control is switched off using the value #NOT\_ALLOWED for the annotation @AccessControl.authorizationCheck or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) clause of an ABAP SQL query. If access control is enabled, only that data is read that meets the access conditions.

Every CDS role is defined in its own separate piece of [DCL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendcl_source_code_glosry.htm "Glossary Entry"). These pieces of DCL source code can only be edited in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry"). DCL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). The DCL source code of a CDS role is edited in a different editor than [DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry"), [DDLA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddla_source_code_glosry.htm "Glossary Entry"), and [DDLX source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddlx_source_code_glosry.htm "Glossary Entry"). The [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") documentation describes how the different types of source code are created.

Hints

-   CDS access control provides an additional method for checking authorizations in the [SAP authorization concept](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbc_authority_check.htm). Authorizations in the SAP authorization concept are based on [authorization objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_object_glosry.htm "Glossary Entry") and are granted in the classic role maintenance (transaction PFCG). In classic authorization checks, the authorizations are either checked implicitly (such as when transactions are called) or explicitly using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check_shortref.htm). CDS access control expands these checks to include implicit evaluations of [access conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaccess_condition_glosry.htm "Glossary Entry").
-   It is advisable to continue to use classic authorization checks for start authorizations (used to check whether a user can start an application in the first place). CDS access control can be used within an application to perform authorization checks (used to check the authorization of a user as defined by the data model and the data in question).
-   When CDS entities are accessed using ABAP SQL, ABAP programs cannot distinguish whether data is not read because it does not exist or because they are not allowed by CDS access control.
-   CDS access control modifies the database selection performed by the application code. Although the amount of data returned is reduced, the additional filter work may have an influence on the statement performance. The effect depends on the complexity of the access control, the complexity of the protected CDS entity, the amount of data in the PFCG role data assigned to the user and the position of the protected entity in the concrete database statement.
-   CDS roles can be defined for [CDS views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry"), CDS hierarchies, transactional CDS projection views, and [CDS table functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry"). Implicit access control is applied only when a CDS entity of this type is accessed directly using ABAP SQL.
-   When a CDS entity is used as a data source in another CDS entity, its access controls are not considered when the wrapping entity is accessed. CDS access control only applies to the entry level entities accessed by ABAP SQL.
-   CDS access control does not work for client-independent access. This is why in ABAP SQL, the addition [USING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) or the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client_obsolete.htm) can only be used when accessing CDS entities where access control is disabled.
-   In emergency mode (user SAP\*), CDS access control is disabled. This not only affects PFCG conditions but also literal access conditions and self-defined aspect conditions.
-   Access control can be disabled in particular in the following ways:
    -   If access control is not applicable in general (for example because the unit in question is a technical unit), the annotation @AccessControl.authorizationCheck with the value #NOT\_ALLOWED can be specified in its CDS data definition.
    -   If access control is not applicable only in specific places, the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) can be used in the [FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) clause of an ABAP SQL query.
    -   Access control can be disabled for an entity (without making modifications) by creating a full access rule for the entity in a customer CDS role.
    -   A CDS entity can also be used as a data source in another CDS entity for which access control is disabled.

Continue
[ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_dcl_syntax.htm)