  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Memory Management of Deep Objects](javascript:call_link\('abenmemory_consumption.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Complex%20Data%20Objects%20with%20Deep%20Components%2C%20ABENMEMORY_CONSUMPTION_4%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Complex Data Objects with Deep Components

If data objects of [complex data types](javascript:call_link\('abencomplex_data_type_glosry.htm'\) "Glossary Entry") have many deep components, which often, for example, applies to internal tables with a deep line type for example, the administrative costs in the form of memory for references and headers must be prevented from growing disproportionately large compared to the actual data content.

For complex data objects with relatively little data content, three basic cases can be distinguished:

1.  Complex data objects with a sparse fill level
    
    A complex deep data object is sparsely populated if it contains many deep components of which most are initial. The memory requirement of such a deep initial component like this is 8 bytes for as long as the component does not yet refer to a header.
    
2.  Complex data objects with a duplicative fill level
    
    A complex deep data object has a duplicative fill level if it contains many deep components of which most refer to the same data. Such components share the dynamic memory and only contribute to the memory requirement of their references. For [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"), this is achieved by [sharing](javascript:call_link\('abenmemory_consumption_3.htm'\)).
    
3.  Complex data objects with a low fill level
    
    A complex deep data object has a low fill level if it contains many deep components that refer to different objects, strings, or internal tables, but the objects only require very little memory or are empty.
    

Deep data objects with a fill level that is sparse, duplicative, and not too low can usually be used without any concerns.

For deep data objects with a sparse fill level and few duplicates, it is vital to consider the memory requirements for references and headers. Unlike other programming languages, ABAP is not suitable for the massive use of such data objects. If the dataset is low, a class wrapper can also be used as an alternative to internal tables, since the additional costs for objects are comparatively low.

Example

An example of a duplicative data object with a low fill level is an internal table whose line type itself is table-like or contains table-like components. Even if the inner internal tables are initialized after previous use, they still occupy memory for reference and header, which can cause considerable memory requirements for little or no work data in the case of a large outer internal table.

Executable Example

See [Deep Data Objects, Memory Usage](javascript:call_link\('abenmemory_usage_abexa.htm'\)).