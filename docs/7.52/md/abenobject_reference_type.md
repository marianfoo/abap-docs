---
title: "Object References"
description: |
  Object references can point to instances of classes(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_glosry.htm 'Glossary Entry'). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement CREATE
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_reference_type.htm"
abapFile: "abenobject_reference_type.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenobject", "reference", "type"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_references.htm) → 

Object References

Object references can point to instances of [classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_glosry.htm "Glossary Entry"). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object.htm).

-   Class reference variables allow access to all visible components of a class.

-   Interface reference variables restrict the view of the [interface components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_component_glosry.htm "Glossary Entry") of a class.

Object references are always [heap references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_reference_glosry.htm "Glossary Entry").

Note

For more information, see [Object References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreferences.htm).

Example

Inline declaration of an object reference variable out with the static type IF\_DEMO\_OUTPUT on the left side of an object of the class CL\_DEMO\_OUTPUT created using its factory method NEW. Calls the method DISPLAY using the object component selector.

DATA(out) = cl\_demo\_output=>new( ).
out->display( \`Hello\` ).