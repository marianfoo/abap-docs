---
title: "ABAP Objects - Attributes of Classes"
description: |
  Attributes are internal data objects of a class of any ABAP data type. The content of the attributes determines the state of the object. Reference variables can also be defined, which can then be used to create and address objects. This allows objects to be accessed within classes. Attributes are de
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_attributes.htm"
abapFile: "abenclass_attributes.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abenclass", "attributes"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_components.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Attributes of Classes, ABENCLASS_ATTRIBUTES, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Attributes of Classes

Attributes are internal data objects of a class of any ABAP data type. The content of the attributes determines the state of the object. Reference variables can also be defined, which can then be used to create and address objects. This allows objects to be accessed within classes.

Attributes are defined in the declaration part of a class. Public attributes are visible from outside the class without restrictions and as such are part of the interface between objects and their users. To encapsulate the state of the object, protected, package-visible, or private attributes must be used. In addition to the visibility, the modifiability of non-private attributes can also be restricted using the addition [READ-ONLY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_options.htm) in the declaration.

-   [Instance Attributes](#abenclass-attributes-1-------static-attributes---@ITOC@@ABENCLASS_ATTRIBUTES_2)
-   [Data Types of Attributes](#abenclass-attributes-3-------boxed-components---@ITOC@@ABENCLASS_ATTRIBUTES_4)

Instance Attributes   

The content of instance attributes represents the instance-dependent state of the object. Instance attributes are declared using the [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm) statement. The addition [COMMON PART](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_common.htm) cannot be used in classes.

Hint

The attempt to access an instance attribute via an initial [object reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"), in contrast to the call of an instance method, results in an exception that is not catchable.

Static Attributes   

The content of static attributes represents the instance-independent state of the class that is valid for all instances. Static attributes exist once for each class. They are declared using the statement [CLASS-DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-data.htm) and are preserved for the entire runtime. All the objects of a class can access its static attributes. Changes to a static attribute in an object are visible to all other objects of that class.

Data Types of Attributes   

The data types of all attributes, including instance attributes and, in particular, [bound data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbound_data_type_glosry.htm "Glossary Entry"), belong to the static properties of a class. Therefore, in a LIKE addition, the class component selector or reference variables can be used to refer to the visible attributes of a class, without first creating an object. In this way, the public static properties of global classes can be accessed in every program.

Example

Reference to the data type of an instance attribute attr of a global class cl\_global.

DATA dref TYPE REF TO cl\_global.
DATA:  f1 LIKE cl\_global=>attr,
       f2 LIKE dref->attr.

Boxed Components   

Like substructures of nested structures, attributes declared as structures can be declared as [static boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_box_glosry.htm "Glossary Entry") using the addition [BOXED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_boxed.htm). In static boxes, [initial value sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry") takes effect, which leads to fewer memory requirements for little used structures of frequently used objects. A static box used as a [boxed component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenboxed_component_glosry.htm "Glossary Entry") is a deep component that is managed using an internal reference, such as strings and internal tables.