---
title: "ABAP CDS - CDS Entity Extension"
description: |
  A CDS entity extension(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_extend_glosry.htm 'Glossary Entry') is a transportable extension of a CDS entity. A CDS entity extension can make additions to the original entity, but it cannot modify, overwrite, or delete elements f
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_extension.htm"
abapFile: "abencds_view_extension.htm"
keywords: ["delete", "do", "if", "try", "data", "types", "abencds", "view", "extension"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20CDS%20Entity%20Extension%2C%20ABENCDS_VIEW_EXTENSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - CDS Entity Extension

A [CDS entity extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_extend_glosry.htm "Glossary Entry") is a transportable extension of a CDS entity. A CDS entity extension can make additions to the original entity, but it cannot modify, overwrite, or delete elements from the original entity. There are currently four different statements that can be used to extend a [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") in [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry"):

-   [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view_entity.htm)
    -   This variant is used to define a [CDS view entity extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry") for a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS projection view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm "Glossary Entry").
    -   Available since release 7.55.
-   [EXTEND CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_custom_entity.htm)
    -   This variant is used to define a [CDS custom entity extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cus_entity_extend_glosry.htm "Glossary Entry") for a [CDS custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").
    -   Available since release 7.57.
-   [EXTEND ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_abstract_entity.htm)
    -   This variant is used to define a [CDS abstract entity extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abs_entity_extend_glosry.htm "Glossary Entry") for a [CDS abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").
    -   Available since release 7.56.
-   [EXTEND VIEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view.htm)
    -   This variant is used to define a [CDS view extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_extend_glosry.htm "Glossary Entry") that is also linked with a [DDIC append view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_append_view_glosry.htm "Glossary Entry") in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").
    -   Available since release 7.40, SP08.
    -   Recommended for extending [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), defined using the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_v1.htm).

When working in a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry"), extensions are possible only to [released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry") that are released under the [C0 stability contract for extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_glosry.htm "Glossary Entry"). The compatibility rules for the C0 contract for API providers and API consumers are described in section [Compatibility Rules for CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_cds.htm).

Hints

-   Since release 7.55, there are two different statements available that can be used to extend a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry"), namely EXTEND VIEW and EXTEND VIEW ENTITY. The differences and when to use what is explained in topic [ABAP CDS - Extending CDS views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_extend.htm).
-   Every CDS entity extension has its own [DDL source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). The DDL source code in a CDS entity extension is edited in a different editor from the DDL source code of the base entity. The ADT documentation describes how these types of source code are created.
-   DDL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   CDS entity extensions are connected to [Switch Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenswitch_framework_glosry.htm "Glossary Entry") whenever they are defined in a [package](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpackage_glosry.htm "Glossary Entry") that is assigned a [switch](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenswitch_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - Extending CDS Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_extend.htm)
[CDS DDL - EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view_entity.htm)
[CDS DDL - EXTEND CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_custom_entity.htm)
[CDS DDL - EXTEND ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_abstract_entity.htm)
[CDS DDL - EXTEND VIEW ddic\_based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view.htm)