  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP02](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-ABAP_OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

ABAP Objects in ABAP Release 7.40, SP02

[1\. Parameter Interface of Functional Methods](#!ABAP_MODIFICATION_1@1@)
[2\. Interfaces in Test Classes](#!ABAP_MODIFICATION_2@2@)
[3\. Exception Handling](#!ABAP_MODIFICATION_3@3@)
[4\. Execution of Static Constructor](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Parameter Interface of Functional Methods

Alongside the return value defined using RETURNING, a [functional method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry") can now have any number of other [formal parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenformal_parameter_glosry.htm "Glossary Entry"). Previously, only [input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_parameter_glosry.htm "Glossary Entry") were possible.

Accordingly, [functional method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") can now be used with the additions EXPORTING, IMPORTING, and CHANGING, so that actual parameters can be bound to the additional formal parameters.

When the input parameters of a method are declared, the addition [PREFERRED PARAMETER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) can now also be specified, if the method has output parameters or input/output parameters. The only requirement is that all input parameters and input/output parameters are optional.

Modification 2   

Interfaces in Test Classes

In test classes, the new addition [PARTIALLY IMPLEMENTED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_partially.htm) can be specified in the statement INTERFACES, which allows only parts interfaces to be implemented. This is particularly useful in test doubles.

Modification 3   

Exception Handling

If a class is specified dynamically after TYPE in the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object_explicit.htm) and the class does not match the static type of the reference variable, the exception can now be handled using the exception class CX\_SY\_CREATE\_OBJECT\_ERROR.

Modification 4   

Execution of Static Constructor

Until now, the [static constructor](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") of a class was called before each use of the class. It is not necessary to execute the static constructor to use a constant of the class. Accessing a constant of a class no longer results in its static constructor being called.