---
title: "CREATE OBJECT oref"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_shortref.htm) Syntax CREATE OBJECT oref  area_handle(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_area_handle.htm)  parameter_list(https://help.sap.com/doc
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_implicit.htm"
abapFile: "abapcreate_object_implicit.htm"
keywords: ["do", "if", "try", "class", "data", "abapcreate", "object", "implicit"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm) →  [CREATE OBJECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object.htm) → 

CREATE OBJECT oref

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_shortref.htm)

Syntax

CREATE OBJECT oref *\[* [area\_handle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_area_handle.htm)*\]* *\[* [parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_parameters.htm)*\]*.

Effect

If the addition TYPE is not specified, the object reference variable oref must be a class reference variable. An instance of the class is created that is the static type of the object reference variable. The static type of the class reference variable must not be an [abstract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabstract_glosry.htm "Glossary Entry") class, and in particular not the root class object.

Hint

If the character # is used in an operand position with the operand type of a class reference variable, the [instance operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_new.htm) works like the statement CREATE DATA dref.

Example

Creation of an instance of a class cls by implicitly referring to the static type of the reference variables.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr type string VALUE 'Object'.
ENDCLASS.
DATA oref TYPE REF TO cls.
CREATE OBJECT oref.
cl\_demo\_output=>display( oref->attr ).