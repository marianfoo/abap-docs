---
title: "ABAP EML - ROLLBACK ENTITIES"
description: |
  Syntax ROLLBACK ENTITIES. Effect The statement ROLLBACK ENTITIES rolls back all changes since the last COMMIT and resets the transactional buffer.. Using the statement ROLLBACK ENTITIES is prohibited in the behavior implementation methods(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_rollback_entities.htm"
abapFile: "abeneml_rollback_entities.htm"
keywords: ["do", "if", "method", "abeneml", "rollback", "entities"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) → 

ABAP EML - ROLLBACK ENTITIES

Syntax

ROLLBACK ENTITIES.

Effect

The statement ROLLBACK ENTITIES rolls back all changes since the last COMMIT and resets the transactional buffer..

Using the statement ROLLBACK ENTITIES is prohibited in the [behavior implementation methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm). If violated, a runtime error occurs.