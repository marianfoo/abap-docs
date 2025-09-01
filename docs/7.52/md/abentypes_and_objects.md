  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) → 

Data Types and Data Objects

This section describes the declaration of data types and data objects.

Data Types

Data types are templates for creating data objects. Data types can be defined independently in the ABAP program or in ABAP Dictionary. As attributes of a data object, data types can also exist in a non-independent state. Data types do not use any memory space for work data, but may require memory for administration information.

Data objects

A data object is an instance of a data type and occupies as much memory space as its type specifies. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly as named data objects, or explicitly as [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") using [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)).

Data types of data objects

Data objects can be declared by reference to a non-generic data type of the same ABAP program or from ABAP Dictionary. In this case, the data type determines the complete technical attributes of the data object. A data object can also be constructed in the ABAP program without completely specified type definitions. The data type of a data object of this type is always complete, and does not exist independently, but rather as an attribute of the data object, and is called a bound data type.

Note

The data types of all class attributes belong to the static class properties. A LIKE addition enables you to refer to the visible class attributes without first creating an object by using the class component selector or reference variables

Declaration statements

-   [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\))

-   [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\))

Continue
[Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\))
[Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\))
[Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\))
[Special Declarations](javascript:call_link\('abendeclarations_spcl.htm'\))