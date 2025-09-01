# ABAP - Keyword Documentation / ABAP - Programming Language / Data Types and Data Objects / Data Objects / References

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abendata_references.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm)
- [abendata_reference_type.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_type.htm)
- [abenobject_reference_type.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_reference_type.htm)
- [abenheap_stack_reference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_stack_reference.htm)
- [abencl_abap_weak_reference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_weak_reference.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.951Z

---

### abendata_references.htm

> **📖 Official SAP Documentation**: [abendata_references.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abendata_references.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20References%2C%20ABENDATA_REFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

References

References are pointers to instances. Pointers to data objects are [data references](javascript:call_link\('abendata_reference_glosry.htm'\) "Glossary Entry"). Pointers to instances of classes are [object references](javascript:call_link\('abendata_reference_glosry.htm'\) "Glossary Entry"). References occur in ABAP as the content of reference variables. Reference variables are data objects whose data type is a reference type.

Reference types are always created using the addition [REF TO](javascript:call_link\('abaptypes_references.htm'\)). The content of reference variables can be checked using the predicate expression [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)).

The reference type is the static type of a reference variable. It defines to which types of instances its references can point. The dynamic type of a reference variable is the type from which an object was instantiated to which a reference variable points. The static type is always more general than or the same as the dynamic type. A dynamic type can be a data type or a class. A reference type or static type can be a type for a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") or an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry"). The latter are subdivided into [class reference variables](javascript:call_link\('abenclass_reference_variabl_glosry.htm'\) "Glossary Entry") and [interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry").

Special [conversion rules](javascript:call_link\('abenconversion_references.htm'\)) apply to assignments between reference variables, depending on the static type. These rules ensure that the dynamic type is never more general than the static type ([upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry"), [downcast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry")).

Depending on where the object referenced by a reference variable is stored, memory-preserving [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") or non-memory-preserving [stack references](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry") can be distinguished. Special [weak references](javascript:call_link\('abenweak_reference_glosry.htm'\) "Glossary Entry") that are represented by objects of a system class, do not keep an object alive.

-   [Data references](javascript:call_link\('abendata_reference_type.htm'\))
-   [Object references](javascript:call_link\('abenobject_reference_type.htm'\))
-   [Heap references and stack references](javascript:call_link\('abenheap_stack_reference.htm'\))
-   [Weak references](javascript:call_link\('abencl_abap_weak_reference.htm'\))

A reference in a reference variable is valid if it points to an object. For this, the predicate expression [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)) is true. A non-initial reference can be invalid if it points to deleted objects. A [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") that points to a line in an internal table can become invalid if the line is deleted. A [stack reference](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry") can become invalid if the referenced data object is removed from the stack.

Hints

-   From a technical perspective, a reference in ABAP does not refer directly to an object but to a header instead, which contains the address of the actual object and other administrative information. See also [Memory Management of Deep Data Objects](javascript:call_link\('abenmemory_consumption.htm'\)).
-   Internally, [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry"), [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), and [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") are also addressed using references, which do not appear as the content of reference variables.

Continue
[Data References](javascript:call_link\('abendata_reference_type.htm'\))
[Object References](javascript:call_link\('abenobject_reference_type.htm'\))
[Heap References and Stack References](javascript:call_link\('abenheap_stack_reference.htm'\))
[Weak References](javascript:call_link\('abencl_abap_weak_reference.htm'\))



**📖 Source**: [abendata_references.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_references.htm)

### abendata_reference_type.htm

> **📖 Official SAP Documentation**: [abendata_reference_type.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abendata_reference_type.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [References](javascript:call_link\('abendata_references.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20References%2C%20ABENDATA_REFERENCE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data References

Data references can point to any data objects or to their parts (components, lines of internal tables, or subareas determined by offset or length specifications). The static type of their reference variables is either the built-in generic type data or any non-generic data type. Data reference variables can be used with the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) for static and in the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) for dynamic creation of data objects. The statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) and the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) can be used to write references to existing data objects in data reference variables. When internal tables are processed, most statements have the addition [REFERENCE INTO](javascript:call_link\('abapread_table_outdesc.htm'\)), to set references to table lines.

The [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") [\->\*](javascript:call_link\('abendereferencing_operator.htm'\)) is used to access the data object to which a data reference points.

Data references can be [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") or [stack references](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry").

Programming Guideline

[Using field symbols and data references appropriately](javascript:call_link\('abendyn_access_data_obj_guidl.htm'\) "Guideline")

Example

Inline declaration of a data reference variable dref with the static type scarr on the left side of a corresponding anonymous data object created on the [heap](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry"). Uses the dereferencing operator \->\* to access the entire data object and the object component selector \-> to access a component.

FINAL(dref) = NEW scarr( ).
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display\_data( dref->carrid ).



**📖 Source**: [abendata_reference_type.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_type.htm)

### abenobject_reference_type.htm

> **📖 Official SAP Documentation**: [abenobject_reference_type.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_reference_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenobject_reference_type.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_reference_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [References](javascript:call_link\('abendata_references.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Object%20References%2C%20ABENOBJECT_REFERENCE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Object References

Object references can point to instances of [classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry"). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)).

-   Class reference variables allow access to all visible components of a class.
-   Interface reference variables restrict the view of the [interface components](javascript:call_link\('abeninterface_component_glosry.htm'\) "Glossary Entry") of a class.

If an attempt is made to access an instance attribute using an object reference variable that contains the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry"), an uncatchable exception is raised. A catchable exception is raised when an instance method is called.

Object references are always [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry").

Hint

For more information, see [Object References](javascript:call_link\('abenreferences.htm'\)).

Example

Inline declaration of an object reference variable out with the static type IF\_DEMO\_OUTPUT on the left side of an object of the class CL\_DEMO\_OUTPUT created using its factory method NEW. Calling of the method DISPLAY using the object component selector.

FINAL(out) = cl\_demo\_output=>new( ).
out->display( \`Hello\` ).



**📖 Source**: [abenobject_reference_type.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_reference_type.htm)

### abenheap_stack_reference.htm

> **📖 Official SAP Documentation**: [abenheap_stack_reference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_stack_reference.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenheap_stack_reference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_stack_reference.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [References](javascript:call_link\('abendata_references.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Heap%20References%20and%20Stack%20References%2C%20ABENHEAP_STACK_REFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Heap References and Stack References

The objects referenced by references can be in the [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry") or in the [stack](javascript:call_link\('abenstack_glosry.htm'\) "Glossary Entry"). Objects in the heap are instances of classes or are [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry"). Objects in the stack are the global data objects of programs and the local data objects of procedures stacked there.

-   Heap references point to objects or parts of objects in the heap
    
    Heap references are object references or data references. They are created either when new objects are created in the heap using the statements [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) or [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)), or when applying the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) or the addition [REFERENCE INTO](javascript:call_link\('abapread_table_outdesc.htm'\)) to data objects in the heap. Heap references are always memory-preserving, which means that for as long as a heap reference points to an object or a part of an object, it is not deleted by the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry").
    
-   Stack references point to objects or parts of objects in the stack
    
    Stack references are always data references and are created exclusively by applying the statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)), the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)), or the addition [REFERENCE INTO](javascript:call_link\('abapread_table_outdesc.htm'\)) to data objects in the stack. Stack references are not memory-preserving.
    

A non-initial object reference always points to an instance of a class and is therefore always a heap reference. A data reference can be a heap reference or a stack reference:

-   A data reference is a heap reference if it
    -   points to an instance attribute or a part of an instance attribute of an object,
    -   points to an anonymous data object or a part of an anonymous data object.
-   A data reference that points to a data object or a part of a data object in the stack is a stack reference.

A part of a data object is either a [structure component](javascript:call_link\('abenstructure_component_glosry.htm'\) "Glossary Entry"), a line of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), or a subarea specified by an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry").

Heap references preserve memory and therefore cannot become invalid, with one exception: a heap reference to a line of an internal table becomes invalid if the table line is deleted. Stack references also become invalid if the referenced data object is removed from the stack, that is, when the associated procedure ends. The latter also applies to the local data in instance methods. The [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)) for an invalid reference is false.

Hints

-   For [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry"), the same applies in regard to preserving memory and validity as to data references. Field symbols to which objects or parts of objects are assigned in the heap are memory-preserving.
-   Internal tables are [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry") and have a special role because they have their own memory management, which occupies and releases memory regardless of the statement CREATE and Garbage Collector. This means that heap references that point to lines in internal tables can become invalid. This is not the case for strings, since no references to substrings of strings are allowed.
-   Whether a reference is classified as a heap reference or a stack reference is determined by its value and not by the type of the reference variable in which it is stored. Assignments between reference variables in particular do not change the corresponding properties of the copied references.

Example

The heap reference heap\_ref on the [stack](javascript:call_link\('abenstack_glosry.htm'\) "Glossary Entry") points to an anonymous data object in the [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry"). The stack reference stack\_ref also on the stack points to heap\_ref.

FINAL(heap\_ref)  = NEW i( 111 ).
FINAL(stack\_ref) = REF #( heap\_ref ).



**📖 Source**: [abenheap_stack_reference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_stack_reference.htm)

### abencl_abap_weak_reference.htm

> **📖 Official SAP Documentation**: [abencl_abap_weak_reference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_weak_reference.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abencl_abap_weak_reference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_weak_reference.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencl_abap_weak_reference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_weak_reference.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [References](javascript:call_link\('abendata_references.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Weak%20References%2C%20ABENCL_ABAP_WEAK_REFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Weak References

An object in the system class CL\_ABAP\_WEAK\_REFERENCE represents a [weak reference](javascript:call_link\('abenweak_reference_glosry.htm'\) "Glossary Entry") to an object in a class. Unlike regular [object references](javascript:call_link\('abenobject_reference_glosry.htm'\) "Glossary Entry"), a weak reference is ignored when the [garbage collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") is executed. This means that a weak reference does not keep the referenced object from being deleted when the garbage collector is executed.

A weak reference to an existing object is created by passing an object reference to the instance constructor of CL\_ABAP\_WEAK\_REFERENCE. The [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") GET can then be used to retrieve the reference afterwards. If the object was deleted in the meantime, the return value is initial.

Hint

A different type of reference keeps objects alive until the available memory becomes limited. The class CL\_ABAP\_SOFT\_REFERENCE is designed for these [soft references](javascript:call_link\('abensoft_reference_glosry.htm'\) "Glossary Entry"), but this class is currently still implemented like the class CL\_ABAP\_WEAK\_REFERENCE.

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
