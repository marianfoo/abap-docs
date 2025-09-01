  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_references.htm) → 

Heap References and Stack References

The objects referenced by references can be in the [heap](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheap_glosry.htm "Glossary Entry") or in the [stack](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstack_glosry.htm "Glossary Entry"). Objects in the heap are instances of classes or are [anonymous data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry"). Objects in the stack are the global data objects of programs and the local data objects of procedures stacked there.

-   Heap references point to objects or parts of objects in the heap
    
    Heap references are object references or data references. They are created either when new objects are created in the heap using the statements [CREATE OBJECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object.htm) or [CREATE DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data.htm), or when applying the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_reference.htm) or the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table_outdesc.htm) to data objects in the heap. Heap references are always memory-preserving, which means that for as long as a heap reference points to an object or a part of an object, it is not deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengarbage_collector_glosry.htm "Glossary Entry").
    
-   Stack references point to objects or parts of objects in the stack
    
    Stack references are always data references and are created exclusively by applying the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_reference.htm), the reference operator [REF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_ref.htm), or the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table_outdesc.htm) to data objects in the stack. Stack references are not memory-preserving.
    

A non-initial object reference always points to an instance of a class and is therefore always a heap reference. A data reference can be a heap reference or a stack reference:

-   A data reference is a heap reference if it
    -   points to an instance attribute or a part of an instance attribute of an object,
    -   points to an anonymous data object or a part of an anonymous data object.
-   A data reference that points to a data object or a part of a data object in the stack is a stack reference.

A part of a data object is either a [component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_glosry.htm "Glossary Entry") of a structure, a line of an [internal table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm "Glossary Entry"), or a subarea specified by an [offset/length](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry").

Heap references preserve memory and therefore cannot become invalid, with one exception: a heap reference to a line of an internal table becomes invalid if the table line is deleted. Stack references also become invalid if the referenced data object is removed from the stack, that is, when the associated procedure ends. The latter also applies to the local data in instance methods. The [predicate expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS BOUND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_bound.htm) for an invalid reference is false.

Hints

-   For [field symbols](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield_symbol_glosry.htm "Glossary Entry"), the same applies in regard to preserving memory and validity as to data references. Field symbols to which objects or parts of objects are assigned in the heap are memory-preserving.
-   Internal tables are [dynamic data objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") and have a special role because they have their own memory management, which occupies and releases memory regardless of the statement CREATE and Garbage Collector. This means that heap references that point to lines in internal tables can become invalid. This is not the case for strings, since no references to substrings of strings are allowed.
-   Whether a reference is classified as a heap reference or a stack reference is determined by its value and not by the type of the reference variable in which it is stored. Assignments between reference variables in particular do not change the corresponding properties of the copied references.

Example

The heap reference heap\_ref on the [stack](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstack_glosry.htm "Glossary Entry") points to an anonymous data object in the [heap](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheap_glosry.htm "Glossary Entry"). The stack reference stack\_ref also on the stack points to heap\_ref.

DATA(heap\_ref)  = NEW i( 111 ).
DATA(stack\_ref) = REF #( heap\_ref ).