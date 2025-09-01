---
title: "Syntax"
description: |
  GRANT SELECT ON cds_entity_projection AS PROJECTION ON cds_entity_base FALLBACK ASSOCIATION fallback_association; Effect Creates an access rule for the CDS projection view(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm 'Glossary Entry') cds
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_proj_rule.htm"
abapFile: "abencds_dcl_role_proj_rule.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "dcl", "role", "proj", "rule"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, access\_rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20projection_rule%2C%20ABENCDS_DCL_ROLE_PROJ_RULE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

CDS DCL - DEFINE ROLE, projection\_rule

Syntax

GRANT SELECT ON cds\_entity\_projection
  AS PROJECTION ON cds\_entity\_base
    FALLBACK ASSOCIATION fallback\_association;

Effect

Creates an access rule for the [CDS projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry") cds\_entity\_projection which is a projection on the base view cds\_entity\_base. cds\_entity\_projection must be a [CDS transactional query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry"), i.e. a projection view with the provider contract TRANSACTIONAL\_QUERY.

At runtime, the [access conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaccess_condition_glosry.htm "Glossary Entry") of the base view are applied to the projection view if all of the following conditions are met:

-   All CDS elements used in the access conditions of the base view are present in the projection view (aliasing using the keyword AS is supported).
-   The access conditions of the base view do not use any parameters ($parameters...).
-   If the access conditions of the base view use [path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpath_expression_glosry.htm "Glossary Entry") and an [association target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry") is redirected to another projection view using the keyword [REDIRECTED TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_assoc_redirected.htm), using path filters is not allowed.

If it is not possible to apply the access conditions of the base view directly to the projection view, all access conditions are rewritten at runtime to point to the association fallback\_association. This association must exist in the projection view and point to the base view.

Hints

-   The fallback association fallback\_association should be a to-one association to the base view, using the key elements.
-   The syntax check of the projection rule issues a syntax warning if it detects that the access conditions of the base view could potentially trigger the use of the fallback association at runtime. This check is user-independent and realizes a worst case estimation. Depending on the actual authorizations of a user performing the access controlled action, it is still possible that the fallback association is not used at runtime.