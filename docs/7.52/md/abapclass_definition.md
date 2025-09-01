---
title: "CLASS - DEFINITION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_shortref.htm) Syntax CLASS class DEFINITION class_options(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_options.htm). PUBLIC SECTION(https://help.sap.com/doc/abapdocu_752_in
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_definition.htm"
abapFile: "abapclass_definition.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abapclass", "definition"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm) → 

CLASS - DEFINITION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_shortref.htm)

Syntax

CLASS class DEFINITION *\[*[class\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_options.htm)*\]*.
  *\[*[PUBLIC SECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abappublic.htm).
    *\[*[components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_component.htm)*\]**\]*
  *\[*[PROTECTED SECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprotected.htm).
    *\[*[components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_component.htm)*\]**\]*
  *\[*[PRIVATE SECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprivate.htm).
    *\[*[components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_component.htm)*\]**\]*
ENDCLASS.

Effect

The statement block CLASS class DEFINITION - ENDCLASS declares a class named class. [Naming conventions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennaming_conventions.htm) apply to the name class. [components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_component.htm) of the class are declared between CLASS and ENDCLASS. Each component must be included in a [visibility section](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvisibility_section_glosry.htm "Glossary Entry") after one of the statements PUBLIC SECTION, PROTECTED SECTION, or PRIVATE SECTION. These statements must be specified in the order above. The class does not need to include all the SECTION statements.

The [class options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_options.htm) additions of the statement CLASS can be used to publish a class globally in the class library, define an inheritance relationship, make the class abstract or final, control where the class can be instantiated, and offer [friendship](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfriend_glosry.htm "Glossary Entry") to other classes or interfaces.

Notes

-   The class is the smallest encapsulation unit in ABAP Objects. A method can therefore use all components of all instances of the same class apart from the components of its own instance. An exception to this rule are subclasses that cannot access the private components of superclasses, if they are not their [friends](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfriend_glosry.htm "Glossary Entry").
    
-   The declaration part of a class can only be specified in the context described under [CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm).
    

Example

Declaration part of a class with statements for declaring [static components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_component_glosry.htm "Glossary Entry") and [instance components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_component_glosry.htm "Glossary Entry").

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
[CLASS - class\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_options.htm)
[PUBLIC SECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abappublic.htm)
[PROTECTED SECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprotected.htm)
[PRIVATE SECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprivate.htm)
[CLASS - components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_component.htm)