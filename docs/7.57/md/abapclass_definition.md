  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLASS, DEFINITION, ABAPCLASS_DEFINITION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

CLASS, DEFINITION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_shortref.htm)

Syntax

CLASS class DEFINITION *\[*[class\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm)*\]*.
  *\[*[PUBLIC SECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abappublic.htm).
    *\[*[components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_component.htm)*\]**\]*
  *\[*[PROTECTED SECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprotected.htm).
    *\[*[components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_component.htm)*\]**\]*
  *\[*[PRIVATE SECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprivate.htm).
    *\[*[components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_component.htm)*\]**\]*
ENDCLASS.

Effect

The statement block CLASS class DEFINITION - ENDCLASS declares a class named class. [Naming conventions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennaming_conventions.htm) apply to the name class. The components [components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_component.htm) of the class are declared between CLASS and ENDCLASS. Each component must be listed in a [visibility section](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvisibility_section_glosry.htm "Glossary Entry") after one of the statements PUBLIC SECTION, PROTECTED SECTION, or PRIVATE SECTION which must be specified in the order above. The class does not need to contain all the SECTION statements.

The [class options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm) additions of the statement CLASS can be used to publish a class globally in the class library, define an inheritance relationship, make the class abstract or final, control instantiability, and offer [friendship](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriend_glosry.htm "Glossary Entry") to other classes or interfaces.

Hints

-   The class is the smallest encapsulation unit in ABAP Objects. A method can therefore use all components of all instances of the same class in addition to the components of its own instance. An exception to this rule are subclasses that cannot access the private components of superclasses if they are not their [friends](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfriend_glosry.htm "Glossary Entry").
-   The declaration part of a class can only be specified in the context described under [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm).

Example

Declaration part of a class with statements for declaring [static components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_component_glosry.htm "Glossary Entry") and [instance components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_component_glosry.htm "Glossary Entry").

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
[CLASS, class\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm)
[PUBLIC SECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abappublic.htm)
[PROTECTED SECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprotected.htm)
[PRIVATE SECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprivate.htm)
[CLASS, components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_component.htm)