---
title: "ABAP - Rules for Strict ABAP"
description: |
  ABAP developments in modern environments as e.g. in the SAP BTP ABAP environment(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_btp_glosry.htm 'Glossary Entry') or S/4HANA Cloud ABAP environment(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abens4_hana_cloud_abap
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_strict_rules.htm"
abapFile: "abenabap_strict_rules.htm"
keywords: ["do", "try", "class", "abenabap", "strict", "rules"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) → 

ABAP - Rules for Strict ABAP

ABAP developments in modern environments as e.g. in the [SAP BTP ABAP environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_btp_glosry.htm "Glossary Entry") or [S/4HANA Cloud ABAP environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abens4_hana_cloud_abap_env_glosry.htm "Glossary Entry") for cloud developments or when developing enhancements for apps as a key user are done in [strict ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstrict_abap_glosry.htm "Glossary Entry"). Compared to [classic ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclassic_abap_glosry.htm "Glossary Entry"), ABAP development in a [strict ABAP development environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstrict_abap_dev_envir_glosry.htm "Glossary Entry") is restricted as follows:

-   Only one of the [restricted ABAP language versions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_version_glosry.htm "Glossary Entry") can be used:
    
    -   [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry") or
    -   [ABAP for Key Users](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry").
    
    The topic [Language Elements in ABAP Versions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_abap_elements.htm) provides an overview of the ABAP language elements that are allowed in these language versions compared to [Standard ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_abap_glosry.htm "Glossary Entry").
    
-   Only [repository objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm "Glossary Entry") that are [released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_api_glosry.htm "Glossary Entry") for the respective [restricted ABAP language version](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_version_glosry.htm "Glossary Entry") can be used.
    
    The topic [Released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_apis.htm) provides an overview of the released APIs of the current system.
    
-   Only [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") or special enhancement tools can be used.

The stability of released APIs is governed by [release contracts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelease_contract_glosry.htm "Glossary Entry"). Accesses to released APIs must be done in such a way that they are stable against allowed changes in the APIs. The topic [Working with Released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_apis.htm) gives an overview of the according rules.

Continue
[Language Elements in ABAP Versions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_abap_elements.htm)
[Released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_apis.htm)
[Working with released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_apis.htm)