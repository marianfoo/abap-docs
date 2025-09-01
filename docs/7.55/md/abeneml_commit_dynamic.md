---
title: "ABAP EML - COMMIT ENTITIES RESPONSES"
description: |
  Work in progress  Syntax COMMIT ENTITIES RESPONSES OF root_names FAILED   it_failed  DATA(it_failed) REPORTED it_reported  DATA(it_reported). Effect The statement COMMIT ENTITIES RESPONSES is a dynamic form of the COMMIT statement. The table root_names can be
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_dynamic.htm"
abapFile: "abeneml_commit_dynamic.htm"
keywords: ["do", "if", "data", "abeneml", "commit", "dynamic"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Entity Manipulation Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm) →  [ABAP EML - COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm) → 

ABAP EML - COMMIT ENTITIES RESPONSES

\* Work in progress \*

Syntax

COMMIT ENTITIES
  RESPONSES *\[*OF root\_names*\]*
    *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
    *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The statement COMMIT ENTITIES RESPONSES is a dynamic form of the COMMIT statement. The table root\_names can be used to restrict which business objects are given the response information in FAILED and REPORTED. If not used, all information accumulated in the save phase is passed.

More information about COMMIT ENTITIES can be found under [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm).