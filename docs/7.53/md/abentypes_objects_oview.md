---
title: "Types and Objects - Overview"
description: |
  ABAP distinguishes between types and objects. Types are purely descriptions, to which no data memory is attached apart from administration information. Objects are instances of types and take up memory space. A type characterizes the technical attributes of all objects of the relevant type. The ABAP
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm"
abapFile: "abentypes_objects_oview.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abentypes", "objects", "oview"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) → 

Types and Objects - Overview

ABAP distinguishes between types and objects. Types are purely descriptions, to which no data memory is attached apart from administration information. Objects are instances of types and take up memory space. A type characterizes the technical attributes of all objects of the relevant type.

The ABAP types construct the ABAP type hierarchy, which is illustrated below:

![Figure](abdoc_types_objects.gif)

The left side of the figure shows the hierarchy of all types and instances, for instance which types are possible in ABAP and the objects that can be created from these types. The right side lists the [generic data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") assigned to individual nodes of the type hierarchy.

In principle, data types are distinguished from object types.

-   [Data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_type_glosry.htm "Glossary Entry") are used to describe [data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm "Glossary Entry"). They are further subdivided into elementary types, reference types, and complex types. Data types are [built-in](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_data_type_glosry.htm "Glossary Entry") (predefined) or they can be defined locally in the program and across the system in ABAP Dictionary. Data objects as instances of data types are fields in their own right. They contain local program data that a program uses at runtime.

-   [Object types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_type_glosry.htm "Glossary Entry") are used to describe objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_glosry.htm "Glossary Entry"). They are divided into classes and interfaces. Object types contain both the above data types and functions. Object types are not built-in and must be defined in the program or in the class library. Classes provide a complete description of an object. They define which data types and which functions an object contains. Interfaces describe one aspect of an object. The data types and functions of an interface can be implemented by more than one class. Objects as instances of classes are actual software objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_glosry.htm "Glossary Entry"). They support object-oriented programming by containing methods and events in addition to data.

The following sections summarize some important facts on data types and data objects. More information about object types and objects is available under [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm).

Continue
[Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_types.htm)
[Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects.htm)
[Validity and Visibility](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlifetime_and_visibility.htm)
[Absolute Type Names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_names.htm)
[Compatible Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatibility.htm)