  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [References](javascript:call_link\('abendata_references.htm'\)) → 

Heap References and Stack References

Die von Referenzen referenzierten Objekte können im [Heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry") oder im [Stack](javascript:call_link\('abenstack_glosry.htm'\) "Glossary Entry") liegen. Objects in the heap are instances of classes or are [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry"). Objects in the stack are the global data objects of programs and the local data objects of procedures stacked there.

-   Heap references point to objects or parts of objects in the heap

Heap references are object references or data references. They are created either when new objects are created in the heap (using the statements [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) or [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\))) or by applying the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) or the addition [REFERENCE INTO](javascript:call_link\('abapread_table_outdesc.htm'\)) to data objects in the heap. Heap references are always memory-preserving, which means that, as long as a heap reference points to an object or a part of an object, the object is not deleted by [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry").

-   Stack references point to objects or parts of objects in the stack

Stack references are always data references and are created only by applying the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)), the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)), or the addition [REFERENCE INTO](javascript:call_link\('abapread_table_outdesc.htm'\)) to data objects in the stack. Stack references are not memory-preserving.

A non-initial object reference always points to an instance of a class, which means it is always a heap reference. A data reference can be a heap reference or a stack reference:

-   A data reference is a heap reference in the following cases:

-   If it points to an instance attribute or a part of an instance attribute of an object

-   If it points to an anonymous data object or a part of an anonymous data object

-   A data reference that points to a data object or a part of a data object in the stack is a stack reference.

A part of a data object is either a [component](javascript:call_link\('abencomponent_glosry.htm'\) "Glossary Entry") of a structure, a row of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), or a section specified by an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry").

Heap references preserve the memory and cannot become invalid, with one exception: a heap reference to a row in an internal table becomes invalid if the table row is deleted. Stack references also become invalid if the referenced data object is removed from the stack (that is, if the associated procedure is ended). The latter also applies to the local data in instance methods. The [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)) for an invalid reference is false.

Notes

-   [Field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") have the same properties with respect to preserving memory and validity as data references. Field symbols to which objects or parts of objects are assigned in the heap are memory-preserving.

-   Internal tables are [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry") and have a special role because they have their own memory management. They allocate and release memory regardless of the statement CREATE and Garbage Collector. This means that heap references to rows in internal tables can become invalid. This is not the case for strings, since no references to substrings of strings are allowed.

-   A reference is classified as a heap reference or a stack reference depending on its value only, and not by the type of the reference variable in which it is stored. In particular, assignments between reference variables do not change the relevant properties of the copied references.

Example

The heap reference heap\_ref located on the [stack](javascript:call_link\('abenstack_glosry.htm'\) "Glossary Entry") points to an anonymous data object in the [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry"). The stack reference stack\_ref also on the stack points to heap\_ref.

DATA(heap\_ref)  = NEW i( 111 ).
DATA(stack\_ref) = REF #( heap\_ref ).