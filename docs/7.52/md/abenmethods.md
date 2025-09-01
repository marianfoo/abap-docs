---
title: "Methods"
description: |
  Methods are declared using the statements -   METHODS(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm) for instance methods -   CLASS-METHODS(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods.htm) for static methods that are only possible in
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethods.htm"
abapFile: "abenmethods.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenmethods"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ifac_components.htm) → 

Methods

Methods are declared using the statements

-   [METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm) for instance methods

-   [CLASS-METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods.htm) for static methods

that are only possible in the declaration part of classes and interfaces.

Methods determine the behavior of a class. [Instance methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_method_glosry.htm "Glossary Entry") are declared by the statement [METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm). [Static methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_method_glosry.htm "Glossary Entry") are declared by the statement [CLASS-METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods.htm). The declaration defines the interface of a method. For special tasks there are different types of methods:

-   General [instance methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_general.htm) and [static methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_general.htm)

-   Functional [instance methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_functional.htm) and [static methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_functional.htm)

-   [Instance constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_constructor.htm) and [static constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_constructor.htm)

-   [Event handlers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_event_handler.htm) and [static event handlers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_event_handler.htm)

Also available, are the

-   [Test methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_testing.htm) of ABAP Unit, which can only be declared as instance methods.

-   [AMDP methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_methods.htm), which are implemented in a database-specific language and not in ABAP.

Continue
[METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods.htm)
[CLASS-METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods.htm)