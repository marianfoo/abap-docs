  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethods.htm) →  [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20constructor%2C%20ABAPMETHODS_CONSTRUCTOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, constructor

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_shortref.htm)

Syntax

METHODS constructor *\[*[FINAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_abstract_final.htm)*\]*
  *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Additions:

[1\. ... IMPORTING parameters](#!ABAP_ADDITION_1@1@)
[2\. ... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...](#!ABAP_ADDITION_2@2@)
[3\. ... EXCEPTIONS exc1 exc2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... FINAL](#!ABAP_ADDITION_4@4@)

Effect

This statement declares the instance constructor constructor of a class. In a local class, it can be specified in all [visibility sections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm "Glossary Entry") that are more general than or equal to the instantiability specified in the [CREATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) addition of the statement [CLASS DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm):

 

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

In a global class, the instance constructor must always be declared in the public visibility section, for technical reasons. In principle, the declaration can be made in the same visibility sections as in the table above, however the internal organization of a global class can cause incorrect syntax errors when the class is used.

Each class has a predefined method called constructor. By declaring this explicitly, the interface of the method constructor can be defined as class-specific, and its functions can be implemented. Without explicit declaration, the instance constructor assumes the parameter interface of the direct superclass and calls it implicitly.

If the instance constructor is implemented in a subclass, the instance constructor of the superclass must be called explicitly using [super->constructor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_super.htm), even if the latter is not explicitly declared. The exception to this are direct subclasses of the root node object. The following restrictions apply before the superclass constructor is called:

-   The instance constructor does not have access to the instance components of its class. The self-reference [me->](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenme.htm) must not be used. The static components of its class can be accessed, but not using me->.
-   Before the superclass constructor is called, an instance constructor cannot be exited using statements such as RETURN or CHECK.

After the superclass constructor has been called, the self-reference me-> can be used and instance components can be accessed.

For each instance of a class, the instance constructor is called only once using the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) immediately after it has been created. Here, appropriate actual parameters must be assigned to all non-optional input parameters, return values can be assigned to non-class-based exceptions, and class-based exceptions can be declared. It is not possible to call the instance constructor explicitly, unless the superclass constructor is called using super->constructor in the redefined constructor of a subclass.

When an instance constructor is executed, the current instance is temporarily the type of the class in which the constructor is defined. This has the following effects:

-   If methods are called when a superclass constructor is executed, the implementations of the superclass are executed and not the redefinitions of subclasses. The specification of me-> to address a redefined method in the new subclass has no effect.
-   Abstract methods of the same class cannot be called in an instance constructor.
-   When a superclass constructor is executed, attempts to access components of the subclass using a [downcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry") produce a runtime error.
-   While the superclass constructor is being executed, the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_instance_of.htm) is true for the current superclass and not true for the subclass that has just been created.

Programming Guideline

[Declare the instance constructor in the public visibility section.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_constructor_guidl.htm "Guideline")

Hints

-   Instance constructors are an exception to the rule that all non-private components on a path in the inheritance hierarchy are in the same namespace. The instance constructor of each class has its own interface and its own implementation. An instance constructor cannot be redefined.
-   Instance constructors are declared in the public [visibility section](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of a class purely for technical reasons. The actual visibility is controlled by the addition CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}* of the statement [CLASS DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm). It is recommended that the instance constructor of a local class is declared in the visibility section that corresponds to the instantiability, because this allows the components declared there to be used in the constructor interface. However, for global classes, only the public section is possible.
-   Before the superclass constructor is called, static components of the same class cannot be accessed using me-> in the instance constructor of a subclass. However, access to the components without using me-> or using the class name and the class component selector \=> is always possible.

Addition 1   

... IMPORTING parameters

Addition 2   

... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...

Addition 3   

... EXCEPTIONS exc1 exc2 ...

Effect

The addition IMPORTING can be used to define input parameters according to the same rules as for general methods. The additions RAISING and EXCEPTIONS for the declaration of class-based exceptions or the definition of non-class-based exceptions also have the same meaning as for general methods.

Hint

When the instance constructor is executed, the same applies to [resumable exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresumable_exception_glosry.htm "Glossary Entry") as to all other methods. If processing can be resumed successfully, the system continues to create the object.

Addition 4   

... FINAL

Effect

Instance constructors are implicitly final. The addition [FINAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_abstract_final.htm) can be specified, but it is not necessary.

Example

The class c3 inherits from class c2, which inherits from class c1. The instance constructor constructor is explicitly declared in all classes and must be implemented in all classes, whereby the implementation in a subclass must contain the call of the superclass constructor. The predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_instance_of.htm) shows that every instance constructor for an instance of its own class is executed when an object of class c3 is instantiated.

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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
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
CLASS exa IMPLEMENTATION.
  METHOD main.
    NEW c3( ).
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.