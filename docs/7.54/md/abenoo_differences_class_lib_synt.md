---
title: "Statements for Defining Classes and Interfaces"
description: |
  The following statements are used to define classes and interfaces and their components. They can be used in any ABAP program where class and interface definitions are allowed. Statements for Defining Classes Defining the Declaration Part CLASS ... DEFINITION ... ... ENDCLASS ... Defining the Implem
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoo_differences_class_lib_synt.htm"
abapFile: "abenoo_differences_class_lib_synt.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenoo", "differences", "lib", "synt"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_oview.htm) →  [Statements in ABAP Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_differences.htm) → 

Statements for Defining Classes and Interfaces

The following statements are used to define classes and interfaces and their components. They can be used in any ABAP program where class and interface definitions are allowed.

Statements for Defining Classes

Defining the Declaration Part

CLASS ... DEFINITION ...
...
ENDCLASS ...

Defining the Implementation Part

CLASS ... IMPLEMENTATION ...
...
ENDCLASS ...

Statements for Defining Components of Classes

Statements in the Declaration Part

PUBLIC SECTION.
PROTECTED SECTION.
PRIVATE SECTION.
TYPES ...
INTERFACES ...
ALIASES ...
CONSTANTS ...
CLASS-DATA ...
DATA ...
CLASS-METHODS ...
METHODS ...
CLASS-EVENTS ...
EVENTS ...

Statements in the Implementation Part

METHOD ...
...
ENDMETHOD.

Statements for Defining Interfaces

Declaring the Interface

INTERFACE ...
...
ENDINTERFACE ...

Statements for Declaring Components of Interfaces

The same statements can be used to declare both components in interfaces as in the declaration part of classes.

Note

The components of classes or interfaces (their attributes, methods, and events) are declared in their declaration parts. TYPES can also be used to declare local data types. ALIASES can be used to declare alias names for the components of implemented interfaces. In a class, all declarations must belong to one of the four [visibility sections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvisibility_section_glosry.htm "Glossary Entry") introduced by the relevant statements.

The implementation part of a class can only contain method implementations between METHOD - ENDMETHOD blocks. In methods, only the [statements for method implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoo_differences_methods.htm) can be used.

No statements other than those specified above are necessary for defining classes or interfaces. Consequently, no other statements are allowed between CLASS - ENDCLASS or INTERFACE - ENDINTERFACE, except in methods.

The [stricter syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoo_differences_obsolete.htm) in ABAP Objects applies to all class and interface definitions.