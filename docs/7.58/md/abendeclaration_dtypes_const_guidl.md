---
title: "Declaration of Data Types and Constants"
description: |
  Background Data types and constants can be declared in the following contexts: -   Cross-program -   in the ABAP Dictionary -   in global classes and interfaces -   in type pools -   Local program -   in the global declaration part of a program -   in global classes and interfaces -   in procedures
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_dtypes_const_guidl.htm"
abapFile: "abendeclaration_dtypes_const_guidl.htm"
keywords: ["do", "if", "case", "method", "class", "data", "types", "abendeclaration", "dtypes", "const", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_type_obj_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Declaration%20of%20Data%20Types%20and%20Constants%2C%20ABENDECLARATION_DTYPES_CONST_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

Declaration of Data Types and Constants

Background   

Data types and constants can be declared in the following contexts:

-   Cross-program
    -   in the ABAP Dictionary
    -   in global classes and interfaces
    -   in type pools
-   Local program
    -   in the global declaration part of a program
    -   in global classes and interfaces
    -   in procedures ([Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunct_module_subroutine_guidl.htm "Guideline"))

Technically speaking, type pools, global classes and interfaces are also ABAP programs, in which data types and constants are created using the TYPES and CONSTANTS statements. In contrast to other ABAP programs, the declarations can also be statically visible in other programs, depending on the visibility section. Absolute type names enable you to dynamically access the types of all programs.

Rule   

Declare data types and constants in the appropriate context

Declare data types and constants in the context that guarantees the best possible encapsulation.

Details   

Data types and constants should be declared in the context in which they are [visible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenencapsulation_guidl.htm "Guideline") for all potential consumers but not anywhere else:

-   Local program data types and constants
    -   Data types that are only required by local data objects (usually helper variables) or constants that are only required in a procedure ([method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) should be declared as local data types or constants.
    -   Data types and constants that are only required within local classes should be declared in the corresponding visibility section of the classes or integrated using an interface.
    -   If data types are required in multiple local classes and interfaces of a program, they should be created in the appropriate visibility section of a local class or an interface. Local classes or interfaces can be used that contain nothing else apart from these types or constants. In the global declaration part of programs, declarations of data types or constants are not required for semantic reasons.
-   Cross-program data types and constants
    -   Data types and constants that a consumer requires to use a class or interface should be declared in the public visibility section of the global class or interface. Examples include data types used to type interface parameters of methods, and constants expected as actual parameters by methods, such as IDs of [exception texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_guidl.htm "Guideline") in exception classes.
    -   Data types required by different programs, classes, or interfaces are declared as real types of the ABAP Dictionary (not in type pools). These are usually semantically independent types, for which the ABAP Dictionary provides additional services, such as descriptive texts and documentation options. In this context, you must consider the [separation of concerns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenseparation_concerns_guidl.htm "Guideline").
        
        For example, a structure of the ABAP Dictionary should never be used to type (Web) Dynpro fields and to simultaneously define a database table. Ideally, data types should be declared in encapsulated packages, which manage the cross-package use of their repository objects and which only expose types actually required outside the package in their package interfaces.
        
        You should generally avoid declaring or even exposing purely technical types without semantic meaning, in application development packages of the ABAP Dictionary. The declaration of these types (such as INT2 or CHAR10) should be restricted to fundamental basis packages.
        
    -   You should not create any new type pools. Data types should be declared in global classes or interfaces, or as real types of the ABAP Dictionary. You should only create constants in global classes or interfaces. However, the use of existing type pools is still [allowed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendataobjects_true_value_guidl.htm "Guideline"). It is no longer necessary to load type pools explicitly using the TYPE-POOLS statement. However, you only need to declare new types or constants in a context, if no [semantically appropriate](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenusing_types_guidl.htm "Guideline") types or constants exist that are more global. For example, if an appropriate ABAP Dictionary data type exists, it is not necessary to create a local data type in the class, to type an interface parameter of a global class method. In this case, the data type in the ABAP Dictionary might have to be published in the same package interface as the class. This would also be the case, however, if an interface parameter is typed with a data type of the class that refers to an ABAP Dictionary data type.

Note

The misuse of include programs for the declaration of data types and data objects that can be reused across various programs is [not allowed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmultiple_use_include_guidl.htm "Guideline").

Bad Example

The following source code shows the declaration of constants in a type pool that are required across different programs. The name of the type pool must precede the names of the constants as a prefix. You should not create any new [type pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_type_guidl.htm "Guideline"). For constants that are required in various different programs, the above rule recommends a declaration in global classes or interfaces.

TYPE-POOL zicon.
  TYPES zicon\_icon TYPE ...
  CONSTANTS:
    zicon\_cancel      TYPE zicon\_icon VALUE icon\_cancel,
    zicon\_check       TYPE zicon\_icon VALUE icon\_check,
    zicon\_check\_words TYPE zicon\_icon VALUE icon\_intensify,
    zicon\_document    TYPE zicon\_icon VALUE icon\_hlp,
    zicon\_download    TYPE zicon\_icon VALUE icon\_export,
    ...

Good Example

The following source code illustrates the declaration of the constants in the above example in a global class. The visibility of the constants is restricted to the current package. In other programs, the constants are addressed using cl\_...\_icons=>.

CLASS cl\_...\_icons DEFINITION PUBLIC FINAL.
  PUBLIC SECTION.
    TYPES  icon TYPE ...
    CONSTANTS cancel      TYPE icon VALUE icon\_cancel.
    CONSTANTS check       TYPE icon VALUE icon\_check.
    CONSTANTS check\_words TYPE icon VALUE icon\_intensify.
    CONSTANTS document    TYPE icon VALUE icon\_hlp.
    CONSTANTS download    TYPE icon VALUE icon\_export.
    ...
ENDCLASS.