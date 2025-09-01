  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) → 

Memory Management of Deep Objects

All data types whose data object content represents the actual work data are referred to in ABAP as "flat". The [elementary data types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") of a fixed length are flat, as are structures with solely flat components. The memory requirements of flat data objects are defined statically by the data type. Flat data objects are always [static data objects](javascript:call_link\('abenstatic_data_object_glosry.htm'\) "Glossary Entry").

On the other hand, data types where the contents of the data objects are [references](javascript:call_link\('abenreference_glosry.htm'\) "Glossary Entry") (which, in turn, reference work data in another memory area) are referred to as "deep". Deep refers to types of [data reference variables](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") and [object reference variables](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") as well as to types of [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry"), [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"), and [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry"). Strings and internal tables are [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry") whose memory requirements can change at program runtime and are managed internally using references. Reference variables are static data objects since their actual size is defined, whereas the size of the explicitly referenced objects is dynamic. Boxed components are between these two extremes since their memory requirements are not defined when the program is started in the internal session, but they can still be handled like static data objects with a fixed length. Structures are referred to as deep, regardless of their [nesting](javascript:call_link\('abennested_structure_glosry.htm'\) "Glossary Entry") attributes, if they contain at least one deep component.

When using deep data objects, working memory is requested at program runtime. In the case of reference variables, this is the memory for management information and the objects created (instances of classes and [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry")). In the case of dynamic data objects (strings, internal tables) and boxed components, this is the memory for administration information and for the data objects themselves. Objects referenced by reference variables can themselves, in turn, be dynamic (that is, they are strings or internal tables or contain strings or internal tables).

The requested memory must be available in the [session memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry") of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), since otherwise runtime errors occur.

-   [Memory Requirements for Deep Data Objects](javascript:call_link\('abenmemory_consumption_1.htm'\))

-   [Maximum Size of Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_2.htm'\))

-   [Sharing Between Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_3.htm'\))

-   [Complex Data Objects with Deep Components](javascript:call_link\('abenmemory_consumption_4.htm'\))

Note

The available session memory is defined using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") described under Session Memory. It is also possible to define a percentage of the available memory as a limit, over which a [runtime warning](javascript:call_link\('abenruntime_warning_glosry.htm'\) "Glossary Entry") occurs.

Continue
[Memory Requirement for Deep Data Objects](javascript:call_link\('abenmemory_consumption_1.htm'\))
[Maximum Size of Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_2.htm'\))
[Sharing Between Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_3.htm'\))
[Complex Data Objects with Deep Components](javascript:call_link\('abenmemory_consumption_4.htm'\))
![Example](exa.gif "Example") [Deep Data Objects, Memory Consumption](javascript:call_link\('abenmemory_usage_abexa.htm'\))