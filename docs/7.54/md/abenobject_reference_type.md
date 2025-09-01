---
title: "Object References"
description: |
  Object references can point to instances of classes(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_glosry.htm 'Glossary Entry'). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement CREATE
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_reference_type.htm"
abapFile: "abenobject_reference_type.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenobject", "reference", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_references.htm) → 

Object References

Object references can point to instances of [classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_glosry.htm "Glossary Entry"). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object.htm).

-   Class reference variables allow access to all visible components of a class.

-   Interface reference variables restrict the view of the [interface components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_component_glosry.htm "Glossary Entry") of a class.

If an attempt is made to access an instance attribute with an object reference variable that contains the [null reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_reference_glosry.htm "Glossary Entry"), a non-handleable exception is raised. On calling an instance method, a handleable exception is raised.

Object references are always [heap references](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_reference_glosry.htm "Glossary Entry").

Note

For more information, see [Object References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreferences.htm).

Example

Inline declaration of an object reference variable out with the static type IF\_DEMO\_OUTPUT on the left side of an object of the class CL\_DEMO\_OUTPUT created using its factory method NEW. Calls the method DISPLAY using the object component selector.

DATA(out) = cl\_demo\_output=>new( ).
out->display( \`Hello\` ).