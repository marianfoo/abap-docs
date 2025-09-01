# ABAP - Keyword Documentation / ABAP - RAP Business Objects / RAP - Behavior Definitions / RAP - BDL for Behavior Definitions / RAP - BOPF-Based RAP Business Objects

Included pages: 3


### abenbdl_rap_bopf.htm

---
title: "RAP - BOPF-Based RAP Business Objects"
description: |
  For business objects(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbusiness_object_glosry.htm 'Glossary Entry') built with the predecessor programming model ABAP programming model for SAP Fiori(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pm_for_fiori_glos
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bopf.htm"
abapFile: "abenbdl_rap_bopf.htm"
keywords: ["do", "if", "try", "types", "abenbdl", "rap", "bopf"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20BOPF-Based%20RAP%20Business%20Objects%2C%20ABENBDL_RAP_BOPF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - BOPF-Based RAP Business Objects

For [business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbusiness_object_glosry.htm "Glossary Entry") built with the predecessor programming model [ABAP programming model for SAP Fiori](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pm_for_fiori_glosry.htm "Glossary Entry"), a RAP integration is offered. A [BOPF-based RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bopf_bo_glosry.htm "Glossary Entry") results from a migration from a [CDS-based BOPF business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bopf_bo_glosry.htm "Glossary Entry") to a BOPF-based RAP business object. A BOPF-based RAP BO cannot be created from scratch.

The following syntax additions are available for BOPF-based RAP BOs:

-   [managed by BOPF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_managed_by_bopf.htm)
-   [with BOPF draft](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_with_bopf_draft.htm)

Further Information

-   [Migration Guide for CDS-based BOPF Business Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/0a54d0c8a2be4136a8b5d41a367dd537/40535a6f276149bfb1fd03baadd5ba92)
-   Development guide for the [ABAP Programming Model for SAP Fiori](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/3b77569ca8ee4226bdab4fcebd6f6ea6)
-   Development guide for the ABAP RESTful Application Programming Model, section on [Business Object Implementation Types](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/e11757cf7e664121b9f583e7ca0eeb39?version=sap_cross_product_abap).

Continue
[RAP - managed by BOPF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_managed_by_bopf.htm)
[RAP - with BOPF draft](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_with_bopf_draft.htm)


### abenbdl_rap_managed_by_bopf.htm

---
title: "RAP - managed by BOPF"
description: |
  Syntax managed by BOPF ...; Effect Defines a BOPF-based RAP BO(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bopf_bo_glosry.htm 'Glossary Entry') in BDL source code(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_source_code_glosry.htm 'Glossary Entry'
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_managed_by_bopf.htm"
abapFile: "abenbdl_rap_managed_by_bopf.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "types", "abenbdl", "rap", "managed", "bopf"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BOPF-Based RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bopf.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20managed%20by%20BOPF%2C%20ABENBDL_RAP_MANAGED_BY_BOPF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - managed by BOPF

Syntax

managed by BOPF \[...\];

Effect

Defines a [BOPF-based RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bopf_bo_glosry.htm "Glossary Entry") in [BDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_source_code_glosry.htm "Glossary Entry") in the [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry"). A BOPF-based RAP BO is the result of migrating a [CDS-based BOPF business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bopf_bo_glosry.htm "Glossary Entry") to a RAP business object. BOPF-based RAP BOs cannot be built from scratch.

The [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") of a BOPF-based RAP BO is provided by the [BOPF-managed RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbopf_man_rap_bo_prov_glosry.htm "Glossary Entry").

A BOPF-managed RAP BO has a limited feature set compared to a managed or unmanaged RAP BO. Since transactional requests are managed by the [BOPF-managed RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbopf_man_rap_bo_prov_glosry.htm "Glossary Entry"), some features work differently than in a RAP-native RAP BO. For details, see the [Migration Guide for CDS-based BOPF Business Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/0a54d0c8a2be4136a8b5d41a367dd537/40535a6f276149bfb1fd03baadd5ba92).

Further Information

-   [Migration Guide for CDS-based BOPF Business Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/0a54d0c8a2be4136a8b5d41a367dd537/40535a6f276149bfb1fd03baadd5ba92)
-   Development guide for the [ABAP Programming Model for SAP Fiori](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/3b77569ca8ee4226bdab4fcebd6f6ea6)
-   Development guide for the ABAP RESTful Application Programming Model, section on [Business Object Implementation Types](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/e11757cf7e664121b9f583e7ca0eeb39?version=sap_cross_product_abap).

Example

The following [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_BOPF represents a BOPF-based RAP BO.

//GENERATED BY MIGRATION TOOL
managed by BOPF
  implementation in class BP\_DEMO\_RAP\_BOPF unique;
strict(2);
define behavior for DEMO\_RAP\_BOPF
persistent table demo\_dbtab\_root
authorization master ( instance, global )
lock master
{
  create;
  update;
  delete;
}


### abenbdl_rap_with_bopf_draft.htm

---
title: "RAP - with BOPF draft"
description: |
  Syntax ... with BOPF draft; ... Effect The addition with BOPF draft enables draft handling for a BOPF-based RAP BO(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bopf_bo_glosry.htm 'Glossary Entry'). It is added in the behavior definition header(https://help.sap.com/doc/abapd
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_with_bopf_draft.htm"
abapFile: "abenbdl_rap_with_bopf_draft.htm"
keywords: ["do", "if", "try", "class", "types", "abenbdl", "rap", "with", "bopf", "draft"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BOPF-Based RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bopf.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20with%20BOPF%20draft%2C%20ABENBDL_RAP_WITH_BOPF_DRAFT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - with BOPF draft

Syntax

...
with BOPF draft;
...

Effect

The addition with BOPF draft enables draft handling for a [BOPF-based RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bopf_bo_glosry.htm "Glossary Entry"). It is added in the [behavior definition header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and it draft-enables the entire business object. The draft handling is delegated to the [Business Object Processing Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbo_processing_fw_glosry.htm "Glossary Entry") (BOPF) by the [BOPF-managed RAP draft provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbopf_man_rap_dra_prov_glosry.htm "Glossary Entry").

Further Information

-   [Migration Guide for CDS-based BOPF Business Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/0a54d0c8a2be4136a8b5d41a367dd537/40535a6f276149bfb1fd03baadd5ba92)
-   Development guide for the [ABAP Programming Model for SAP Fiori](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/3b77569ca8ee4226bdab4fcebd6f6ea6)
-   Development guide for the ABAP RESTful Application Programming Model, section on [Business Object Implementation Types](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/e11757cf7e664121b9f583e7ca0eeb39?version=sap_cross_product_abap).

Example

The following [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_BOPF\_DRAFT shows a BOPF-based RAP BO with draft handling.

//GENERATED BY MIGRATION TOOL
managed by BOPF
  implementation in class BP\_DEMO\_RAP\_BOPF\_DRAFT unique;
strict(2);
with BOPF draft;
define behavior for DEMO\_RAP\_BOPF\_DRAFT
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
authorization master ( instance, global )
lock master
total etag lastChangedAt
{
  \[...\]
}
