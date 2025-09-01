  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

ABAP Objects in Release 7.40, SP02

[1\. Parameter Interface of Functional Methods](#!ABAP_MODIFICATION_1@1@)
[2\. Interfaces in Test Classes](#!ABAP_MODIFICATION_2@2@)
[3\. Exception Handling](#!ABAP_MODIFICATION_3@3@)
[4\. Execution of Static Constructor](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Parameter Interface of Functional Methods

Alongside the return value defined using RETURNING, a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") can now have any number of other [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry"). Previously, only [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") were possible.

Accordingly, [functional method calls](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") can now be used with the additions EXPORTING, IMPORTING, and CHANGING, so that actual parameters can be bound to the additional formal parameters.

When the input parameters of a method are declared, the addition [PREFERRED PARAMETER](javascript:call_link\('abapmethods_general.htm'\)) can now also be specified, if the method has output parameters or input/output parameters. The only requirement is that all input parameters and input/output parameters are optional.

Modification 2   

Interfaces in Test Classes

In test classes, the new addition [PARTIALLY IMPLEMENTED](javascript:call_link\('abapinterfaces_partially.htm'\)) can be specified in the statement INTERFACES, which allows only parts interfaces to be implemented. This is particularly useful in test doubles.

Modification 3   

Exception Handling

If a class is specified dynamically after TYPE in the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_explicit.htm'\)) and the class does not match the static type of the reference variable, the exception can now be handled using the exception class CX\_SY\_CREATE\_OBJECT\_ERROR.

Modification 4   

Execution of Static Constructor

Until now, the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") of a class was called before each use of the class. It is not necessary to execute the static constructor to use a constant of the class. Accessing a constant of a class no longer results in its static constructor being called.