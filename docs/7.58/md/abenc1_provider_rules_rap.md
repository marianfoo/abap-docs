---
title: "c1_provider_rules_rap"
description: |
  c1_provider_rules_rap - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_provider_rules_rap.htm"
abapFile: "abenc1_provider_rules_rap.htm"
keywords: ["do", "if", "try", "data", "abenc1", "provider", "rules", "rap"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20RAP%20Behavior%20Definitions%2C%20ABENC1_PROVIDER_RULES_RAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

C1 Contract Rules for Providing RAP Behavior Definitions

A provider of [RAP behavior definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") must obey the following rules:

-   Behavior definitions must follow strict mode, must not be managed by BOPF and can only be released for language version ABAP for Cloud Development. The release is restricted to interfaces and abstract entities.
-   The underlying CDS entity must be released and CREATE operations are allowed for the root node only.
-   Parameters and results of actions and functions must be DDIC data elements or CDS entities.