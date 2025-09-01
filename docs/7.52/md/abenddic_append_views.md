  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) → 

Append Views

[Database views](javascript:call_link\('abenddic_database_views.htm'\)) delivered by SAP can be enhanced by partners and customers using views known as append views, without making any modifications. The name of an append view is subject to the same rules as the name of a classic [view](javascript:call_link\('abenddic_views.htm'\)) and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

Further fields from basis tables in the database view can be added to append views as view fields. Append views cannot be used to add further basis tables to the view or to modify the join conditions or selection conditions of a database view. An append view is assigned to exactly one database view. More than one append view can be created for a database view.

If an append view is activated, an [append structure](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry") with this name is created in ABAP Dictionary whose components are the additional view fields of the append view.

If a database view is activated, all append views for this view are found and their fields are appended to the database view. The append structure of the append view is added to the structure of the database view. If an append view is created or modified, the associated database view is adjusted to this change automatically when the append view is activated.

Notes

-   Append views are possible only for database views and not for other [views](javascript:call_link\('abenddic_views.htm'\)).

-   In the case of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS view enhancements](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") are a separate option for enhancements and work in the similar way to append views. When a CDS view enhancement is created, an append view is created that enhances the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry").

Example

The database view DEMO\_ORIGINAL is enhanced using the append view DEMO\_APPEND\_VIEW. The program DEMO\_APPEND\_VIEW uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the enhanced view and also displays the components of the structures in question.