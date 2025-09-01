  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_components.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Data%20Types%20and%20Constants%20of%20Classes%2C%20ABENCLASS_TYPES_CONSTANTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n%20for%20improvement:)

ABAP Objects - Data Types and Constants of Classes

-   [Data Types](#@@ITOC@@ABENCLASS_TYPES_CONSTANTS_1)
    -   [Standalone Types](#@@ITOC@@ABENCLASS_TYPES_CONSTANTS_2)
    -   [Bound Data Types](#@@ITOC@@ABENCLASS_TYPES_CONSTANTS_3)
-   [Constants](#@@ITOC@@ABENCLASS_TYPES_CONSTANTS_4)

Data Types   

Standalone Types   

The [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) statement can be used to declare any number of user-defined ABAP data types within a class. Types are instance-independent and only exist once for all the objects of a class.

In particular, it is possible to define data types in the public visibility section of global classes, which makes the use of [type pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") in this context obsolete.

Bound Data Types   

[Bound data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbound_data_type_glosry.htm "Glossary Entry") that occur as properties of instance or static attributes also belong to the static properties of a class. After a LIKE addition, the class name can be used to access the properties of instance attributes (exceptions to this rule are the statements ASSIGN ... CASTING and SELECT-OPTIONS ... FOR). In addition, a reference variable can be used with an object component selector without first creating the object.

Constants   

Constants are special [static attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_attribute_glosry.htm "Glossary Entry"), whose values are specified when they are declared, and which cannot be changed. Constants are declared using the statement [CONSTANTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconstants.htm). Constants are instance-independent and exist only once for all the objects of a class.

In particular, it is possible to declare constants in the public visibility section of global classes, which makes use of [type pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") in this context obsolete.