---
title: "ABAP EML - ROLLBACK ENTITIES"
description: |
  Work in progress  Syntax ROLLBACK ENTITIES. Effect The statement ROLLBACK ENTITIES rolls back all changes since the last COMMIT and resets the transactional buffer.. Using the statement ROLLBACK ENTITIES is prohibited in the behavior implementation methods(https://help.sap.com/doc/abapdocu_75
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_rollback_entities.htm"
abapFile: "abeneml_rollback_entities.htm"
keywords: ["do", "if", "method", "abeneml", "rollback", "entities"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Entity Manipulation Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm) → 

ABAP EML - ROLLBACK ENTITIES

\* Work in progress \*

Syntax

ROLLBACK ENTITIES.

Effect

The statement ROLLBACK ENTITIES rolls back all changes since the last COMMIT and resets the transactional buffer..

Using the statement ROLLBACK ENTITIES is prohibited in the [behavior implementation methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm). If violated, a runtime error occurs.