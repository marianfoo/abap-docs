---
title: "ABAP Type Hierarchy"
description: |
  The ABAP types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_type_glosry.htm 'Glossary Entry') form the following ABAP type hierarchy: !Figure(abdoc_types_objects.gif) The left side of the figure shows the hierarchy of all types and instances, that is, which types are possi
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_hierarchy.htm"
abapFile: "abentype_hierarchy.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abentype", "hierarchy"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Type%20Hierarchy%2C%20ABENTYPE_HIERARCHY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Type Hierarchy

The [ABAP types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_type_glosry.htm "Glossary Entry") form the following ABAP type hierarchy:

![Figure](abdoc_types_objects.gif)

The left side of the figure shows the hierarchy of all types and instances, that is, which types are possible in ABAP and the objects that can be created from the types. The right side lists the [generic data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") assigned to individual nodes of the type hierarchy.

In principle, data types are distinguished from object types.

-   [Data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_type_glosry.htm "Glossary Entry") are used to describe [data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry"). They are further divided into elementary, reference, and complex types. Data types are either [built-in types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_data_type_glosry.htm "Glossary Entry") or they can be defined locally in the program and across the system in the ABAP Dictionary. Data objects as instances of data types are fields in the actual sense. They contain the local program data that a program uses at runtime.
-   [Object types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_type_glosry.htm "Glossary Entry") are used to describe objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_glosry.htm "Glossary Entry"). They are divided into classes and interfaces. Object types contain the data types mentioned above and functions. Object types are not built-in and must be defined in the program or in the class library. Classes describe an object completely. They define which data types and which functions an object contains. Interfaces describe a partial aspect of an object. The data types and functions of an interface can be implemented by multiple classes. Objects as instances of classes are actual software objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_glosry.htm "Glossary Entry") and support object-oriented programming by including methods and events in addition to data.