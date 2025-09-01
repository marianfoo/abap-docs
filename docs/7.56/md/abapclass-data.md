---
title: "CLASS-DATA"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-data_shortref.htm) Syntax CLASS-DATA attr options(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm). Effect The statement CLASS-DATA can only be used in the declaration part of a c
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-data.htm"
abapFile: "abapclass-data.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abapclass"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Data Types and Attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_attributes.htm) → 

CLASS-DATA

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-data_shortref.htm)

Syntax

CLASS-DATA attr *\[*[options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm)*\]*.

Effect

The statement CLASS-DATA can only be used in the declaration part of a class or an interface. It declares a static attribute attr whose validity is not tied to instances of a class, but to the class itself. All instances of the class and its subclasses access a static attribute.

The [naming conventions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennaming_conventions.htm) apply to the name attr. The syntax of the additions options is identical to the statement [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm) for instance attributes (only the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_itab.htm) must not be used).

Hints

-   Like all [static components in the inheritance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninheritance_statical.htm), the static attributes of a superclass exist in all subclasses. A static attribute that is visible externally can be addressed using the class component selector and all the names of the classes in which it exists. This means that the class in which it is declared is always addressed, which, for example, has an effect on the execution of the [static constructor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_constructor_glosry.htm "Glossary Entry"). A change to a static attribute applies to all classes in which it exists, independently of the addressing.
-   Static attributes declared using CLASS-DATA can be accessed using the class component selector only with class names, not with interface names.
-   The static attributes of a [shared memory-enabled class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_class_glosry.htm "Glossary Entry") are handled in the same way as a regular class, which means they are created in the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") of a program when the class is loaded there. If different programs access the same [shared objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshared_objects_glosry.htm "Glossary Entry"), the static attributes of the associated classes exist more than once and independently of one another in the programs.
-   Structured static attributes can be declared as a [static box](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_box_glosry.htm "Glossary Entry") using the addition [BOXED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_boxed.htm).

Example

In this example, the static attribute text of class c1 is accessed using the class component selector without creating an instance of the class.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA text TYPE string VALUE \`Static data\`.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display\_text( c1=>text ).