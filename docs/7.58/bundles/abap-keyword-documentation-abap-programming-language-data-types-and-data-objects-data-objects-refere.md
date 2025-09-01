# ABAP - Keyword Documentation / ABAP - Programming Language / Data Types and Data Objects / Data Objects / References

Included pages: 5


### abendata_references.htm

---
title: "References"
description: |
  References are pointers to instances. Pointers to data objects are data references(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_glosry.htm 'Glossary Entry'). Pointers to instances of classes are object references(https://help.sap.com/doc/abapdocu_758_index_htm/7.
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm"
abapFile: "abendata_references.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "types", "internal-table", "abendata", "references"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20References%2C%20ABENDATA_REFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

References

References are pointers to instances. Pointers to data objects are [data references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_glosry.htm "Glossary Entry"). Pointers to instances of classes are [object references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_glosry.htm "Glossary Entry"). References occur in ABAP as the content of reference variables. Reference variables are data objects whose data type is a reference type.

Reference types are always created using the addition [REF TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_references.htm). The content of reference variables can be checked using the predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_bound.htm).

The reference type is the static type of a reference variable. It defines to which types of instances its references can point. The dynamic type of a reference variable is the type from which an object was instantiated to which a reference variable points. The static type is always more general than or the same as the dynamic type. A dynamic type can be a data type or a class. A reference type or static type can be a type for a [data reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") or an [object reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). The latter are subdivided into [class reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") and [interface reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry").

Special [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_references.htm) apply to assignments between reference variables, depending on the static type. These rules ensure that the dynamic type is never more general than the static type ([upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry"), [downcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry")).

Depending on where the object referenced by a reference variable is stored, memory-preserving [heap references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry") or non-memory-preserving [stack references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_reference_glosry.htm "Glossary Entry") can be distinguished. Special [weak references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenweak_reference_glosry.htm "Glossary Entry") that are represented by objects of a system class, do not keep an object alive.

-   [Data references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_type.htm)
-   [Object references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_reference_type.htm)
-   [Heap references and stack references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_stack_reference.htm)
-   [Weak references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_weak_reference.htm)

A reference in a reference variable is valid if it points to an object. For this, the predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_bound.htm) is true. A non-initial reference can be invalid if it points to deleted objects. A [heap reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry") that points to a line in an internal table can become invalid if the line is deleted. A [stack reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_reference_glosry.htm "Glossary Entry") can become invalid if the referenced data object is removed from the stack.

Hints

-   From a technical perspective, a reference in ABAP does not refer directly to an object but to a header instead, which contains the address of the actual object and other administrative information. See also [Memory Management of Deep Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption.htm).
-   Internally, [strings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_glosry.htm "Glossary Entry"), [internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry"), and [boxed components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboxed_component_glosry.htm "Glossary Entry") are also addressed using references, which do not appear as the content of reference variables.

Continue
[Data References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_type.htm)
[Object References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_reference_type.htm)
[Heap References and Stack References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_stack_reference.htm)
[Weak References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_weak_reference.htm)


### abendata_reference_type.htm

---
title: "Data References"
description: |
  Data references can point to any data objects or to their parts (components, lines of internal tables, or subareas determined by offset or length specifications). The static type of their reference variables is either the built-in generic type data or any non-generic data type. Data reference variab
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_type.htm"
abapFile: "abendata_reference_type.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abendata", "reference", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20References%2C%20ABENDATA_REFERENCE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data References

Data references can point to any data objects or to their parts (components, lines of internal tables, or subareas determined by offset or length specifications). The static type of their reference variables is either the built-in generic type data or any non-generic data type. Data reference variables can be used with the instance operator [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm) for static and in the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) for dynamic creation of data objects. The statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_reference.htm) and the reference operator [REF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_ref.htm) can be used to write references to existing data objects in data reference variables. When internal tables are processed, most statements have the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm), to set references to table lines.

The [dereferencing operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendereferencing_operat_glosry.htm "Glossary Entry") [\->\*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendereferencing_operator.htm) is used to access the data object to which a data reference points.

Data references can be [heap references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry") or [stack references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_reference_glosry.htm "Glossary Entry").

Programming Guideline

[Using field symbols and data references appropriately](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendyn_access_data_obj_guidl.htm "Guideline")

Example

Inline declaration of a data reference variable dref with the static type scarr on the left side of a corresponding anonymous data object created on the [heap](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry"). Uses the dereferencing operator \->\* to access the entire data object and the object component selector \-> to access a component.

FINAL(dref) = NEW scarr( ).
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display\_data( dref->carrid ).


### abenobject_reference_type.htm

---
title: "Object References"
description: |
  Object references can point to instances of classes(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_glosry.htm 'Glossary Entry'). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement CREATE
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_reference_type.htm"
abapFile: "abenobject_reference_type.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "abenobject", "reference", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Object%20References%2C%20ABENOBJECT_REFERENCE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Object References

Object references can point to instances of [classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_glosry.htm "Glossary Entry"). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm).

-   Class reference variables allow access to all visible components of a class.
-   Interface reference variables restrict the view of the [interface components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_component_glosry.htm "Glossary Entry") of a class.

If an attempt is made to access an instance attribute using an object reference variable that contains the [null reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_reference_glosry.htm "Glossary Entry"), an uncatchable exception is raised. A catchable exception is raised when an instance method is called.

Object references are always [heap references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry").

Hint

For more information, see [Object References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreferences.htm).

Example

Inline declaration of an object reference variable out with the static type IF\_DEMO\_OUTPUT on the left side of an object of the class CL\_DEMO\_OUTPUT created using its factory method NEW. Calling of the method DISPLAY using the object component selector.

FINAL(out) = cl\_demo\_output=>new( ).
out->display( \`Hello\` ).


### abenheap_stack_reference.htm

---
title: "Heap References and Stack References"
description: |
  The objects referenced by references can be in the heap(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_glosry.htm 'Glossary Entry') or in the stack(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_glosry.htm 'Glossary Entry'). Objects in the heap are inst
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_stack_reference.htm"
abapFile: "abenheap_stack_reference.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abenheap", "stack", "reference"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Heap%20References%20and%20Stack%20References%2C%20ABENHEAP_STACK_REFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Heap References and Stack References

The objects referenced by references can be in the [heap](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_glosry.htm "Glossary Entry") or in the [stack](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_glosry.htm "Glossary Entry"). Objects in the heap are instances of classes or are [anonymous data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry"). Objects in the stack are the global data objects of programs and the local data objects of procedures stacked there.

-   Heap references point to objects or parts of objects in the heap
    
    Heap references are object references or data references. They are created either when new objects are created in the heap using the statements [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) or [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm), or when applying the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_reference.htm) or the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm) to data objects in the heap. Heap references are always memory-preserving, which means that for as long as a heap reference points to an object or a part of an object, it is not deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengarbage_collector_glosry.htm "Glossary Entry").
    
-   Stack references point to objects or parts of objects in the stack
    
    Stack references are always data references and are created exclusively by applying the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_reference.htm), the reference operator [REF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_ref.htm), or the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm) to data objects in the stack. Stack references are not memory-preserving.
    

A non-initial object reference always points to an instance of a class and is therefore always a heap reference. A data reference can be a heap reference or a stack reference:

-   A data reference is a heap reference if it
    -   points to an instance attribute or a part of an instance attribute of an object,
    -   points to an anonymous data object or a part of an anonymous data object.
-   A data reference that points to a data object or a part of a data object in the stack is a stack reference.

A part of a data object is either a [structure component](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_component_glosry.htm "Glossary Entry"), a line of an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry"), or a subarea specified by an [offset/length](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry").

Heap references preserve memory and therefore cannot become invalid, with one exception: a heap reference to a line of an internal table becomes invalid if the table line is deleted. Stack references also become invalid if the referenced data object is removed from the stack, that is, when the associated procedure ends. The latter also applies to the local data in instance methods. The [predicate expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS BOUND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_bound.htm) for an invalid reference is false.

Hints

-   For [field symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry"), the same applies in regard to preserving memory and validity as to data references. Field symbols to which objects or parts of objects are assigned in the heap are memory-preserving.
-   Internal tables are [dynamic data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") and have a special role because they have their own memory management, which occupies and releases memory regardless of the statement CREATE and Garbage Collector. This means that heap references that point to lines in internal tables can become invalid. This is not the case for strings, since no references to substrings of strings are allowed.
-   Whether a reference is classified as a heap reference or a stack reference is determined by its value and not by the type of the reference variable in which it is stored. Assignments between reference variables in particular do not change the corresponding properties of the copied references.

Example

The heap reference heap\_ref on the [stack](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_glosry.htm "Glossary Entry") points to an anonymous data object in the [heap](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_glosry.htm "Glossary Entry"). The stack reference stack\_ref also on the stack points to heap\_ref.

FINAL(heap\_ref)  = NEW i( 111 ).
FINAL(stack\_ref) = REF #( heap\_ref ).


### abencl_abap_weak_reference.htm

---
title: "Weak References"
description: |
  An object in the system class CL_ABAP_WEAK_REFERENCE represents a weak reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenweak_reference_glosry.htm 'Glossary Entry') to an object in a class. Unlike regular object references(https://help.sap.com/doc/abapdocu_758_index_htm
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_weak_reference.htm"
abapFile: "abencl_abap_weak_reference.htm"
keywords: ["select", "delete", "do", "if", "try", "method", "class", "data", "types", "abencl", "abap", "weak", "reference"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Weak%20References%2C%20ABENCL_ABAP_WEAK_REFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Weak References

An object in the system class CL\_ABAP\_WEAK\_REFERENCE represents a [weak reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenweak_reference_glosry.htm "Glossary Entry") to an object in a class. Unlike regular [object references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_reference_glosry.htm "Glossary Entry"), a weak reference is ignored when the [garbage collector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengarbage_collector_glosry.htm "Glossary Entry") is executed. This means that a weak reference does not keep the referenced object from being deleted when the garbage collector is executed.

A weak reference to an existing object is created by passing an object reference to the instance constructor of CL\_ABAP\_WEAK\_REFERENCE. The [functional method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") GET can then be used to retrieve the reference afterwards. If the object was deleted in the meantime, the return value is initial.

Hint

A different type of reference keeps objects alive until the available memory becomes limited. The class CL\_ABAP\_SOFT\_REFERENCE is designed for these [soft references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensoft_reference_glosry.htm "Glossary Entry"), but this class is currently still implemented like the class CL\_ABAP\_WEAK\_REFERENCE.

Example

A weak reference is set to the object of the object reference variable oref, and the latter is then deleted. The weak reference points to the object for as long as the garbage collector is not executed. The return value is initial after the explicit call of the garbage collector.

CLASS demo DEFINITION.
ENDCLASS.
START-OF-SELECTION.
  DATA(oref) = NEW demo( ).
  FINAL(wref) = NEW cl\_abap\_weak\_reference( oref ).
  CLEAR oref.
  IF wref->get( ) IS NOT INITIAL.
    cl\_demo\_output=>write( 'Weak reference not initial' ).
  ENDIF.
  cl\_demo\_output=>write( 'Garbage collection' ).
  cl\_abap\_memory\_utilities=>do\_garbage\_collection( ).
  IF wref->get( ) IS INITIAL.
    cl\_demo\_output=>write( 'Weak reference initial' ).
  ENDIF.
cl\_demo\_output=>display( ).
