  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Memory Management of Deep Objects](javascript:call_link\('abenmemory_consumption.htm'\)) → 

Sharing Between Dynamic Data Objects

When reference variables are assigned, only the references are copied. After an assignment, source and target variables point to exactly the same data object or the same instance of a class (more precisely to their headers).

Sharing takes place internally when [assignments](javascript:call_link\('abenassignment_glosry.htm'\) "Glossary Entry") are made between similar [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") and similar [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") that have row types that do not contain table types. This means that the actual data values are not copied for the time being. Only the necessary administration entries are copied, so that the target object points the same data as the source object.

In the case of strings, a new internal reference is created that points to the existing string header. In the case of internal tables, a new internal reference is created along with a new table header that points to the existing [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry").

Naturally, sharing between dynamic data objects is active only as long as multiple dynamic data objects are involved or if more than one internal reference points to the data values. As soon as only one internal reference points to the data, sharing becomes inactive. This can occur, for example, if dynamic data objects only exist during the lifetime of a procedure or are recorded as anonymous data objects by Garbage Collector.

Active sharing between existing dynamic data objects is canceled at the precise moment when either the source object or target object is accessed in change mode (copy-on-write semantics). The data values are then copied and the references and headers modified accordingly.

The following figure illustrates how dynamic data objects are shared. The upper left section shows how strings are shared and the right section shows how internal tables are shared. The lower section shows how sharing is terminated when the source or target object is modified.

![Figure](abdoc_sharing.gif)

Notes

-   Table sharing is principally used only for tables whose row types do not themselves contain table types. Otherwise, the prerequisite for "similar tables" is kept deliberately vague. Tables are considered to be similar if they at least have the same table type, that is the same row type, table category, and keys. Additional table combinations are also considered to be similar and may be shared. However, this is an internal optimization measure that may change between releases. This means programming must never be based on when table sharing occurs and when it is canceled again.

-   Sharing also occurs in [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") to procedures.

-   Sharing is also supported when accessing [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") as long as an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") is bound to the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") using an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry").

-   Sharing is not canceled when objects are modified for reference variables that point to the same data object or the same instance of a class.

-   Another kind of sharing is the [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry") of [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") for which the initial value is stored only once for each application server.