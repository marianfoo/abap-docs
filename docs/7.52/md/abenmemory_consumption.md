  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects.htm) → 

Memory Management of Deep Objects

All data types whose data object content represents the actual work data are referred to in ABAP as "flat". The [elementary data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") of a fixed length are flat, as are structures with solely flat components. The memory requirements of flat data objects are statically defined by the data type. Flat data objects are always [static data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_data_object_glosry.htm "Glossary Entry").

On the other hand, data types where the contents of the data objects are [references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_glosry.htm "Glossary Entry") (which, in turn, reference work data in another memory area) are referred to as "deep". Deep refers to types of [data reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") and [object reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") as well as to types of [strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_glosry.htm "Glossary Entry"), [internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_table_glosry.htm "Glossary Entry"), and [boxed components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboxed_component_glosry.htm "Glossary Entry"). Strings and internal tables are [dynamic data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") whose memory requirements can change at program runtime and are managed internally using references. Reference variables are static data objects since their actual size is defined, whereas the size of the explicitly referenced objects is dynamic. Boxed components are between these two extremes since their memory requirements have not already been defined when the program is started in the internal session, but they can be handled like static data objects with a fixed length. Structures are referred to as deep, regardless of their [nesting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennested_structure_glosry.htm "Glossary Entry") attributes, if they contain at least one deep component.

When using deep data objects, working memory is requested at program runtime. In the case of reference variables, this is the memory for management information and the objects created (instances of classes and [anonymous data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry")). In the case of dynamic data objects (strings, internal tables) and boxed components, this is the memory for management information and for the data objects themselves. Objects referenced by reference variables can themselves, in turn, be dynamic - that is, they are or contain strings or internal tables.

The requested memory must be available in the current [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"), since otherwise runtime errors occur.

-   [Memory Requirements for Deep Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_1.htm)

-   [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_2.htm)

-   [Sharing Between Dynamic Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_3.htm)

-   [Complex Data Objects with Deep Components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_4.htm)

Continue
[Memory Requirement for Deep Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_1.htm)
[Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_2.htm)
[Sharing Between Dynamic Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_3.htm)
[Complex Data Objects with Deep Components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_4.htm)
![Example](exa.gif "Example") [Deep Data Objects, Memory Consumption](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_usage_abexa.htm)