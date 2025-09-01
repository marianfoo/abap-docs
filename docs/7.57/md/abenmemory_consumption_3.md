  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects, Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Memory Management of Deep Objects](javascript:call_link\('abenmemory_consumption.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Sharing Between Dynamic Data Objects, ABENMEMORY_CONSUMPTION_3, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Sharing Between Dynamic Data Objects

When reference variables are assigned, only the references are copied. After an assignment, source and target variables point to the same data object or instance of a class (more precisely, to their headers).

Sharing also takes place internally in [assignments](javascript:call_link\('abenassignment_glosry.htm'\) "Glossary Entry") between similar [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") and between similar [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") whose line types do not themselves contain table types. This means that the actual data values are not copied at first. Only the necessary administration entries are copied, so that the target object refers to the same data as the source object.

For strings, a new internal reference is created that points to the existing string header. For internal tables, a new internal reference and a new table header, which refers to the existing [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry"), are created.

Sharing between dynamic data objects is, of course, only active for as long as multiple dynamic data objects are involved, or more than one internal reference refers to the data values. As soon as only one internal reference refers to the data, sharing no longer takes place. Such cases occur, for example, if involved dynamic data objects only exist during the lifetime of a procedure, or if they are recorded as anonymous data objects by the Garbage Collector.

Active sharing between existing dynamic data objects is canceled when either the source object or target object is accessed in change mode (copy-on-write semantics). The actual copy process for the data values then takes place and the references and headers are changed accordingly.

The following figure illustrates the sharing of dynamic data objects. The upper section shows how strings are shared on the left and how internal tables are shared on the right side. The lower section shows how sharing is canceled when the source or target object is changed.

![Figure](abdoc_sharing.gif)

Hints

-   Table sharing usually only occurs for tables whose line types do not themselves contain table types. Otherwise, the prerequisite for "similar tables" is kept deliberately vague. Tables are similar if they at least have the exact same table type, that is the same line type, table category, and keys. There are other table combinations that are also considered to be similar and in which sharing can take place. However, this is an internal optimization measure that may be changed between releases. Therefore, programming should never be based on when table sharing occurs and when it is canceled again.
-   Sharing also occurs during [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") to procedures.
-   Sharing is also supported when accessing [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry"), for as long as an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") is bound to the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") using an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry").
-   Sharing is not canceled by changes to the objects for reference variables that point to the same data object or the same instance of a class.
-   Another type of sharing is the [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry") of [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") for which the initial value is stored only once per AS instance.