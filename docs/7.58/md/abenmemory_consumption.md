  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Memory%20Management%20of%20Deep%20Objects%2C%20ABENMEMORY_CONSUMPTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Memory Management of Deep Objects

All data types for which the content of their data objects represents the actual work data referred to as flat in ABAP. The [elementary data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") of a fixed length are flat, as are structures with exclusively flat components. The memory requirements of flat data objects are defined statically by the data type. Flat data objects are always [static data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_data_object_glosry.htm "Glossary Entry").

On the other hand, data types where the content of their data objects consists of [references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_glosry.htm "Glossary Entry"), which, in turn, refer to work data in another memory area, are referred to as deep. Types of [data reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") and [object reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"), as well as the types of [strings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_glosry.htm "Glossary Entry"), [internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry"), and [boxed components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboxed_component_glosry.htm "Glossary Entry") are deep. Strings and internal tables are [dynamic data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") whose memory requirements can change at program runtime and are managed internally using references. Reference variables are static data objects since their actual size is fixed, whereas the size of the explicitly referenced objects is dynamic. Boxed components are a medium in between because their memory requirements in the internal session are not defined when the program is started in the internal session, but can be handled like static data objects with a fixed length. Structures are referred to as deep, regardless of [nesting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennested_structure_glosry.htm "Glossary Entry") if they contain at least one deep component.

When using deep data objects, working memory is requested at program runtime. In the case of reference variables, this is the memory for administrative information and the objects created (instances of classes and [anonymous data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry")). In the case of dynamic data objects (strings, internal tables) and boxed components, this is the memory for administrative information and for the data objects themselves. Objects referenced by reference variables can themselves, in turn, be dynamic, that is, be or contain strings or internal tables.

The requested memory must be available in the [session memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroll_area_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry"), since otherwise a runtime error occurs.

-   [Memory Requirements for Deep Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_1.htm)
-   [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_2.htm)
-   [Sharing Between Dynamic Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_3.htm)
-   [Complex Data Objects with Deep Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_4.htm)

Hint

The available session memory is controlled by the [profile parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") described under [Session Memory](https://help.sap.com/docs/ABAP_PLATFORM_NEW/f146e75588924fa4987b6c8f1a7a8c7e/11c6413c521e4a13adf7473af49e8291). A percentage of the available memory can also be defined as a limit, where a [runtime warning](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenruntime_warning_glosry.htm "Glossary Entry") occurs if it is exceeded.

Continue
[Memory Requirement for Deep Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_1.htm)
[Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_2.htm)
[Sharing Between Dynamic Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_3.htm)
[Complex Data Objects with Deep Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_4.htm)
![Example](exa.gif "Example") [Deep Data Objects, Memory Consumption](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_usage_abexa.htm)