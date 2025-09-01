  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Methods](javascript:call_link\('abenmethods.htm'\)) → 

CLASS-METHODS

[Quick Reference](javascript:call_link\('abapclass-methods_shortref.htm'\))

Syntax Forms

[General Static Methods](javascript:call_link\('abapclass-methods_general.htm'\))
1\. CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
    *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[*CHANGING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.
[Functional Static Methods](javascript:call_link\('abapclass-methods_functional.htm'\))
2\. CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
    *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[*CHANGING  [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    RETURNING VALUE(r) typing
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.
[Static Constructors](javascript:call_link\('abapclass-methods_constructor.htm'\)) (Only in Classes)
3\. CLASS-METHODS class\_constructor.
[Event Handlers](javascript:call_link\('abapclass-methods_event_handler.htm'\))
4\. CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
     FOR EVENT evt OF *{*class*|*intf*}*
     *\[*IMPORTING p1 p2 ... *\[*sender*\]**\]*.
[AMDP - Methods](javascript:call_link\('abapmethods_amdp_options.htm'\))
5\. CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
                     *\[*[AMDP OPTIONS *\[*READ-ONLY*\]* *\[*CDS SESSION CLIENT clnt*|*CURRENT*\]*](javascript:call_link\('abapmethods_amdp_options.htm'\))*\]*
    *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[*CHANGING  [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[*RETURNING VALUE(r) typing*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}**\]*
[AMDP function implementations for CDS table functions](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\)) (in classes only)
6\. CLASS-METHODS meth FOR TABLE FUNCTION cds\_entity.

Effect

The statement CLASS-METHODS declares a [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") meth. The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name meth.

Using the class component selector (\=>), static methods can be used independently of objects. In static methods, the static components of the class or its superclasses can be accessed only if the component selector is not used.

The variants of the statement CLASS-METHODS distinguish different types of method declaration:

-   [General static methods](javascript:call_link\('abapclass-methods_general.htm'\))
    The most general form of the statement CLASS-METHODS allows static methods in classes and interfaces to be declared with any number of input and output parameters.
    
-   [Functional Static Methods](javascript:call_link\('abapclass-methods_functional.htm'\))
    [Functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") of classes and interfaces have exactly one return value and any number of formal parameters.
    
-   [Static constructors](javascript:call_link\('abapclass-methods_constructor.htm'\))
    Static constructors of classes are methods with the predefined name class\_constructor that are called automatically before their class is first used. Static constructors do not have a parameter interface and cannot be declared in interfaces.
    
-   [Static event handlers](javascript:call_link\('abapclass-methods_event_handler.htm'\))
    Static [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") are static methods of classes and interfaces that are called by an event of a class or an interface. The only possible formal parameters of an event handler are input parameters that were defined as the output parameters of the event.
    
-   [Static AMDP methods](javascript:call_link\('abapmethods_amdp_options.htm'\))
    In general, the same rules apply to declarations of static [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") for [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") and [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") that do not implement [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as to all static methods. There is, however, one special optional addition, [AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\)), and no non-class-based exceptions can be declared using EXCEPTIONS.
    
-   [AMDP function implementations](javascript:call_link\('abapclass-methods_for_tabfunc.htm'\))
    [AMDP function implementations](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") declared using the addition FOR TABLE FUNCTION implement a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") in an [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry"). The formal parameters are determined using the CDS table function. An AMDP function implementation cannot be declared in an interface.
    

Notes

-   Like all [static components in the inheritance](javascript:call_link\('abeninheritance_statical.htm'\)), the static methods of a superclass exist in all subclasses. A static method is always executed in the class in which it was declared. A static method that is visible from outside can be called using the class component selector, as can all names and classes in which it exists. The class in which it was declared is always the one that is addressed. This modifies the way the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") or the [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry") are executed.
    
-   In the methods of a class, one method of the class [obscures](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) a [built-in function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") with the same name. This done regardless of the type and number of method parameters and the type and number of arguments on the function. This means that a method should not have the same name as a built-in function.
    

Continue
[CLASS-METHODS - IMPORTING, EXPORTING, CHANGING, RAISING](javascript:call_link\('abapclass-methods_general.htm'\))
[CLASS-METHODS - RETURNING](javascript:call_link\('abapclass-methods_functional.htm'\))
[CLASS-METHODS - class\_constructor](javascript:call_link\('abapclass-methods_constructor.htm'\))
[CLASS-METHODS - FOR EVENT](javascript:call_link\('abapclass-methods_event_handler.htm'\))