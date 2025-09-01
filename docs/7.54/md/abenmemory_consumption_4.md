  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Memory Management of Deep Objects](javascript:call_link\('abenmemory_consumption.htm'\)) → 

Complex Data Objects with Deep Components

If data objects of [complex data types](javascript:call_link\('abencomplex_data_type_glosry.htm'\) "Glossary Entry") have many deep components, which often, for example, applies to internal tables with a deep row type, the management costs (in the form of memory) for references and headers must be prevented from growing disproportionately large compared to the actual data content.

For complex data objects with relatively little data content, we can distinguish three basic cases:

1.  Complex data objects with a sparse fill level
    A complex deep data object is sparsely populated if it contains many deep components of which a majority is initial. The memory requirement of a deep initial component like this is 8 bytes, unless the component does not yet point to a header.
    
2.  Complex data objects with a duplicative fill level
    A complex deep data object has a duplicative fill level if it contains many deep components of which a majority refers to the same data. Such components share the dynamic memory and only contribute to their references with the required memory. For [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"), this is achieved by [sharing](javascript:call_link\('abenmemory_consumption_3.htm'\)).
    
3.  Complex data objects with a low fill level
    A complex deep data object has a low fill level if it contains many deep components that refer to different objects, strings or internal tables in which the objects only require very little memory or are empty.

Deep data objects with a fill level that is sparse, duplicative, and not too low are generally harmless.

For deep data objects with a sparse fill level and few duplicative parts, it is vital to consider the memory requirements for references and headers. Unlike other programming languages, ABAP is inappropriate for a massive use of such data objects. You can possibly consider a class wrapping as an alternative to internal tables at a low dataset level, since the extra costs for objects are comparatively low.

Example

An example of a duplicative data object with a low fill level is an internal table whose row type is itself table-like or contains table-like components. Even if the inner internal tables are initialized after prior usage, they still occupy memory for reference and header, which, in the case of a large outer internal table, can produce considerable memory requirements for little or no work data.

Executable Example

See [Deep Data Objects, Memory Usage](javascript:call_link\('abenmemory_usage_abexa.htm'\)).