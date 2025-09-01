---
title: "CLASS-METHODS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_shortref.htm) Syntax Forms General Static Methods(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_general.htm) 1. CLASS-METHODS meth DEFAULT IGNOREFAIL(https://help
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods.htm"
abapFile: "abapclass-methods.htm"
keywords: ["select", "do", "if", "try", "method", "class", "types", "abapclass", "methods"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethods.htm) → 

CLASS-METHODS

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_shortref.htm)

Syntax Forms

[General Static Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_general.htm)
1\. CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_default.htm)*\]*
    *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)*\]*
    *\[*CHANGING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.
[Functional Static Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_functional.htm)
2\. CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_default.htm)*\]*
    *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)*\]*
    *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)*\]*
    RETURNING VALUE(r) typing
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.
[Static Constructors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_constructor.htm) (Only in Classes)
3\. CLASS-METHODS class\_constructor.
[Event Handlers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_event_handler.htm)
4\. CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_default.htm)*\]*
     FOR EVENT evt OF *{*class*|*intf*}*
     *\[*IMPORTING p1 p2 ... *\[*sender*\]**\]*.
[AMDP - Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_amdp_options.htm)
5\. CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_default.htm)*\]*
                     *\[*[AMDP OPTIONS *\[*READ-ONLY*\]* *\[*CDS SESSION CLIENT clnt*|*CURRENT*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_amdp_options.htm)*\]*
    *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)*\]*
    *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)*\]*
    *\[*RETURNING VALUE(r) typing*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}**\]*
[AMDP function implementations for CDS table functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_for_tabfunc.htm) (in classes only)
6\. CLASS-METHODS meth FOR TABLE FUNCTION cds\_tabfunc.

Effect

The statement CLASS-METHODS declares a [static method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth. The [naming conventions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennaming_conventions.htm) apply to the name meth.

Using the class component selector (\=>), static methods can be used independently of objects. In static methods, the static components of the personal class or their superclasses can be accessed only if the component selector is not used.

The variants of the statement CLASS-METHODS distinguish the following types of method declaration:

-   [General static methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_general.htm)
    
    The most general form of the statement CLASS-METHODS allows static methods in classes and interfaces to be declared with any number of input and output parameters.
    
-   [Functional Static Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_functional.htm)
    
    [Functional methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_method_glosry.htm "Glossary Entry") of classes and interfaces have exactly one return value and any other formal parameters.
    
-   [Static constructors](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_constructor.htm)
    
    Static constructors of classes are methods with the predefined name class\_constructor that are called automatically before their class is first used. Static constructors do not have a parameter interface and cannot be declared in interfaces.
    
-   [Static event handlers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_event_handler.htm)
    
    Static [event handlers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenevent_handler_glosry.htm "Glossary Entry") are static methods of classes and interfaces that are called by an event of a class or an interface. The only possible formal parameters of an event handler are input parameters that were defined as output parameters of the event.
    
-   [Static AMDP methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_amdp_options.htm)
    
    In general, the same rules apply to declarations of static [AMDP methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") for [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") and [AMDP function implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") that do not implement [CDS table functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry") as to all static methods. There is, however, one special optional addition, [AMDP OPTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_amdp_options.htm), and no non-class-based exceptions can be declared using EXCEPTIONS.
    
-   [AMDP function implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_for_tabfunc.htm)
    
    [AMDP function implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") declared using the addition FOR TABLE FUNCTION implement a [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry") in an [AMDP class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_class_glosry.htm "Glossary Entry"). The formal parameters are determined using the CDS table function. An AMDP function implementation cannot be declared in an interface.
    

Hints

-   Like all [static components in the inheritance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninheritance_statical.htm), the static methods of a superclass exist in all subclasses. A static method is always executed in the class in which it was declared. A static method that is visible externally can be called using the class component selector and all names of classes in which it exists. However, the class in which it was declared is always the one that is addressed, which affects the execution of the [static constructor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") or the [event handlers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenevent_handler_glosry.htm "Glossary Entry").
-   In the methods of a class, a method of the class [hides](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions_syntax.htm) a [built-in function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") with the same name. This hiding is independent of the type and number of method parameters and the type and number of arguments of the function. This means that a method should not have the same name as a built-in function.

Continue
[CLASS-METHODS, IMPORTING, EXPORTING, CHANGING, RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_general.htm)
[CLASS-METHODS, RETURNING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_functional.htm)
[CLASS-METHODS, class\_constructor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_constructor.htm)
[CLASS-METHODS, FOR EVENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass-methods_event_handler.htm)