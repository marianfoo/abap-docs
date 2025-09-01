  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) → 

CLASS, DEFINITION

[Short Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

CLASS class DEFINITION *\[*[class\_options](javascript:call_link\('abapclass_options.htm'\))*\]*.
  *\[*[PUBLIC SECTION](javascript:call_link\('abappublic.htm'\)).
    *\[*[components](javascript:call_link\('abenclass_component.htm'\))*\]**\]*
  *\[*[PROTECTED SECTION](javascript:call_link\('abapprotected.htm'\)).
    *\[*[components](javascript:call_link\('abenclass_component.htm'\))*\]**\]*
  *\[*[PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)).
    *\[*[components](javascript:call_link\('abenclass_component.htm'\))*\]**\]*
ENDCLASS.

Effect

The statement block CLASS class DEFINITION - ENDCLASS declares a class named class. [Naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name class. The components [components](javascript:call_link\('abenclass_component.htm'\)) of the class are declared between CLASS and ENDCLASS. Each component must be listed in a [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") after one of the statements PUBLIC SECTION, PROTECTED SECTION, or PRIVATE SECTION which must be specified in the order above. The class does not need to contain all the SECTION statements.

The [class options](javascript:call_link\('abapclass_options.htm'\)) additions of the statement CLASS can be used to publish a class globally in the class library, define an inheritance relationship, make the class abstract or final, control instantiability, and offer [friendship](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry") to other classes or interfaces.

Hints

-   The class is the smallest encapsulation unit in ABAP Objects. A method can therefore use all components of all instances of the same class in addition to the components of its own instance. An exception to this rule are subclasses that cannot access the private components of superclasses if they are not their [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry").
-   The declaration part of a class can only be specified in the context described under [CLASS](javascript:call_link\('abapclass.htm'\)).

Example

Declaration part of a class with statements for declaring [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") and [instance components](javascript:call_link\('abeninstance_component_glosry.htm'\) "Glossary Entry").

CLASS cls DEFINITION FINAL.
  PUBLIC SECTION.
    TYPES:
      type1 TYPE ...
    CLASS-DATA:
      attr1 TYPE ...
    ...
    CLASS-METHODS:
      meth1 ...
    ...
    CLASS-EVENTS:
       evt1 ...
    ...
    DATA:
      attr2 TYPE ...
    ...
    METHODS:
      meth2 ...
    ...
    EVENTS:
       evt2 ...
    ...
ENDCLASS.

Continue
[CLASS, class\_options](javascript:call_link\('abapclass_options.htm'\))
[PUBLIC SECTION](javascript:call_link\('abappublic.htm'\))
[PROTECTED SECTION](javascript:call_link\('abapprotected.htm'\))
[PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\))
[CLASS, components](javascript:call_link\('abenclass_component.htm'\))