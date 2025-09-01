  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Predefined Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Objects](javascript:call_link\('abenbuilt_in_objects.htm'\)) → 

The Self-Reference me

Within the implementation of every instance method, an implicitly created local reference variable called me is available, which points to the instance in which the method is currently being executed. me is handled like a local constant, which means that the value of me cannot be modified in an instance method. The static type of me is the class in which the instance method is implemented.

The name me is reserved and cannot be used in a class for attributes, formal parameters, and local data objects.

Note

When an object is created, me also points to the instance of the new subclass when an [instance constructor](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") of a superclass called using [super->constructor](javascript:call_link\('abapcall_method_meth_super.htm'\)) is executed. In the instance constructor of the superclass, or in methods called by the instance constructor, me-> is ignored in the method call if specified. Instead, the method implementations of the superclass are always called.

Example

Accesses identically named data objects of a class in a method. If specified on its own, str indicates the local data object of the method. The self reference me is used to access the instance attribute str of the method.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS meth.
  PRIVATE SECTION.
    DATA str TYPE string VALUE \`attr\`.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    DATA str TYPE string VALUE \`local\`.
    cl\_demo\_output=>display( |{ str }\\n{
                                me->str }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW cls( )->meth( ).