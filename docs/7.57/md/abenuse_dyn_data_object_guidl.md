  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) →  [Dynamic Programming Techniques](javascript:call_link\('abendynamic_prog_technique_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Using Dynamic Data Objects, ABENUSE_DYN_DATA_OBJECT_GUIDL, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Using Dynamic Data Objects

Background   

Dynamic data objects are a subgroup of [dynamic memory objects](javascript:call_link\('abenmem_cons_dyn_mem_obj_guidl.htm'\) "Guideline") and simply consist of:

-   Strings
-   Internal tables

The data type statically defines all properties for dynamic data objects, apart from memory consumption. Although the objects are managed internally using references, they are addressed by their names and value semantics applies. This means the referenced internal reference is always used for access.

Rule   

Use appropriate dynamic data objects

To store dynamic data sets transiently when using dynamic data objects, always select the type that best corresponds to the content and the required access:

-   Strings for data that cannot be divided
-   Internal tables for data that can be divided

To avoid memory bottlenecks for large data sets, you might need to use other procedures as well.

Details   

When using dynamic data objects, selecting the type is a key decision. The general rule is:

-   Data that can be handled as one piece is stored as a character string or byte string (string or xstring data type).
-   Structured data or data that can be sensibly divided into individual sections is stored as internal table lines.

However, if you need to store a very large data set as dynamic data objects, different aspects must be considered. string and xstring data objects must be stored as one piece in the memory, whereas the content of internal tables is stored in blocks. This is more likely to cause resource bottlenecks when strings are used. Even if sufficient [memory](javascript:call_link\('abenmem_cons_dyn_mem_obj_guidl.htm'\) "Guideline") space is available, the memory cannot handle a string of the requested length, due to fragmentation. In these cases, it makes more sense to store the data as an internal table instead of storing the data in a string as one piece.

The EXPORT statement for storing data in a cluster supports both storage types, for example: EXPORT ... TO DATA BUFFER stores the cluster in a single long byte string, whereas EXPORT ... TO INTERNAL TABLE distributes the cluster across numerous lines of an internal table. The latter possibility (EXPORT ... TO INTERNAL TABLE) is more secure (for the reason explained above), if the cluster needs to contain a very large data set.

Hint

Strings and internal tables are contained directly in the ABAP language in the form of data types and the corresponding access statements. In other programming languages, however, they are often implemented as libraries (such as string classes and container classes). In ABAP, it is usually [neither necessary nor useful](javascript:call_link\('abenobj_oriented_gdl.htm'\)) to define specific classes for storing strings or table-like data. However, in rare cases, it may be useful to wrap internal tables in classes, to release more [memory](javascript:call_link\('abenadmin_costs_dyn_mem_obj_guidl.htm'\) "Guideline") when data is deleted.