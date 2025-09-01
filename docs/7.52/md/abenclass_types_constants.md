  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses.htm) →  [Components of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_components.htm) → 

Data Types and Constants of Classes

-   [Data Types](#@@ITOC@@ABENCLASS_TYPES_CONSTANTS_1)

-   [Standalone Types](#@@ITOC@@ABENCLASS_TYPES_CONSTANTS_2)

-   [Bound Data Types](#@@ITOC@@ABENCLASS_TYPES_CONSTANTS_3)

-   [Constants](#@@ITOC@@ABENCLASS_TYPES_CONSTANTS_4)

Data Types

Standalone Types

The [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm) statement can be used to define any number of self-defined ABAP data types within a class. Types are not instance-specific and only exist once for all the objects in the class.

In particular, it is possible to define data types in the public visibility section of global classes, which makes the use of [type groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") in this context obsolete.

Bound Data Types

[Bound data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbound_data_type_glosry.htm "Glossary Entry") that occur as properties of instance attributes or static attributes are also considered to be static attributes of a class. After a LIKE addition, the class name can be used to access the properties of instance attributes (exceptions to this rule are the statements ASSIGN ... CASTING and SELECT-OPTIONS ... FOR). In addition, a reference variable can be used with an object component selector even if no object was yet created.

Constants

Constants are special [static attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_attribute_glosry.htm "Glossary Entry"), whose values are specified when they are declared and which cannot be changed later. Constants are declared using the statement [CONSTANTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconstants.htm). Constants are not instance-specific and exist only once for all the objects in a class.

In particular, it is possible to define constants in the public visibility section of global classes, which makes the use of [type groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") in this context obsolete.