  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) → 

References

References are pointers to instances. Pointers to data objects are known as [data references](javascript:call_link\('abendata_reference_glosry.htm'\) "Glossary Entry"). Pointers to instances of classes are known as [object references](javascript:call_link\('abendata_reference_glosry.htm'\) "Glossary Entry"). In ABAP, references occur as the content of reference variables. Reference variables are data objects whose data type is a reference type.

Reference types are always created using the addition [REF TO](javascript:call_link\('abaptypes_references.htm'\)). The content of reference variables can be checked using the predicate expression [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)).

The reference type is the static type of a reference variable. It defines the types of the instances to which its references can point. The dynamic type of a reference variable is the type from which an object (to which a reference variable points) was instantiated. The static type is always more general than or the same as the dynamic type. A dynamic type can be a data type or a class. A reference type or static type can be a type for a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") or [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry"). The latter is subdivided into [class reference variables](javascript:call_link\('abenclass_reference_variabl_glosry.htm'\) "Glossary Entry") and [interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry").

Special [conversion rules](javascript:call_link\('abenconversion_references.htm'\)) apply to assignments between reference variables, depending on the static type. These rules ensure that the dynamic type is never more general than the static type (in [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry")s, and [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry")s).

Depending on where the object referenced by a reference variable is located, memory-preserving [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") or non-memory-preserving [stack references](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry") are used. Special [weak references](javascript:call_link\('abenweak_reference_glosry.htm'\) "Glossary Entry"), which are represented by objects of a system class, do not keep an object alive.

-   [Data references](javascript:call_link\('abendata_reference_type.htm'\))

-   [Object references](javascript:call_link\('abenobject_reference_type.htm'\))

-   [Heap references and stack references](javascript:call_link\('abenheap_stack_reference.htm'\))

-   [Weak references](javascript:call_link\('abencl_abap_weak_reference.htm'\))

A reference in a reference variable is valid if it points to an object. In this case the predicate expression [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)) is true. A non-initial reference can be invalid it it points to deleted objects. A [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") that points to a row in an internal table can become invalid if the row is deleted. A [stack reference](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry") can become invalid if the referenced data object is removed from the stack.

Notes

-   From a technical point of view, a reference in ABAP does not reference an object directly and instead references what is known as a header, which contains the address of the actual object as well as additional information. See also [Memory Management of Deep Data Objects](javascript:call_link\('abenmemory_consumption.htm'\)).

-   Internally, [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry"), [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), and [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") are also addressed using references (however these references do not appear as the content of reference variables).

Continue
[Data References](javascript:call_link\('abendata_reference_type.htm'\))
[Object References](javascript:call_link\('abenobject_reference_type.htm'\))
[Heap References and Stack References](javascript:call_link\('abenheap_stack_reference.htm'\))
[Weak References](javascript:call_link\('abencl_abap_weak_reference.htm'\))