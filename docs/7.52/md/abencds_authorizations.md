---
title: "ABAP CDS - Access Control"
description: |
  ABAP CDS enables access control based on a data control language (CDS DCL)(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm). Access control in ABAP CDS further restricts the data returned from a CDS entity(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/
version: "7.52"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm"
abapFile: "abencds_authorizations.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abencds", "authorizations"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) → 

ABAP CDS - Access Control

ABAP CDS enables access control based on a [data control language (CDS DCL)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm). Access control in ABAP CDS further restricts the data returned from a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") in ABAP CDS. CDS access control is based on the following:

-   [CDS roles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry") defined using the CDS DCL statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm). A CDS role is not assigned to individual users and is evaluated for every user instead.

-   [Access rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_rule_glosry.htm "Glossary Entry") defined in a CDS role [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"). [Access rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm) can define conditions, but also provide free access. In a CDS role, access rules can be inherited from another rule.

-   [Access conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") defined in an access rule for the elements of [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"). Access conditions are based mainly on literal values and classic [authorizations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_glosry.htm "Glossary Entry") of the current user.

If a CDS role with access rules is defined for a CDS entity, the access conditions are evaluated implicitly in each [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") read, unless access control is switched off using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) clause of an Open SQL query. If access control is enabled, only that data is read that meets the access conditions.

Every CDS role is defined in its own separate piece of [DCL source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendcl_source_code_glosry.htm "Glossary Entry"). This DCL source code can only be edited in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry"). DCL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). The DCL source code of a CDS role is edited in a different editor than [DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_source_code_glosry.htm "Glossary Entry"), [DDLA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddla_source_code_glosry.htm "Glossary Entry"), and [DDLX source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddlx_source_code_glosry.htm "Glossary Entry"). The [ADT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry") documentation describes how the different types of source code are created.

Notes

-   CDS access control provides an additional method for checking authorizations in the [SAP authorization concept](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbc_authority_check.htm). Authorizations in the SAP authorization concept are based on [authorization objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_object_glosry.htm "Glossary Entry") and are granted in the classic role editor (transaction PFCG). In classic authorization checks, the authorizations are either checked implicitly (such as when transactions are called) or explicitly using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapauthority-check_shortref.htm). CDS access control expands these checks to include implicit evaluations of [access conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry").

-   It is advisable to continue to use classic authorization checks for start authorizations (used to check whether a user can start an application in the first place). CDS access control can be used within an application to perform authorization checks (used to check the authorization of a user as defined by the data model and the data in question).

-   When CDS entities are accessed using Open SQL, ABAP programs cannot distinguish whether data is not read because it does not exist or because they are not allowed by CDS access control.

-   CDS roles can be defined for [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") and [CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry"). Implicit access control is applied only when a CDS entity of the is type is accessed directly using Open SQL.

-   When a CDS entity used as a data source in different CDS entities is accessed indirectly, no implicit access control is applied. This means the methods and CDS roles used to access CDS entities should be planned carefully when modeling an application. For example, accesses made on CDS entities without associated CDS role can be wrapped in CDS views with associated roles.

-   CDS access control does not work for cross-client access. This is why in Open SQL the additions [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) and [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) can only be used when accessing CDS entities where access control is switched off.

-   Access control can be switched off in the following ways:

-   If access control is not applicable in general (for example because the unit in question is a technical unit), the annotation @AccessControl.authorizationCheck with the value #NOT\_ALLOWED can be specified in its CDS data definition.

-   If access control is not applicable only in specific places, the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) can be used in the [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) clause of an Open SQL query.

The CDS entity can also be wrapped in another CDS entity for which access control is switched off.

Continue
[ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm)