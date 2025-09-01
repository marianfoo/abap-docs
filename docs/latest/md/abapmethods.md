---
title: "METHODS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_shortref.htm) Syntax Forms General Instance Methods(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) 1. METHODS meth ABSTRACTFINAL(https://help.sap.com/do
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm"
abapFile: "abapmethods.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abapmethods"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20ABAPMETHODS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_shortref.htm)

Syntax Forms

[General Instance Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)

1\. METHODS meth *\[*[ABSTRACT*|*FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
              *|**\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm)*\]*
    *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
    *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

[Functional Instance Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_functional.htm)

2\. METHODS meth *\[*[ABSTRACT*|*FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
              *|**\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm)*\]*
    *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
    *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
    RETURNING VALUE(r) typing
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

[Instance Constructors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_constructor.htm) (Only in Classes)

3\. METHODS constructor *\[*[FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
    *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

[Event Handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm)

4\. METHODS meth *\[*[ABSTRACT*|*FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
              *|**\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm)*\]*
     FOR EVENT evt OF *{*class*|*intf*}*
     *\[*IMPORTING p1 p2 ... *\[*sender*\]**\]*.

[Redefinition of Instance Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_redefinition.htm) (Only in Subclasses)

5\. METHODS meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]* REDEFINITION.

[AMDP Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_methods.htm)

6\. METHODS meth *\[*[ABSTRACT*|*FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
              *|**\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm)*\]*
               *\[*[AMDP OPTIONS *\[*READ-ONLY*\]* *\[*CDS SESSION CLIENT clnt*|*CURRENT*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm)*\]*
    *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
    *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
    *\[*RETURNING VALUE(r) typing*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}**\]*

[Test Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_testing.htm) (Only in Test Classes)

7\. METHODS meth *\[*[ABSTRACT*|*FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
               *\[*[AMDP OPTIONS *\[*READ-ONLY*\]* *\[*CDS SESSION CLIENT clnt*|*CURRENT*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm)*\]*
    FOR TESTING
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}**\]*.

[ABP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm) (Only in Handler Classes of ABAP Behavior Pools)

8\. METHODS meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
    FOR rap\_behv ...

Effect

The statement METHODS declares or redefines an instance method meth. The [naming conventions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_conventions.htm) apply to the name meth.

Instance methods are bound to objects. To use instance methods, an object of the class must first be created. In instance methods, all components of the same class can be accessed without a component selector.

The variants of the statement METHODS are used to distinguish between the following kinds of method declarations:

[General instance methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)
The most general form of the METHODS statement allows instance methods to be defined with any input and output parameters.

-   [Functional instance methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_functional.htm)
    
    [Functional methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry") have exactly one return value and any number of formal parameters.
    
-   [Instance constructors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_constructor.htm)
    
    Instance constructors are methods with the given name constructor, which are called automatically when their class is instantiated. Constructors have any number of input parameters and no output parameters. They cannot be declared in interfaces.
    
-   [Event handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm)
    
    Event handlers are methods that can be called directly using or in [statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls.htm), but are mainly called when an event of a class or an interface is raised. The only possible formal parameters of an event handler are input parameters defined as the output parameters of the event.
    
-   [Redefinition of Instance Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_redefinition.htm)
    
    A method declared in a superclass can be redefined in a subclass as long as it is not flagged as final in the superclass. In a [redefinition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenredefinition_glosry.htm "Glossary Entry"), the interface of the method is not changed.
    
-   [AMDP Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm)
    
    In general, the same rules apply to declaring [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") as to all instance methods. There is, however, one special optional addition, [AMDP OPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm), and no non-class-based exceptions can be declared using EXCEPTIONS.
    
-   [Definition of a test method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_testing.htm)
    
    Test methods can be declared in test classes. They have no interface parameters and are called during [ABAP Unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_unit_glosry.htm "Glossary Entry") tests by the ABAP runtime framework. They cannot be declared in interfaces.
    
-   [ABP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm)
    
    ABP methods can be declared in the [handler classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). They implement the CRUD operations of a [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry").
    

Hint

In the methods of a class, one method of the class [hides](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions_syntax.htm) a [built-in function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") with the same name. This hiding is independent of the type and number of method parameters and the type and number of arguments on the function. This means that a method should not have the same name as a built-in function.

Continue
[METHODS, ABSTRACT, FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)
[METHODS, DEFAULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm)
[METHODS, IMPORTING, EXPORTING, CHANGING, RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)
[METHODS, RETURNING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_functional.htm)
[METHODS, constructor](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_constructor.htm)
[METHODS, FOR EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm)
[METHODS, REDEFINITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_redefinition.htm)
[METHODS, parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)