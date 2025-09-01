  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Types and Data Objects, ABENTYPES_AND_OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Data Types and Data Objects

This section describes the declaration of data types and data objects.

Data Types   

Data types are templates for creating data objects. Data types can be defined independently in the ABAP program or in the ABAP Dictionary. Data types can also be non-independent as properties of data objects. Data types do not use any memory space for work data but may require memory for administrative information.

Data Objects   

A data object is an instance of a data type and occupies as much memory space as its type or content specifies. An ABAP program only works with data that is available as content of data objects. Data objects are created either implicitly as named data objects, or explicitly as [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") using [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)).

Data Types of Data Objects   

Data objects can be declared by reference to a non-generic data type of the same ABAP program or from ABAP Dictionary. In this case, the data type determines the technical properties of the data object completely. A data object can also be constructed in the ABAP program without completely specified type definitions. The data type of a data object of this type is always complete, and does not exist independently, but rather as a property of the data object and is called a bound data type.

Hint

The data types of all class attributes belong to the static properties of a class. A LIKE addition enables the visible class attributes to be referenced without first creating an object using the class component selector or reference variables

Declaration Statements   

-   [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\))
-   [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\))

Continue
[Types and Objects, Overview](javascript:call_link\('abentypes_objects_oview.htm'\))
[Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\))
[Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\))
[Special Declarations](javascript:call_link\('abendeclarations_spcl.htm'\))