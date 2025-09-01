  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_objects.htm) → 

References

References are pointers to instances. Pointers to data objects are [data references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_reference_glosry.htm "Glossary Entry"). Pointers to instances of classes are [object references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_reference_glosry.htm "Glossary Entry"). References occur in ABAP as the content of reference variables. Reference variables are data objects whose data type is a reference type.

Reference types are always created using the addition [REF TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_references.htm). The content of reference variables can be checked using the predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_bound.htm).

The reference type is the static type of a reference variable. It defines to which types of instances its references can point. The dynamic type of a reference variable is the type from which an object was instantiated to which a reference variable points. The static type is always more general than or the same as the dynamic type. A dynamic type can be a data type or a class. A reference type or static type can be a type for a [data reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") or an [object reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). The latter are subdivided into [class reference variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") and [interface reference variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry").

Special [conversion rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_references.htm) apply to assignments between reference variables, depending on the static type. These rules ensure that the dynamic type is never more general than the static type ([up cast](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenup_cast_glosry.htm "Glossary Entry"), [down cast](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendown_cast_glosry.htm "Glossary Entry")).

Depending on where the object referenced by a reference variable is stored, memory-preserving [heap references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheap_reference_glosry.htm "Glossary Entry") or non-memory-preserving [stack references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstack_reference_glosry.htm "Glossary Entry") can be distinguished. Special [weak references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenweak_reference_glosry.htm "Glossary Entry") that are represented by objects of a system class, do not keep an object alive.

-   [Data references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_reference_type.htm)
-   [Object references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject_reference_type.htm)
-   [Heap references and stack references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheap_stack_reference.htm)
-   [Weak references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_weak_reference.htm)

A reference in a reference variable is valid if it points to an object. For this, the predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_bound.htm) is true. A non-initial reference can be invalid if it points to deleted objects. A [heap reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheap_reference_glosry.htm "Glossary Entry") that points to a line in an internal table can become invalid if the line is deleted. A [stack reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstack_reference_glosry.htm "Glossary Entry") can become invalid if the referenced data object is removed from the stack.

Hints

-   From a technical perspective, a reference in ABAP does not refer directly to an object but to a header instead, which contains the address of the actual object and other administrative information. See also [Memory Management of Deep Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmemory_consumption.htm).
-   Internally, [strings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_glosry.htm "Glossary Entry"), [internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm "Glossary Entry"), and [boxed components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenboxed_component_glosry.htm "Glossary Entry") are also addressed using references, which do not appear as the content of reference variables.

Continue
[Data References](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_reference_type.htm)
[Object References](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject_reference_type.htm)
[Heap References and Stack References](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheap_stack_reference.htm)
[Weak References](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_weak_reference.htm)