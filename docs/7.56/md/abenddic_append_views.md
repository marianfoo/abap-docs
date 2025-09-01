  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) → 

DDIC - Append Views

[DDIC database views](javascript:call_link\('abenddic_database_views.htm'\)) delivered by SAP can be enhanced by partners and customers using views known as DDIC append views, without making any modifications. The name of an append view is subject to the same rules as the name of a [DDIC view](javascript:call_link\('abenddic_views.htm'\)) and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

Further fields from basis tables in the DDIC database view can be added to DDIC append views as view fields. Append views cannot be used to add further basis tables to the view or to modify the join conditions or selection conditions of a DDIC database view. An append view is assigned to exactly one DDIC database view. More than one append view can be created for a DDIC database view.

When an DDIC append view is activated, an [append structure](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry") with this name is created in ABAP Dictionary and its components become the additional view fields of the append view.

If a DDIC database view is activated, all DDIC append views for this view are found and their fields are appended to the DDIC database view. The append structure of the append view is added to the structure of the DDIC database view. If an append view is created or modified, the associated DDIC database view is adjusted to this change automatically when the append view is activated.

Hints

-   DDIC append views are possible only for DDIC database views and not for other [DDIC views](javascript:call_link\('abenddic_views.htm'\)).
-   In the case of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") linked with [CDS-managed DDIC views](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"), [CDS view extensions](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") are a separate option for extensions and work in the similar way to append views. When a CDS view extension is created, an append view is created that is added to the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry").

Example

The DDIC append view DEMO\_APPEND\_VIEW is added to the DDIC database view DEMO\_ORIGINAL. The program DEMO\_APPEND\_VIEW uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the extended view and also displays the components of the structures in question.