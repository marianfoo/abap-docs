  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) →  [Dynamic Method Call](javascript:call_link\('abenmethod_calls_dynamic.htm'\)) →  [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\)) → 

CALL METHOD - dynamic\_meth

[Quick Reference](javascript:call_link\('abapcall_method_shortref.htm'\))

Syntax

... (meth\_name)
  *|* oref->(meth\_name)
  *|* class=>(meth\_name)
  *|* (class\_name)=>(meth\_name)
  *|* (class\_name)=>meth ...

Extras:

[1\. ... (meth\_name) ...](#!ABAP_ADDITION_1@1@)
[2\. ... (class\_name) ...](#!ABAP_ADDITION_2@2@)

Alternatives:

[1\. ... (meth\_name) ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... oref->(meth\_name) ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... class=>(meth\_name) ...](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... (class\_name)=>(meth\_name) ...](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... (class\_name)=>meth ...](#!ABAP_ALTERNATIVE_5@5@)

Effect

These names are used to specify methods dynamically.

Addition 1

... (meth\_name) ...

Effect

meth\_name expects a character-like field that must contain the name of a method when the statement is executed.

Addition 2

... (class\_name) ...

Effect

class\_name expects a character-like field that must contain the name of a class in uppercase letters when the statement is executed. An [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") can also be specified. The following can be specified for class\_name:

-   Literal or constant
    

If the data object class\_name is specified as a character literal or as a constant, it can be evaluated statically and the specified class is identified as the used object.

-   Variable
    

If the data object class\_name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, class\_name is not evaluated until runtime (in both cases).

Alternative 1

... (meth\_name) ...

Effect

This variant is only possible for methods of the same class. It has the same effect as me->(meth\_name) (see alternative 2).

Alternative 2

... oref->(meth\_name) ...

Effect

This form may be used for all visible methods of objects. oref can be any [class reference variable](javascript:call_link\('abenclass_reference_variabl_glosry.htm'\) "Glossary Entry") or [interface reference variable](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") that points to an object containing the method or interface method specified in meth\_name. This method is searched for first in the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry"), then in the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of oref

Note

In the dynamic case too, only interface components can be accessed and it is not possible to use interface reference variable to access any type of component.

Alternative 3

... class=>(meth\_name) ...

Alternative 4

... (class\_name)=>(meth\_name) ...

Alternative 5

... (class\_name)=>meth ...

Effect

These forms are possible for all visible static methods. Both the class and method can be specified dynamically. The class class and the method meth can also be specified directly.

In the alternatives with a dynamic class name (class\_name), first the class is searched for, then the method. If class is specified statically, the search for the method is carried out in the existing class.

Notes

-   If, in class\_name, a class of another program is specified using an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"), this program is loaded into a new [additional program group](javascript:call_link\('abenadditional_prog_group_glosry.htm'\) "Glossary Entry") or into the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry"), depending on the program type (if not already loaded). If required, the [program constructor](javascript:call_link\('abenprogram_constructor_glosry.htm'\) "Glossary Entry") is also executed.
    
-   External calls of local class methods is [critical](javascript:call_link\('abenprogram_groups.htm'\)), especially for executable programs, module pools, and subroutine pools, since it is not usually possible to define statically to which program group the framework group is assigned.
    
-   Methods of local classes can be called externally only by specifying the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"). In the case of classes defined in an [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry"), the name of the include program cannot be used.
    

Example

This example demonstrates various types of dynamic method calls.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth1.
  PRIVATE SECTION.
    METHODS: meth2,
      meth3.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth1.
    DATA(oref) = NEW cls( ).
    DATA(meth) = \`METH2\`.
    CALL METHOD oref->(meth).
  ENDMETHOD.
  METHOD meth2.
    DATA(meth) = \`METH3\`.
    CALL METHOD (meth).
  ENDMETHOD.
  METHOD meth3.
    cl\_demo\_output=>display( 'called' ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(class) = \`CLS\`.
  DATA(meth) = \`METH1\`.
  CALL METHOD (class)=>(meth).