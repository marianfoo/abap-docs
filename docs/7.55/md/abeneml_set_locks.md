---
title: "ABAP EML - SET LOCKS"
description: |
  Work in progress  Syntax SET LOCKS OF root_name ENTITY entity_1_name FROM lt1 ENTITY entity_2_name FROM lt2 ... FAILED   it_failed REPORTED it_reported. SET LOCKS ENTITY entity_name FROM lt FAILED it_failed REPORTED it_reported. Effect The expli
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks.htm"
abapFile: "abeneml_set_locks.htm"
keywords: ["do", "if", "method", "data", "types", "abeneml", "set", "locks"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Entity Manipulation Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm) → 

ABAP EML - SET LOCKS

\* Work in progress \*

Syntax

SET LOCKS OF root\_name
   ENTITY entity\_1\_name FROM lt1
  *\[*ENTITY entity\_2\_name FROM lt2 ...*\]*
  *\[*FAILED   it\_failed*\]*
  *\[*REPORTED it\_reported*\]*.
SET LOCKS
   ENTITY entity\_name FROM lt
  *\[*FAILED it\_failed*\]*
  *\[*REPORTED it\_reported*\]*.

Effect

The explicit locking of instances for a following modification is not necessary since the framework automatically locks instances contained in the method [MODIFY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhandler_method_modify.htm). However, if the application knows that instances will be needed (that need to be protected so that users cannot change the same data simultaneously), the SET LOCKS statement can be used.

Two types of the statement SET LOCKS are available:

-   a long form SET LOCKS OF root\_name

-   a short form SET LOCKS.

The table types required here can be declared statically using the syntax TYPE ... TABLE FOR LOCK OF (see [Derived Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm)).

Continue
[ABAP EML - SET LOCKS DYN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks_dyn.htm)