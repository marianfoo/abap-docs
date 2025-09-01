---
title: "Complex Data Objects with Deep Components"
description: |
  If data objects of complex data types(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomplex_data_type_glosry.htm 'Glossary Entry') have many deep components, which often, for example, applies to internal tables with a deep row type, the management costs (in the form of memory) for
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_4.htm"
abapFile: "abenmemory_consumption_4.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "abenmemory", "consumption"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption.htm) → 

Complex Data Objects with Deep Components

If data objects of [complex data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomplex_data_type_glosry.htm "Glossary Entry") have many deep components, which often, for example, applies to internal tables with a deep row type, the management costs (in the form of memory) for references and headers must be prevented from growing disproportionately large compared to the actual data content.

For complex data objects with relatively little data content, three basic cases can be distinguished:

1.  Complex data objects with a sparse fill level
    A complex deep data object is sparsely populated if it contains many deep components, most of which are initial. The memory requirement of a deep initial component like this is 8 bytes, unless the component does not yet point to a header.
    
2.  Complex data objects with a duplicative fill level
    A complex deep data object has a duplicative fill level if it contains many deep components of which a majority refers to the same data. Components like this share the dynamic memory and only contribute the memory requirements to their references. For [dynamic data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"), this is achieved by [sharing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_3.htm).
    
3.  Complex data objects with a low fill level
    A complex deep data object has a low fill level if it contains many deep components that refer to different objects, strings, or internal tables in which the objects only require very little memory or are empty.

Deep data objects with a fill level that is sparse, duplicative, and not too low are generally harmless.

For deep data objects with a sparse fill level and few duplicative parts, it is vital to consider the memory requirements for references and headers. Unlike other programming languages, ABAP is inappropriate for massive use of data objects like this. A class wrapper is one possible alternative to internal tables at a low dataset level, since the extra costs for objects are comparatively low.

Example

An example of a duplicative data object with a low fill level is an internal table whose row type is itself table-like or contains table-like components. Even if the inner internal tables are initialized after prior usage, they still occupy memory for reference and header, which, in the case of a large outer internal table, can produce considerable memory requirements for little or no work data.

Executable Example

See [Deep Data Objects, Memory Usage](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_usage_abexa.htm).