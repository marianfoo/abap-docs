  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Methods](javascript:call_link\('abenmethods.htm'\)) →  [METHODS](javascript:call_link\('abapmethods.htm'\)) → 

METHODS - constructor

[Quick Reference](javascript:call_link\('abapmethods_shortref.htm'\))

Syntax

METHODS constructor *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
  *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Extras:

[1\. ... IMPORTING parameters](#!ABAP_ADDITION_1@1@)
[2\. ... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...](#!ABAP_ADDITION_2@2@)
[3\. ... EXCEPTIONS exc1 exc2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... FINAL](#!ABAP_ADDITION_4@4@)

Effect

This statement declares the instance constructor constructor of a class. In a local class, it can be specified in all [visibility sections](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") that have more general instantiability than or the same instantiability specified in the [CREATE](javascript:call_link\('abapclass_options.htm'\)) addition of the statement [CLASS DEFINITION](javascript:call_link\('abapclass_definition.htm'\)):

 

CREATE PUBLIC

CREATE PROTECTED

CREATE PRIVATE

PUBLIC SECTION

X

X

X

PROTECTED SECTION

\-

X

X

PRIVATE SECTION

\-

\-

X

In a global class, the instance constructor must always be declared in the public visibility section, for technical reasons. In principle, the constructor can be declared in the same visibility sections as in the table above, however this can cause unexpected syntax errors when the class is used, due to the way it is organized internally.

Each class has a predefined method called constructor. By declaring this explicitly, the interface of the method constructor can be defined specifically for a class, and its functions can be implemented. Without explicit declaration, the instance constructor assumes the parameter interface of the direct superclass, and calls it implicitly.

If the instance constructor is implemented in a subclass, the instance constructor of the superclass must be called explicitly using [super->constructor](javascript:call_link\('abapcall_method_meth_super.htm'\)), even if the latter is not explicitly declared. The only exceptions to this are direct subclasses of the root node object. The following restrictions apply before the superclass constructor is called:

-   The instance constructor does not have access to the instance components of its class. The self-reference [me->](javascript:call_link\('abenme.htm'\)) cannot be used. The static components of its class can be accessed only directly.
    
-   Befor the superclass constructor is called, an instance constructor cannot be exited using statements such as RETURN or CHECK.
    

After the superclass constructure has been called, the self-reference me-> can be used and instance components can be accessed.

For each instance of a class, the instance constructor is called only once using the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) immediately after it has been created. For the call, appropriate actual parameters must be assigned to all non-optional input parameters, return codes can be assigned to non-class-based exceptions, and class-based exceptions can be declared. It is not possible to call the instance constructor explicitly, except when calling the superclass constructors using super->constructor in the redefined constructor of a subclass.

When an instance constructor is executed, the current instance temporarily assumes the type of the class in which the constructor is defined. This has the following consequences:

-   If methods are called when a superclass constructor is executed, the implementations of the superclass are executed and not the redefinitions of subclasses. When specified for addressing a redefined method in a subclass that has just been created, me-> is ignored.
    
-   Abstract methods of the same class cannot be called in an instance constructor.
    
-   When a superclass constructor is executed, attempts to access components of the subclass using a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") produce a runtime error.
    
-   While the superclass constructor is being executed, the predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) is true for the current superclass and is not true for the subclass that has just been created.
    

Programming Guideline

[Declare the instance constructor in the public visibility section.](javascript:call_link\('abeninstance_constructor_guidl.htm'\) "Guideline")

Notes

-   Instance constructors are an exception to the rule that all public components on a path in the inheritance hierarchy are in the same namespace. The instance constructor of each class has its own interface and its own implementation. An instance constructor cannot be redefined.
    
-   Instance constructors are declared in the public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of a class purely for technical reasons. The actual visibility is controlled by the addition CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}* of the statement [CLASS DEFINITION](javascript:call_link\('abapclass_definition.htm'\)). It is advisable to declare the instance constructor of a local class in the visibility section which matches its instantiability, because this allows the components declared there to be used in the constructor interface. For global classes, only the public section is feasible, however.
    
-   Before the superclass constructor is called, static components of the same class cannot be accessed using me-> in the instance constructor of a subclass. Access to the components without using me-> or using the class name and the class component selector \=> is always possible.
    

Addition 1

... IMPORTING parameters

Addition 2

... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...

Addition 3

... EXCEPTIONS exc1 exc2 ...

Effect

The addition IMPORTING can be used to define input parameters according to the same rules as for general methods. The additions RAISING and EXCEPTIONS for the declaration of class-based exceptions or the definition of non-class-based exceptions also have the same meaning as for general methods.

Note

When the instance constructor is executed, the same applies for [resumable exceptions](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry") as for all other methods. If processing can be resumed successfully, the creation of the object can also be resumed.

Addition 4

... FINAL

Effect

Instance constructors are implicitly final. The addition [FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\)) can be specified, but it is not necessary.

Example

The class c3 inherits from class c2, which inherits from class c1. The instance constructor constructor is explicitly declared in all classes and must be implemented in all classes. The implementation in a subclass must contain the call of the superclass constructor. The predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) shows that every instance constructor for an instance of its own class is executed for the instantiation of an object of class c3.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    METHODS constructor.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    METHODS constructor.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
  PUBLIC SECTION.
    METHODS constructor.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD constructor.
    IF me IS INSTANCE OF c1.
      cl\_demo\_output=>write( 'C1' ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    IF me IS INSTANCE OF c2.
      cl\_demo\_output=>write( 'C2' ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
CLASS c3 IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    IF me IS INSTANCE OF c3.
      cl\_demo\_output=>write( 'C3' ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW c3( ).
  cl\_demo\_output=>display( ).