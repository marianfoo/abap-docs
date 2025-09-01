---
title: "ABAP Objects - Data Types and Constants of Classes"
description: |
  -   Data Types(#abenclass-types-constants-1--------standalone-types---@ITOC@@ABENCLASS_TYPES_CONSTANTS_2) -   Bound Data Types(#abenclass-types-constants-3--------constants---@ITOC@@ABENCLASS_TYPES_CONSTANTS_4) Data Types Standalone Types The TYPES(https://help.sap.com/doc/abapdocu_755_index_h
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_types_constants.htm"
abapFile: "abenclass_types_constants.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abenclass", "constants"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_components.htm) → 

ABAP Objects - Data Types and Constants of Classes

-   [Data Types](#abenclass-types-constants-1--------standalone-types---@ITOC@@ABENCLASS_TYPES_CONSTANTS_2)

-   [Bound Data Types](#abenclass-types-constants-3--------constants---@ITOC@@ABENCLASS_TYPES_CONSTANTS_4)

Data Types

Standalone Types

The [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm) statement can be used to declare any number of self-defined ABAP data types within a class. Types are instance-independent and only exist once for all the objects of a class.

In particular, it is possible to define data types in the public visibility section of global classes, which makes the use of [type pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") in this context obsolete.

Bound Data Types

[Bound data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbound_data_type_glosry.htm "Glossary Entry") that occur as properties of instance or static attributes also belong to the static properties of a class. After a LIKE addition, the class name can be used to access the properties of instance attributes (exceptions to this rule are the statements ASSIGN ... CASTING and SELECT-OPTIONS ... FOR). In addition, a reference variable can be used with an object component selector without first creating the object.

Constants

Constants are special [static attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_attribute_glosry.htm "Glossary Entry"), whose values are specified when they are declared, and which cannot be changed. Constants are declared using the statement [CONSTANTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconstants.htm). Constants are instance-independent and exist only once for all the objects of a class.

In particular, it is possible to declare constants in the public visibility section of global classes, which makes use of [type pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") in this context obsolete.