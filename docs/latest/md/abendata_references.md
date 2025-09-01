---
title: "References"
description: |
  References are pointers to instances. Pointers to data objects are data references(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_glosry.htm 'Glossary Entry'). Pointers to instances of classes are object references(https://help.sap.com/doc/abapdocu_latest_inde
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_references.htm"
abapFile: "abendata_references.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "types", "internal-table", "abendata", "references"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20References%2C%20ABENDATA_REFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

References

References are pointers to instances. Pointers to data objects are [data references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_glosry.htm "Glossary Entry"). Pointers to instances of classes are [object references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_glosry.htm "Glossary Entry"). References occur in ABAP as the content of reference variables. Reference variables are data objects whose data type is a reference type.

Reference types are always created using the addition [REF TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_references.htm). The content of reference variables can be checked using the predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bound.htm).

The reference type is the static type of a reference variable. It defines to which types of instances its references can point. The dynamic type of a reference variable is the type from which an object was instantiated to which a reference variable points. The static type is always more general than or the same as the dynamic type. A dynamic type can be a data type or a class. A reference type or static type can be a type for a [data reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") or an [object reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). The latter are subdivided into [class reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") and [interface reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry").

Special [conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_references.htm) apply to assignments between reference variables, depending on the static type. These rules ensure that the dynamic type is never more general than the static type ([upcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenup_cast_glosry.htm "Glossary Entry"), [downcast](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendown_cast_glosry.htm "Glossary Entry")).

Depending on where the object referenced by a reference variable is stored, memory-preserving [heap references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry") or non-memory-preserving [stack references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstack_reference_glosry.htm "Glossary Entry") can be distinguished. Special [weak references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenweak_reference_glosry.htm "Glossary Entry") that are represented by objects of a system class, do not keep an object alive.

-   [Data references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_type.htm)
-   [Object references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_reference_type.htm)
-   [Heap references and stack references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_stack_reference.htm)
-   [Weak references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_weak_reference.htm)

A reference in a reference variable is valid if it points to an object. For this, the predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bound.htm) is true. A non-initial reference can be invalid if it points to deleted objects. A [heap reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry") that points to a line in an internal table can become invalid if the line is deleted. A [stack reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstack_reference_glosry.htm "Glossary Entry") can become invalid if the referenced data object is removed from the stack.

Hints

-   From a technical perspective, a reference in ABAP does not refer directly to an object but to a header instead, which contains the address of the actual object and other administrative information. See also [Memory Management of Deep Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm).
-   Internally, [strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_glosry.htm "Glossary Entry"), [internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry"), and [boxed components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboxed_component_glosry.htm "Glossary Entry") are also addressed using references, which do not appear as the content of reference variables.

Continue
[Data References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_type.htm)
[Object References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_reference_type.htm)
[Heap References and Stack References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_stack_reference.htm)
[Weak References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_weak_reference.htm)