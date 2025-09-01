---
title: "Object References"
description: |
  Object references can point to instances of classes(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_glosry.htm 'Glossary Entry'). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement C
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_reference_type.htm"
abapFile: "abenobject_reference_type.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "abenobject", "reference", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Object%20References%2C%20ABENOBJECT_REFERENCE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Object References

Object references can point to instances of [classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_glosry.htm "Glossary Entry"). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object.htm).

-   Class reference variables allow access to all visible components of a class.
-   Interface reference variables restrict the view of the [interface components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_component_glosry.htm "Glossary Entry") of a class.

If an attempt is made to access an instance attribute using an object reference variable that contains the [null reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_reference_glosry.htm "Glossary Entry"), an uncatchable exception is raised. A catchable exception is raised when an instance method is called.

Object references are always [heap references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry").

Hint

For more information, see [Object References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreferences.htm).

Example

Inline declaration of an object reference variable out with the static type IF\_DEMO\_OUTPUT on the left side of an object of the class CL\_DEMO\_OUTPUT created using its factory method NEW. Calling of the method DISPLAY using the object component selector.

FINAL(out) = cl\_demo\_output=>new( ).
out->display( \`Hello\` ).