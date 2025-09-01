  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [ABAP Objects - Methods](javascript:call_link\('abenmethods.htm'\)) →  [METHODS](javascript:call_link\('abapmethods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20ABSTRACT%2C%20FINAL%2C%20ABAPMETHODS_ABSTRACT_FINAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, ABSTRACT, FINAL

[Short Reference](javascript:call_link\('abapmethods_shortref.htm'\))

Syntax

METHODS meth ... ABSTRACT*|*FINAL ...

Additions:

[1\. ... ABSTRACT](#!ABAP_ADDITION_1@1@)
[2\. ... FINAL](#!ABAP_ADDITION_2@2@)

Effect

The additions ABSTRACT and FINAL make an instance method abstract or final. They cannot be used in interfaces, only in classes. All instance methods can be declared as abstract except for instance constructors. The addition FINAL can be used in all variants of the statement METHODS.

Addition 1   

... ABSTRACT

Effect

The addition ABSTRACT defines an abstract method meth. The addition ABSTRACT is allowed only in abstract classes, not in interfaces. An abstract method is not implemented in the implementation part of its class. To implement an abstract method, it must be redefined in a [specific](javascript:call_link\('abenconcrete_glosry.htm'\) "Glossary Entry") subclass using the addition REDEFINITION. Private methods cannot be redefined and can therefore not be declared as abstract.

Hints

-   Abstract methods can also be defined in classes that are both abstract and final, but they can never be implemented and therefore are not usable.
-   Methods in interfaces are always implicitly abstract, because interfaces do not contain method implementations.
-   With the exception of the instance constructor, concrete instance methods of a class can also call their abstract methods.
-   Static methods cannot be redefined, and the addition ABSTRACT is not allowed in their declarations.

Example

Declaration of an abstract method of an abstract superclass and its implementation in a concrete subclass.

CLASS cls1 DEFINITION ABSTRACT.
  PROTECTED SECTION.
    METHODS meth ABSTRACT.
ENDCLASS.
CLASS cls2 DEFINITION INHERITING FROM cls1.
  PROTECTED SECTION.
    METHODS meth REDEFINITION.
ENDCLASS.
CLASS cls2 IMPLEMENTATION.
  METHOD meth.
    ...
  ENDMETHOD.
ENDCLASS.

Addition 2   

... FINAL

Effect

The addition FINAL defines a final method meth. The addition FINAL is allowed only in classes, not in interfaces. A final method cannot be redefined in a subclass. In final classes, all methods are automatically final and the addition FINAL is not allowed. An instance constructor [constructor](javascript:call_link\('abapmethods_constructor.htm'\)) is always final and FINAL can be specified but is not mandatory.

Hints

-   Static methods cannot be redefined, and the addition FINAL is not allowed in their declarations.
-   The addition FINAL closes a path of an inheritance tree with regards to the possibility to redefine the method.

Example

The final method get\_the\_truth of a superclass returns a value, which cannot be changed in a subclass. Method get\_opinion can be redefined in a subclass, but the subclass shown here prevents the method from being redefined in subclasses.

CLASS cls1 DEFINITION.
  PUBLIC SECTION.
    METHODS:
      get\_the\_truth FINAL
        RETURNING VALUE(truth) TYPE string,
      get\_opinion
        RETURNING VALUE(opinion) TYPE string.
ENDCLASS.
CLASS cls2 DEFINITION INHERITING FROM cls1.
  PUBLIC SECTION.
    METHODS get\_opinion FINAL REDEFINITION.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS cls1 IMPLEMENTATION.
  METHOD get\_the\_truth.
    truth = \`The final truth\`.
  ENDMETHOD.
  METHOD get\_opinion.
    opinion = \`Opinion of superclass\`.
  ENDMETHOD.
ENDCLASS.
CLASS cls2 IMPLEMENTATION.
  METHOD get\_opinion.
    opinion = \`Opinion of subclass\`.
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    FINAL(oref) = NEW cls2( ).
    cl\_demo\_output=>display(
      |{ oref->get\_the\_truth( ) }\\n{ oref->get\_opinion( ) }| ).
  ENDMETHOD.
ENDCLASS.