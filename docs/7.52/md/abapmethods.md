  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Methods](javascript:call_link\('abenmethods.htm'\)) → 

METHODS

[Quick Reference](javascript:call_link\('abapmethods_shortref.htm'\))

Syntax Forms

[General Instance Methods](javascript:call_link\('abapmethods_general.htm'\))
1\. METHODS meth *\[*[ABSTRACT*|*FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
              *|**\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
    *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[*CHANGING  [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.
[Functional Instance Methods](javascript:call_link\('abapmethods_functional.htm'\))
2\. METHODS meth *\[*[ABSTRACT*|*FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
              *|**\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
    *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[*CHANGING  [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    RETURNING VALUE(r) typing
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.
[Instance Constructors](javascript:call_link\('abapmethods_constructor.htm'\)) (Only in Classes)
3\. METHODS constructor *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
    *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
    *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.
[Event Handlers](javascript:call_link\('abapmethods_event_handler.htm'\))
4\. METHODS meth *\[*[ABSTRACT*|*FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
              *|**\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
     FOR EVENT evt OF *{*class*|*intf*}*
     *\[*IMPORTING p1 p2 ... *\[*sender*\]**\]*.
[Redefinition of Instance Methods](javascript:call_link\('abapmethods_redefinition.htm'\)) (Only in Subclasses)
5\. METHODS meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]* REDEFINITION.
[AMDP Methods](javascript:call_link\('abenamdp_methods.htm'\))
6\. METHODS meth *\[*[ABSTRACT*|*FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
              *|**\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
               *\[*[AMDP OPTIONS *\[*READ-ONLY*\]* *\[*CDS SESSION CLIENT clnt*|*CURRENT*\]*](javascript:call_link\('abapmethods_amdp_options.htm'\))*\]*
    *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
    *\[*EXPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[*CHANGING  [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
    *\[*RETURNING VALUE(r) typing*\]*
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}**\]*
[Test Methods](javascript:call_link\('abapmethods_testing.htm'\)) (Only in Test Classes)
7\. METHODS meth *\[*[ABSTRACT*|*FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
               *\[*[AMDP OPTIONS *\[*READ-ONLY*\]* *\[*CDS SESSION CLIENT clnt*|*CURRENT*\]*](javascript:call_link\('abapmethods_amdp_options.htm'\))*\]*
    FOR TESTING
    *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}**\]*.

Effect

The statement METHODS declares or redefines an instance method meth. The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name meth.

Instance methods are bound to objects. To use instance methods, you must first create an object of the class. In instance methods, you can access all components of the own class without a component selector.

The variants of the statement METHODS are used to distinguish between the following kinds of method declarations:

-   [General instance methods](javascript:call_link\('abapmethods_general.htm'\))
    The general form of the METHODS statement allows instance methods to be defined with any input and output parameters.
    
-   [Functional instance methods](javascript:call_link\('abapmethods_functional.htm'\))
    [Functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") have exactly one return value and any number of formal parameters.
    
-   [Instance constructors](javascript:call_link\('abapmethods_constructor.htm'\))
    Instance constructors are methods with the given name constructor, which are called automatically when their class is instantiated. Constructors have any number of input parameters and no output parameters. They cannot be declared in interfaces.
    
-   [Event handlers](javascript:call_link\('abapmethods_event_handler.htm'\))
    Event handlers are methods that can be called directly using [statements](javascript:call_link\('abenmethod_calls.htm'\)) (or in statements), but are mainly called when an event of a class or an interface is raised. The only possible formal parameters of an event handler are input parameters, which have been defined as the output parameters of the event.
    
-   [Redefinition of Instance Methods](javascript:call_link\('abapmethods_redefinition.htm'\))
    A method declared in a superclass can be redefined in a subclass as long as it is not flagged as final in the superclass. In a [redefinition](javascript:call_link\('abenredefinition_glosry.htm'\) "Glossary Entry"), the interface of the method is not changed.
    
-   [AMDP Methods](javascript:call_link\('abapmethods_amdp_options.htm'\))
    In general, the same rules apply when declaring [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") as in all instance methods. There is, however, one special optional addition, [AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\)), and no non-class-based exceptions can be declared using EXCEPTIONS.
    
-   [Definition of a test method](javascript:call_link\('abapmethods_testing.htm'\))
    Test methods can be declared in test classes. They have no interface parameters and are called during [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") tests by the ABAP runtime environment. They cannot be declared in interfaces.
    

Note

In the methods of a class, one method of the class [obscures](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) a [built-in function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") with the same name. This done regardless of the type and number of method parameters and the type and number of arguments on the function. This means that a method should not have the same name as a built-in function.

Continue
[METHODS - ABSTRACT, FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))
[METHODS - DEFAULT](javascript:call_link\('abapmethods_default.htm'\))
[METHODS - IMPORTING, EXPORTING, CHANGING, RAISING](javascript:call_link\('abapmethods_general.htm'\))
[METHODS - RETURNING](javascript:call_link\('abapmethods_functional.htm'\))
[METHODS - constructor](javascript:call_link\('abapmethods_constructor.htm'\))
[METHODS - FOR EVENT](javascript:call_link\('abapmethods_event_handler.htm'\))
[METHODS - REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\))
[METHODS - parameters](javascript:call_link\('abapmethods_parameters.htm'\))