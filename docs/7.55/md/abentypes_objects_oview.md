---
title: "Types and Objects, Overview"
description: |
  ABAP distinguishes between types and objects. Types are purely descriptions, to which no data memory is attached apart from administrative information. Objects are instances of types and occupy memory space. A type characterizes the technical properties of all objects of the relevant type. The ABAP
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_objects_oview.htm"
abapFile: "abentypes_objects_oview.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abentypes", "objects", "oview"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_and_objects.htm) → 

Types and Objects, Overview

ABAP distinguishes between types and objects. Types are purely descriptions, to which no data memory is attached apart from administrative information. Objects are instances of types and occupy memory space. A type characterizes the technical properties of all objects of the relevant type.

The ABAP types construct the ABAP type hierarchy illustrated below:

![Figure](abdoc_types_objects.gif)

The left side of the figure shows the hierarchy of all types and instances, that is, which types are possible in ABAP and the objects that can be created from the types. The right side lists the [generic data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") assigned to individual nodes of the type hierarchy.

In principle, data types are distinguished from object types.

-   [Data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_glosry.htm "Glossary Entry") are used to describe [data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_object_glosry.htm "Glossary Entry"). They are further divided into elementary, reference, and complex types. Data types are either [built-in types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_data_type_glosry.htm "Glossary Entry") or they can be defined locally in the program and across the system in the ABAP Dictionary. Data objects as instances of data types are fields in the actual sense. They contain the local program data that a program uses at runtime.

-   [Object types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_type_glosry.htm "Glossary Entry") are used to describe objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_glosry.htm "Glossary Entry"). They are divided into classes and interfaces. Object types contain the data types mentioned above and functions. Object types are not built-in and must be defined in the program or in the class library. Classes describe an object completely. They define which data types and which functions an object contains. Interfaces describe a partial aspect of an object. The data types and functions of an interface can be implemented by multiple classes. Objects as instances of classes are actual software objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_glosry.htm "Glossary Entry") and support object-oriented programming by including methods and events in addition to data.

The following sections summarize some important facts on data types and data objects. For more information about object types and objects, see [ABAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_objects_oview.htm).

Continue
[Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_types.htm)
[Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects.htm)
[Validity and Visibility](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlifetime_and_visibility.htm)
[Absolute Type Names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_names.htm)
[Compatible Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompatibility.htm)