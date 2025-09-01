  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) → 

Data Types and Data Objects

This section describes the declaration of data types and data objects.

Data Types

Data types are templates for creating data objects. Data types can be defined independently in the ABAP program or in ABAP Dictionary. As attributes of a data object, data types can also exist in a non-independent state. Data types do not use any memory space for work data, but may require memory for administration information.

Data objects

A data object is an instance of a data type and occupies as much memory space as its type specifies. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly as named data objects, or explicitly as [anonymous data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") using [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm).

Data types of data objects

Data objects can be declared by reference to a non-generic data type of the same ABAP program or from ABAP Dictionary. In this case, the data type determines the complete technical attributes of the data object. A data object can also be constructed in the ABAP program without completely specified type definitions. The data type of a data object of this type is always complete, and does not exist independently, but rather as an attribute of the data object, and is called a bound data type.

Note

The data types of all class attributes belong to the static class properties. A LIKE addition enables the visible class attributes to be referenced without first creating an object using the class component selector or reference variables

Declaration statements

-   [Declaring Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_statements.htm)

-   [Declaring Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobjects_statements.htm)

Continue
[Types and Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_objects_oview.htm)
[Declaring Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_statements.htm)
[Declaring Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobjects_statements.htm)
[Special Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations_spcl.htm)