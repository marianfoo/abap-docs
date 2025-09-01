---
title: "References"
description: |
  References are pointers to instances. Pointers to data objects are known as data references(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_glosry.htm 'Glossary Entry'). Pointers to instances of classes are known as object references(https://help.sap.com/doc/abapdoc
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_references.htm"
abapFile: "abendata_references.htm"
keywords: ["delete", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abendata", "references"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects.htm) → 

References

References are pointers to instances. Pointers to data objects are known as [data references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_glosry.htm "Glossary Entry"). Pointers to instances of classes are known as [object references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_glosry.htm "Glossary Entry"). In ABAP, references occur as the content of reference variables. Reference variables are data objects whose data type is a reference type.

Reference types are always created using the addition [REF TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_references.htm). The content of reference variables can be checked using the predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_bound.htm).

The reference type is the static type of a reference variable. It defines the types of the instances to which its references can point. The dynamic type of a reference variable is the type from which an object (to which a reference variable points) was instantiated. The static type is always more general than or the same as the dynamic type. A dynamic type can be a data type or a class. A reference type or static type can be a type for a [data reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") or [object reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). The latter is subdivided into [class reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") and [interface reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry").

Special [conversion rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_references.htm) apply to assignments between reference variables, depending on the static type. These rules ensure that the dynamic type is never more general than the static type (in [up cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry")s, and [down cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry")s).

Depending on where the object referenced by a reference variable is located, memory-preserving [heap references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_reference_glosry.htm "Glossary Entry") or non-memory-preserving [stack references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstack_reference_glosry.htm "Glossary Entry") are used. Special [weak references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenweak_reference_glosry.htm "Glossary Entry"), which are represented by objects of a system class, do not keep an object alive.

-   [Data references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_type.htm)

-   [Object references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_reference_type.htm)

-   [Heap references and stack references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_stack_reference.htm)

-   [Weak references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_weak_reference.htm)

A reference in a reference variable is valid if it points to an object. In this case the predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_bound.htm) is true. A non-initial reference can be invalid it it points to deleted objects. A [heap reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_reference_glosry.htm "Glossary Entry") that points to a row in an internal table can become invalid if the row is deleted. A [stack reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstack_reference_glosry.htm "Glossary Entry") can become invalid if the referenced data object is removed from the stack.

Notes

-   From a technical point of view, a reference in ABAP does not reference an object directly and instead references what is known as a header, which contains the address of the actual object as well as additional information. See also [Memory Management of Deep Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption.htm).

-   Internally, [strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_glosry.htm "Glossary Entry"), [internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_table_glosry.htm "Glossary Entry"), and [boxed components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboxed_component_glosry.htm "Glossary Entry") are also addressed using references (however these references do not appear as the content of reference variables).

Continue
[Data References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_type.htm)
[Object References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_reference_type.htm)
[Heap References and Stack References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_stack_reference.htm)
[Weak References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_weak_reference.htm)