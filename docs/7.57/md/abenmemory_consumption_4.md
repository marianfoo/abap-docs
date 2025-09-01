  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Complex Data Objects with Deep Components, ABENMEMORY_CONSUMPTION_4, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Complex Data Objects with Deep Components

If data objects of [complex data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomplex_data_type_glosry.htm "Glossary Entry") have many deep components, which often, for example, applies to internal tables with a deep line type for example, the administrative costs in the form of memory for references and headers must be prevented from growing disproportionately large compared to the actual data content.

For complex data objects with relatively little data content, three basic cases can be distinguished:

1.  Complex data objects with a sparse fill level
    
    A complex deep data object is sparsely populated if it contains many deep components of which most are initial. The memory requirement of such a deep initial component like this is 8 bytes for as long as the component does not yet refer to a header.
    
2.  Complex data objects with a duplicative fill level
    
    A complex deep data object has a duplicative fill level if it contains many deep components of which most refer to the same data. Such components share the dynamic memory and only contribute to the memory requirement of their references. For [dynamic data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"), this is achieved by [sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption_3.htm).
    
3.  Complex data objects with a low fill level
    
    A complex deep data object has a low fill level if it contains many deep components that refer to different objects, strings, or internal tables, but the objects only require very little memory or are empty.
    

Deep data objects with a fill level that is sparse, duplicative, and not too low can usually be used without any concerns.

For deep data objects with a sparse fill level and few duplicates, it is vital to consider the memory requirements for references and headers. Unlike other programming languages, ABAP is not suitable for the massive use of such data objects. If the dataset is low, a class wrapper can also be used as an alternative to internal tables, since the additional costs for objects are comparatively low.

Example

An example of a duplicative data object with a low fill level is an internal table whose line type itself is table-like or contains table-like components. Even if the inner internal tables are initialized after previous use, they still occupy memory for reference and header, which can cause considerable memory requirements for little or no work data in the case of a large outer internal table.

Executable Example

See [Deep Data Objects, Memory Usage](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_usage_abexa.htm).